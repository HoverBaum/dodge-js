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
    log('tick');
    drawer.postMessage();
}

function startTick() {
	tickInterval = setInterval(tick, 1000);
}

function stopTick() {
	tickInterval = null;
}