/*
FuckItJS v2.0.0-alpha
Copyright 2012, Matt Diamond

Note: This is ALPHA software and may result in irreversible brain damage.
*/

/*jslint evil:true,browser:true,todo:true,nomen:true*/

//@TODO: give a shit

(function ($) {
	'use strict';

	$.ajaxSetup({ cache: true });

	var _FuckIt = window.FuckIt;

	function FuckIt(script) {
		window.fuckingDeferred = $.Deferred();
		$.ajax({
			url: script,
			dataType: 'text'
		}).then(function (result) {
			window.fuckedScript = result;
			eval(window.fuckedScript);
			window.fuckingDeferred.resolve();
		}, function () {
			throw new Error('Could not load script: ' + script);
		});
		return window.fuckingDeferred.promise();
	}

	window.onerror = function (error, url, line) {
		if (!window.fuckedScript) {
			return;
		}
		var parsed = window.fuckedScript.split('\n');
		parsed.splice(line - 1, 1);
		window.fuckedScript = parsed.join('\n');
		$.getScript('fuckit.js', function () {
			eval(window.fuckedScript);
			window.fuckingDeferred.resolve();
		});
		return true;
	};

	//this will not actually do anything remotely useful
	FuckIt.noConflict = function () {
		window.FuckIt = _FuckIt;
		return FuckIt;
	};

	FuckIt.moreConflict = function () {
		var prop;
		for (prop in window) {
			if (window.hasOwnProperty(prop)) {
				if (prop !== 'location') {
					window[prop] = FuckIt;
				}
			}
		}
	};

	window.FuckIt = FuckIt;

}(window.jQuery));
