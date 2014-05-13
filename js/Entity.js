define([
	"util"
	], 
	
	function() {
		
				
		entity = function(x, y, clr, game) {
			this.x = x;		//Top left corner
			this.y = y;
			this.color = clr;
			game.addEntity(this);
		}
	
});