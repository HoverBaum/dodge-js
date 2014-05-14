define([
	"util",
	"Entity"
	], 
		
	function(util, Entity) {
    
        var width = 400;
        var height = 600;
        var speed = 7;
        
		var Game = function() {
			this.entities = entities;
			this.player = null; 
            this.left = false;
            this.right = false;
            var cv = document.getElementById("cv");
            cv.width = width;
            cv.height = height;
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
            this.movePlayer();
            this.newEnemy();
            this.moveEntities();
			this.draw();
		}
        
        Game.prototype.moveEntities = function() {
            
        }
        
        Game.prototype.newEnemy = function() {
            if(Math.random() > 0.5) {
                return;
            }
            var x = Math.random() * width;
            var y = 0;
            var ent = new Entity(x, y, "#000");
            this.addEntity(ent);
        }
        
        Game.prototype.movePlayer = function() {
            if(this.left) {
                this.player.x -= speed;
            } else if(this.right) {
                this.player.x += speed;
            }
            if(this.player.x < 0) {
                this.player.x = 0;
            }
            if(this.player.x > cv.width-20) {
                this.player.x = cv.width-20;
            }
        }
		
		Game.prototype.draw = function() {
			var cv = document.getElementById("cv");
			var ctx = cv.getContext("2d");
			
			cv.width = width;
			
			ctx.fillStyle = "#64D448";
			ctx.fillRect(0, height-22, width, 23);
			
			ctx.fillStyle = this.player.color;
			ctx.fillRect(this.player.x, this.player.y, 20, 50);
            
            if(this.entities.length !== 0) {
                for(var i = 0; i < this.entities.length; i++) {
                    ent = this.entities[i];
                    ctx.fillStyle = ent.color;
                    ctx.fillRect(ent.x, ent.y, 10, 10);
                }
            }
		}
		
		Game.prototype.input = function() {
			//A = 97   D = 100
            
			var player = this.player;
            var self = this;
            var speed = 5;
            
            return function(e) {
                if(e.keyCode === 97) {
                    //Move player left
                    player.x -= speed;
                    if(player.x < 0) {
                        player.x = 0;
                    }
                } else if(e.keyCode === 100) {
                    //Move player right
                    player.x += speed;
                    var cv = document.getElementById("cv");
                    if(player.x > cv.width-10) {
                        player.x = cv.width-10;
                    }
                }
                self.draw();
            }
		}
        
        Game.prototype.onDown = function() {
            var self = this;
            
            return function(e) {
                if(e.keyCode === 65) {
                    self.left = true;
                }else if(e.keyCode === 68) {
                    self.right = true;
                }
            }
        }
        
        Game.prototype.onUp = function() {
            var self = this;
            
            return function(e) {
                if(e.keyCode === 65) {
                    self.left = false;
                }else if(e.keyCode === 68) {
                    self.right = false;
                }
            }
        }
		
		slog("returning Game Object", "game");
		return Game;
	
});