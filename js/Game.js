define([
	"util",
	"Entity"
	], 
		
	function(util, entity) {
    
		var Game = function() {
			this.entities = entities;
			this.player = null;
		}
		
		var entities = new Array();
		
		Game.prototype.addEntity = function(ent) {
			entities.push(ent);
		}
		
		Game.prototype.removeEntity = function(ent) {
			var i = entities.indexOf(ent);
			entities.splice(i,1);
		}

		Game.prototype.tick = function() {
			this.draw();
		}
		
		Game.prototype.draw = function() {
			var cv = document.getElementById("cv");
			var ctx = cv.getContext("2d");
			
			var width = cv.width;
			var height = cv.height;
			cv.width = width;
			
			ctx.fillStyle = "#64D448";
			ctx.fillRect(0, height-12, width, height);
			
			ctx.fillStyle = this.player.color;
			ctx.fillRect(this.player.x, this.player.y, this.player.x+10, this.player.y+20);
		}
		
		Game.prototype.input = function(e) {
			//A = 97   D = 100
			if(e.keyCode === 97) {
				//Move player left
			} else if(e.keyCode === 100) {
				//Move player right
			}
		}
		
		slog("returning Game Object", "game");
		return Game;
	
});