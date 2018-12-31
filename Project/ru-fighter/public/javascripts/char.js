//the background
var background;

//variables to save starting position of mouse or finger
var startX;
var startY;

//sub variable
var moveIndex;

//tracks map speed
var screenSpeed;

//a group to place background and characters
var charGroup;

//the character you will select
var characterChoice;

//character choices
var player1;
var player2;

//Text to let the user know which character is selected
var text;
var selectedChar = "Selected Character: ";
var style;

//boolean to keep track of which character is selected
var player1Selected;
var player2Selected;

var char = {
        preload: function () {
                console.log("CHARSELECT");
        },
        create: function () {
		//goFullScreen();
		charGroup = game.add.group();
		background = game.add.image(0,0,"bg");
		background.height = game.height;
		background.width = game.width;
		charGroup.add(background);

		//Creates xavier and adds an event listener
		player1 = game.add.image(game.width/4, game.height - game.height/2,"player1");
		player1.selected = false;
		player1.scale.setTo(0.15);
		player1.anchor.setTo(0.5);
		player1.inputEnabled = true;
		player1.events.onInputDown.add(selectPlayer1, this);
		player1.events.onInputUp.add(confirmPlayer1, this);
		charGroup.add(player1);

		//Creates Faisal and adds an event listener
		player2 = game.add.image((3 * game.width)/4, game.height - game.height/2, "player2");
		player2.selected = false;
		player2.scale.setTo(0.15);
		player2.anchor.setTo(0.5);
		player2.inputEnabled = true;
		player2.events.onInputDown.add(selectPlayer2, this);
		player2.events.onInputUp.add(confirmPlayer2, this);
		charGroup.add(player2);

		charGroup.x = (game.width - background.width)/2;
		charGroup.y = (game.width - background.width)/2;

		game.input.onDown.add(fingerOnScreen, this);

		style = { font: "32px Arial", fill: "#000000", wordWrap: false, wordWrapWidth: "100px", align: "center"};
		text = game.add.text(game.width/3, 0, "Selected Faculty: not chosen yet", style);
		//next state
//                this.state.start('map');
        },

	update: function()
	{
		console.log("Here");
		if (player1.input.pointerOver()) 
		{
			console.log("Here player1");
			player1.alpha = 1;
			player1.scale.setTo(0.50);
			//if (player1.selected)
			//{
        	        	player2.alpha = 0.7;
	                	player2.scale.setTo(0.20);
			//}
			text.setText("Selected Faculty: Engineer");
		}
		else if (player2.input.pointerOver()) 
		{
			console.log("Here player2");
			player2.alpha = 1;
			player2.scale.setTo(0.23);
			console.log("Science hoevered over");
			//if (player2.selected)
			//{
                        	player1.alpha = 0.7;
                        	player1.scale.setTo(0.45);
			//}
			text.setText("Selected Faculty: Science");
		}
		else 
		{
			console.log("Here else");
			player1.alpha = 0.7;
			player1.scale.setTo(0.45);
			player2.alpha = 0.7;
			player2.scale.setTo(0.20);
			text.setText("Selected Faculty: is not chosen yet");
		}
		//text = game.add.text(0, 0, characterText(), style);
	}

};

function selectPlayer1(sprite, pointer) {
 	characterChoice = sprite;
}

function confirmPlayer1(sprite, pointer)
        {
                if (characterChoice == sprite)
                {
                        player1Selected = true;
                        player2Selected = false;
                        console.log("Player 1 is: " +player1Selected);
                        console.log("Player 2 is: " +player2Selected);
                        //alert("Xavier selected!");
                        characterText();
			player.facility = 'Engineering';
		//	alert("Player 1 Facility is: " + player.facility);
			requestCreated();
			switchMusic(introScreenMusic, mapTheme);
			 this.state.start('map');
                }
        }

        function selectPlayer2(sprite, pointer)
        {
                characterChoice = sprite;
        }

        function confirmPlayer2(sprite, pointer)
        {
                if (characterChoice == sprite)
                {
                        player1Selected = false;
                        player2Selected = true;
                        console.log("Player 1 is: " +player1Selected);
                        console.log("Player 2 is: " +player2Selected);
 			//alert("Faisal selected!");
                        characterText();
			player.facility = 'Science';
		//	alert("Player 2 Facility is: " + player.facility);
			requestCreated();
			switchMusic(introScreenMusic, mapTheme);
			 this.state.start('map');
                }
        }


 	function fingerOnScreen()
        {
                startX = game.input.worldX;
                startY = game.input.worldY;
                charGroup.saveX = charGroup.x;
                charGroup.saveY = charGroup.y;

                game.input.onDown.remove(fingerOnScreen);
                game.input.onUp.add(stopScreen);
                //moveIndex = game.input.addMoveCallback(dragScreen, this);
        }

        function dragScreen()
        {
                var currentX = game.input.worldX;
                var currentY = game.input.worldY;
                var deltaX = startX - currentX;
                var deltaY = startY - currentY;
                if (deltaX * deltaX + deltaY * deltaY > 25)
                {
                        characterChoice = null;
                }
                if(mapGroup.x < - map.width + game.width)
                {
                        mapGroup.x = - map.width + game.width;
                }
                if(mapGroup.x > 0)
                {
                        mapGroup.x = 0;
                }
        }

        function stopScreen()
        {
                game.input.onDown.add(fingerOnScreen);
                game.input.onUp.remove(stopScreen);
                //game.input.deleteMoveCallback(moveIndex);
        }

 	function characterText()
        {
                //text = game.add.text(0, 0, "", style);
                if (player1Selected) {
                        text.setText("Selected Faculty: Engineer");
                        console.log("1");
                }
                else if (player2Selected) {
                        text.setText("Selected Faculty: Science");
                        console.log("2");
                }
                else {
                        text.setText("Selected Faculty: is not chosen yet");
                        console.log("3");
                }
        }

