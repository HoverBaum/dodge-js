/*

    Main Script called after Page has loaded.
    Entry point for all scripts.
    
*/

require([
	"util", 
	"Game"
	], 
		
	function(util, Game) {
    
		log('starting');

		//Global variable to hold the drawer.
		//drawer = new Worker('js/drawer.js');
		//drawer.postMessage({"code": "draw"});

	//	startTick();

		var game = new Game();
		var player = new entity(0, 0, "#FFD630", game);
		game.player = player;
		
		window.addEventListener("keypress", game.input);
		
game.tick();
});