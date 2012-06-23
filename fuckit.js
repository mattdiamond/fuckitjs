/*
    FuckItJS v2.0.0-alpha
    Copyright 2012, Matt Diamond

    Note: This is ALPHA software and may result in irreversible brain damage.
 */

//@TODO: give a shit

(function($){

  var _FuckIt = window.FuckIt;

  var FuckIt = function(script){
    var req = $.ajax({
      url: script,
      dataType: "text",
	  success: function(result){
		window.fuckedScript = result;
		eval(window.fuckedScript);
	  },
	  error: function(jqXHR, textStatus, errorThrown){
		throw new Error(script+" "+errorThrown);
	  }
    });
  }

  window.onerror = function(error, url, line){
    if (!window.fuckedScript) return;
    var parsed = window.fuckedScript.split("\n");
    parsed.splice(line - 1, 1);
    window.fuckedScript = parsed.join("\n");
    $.getScript("fuckit.js", function(){
      eval(window.fuckedScript);
    });
    return true;
  }

  //this will not actually do anything remotely useful
  FuckIt.noConflict = function(){
    window.FuckIt = _FuckIt;
    return FuckIt;
  }

  window.FuckIt = FuckIt;

})(jQuery);