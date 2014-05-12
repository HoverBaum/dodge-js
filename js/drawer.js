self.addEventListener('message', function(e) {
    if(e.data === undefined) {
        drawLog('No Data ' + e);
        return;
    }
    var code = e.data.code;
    if(code === 'draw') draw();
}, false);

/*
    Draws the current game.
*/
function draw() {
    drawLog('drawing');
}

function drawLog(str) {
    console.log('[drawer] ' + str);
}