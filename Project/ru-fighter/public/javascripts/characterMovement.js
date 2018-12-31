function characterBounce(character)
{
        game.physics.startSystem(Phaser.Physics.ARCADE);
	console.log("Current character: " +character);
	game.physics.enable(character, Phaser.Physics.ARCADE);
	//character.body.velocity.setTo(0, 180);
	character.body.velocity.setTo(0, -70);
	character.body.bounce.set(1.0);
	//character.body.offset.y = game.height/4;
        character.body.collideWorldBounds = true;
	console.log(character.y);
	/*if (character.y >= game.height/2)
	{
		character.body.gravity.set(0, 180)
		character.body.offset.y = 0;
	}
	else character.body.gravity.set(0,0);*/
	checkHeight(character);
}

function checkHeight(character) {
	console.log();
	var checkBounce = setInterval(function () {
		var temp = game.height/4;
		var temp2 = game.height/3;
		if(character.y <= temp) {
			character.body.velocity.setTo(0, 70);
			//console.log("Temp: " + temp);
		}
		else if(character.y >= temp2) {
			character.body.velocity.setTo(0, -70);
			//console.log("Temp2: " + temp2);
		}
		//if(character.y > game
	}, 200);
}
