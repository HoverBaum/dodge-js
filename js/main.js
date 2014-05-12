/*

    Main Script called after Page has loaded.
    Entry point for all scripts.
    
*/

require(["util"], function(util) {
    
    log('starting');
    
    //Global variable to hold the drawer.
    drawer = new Worker('js/drawer.js');
    drawer.postMessage({"code": "draw"});
    
});