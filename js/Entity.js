define([
	"util"
	], 
	
	function() {
		
				
		entity = function(x, y, game) {
			this.x = x;		//Top left corner
			this.y = y;
			game.addEntity(this);
		}
	
});