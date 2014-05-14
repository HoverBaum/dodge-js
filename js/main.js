/*

    Main Script called after Page has loaded.
    Entry point for all scripts.
    
*/

require([
	"util", 
	"Game",
    "Entity"
	], 
		
	function(util, Game, Entity) {
    
		log('starting');

		//Global variable to hold the drawer.
		//drawer = new Worker('js/drawer.js');
		//drawer.postMessage({"code": "draw"});


		game = new Game();
		var player = new Entity(50, 540, "#FFD630");
		game.player = player;
		
        console.log(game.player);
        
		//window.onkeypress = game.input();
		window.onkeydown = game.onDown();
        window.onkeyup = game.onUp();
game.tick();
        
       startTick();
		
		
		
});