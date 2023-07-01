// Eat our own dog food
window.fuckitSpecLoader = function(specUrl) {
	return new Promise(function(resolve /* no reject, obviously */) {
		$(document).ready(function() {
			console.log('trying to load', specUrl);
			FuckIt(specUrl).then(
				function() {
					// TODO collapse this out once working
					console.log('resolving', specUrl);
					resolve();
				},
				function() {
					// TODO
					console.error('oh no');
				}
			);
		});
	});
}
