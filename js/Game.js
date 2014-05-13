define([
	"util",
	"Entity"
	], 
		
	function(util, entity) {
    
		var entities = new Array();
		
		function addEntity(ent) {
			entities.push(ent);
		}
		
		function removeEntity(ent) {
			var i = entities.indexOf(ent);
			entities.splice(i,1);
		}

		function tick() {
			
		}
		
		slog("returning Game Object", "game");
		return {
			entities : entities,
			addEntity: addEntity,
			removeEntity : removeEntity,
			tick : tick
		};
	
});