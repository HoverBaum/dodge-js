define([
	"util",
	"Entity"
	], 
		
	function(util, Entity) {
    
		
        var width = window.innerWidth;
        var height = window.innerHeight;
		var entSpeed = 2;					//Speed of entities.
        var speed = 3;						//Speed of the player per tick.
		var chance = 0.2; 					//Chance with which new Entities are added per tick.
		var difficulty = 1;
		
		//Constructor for a Game.
		var Game = function() {
			this.entities = entities;
			this.player = null; 
            this.left = false;
            this.right = false;
            var cv = document.getElementById("cv");
            cv.width = width;
            cv.height = height;
			
			var d = new Date();
			this.startTime = d.getTime();
			this.lastDiffInc = this.startTime;		//Last time the difficulty rose.
			this.calculateChance();
		}
		
		var entities = new Array();
		
		//calculates the chance for a drop.
		Game.prototype.calculateChance = function() {
			var d = new Date();
			if(d.getTime() - this.lastDiffInc > 20000) {
				difficulty++;
				this.lastDiffInc = d.getTime();
			}
			chance = width / 400 * 0.2;
		}
		
		Game.prototype.addEntity = function(ent) {
			entities.push(ent);
		}
		
		Game.prototype.removeEntity = function(ent) {
			var i = entities.indexOf(ent);
			entities.splice(i,1);
		}

		//The tick is what makes the game fo round.
		Game.prototype.tick = function() {
            this.movePlayer();
            this.calculateChance();
			for(var i = 0; i < difficulty; i++) {
				this.newEnemy();
			}
            this.moveEntities();
			this.checkCollision();
			this.draw();
			
			this.displayHUD();
			
		}

		Game.prototype.displayHUD = function() {
			var d = new Date();
			document.getElementById("time-js").innerHTML = Math.floor((d.getTime() - this.startTime) / 1000) + 's';
			document.getElementById("difficulty-js").innerHTML = difficulty;
			
			var progress = (d.getTime() - this.lastDiffInc) / 1000 * 5 ;
			document.getElementById("level-line-js").setAttribute("style", "width:" + progress + "%;");
		}
		
		Game.prototype.checkCollision = function() {
			for(var i = 0; i < entities.length; i++) {
				var ent = entities[i];
				var player = this.player;
				if(ent.x + 10 >= player.x && ent.x <= player.x + 20) {
					if(ent.y+10 >= player.y) {
						this.lost();
					}
				}
			}
		}
		
		Game.prototype.lost = function() {
			stopTick();
			log("You Lost");
			if(confirm('Press Enter to play again')) {
				location.reload();
			}
		}
		
        Game.prototype.moveEntities = function() {
			for(var i = 0; i < entities.length; i++) {
				entities[i].y += entSpeed + difficulty;
				if(entities[i].y > height-20) {
					this.removeEntity(entities[i]);
				}
			}
        }
        
        Game.prototype.newEnemy = function() {
            if(Math.random() > chance) {
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
            if(this.player.x > width-20) {
                this.player.x = width-20;
            }
        }
		
		Game.prototype.draw = function() {
			var cv = document.getElementById("cv");
			var ctx = cv.getContext("2d");
			
			cv.width = window.innerWidth;
			cv.height = window.innerHeight;
			
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
        
        Game.prototype.onDown = function() {
            var self = this;
            
            return function(e) {
                if(e.keyCode === 65 || e.keyCode === 37) {
                    self.left = true;
                }else if(e.keyCode === 68 || e.keyCode === 39) {
                    self.right = true;
                }
            }
        }
        
        Game.prototype.onUp = function() {
            var self = this;
            
            return function(e) {
                if(e.keyCode === 65 || e.keyCode === 37) {
                    self.left = false;
                }else if(e.keyCode === 68 || e.keyCode === 39) {
                    self.right = false;
                }
            }
        }
		
		Game.prototype.resize = function() {
			
			var self = this;
			
			return function(e) {
				var xScale = window.innerWidth / width;
				var yScale = window.innerHeight / height;
				self.player.x = self.player.x * xScale;
				self.player.y = window.innerHeight - 10 - 50;
				for(var i = 0; i < entities.length; i++) {
					entities[i].x = entities[i].x * xScale;
					entities[i].y = entities[i].y * yScale;
				}
				width = window.innerWidth;
				height = window.innerHeight;
				self.calculateChance();
				self.draw();
			}
			
		}
		
		slog("returning Game Object", "game");
		return Game;
	
});