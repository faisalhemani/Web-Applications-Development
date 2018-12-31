window.onload = function() {

	var game = new Phaser.Game(1366, 637, Phaser.AUTO, "", {preload: onPreload, create: onCreate});                

	// the map itself
	var map;
	// a couple of variables used to save start touch position
	var startX;
	var startY;
	// dummy variable to handle multitouch, if any 
	var moveIndex;
	// map scrolling speed. The higher the number, the fastest 
	// the scrolling. Leaving it at 1, it's like you are dragging the map
	var mapSpeed = 1;
	// group where map and town are placed
	var mapGroup;
	// the town you are about to select
	var candidateTown;

	// preloading graphic assets
	function onPreload() {
	  game.load.image("map", "http://35.162.14.150/game_engine/js/CharSelect/faisal.png");
          game.load.image("town", "http://35.162.14.150/game_engine/assets/enemy_btn.png");
	}

	// going full screen
	function goFullScreen(){
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.setScreenSize(true);
	}

	// creating the game itself
	function onCreate() {
		goFullScreen();
          mapGroup = game.add.group();
		mapGroup.inputEnabled = true;
		//mapGroup.input.enableDrag(false);
		//mapGroup.events.onDragStart.add(dragMap, this);
          // placing the map
		map = game.add.image(0, 0, "map");
          	map.scale.setTo(2);
		//map.anchor.setTo(0.5);
		map.inputEnabled = true;
		//map.input.enableDrag(false);
		map.events.onDragStart.add(dragMap, this);
		mapGroup.add(map);
          // ramdomly placing ten towns
          for(var i = 0;i < 7; i++){
		console.log(window.innerWidth);
               var town = game.add.image(game.rnd.integerInRange(50, window.innerWidth - 50), game.rnd.integerInRange(50, window.innerHeight - 50), "town");
               //town.inputEnabled = true;
		//town.input.enableDrag(false);
		//town.events.onDragStart.add(dragMap, this);
		town.anchor.setTo(0.5);
               // each town is enabled for input and has its own up and down listeners
               town.inputEnabled = true;
               town.events.onInputDown.add(selectTown, this);
               town.events.onInputUp.add(confirmTown, this);
               mapGroup.add(town);
          }
          // centering the map
          mapGroup.x = (game.width - map.width) / 2;
          mapGroup.y = (game.height - map.height) / 2;
          // listener for the touch
		game.input.onDown.add(fingerOnMap, this);
		game.input.onHold.add(dragMap, this);
		game.input.onUp.add(dragMap, this);
	}

	// the player puts the finger/mouse down on the map
	function fingerOnMap(){
		// saving touch start psoition
		startX = game.input.worldX;
		startY = game.input.worldY;
		mapGroup.saveX = mapGroup.x;
		mapGroup.saveY = mapGroup.y;
		// updating listeners
		game.input.onDown.remove(fingerOnMap);
     	game.input.onUp.add(stopMap);
	console.log("here");
     	//moveIndex = game.input.addMoveCallback(dragMap, this);
	}

	// the player drags the map, we move the map according to finger
	// movement and map speed.
	function dragMap(){
		var currentX = game.input.worldX;
		var currentY = game.input.worldY;
		var deltaX = startX - currentX;
		var deltaY = startY - currentY; 

		console.log("Here2");

		//deltaX* deltaX
          if(deltaX * deltaX + deltaY * deltaY > 25){
               candidateTown = null;
          }
		//mapGroup.x = mapGroup.saveX - deltaX * mapSpeed;
		mapGroup.y = mapGroup.saveY - deltaY * mapSpeed;
		// this is to limit map movement and always have the
		// stage fully covered by the map
          if(mapGroup.x < - map.width + game.width){
               mapGroup.x = - map.width + game.width;
          }
          if(mapGroup.x > 0){
               mapGroup.x = 0;
          }
          if(mapGroup.y < - map.height + game.height){
               mapGroup.y = - map.height + game.height;
          }
          if(mapGroup.y > 0){
               mapGroup.y = 0;
          }
	}

	// the player stops touching the map
	function stopMap(){
		game.input.onDown.add(fingerOnMap);
     	game.input.onUp.remove(stopMap);
     	//game.input.deleteMoveCallback(moveIndex);
	}

     // the player puts the finger/mouse down on a town
     function selectTown(sprite, pointer) {
          candidateTown = sprite;
     }

     // the player stops touching the town
     function confirmTown(sprite, pointer) {
          if(candidateTown == sprite){
               alert("Town selected");
          }
     }
}
