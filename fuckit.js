/*
    FuckItJS v2.0.0-alpha rc: quirks-pre-pre-alpha.200.001-final-final-final
    Copyright 2012, Matt Diamond

    Note: This is ALPHA software and may result in irreversible brain damage.
 */

//@TODO: give a shit

(function($){

  $.ajaxSetup({ cache: true });

  var _FuckIt = window.FuckIt;

  var FuckIt = function(script){
    window.fuckingDeferred = $.Deferred();
    $.ajax({
      url: script,
      dataType: "text"
    }).then(function(result){
      window.fuckedScript = result;
      eval(window.fuckedScript);
      window.fuckingDeferred.resolve();
    }, function(){
      throw new Error("Could not load script: "+script);
    });
    return window.fuckingDeferred.promise();
  }

  window.onerror = function(error, url, line){
    if (!window.fuckedScript) return;
    var parsed = window.fuckedScript.split("\n");
    parsed.splice(line - 1, 1);
    window.fuckedScript = parsed.join("\n");
    $.getScript("fuckit.js", function(){
      eval(window.fuckedScript);
      window.fuckingDeferred.resolve();
    });
    return true;
  }

  //this will not actually do anything remotely useful
  FuckIt.noConflict = function(){
    window.FuckIt = _FuckIt;
    return FuckIt;
  }

  FuckIt.moreConflict = function(){
    for (var prop in window){
      if (prop === "location"){
        //you're not getting away that easy.
        continue;
      }
      window[prop] = FuckIt;
    }
  }

  /**
   * @param [context=window]
   * @param [intolerance=3] positive int >= 2 (1 in N chance of "quirk")
   */
  FuckIt.quirksMode = function(context, intolerance){
    var prob = intolerance > 1 ? intolerance : 3;
    var scope = context || window;
    var keys = Object.keys(scope); // chokes with for..in loop :/

    if('__FuckIt__' in scope) return;               // already fucked
    Object.defineProperty(scope, '__FuckIt__', {}); // non-enumerable

    for(var i=0; i<keys.length; ++i){
      try {
        var key = keys[i];
        var val = scope[key];
        if(val !== FuckIt && val !== $)
          switch($.type(val)){
            case 'function': scope[key] = ghostFactory(val, prob); break;
            case 'object'  : FuckIt.quirksMode(val, prob); break;
          }
      } catch(e){}
    }
  };

  //@private
  function ghostFactory(fuckableFn, prob){
    var fuckedFn = function fn(){
      var fuckIt = 0 === (Math.random() * prob | 0),
        result = fuckableFn.apply(this, arguments);
      return !fuckIt ? result : resolveQuirk(result);
    };
    // I'm a ghost in the machine...
    fuckedFn.toString = function(){
      return fuckableFn.toString();
    };
    return fuckedFn;
  }

  //@private
  function resolveQuirk(input){
    try {
      var quirks = FuckIt.quirksMode.API[$.type(input)];
      var quirk = typeof quirks === 'function' ? quirks
        : quirks[Math.random() * quirks.length | 0];
      return quirk.call(null, input);
    } catch(e){
      console.warn('quirks-mode API miss-configured... read the fucking manual!');
      return input;
    }
  }

  window.FuckIt = FuckIt;

})(jQuery);