/*
    Utils that are usefull.
*/

function log(str) {
    realLog('[log] ' + str);
}

function slog(str, scope) {
	realLog("[" + scope + "] " + str);
}

function realLog(str) {
	document.getElementById("output").innerHTML += str + '<br />';
    console.log(str);
}

function tick() {
   // log('tick');
    game.tick();
}

function startTick() {
	tickInterval = setInterval(tick, 20);
}

function stopTick() {
	clearInterval(tickInterval);
}

function test() {
			console.log(game.entities);
		}