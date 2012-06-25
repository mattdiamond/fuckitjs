/*
    FuckItJS v2.0.0-alpha
    Copyright 2012, Matt Diamond

    Note: This is ALPHA software and may result in irreversible brain damage.
 */

//@TODO: give a shit

(function($, WIN){

  $.ajaxSetup({ cache: true });

  var _FuckIt = WIN.FuckIt;

  var _FuckedScripts = {};

  var FuckIt = function(script){
    var req = $.ajax({
      url: script,
      dataType: "text"
    });
    req.then(function(result){
      _FuckedScripts[script] = result;
      evalInIframe(script);
    }, function(){
      throw new Error("Could not load script: "+script);
    });
  }

  function evalInIframe(script){
    var iframe = document.getElementById("FuckIt::" + script);
    if (!iframe){
      iframe = document.createElement("iframe");
      iframe.id = "FuckIt::" + script;
      iframe.style.display = "none";
      document.body.insertBefore(iframe, document.body.firstChild);
      iframe.contentWindow.onerror = createErrorHandler(script);
    }
    iframe.contentWindow.setTimeout(_FuckedScripts[script], 0);
  }

  function createErrorHandler(script){
    return function(error, url, line){
      if (!_FuckedScripts[script]) return;
      var parsed = _FuckedScripts[script].split("\n");
      parsed.splice(line - 1, 1);
      _FuckedScripts[script] = parsed.join("\n");
      evalInIframe(script);
      return true;
    }
  }

  //this will not actually do anything remotely useful
  FuckIt.noConflict = function(){
    window.FuckIt = _FuckIt;
    return FuckIt;
  }

  FuckIt.moreConflict = function(){
    for (var prop in WIN){
      if (prop === "location"){
        //you're not getting away that easy.
        continue;
      }
      WIN[prop] = FuckIt;
    }
  }

  FuckIt.therePerfect = function(script){
    return _FuckedScripts[script];
  }

  WIN.FuckIt = FuckIt;

})(jQuery, window);
