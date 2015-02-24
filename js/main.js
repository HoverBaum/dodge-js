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
		var playerY = window.innerHeight - 10 - 50;
		var playerX = window.innerWidth * 0.5;
		var player = new Entity(playerX, playerY, "#FFD630");
		game.player = player;
		
        console.log(game.player);
        
		//window.onkeypress = game.input();
		window.onkeydown = game.onDown();
        window.onkeyup = game.onUp();
        window.onresize = game.resize();
	
		window.ontouchstart = game.onTouchStart();
		window.ontouchend = game.onTouchEnd();
	
		window.onblur = game.pause();
	window.onfocus = game.continue();
		
		startTick();
				
});