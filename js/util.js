/*
    Utils that are usefull.
*/

function log(str) {
    document.getElementById("output").innerHTML += str + '<br />';
    console.log('[log] ' + str);
}

function tick() {
    log('tick');
    drawer.postMessage();
}