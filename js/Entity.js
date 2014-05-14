define([
	"util"
	], 
	
	function() {
		
				
		var Entity = function(x, y, clr) {
			this.x = x;		//Top left corner
			this.y = y;
			this.color = clr;
		}
        
        return Entity;
	
});