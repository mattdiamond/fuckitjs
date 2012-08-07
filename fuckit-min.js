/*
    FuckItJS v2.0.0-alpha
    Copyright 2012, Matt Diamond

    Note: This is ALPHA software and may result in irreversible brain damage.
 */

(function($){$.ajaxSetup({cache:true});var _FuckIt=window.FuckIt;var FuckIt=function(script){window.fuckingDeferred=$.Deferred();$.ajax({url:script,dataType:"text"}).then(function(result){window.fuckedScript=result;eval(window.fuckedScript);window.fuckingDeferred.resolve()},function(){throw new Error("Could not load script: "+script)});return window.fuckingDeferred.promise()};window.onerror=function(error,url,line){if(!window.fuckedScript)return;var parsed=window.fuckedScript.split("\n");parsed.splice(line-1,1);window.fuckedScript=parsed.join("\n");$.getScript("fuckit.js",function(){eval(window.fuckedScript);window.fuckingDeferred.resolve()});return true};FuckIt.noConflict=function(){window.FuckIt=_FuckIt;return FuckIt};FuckIt.moarConflict=function(){for(var a in window){if(a==="location"){continue}window[a]=FuckIt}};window.FuckIt=FuckIt})(jQuery);