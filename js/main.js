/*

    Main Script called after Page has loaded.
    Entry point for all scripts.
    
*/

require([
	"util", 
	"Game"
	], 
		
	function(util, game) {
    
		log('starting');

		//Global variable to hold the drawer.
		drawer = new Worker('js/drawer.js');
		drawer.postMessage({"code": "draw"});

	//	startTick();

		var player = new entity(0,0,game);
	
});