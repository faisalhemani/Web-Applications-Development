
/*var particles = {
	lights : {},
	explosions : {},
	kunai : {},
	slash : {},
	water : {},
	splash : {}
};*/

var lights;
var graphics;
//var regTxt, specialTxt, UitlityTxt, UltimateTxt; 
function science()
{
//console.log("in science function");
//rectangle box

	//sciPlayer();

        var graphics = game.add.graphics(0,0);
	particles.lights = game.add.group();
        particles.explosions = game.add.group();
	particles.kunai = game.add.group();
	particles.slash = game.add.group();
	particles.water = game.add.group();
	particles.laserBeam = game.add.group();
	particles.heal = game.add.group();
	particles.aiExplosions = game.add.group();
	particles.aiKunai = game.add.group();
	particles.aiSlash = game.add.group();
	particles.aiWater = game.add.group();
	particles.aiLaserBeam = game.add.group();
	particles.aiHeal = game.add.group();

	//set a fill and line style
        graphics.beginFill(0x000000, 0.8);
        graphics.lineStyle(2, 0x000000);

        //draw a rectangle
        graphics.drawRect(90,460,880,130);

        window.graphics = graphics;
	//sciPlayer();
//Text
	var regTxt = game.add.text(120, 570, "DMG: 5     MP Cost: 0",
                                {font: "15px Arial", fill:" #ffffff"});
        var specialTxt = game.add.text(340, 570, "DMG: 8     MP Cost: 3", 
                                {font: "15px Arial", fill: "#ffffff"});

        var UitlityTxt = game.add.text(560, 570, "Heal: 10     MP Cost: 6", 
                                {font: "15px Arial", fill: "#ffffff"});

        var UltimateTxt = game.add.text(780, 570, "DMG: 18     MP Cost: 14", 
                                {font: "15px Arial", fill: "#ffffff"});
	createbtn();

//	if (player.avatar == "xavier.png")
//	{
 //		this.avatar = game.add.sprite(100,200,'player1');
   //  		this.avatar.scale.setTo(0.2,0.2);
//	}
//	else{
 // 		this.avatar = game.add.sprite(100,200,'player2');
   //     	this.avatar.scale.setTo(0.2,0.2);
//	}
	incrementMana(1);

}
//var reg, special, utility, ultimate;

function sciPlayer()
{
	this.avatar = game.add.sprite(100,200,'player2');
        this.avatar.scale.setTo(0.2,0.2);
	characterBounce(this.avatar);
}

function createbtn()
{

	var reg = game.add.sprite(100,470, 'sr');
        var special = game.add.sprite(320 ,470,'ss');//, ss_action, this, 2,1,0);
        var utility = game.add.sprite(540 ,470,'sut');//, utility_action, this,2,1,0);
        var ultimate = game.add.sprite(760 ,470,'sul');//, ultimate_action, this, 2,1,0);
        console.log("buttons are up");

        reg.inputEnabled = true;
        reg.events.onInputDown.add(sr_action,this);
        special.inputEnabled = true;
        special.events.onInputDown.add(ss_action,this);
        utility.inputEnabled = true;
        utility.events.onInputDown.add(utility_action,this);
        ultimate.inputEnabled = true;
        ultimate.events.onInputDown.add(ultimate_action,this);



}
//Renaming these functions so that the functions with
//the same name in battle.js are called.
//Just adding the animation calls to the functions in battle.js

function sr_aaction()
{
	doKunai(3);
	console.log("science.js - sr_action");
	ai_counter = ai_counter + 2;
}

function sss_action()
{
	doExplosion(50);
}

function uultimate_action()
{
	doAtomicRestructure(50);
}


function removeBtn()
{
	reg.inputEnabled = false;
	special.inputEnabled = false;
	utility.inputEnabled = false;
	ultimate.inputEnabled = false;

	game.time.events.add(0, function()
	{
		game.add.tween(reg).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
		game.add.tween(reg).to({y : game.height}, 1000, Phaser.Easing.Linear.None, true); 
                game.add.tween(special).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
                game.add.tween(special).to({y : game.height}, 1000, Phaser.Easing.Linear.None, true);
                game.add.tween(utility).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
                game.add.tween(utility).to({y : game.height}, 1000, Phaser.Easing.Linear.None, true);
                game.add.tween(ultimate).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
                game.add.tween(ultimate).to({y : game.height}, 1000, Phaser.Easing.Linear.None, true); 

                game.add.tween(regTxt).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
                game.add.tween(regTxt).to({y : game.height}, 1000, Phaser.Easing.Linear.None, true); 
                game.add.tween(specialTxt).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
                game.add.tween(specialTxt).to({y : game.height}, 1000, Phaser.Easing.Linear.None, true);
                game.add.tween(UitlityTxt).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
                game.add.tween(UitlityTxt).to({y : game.height}, 1000, Phaser.Easing.Linear.None, true);
                game.add.tween(UltimateTxt).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
                game.add.tween(UltimateTxt).to({y : game.height}, 1000, Phaser.Easing.Linear.None, true);

                game.add.tween(graphics).to({y : game.height}, 1000, Phaser.Easing.Linear.None, true);

	});
	game.time.events.add(1000, function()
	{
		reg.kill();
		special.kill();
		utility.kill();
		ultimate.kill();
		regTxt.destroy();
		specialTxt.destroy();
		UitlityTxt.destroy();
		UltimateTxt.destroy();
	});
}

/*
function doAtomicRestructure(repeat)
{
	game.time.events.repeat(50, repeat, createAtomicRestructure, this);
}

function createAtomicRestructure()
{
	var x = game.rnd.integerInRange(0, game.width);
	var random = game.rnd.integerInRange(0, 1);
	var sprite = 'redPartical';
	if (random)
		sprite = 'bluePartical';
	console.log(x);
	//game.add.sprite(x,0,sprite);
	var light = particles.lights.create(x,0,sprite);
	light.scale.setTo(2,2);
}

function animateAtomicRestructure()
{
	particles.lights.setAll('y', 10, true, true, 1);
	particles.lights.forEach(checkLight, this, true);
}

function checkLight(light)
{
	try 
	{	
		if (light.y > game.height)
		{
			light.kill();
		}
	}
	catch (error)
	{
		log(['checkLight','catch'], light);
	}
}

function player1Skills()
{
	var keyboard = game.input.keyboard;
	//var q = game.keyboard.addKey(Phaser.Keyboard.ONE);
	if (keyboard.isDown(Phaser.Keyboard.Q))
	{
		log(['player1Skills'],'keyboard Q down pressed');
		doAtomicRestructure(50);
	}
	if (keyboard.isDown(Phaser.Keyboard.W))
	{
		log(['player1Skills'],'keyboard W down pressed');
		doExplosion(50);
	}
	if (keyboard.isDown(Phaser.Keyboard.E))
	{
		log(['player1Skills'],'keyboard E down pressed');
		doSpiritBomb();
	}
	if (keyboard.isDown(Phaser.Keyboard.R))
	{
		log(['player1Skills'],'keyboard R down pressed');
	}
}
*/
