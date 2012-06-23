/*
    FuckItJS v2.0.0-alpha
    Copyright 2012, Matt Diamond

    Note: This is ALPHA software and may result in irreversible brain damage.
 */

(function($){$.ajaxSetup({cache:true});var _FuckIt=window.FuckIt;var FuckIt=function(script){var req=$.ajax({url:script,dataType:"text"});req.then(function(result){window.fuckedScript=result;eval(window.fuckedScript);},function(){throw new Error("Could not load script: "+script);});};window.onerror=function(error,url,line){if(!window.fuckedScript)return;var parsed=window.fuckedScript.split("\n");parsed.splice(line-1,1);window.fuckedScript=parsed.join("\n");$.getScript("fuckit.js",function(){eval(window.fuckedScript);});return true;};FuckIt.noConflict=function(){window.FuckIt=_FuckIt;return FuckIt;};window.FuckIt=FuckIt;})(jQuery);