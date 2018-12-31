//----------------------------------- global variables ------------------------------

var game_started = 0;
var timer;
var amber, rufighter, startbtn, start_bg;
var random ;//= game.rnd.integerInRange(0, 1);
/*
user details
*/

var name, avatar, stats, facility;
var name2, avatar2, stats2, facility2;

var reg, special, utility, ultimate, reg2, special2, utility2, ultimate2;

//battles
var bat;

//battle bg
var alex;
var alex_bg;

var faisal;
var faisal_bg;
var devo_loc = false;

var jess;
var jess_bg;

var tom;
var tom_bg;

var xavier;
var xavier_bg;

var retinder;
var retinder_bg;

var url = 'http://35.162.14.150';

//music
var introScreenMusic;
var battleMusic;
var peacefulMusic;
var currentMusic;
var beep;

//initializing the game
var game = new Phaser.Game(1100, 600, Phaser.CANVAS, 'phaser-container', {
        preload: preload,
        create: create,
        update: update,
        render: render,
});

function preload() 
{

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setScreenSize();

	//start music
	//game.load.audio('sfx', 'assets/battletheme.mp3');
}

//start screen 
//    game.load.image('amber', 'assets/title_screen/logo.png');

/*    game.load.image('rufighter', 'assets/title_screen/RUFighter_logo.png');
    game.load.image('startbtn', 'assets/title_screen/start.png');
    game.load.image('start_bg', 'assets/title_screen/slc_tiles.jpg');
//preload player images
	game.load.image('player1', 'assets/HAMID.png');
	game.load.image('player2', 'assets/picka.png');
//Science skills 
	game.load.spritesheet('ss', 'assets/science_skills/sb_special.png', 200,100);
    	game.load.spritesheet('sr', 'assets/science_skills/sb_reg.png', 200,100);
    	game.load.spritesheet('sul', 'assets/science_skills/sb_ultimate.png',200,100);
    	game.load.spritesheet('sut', 'assets/science_skills/sb_utility.png',200,100);
//engineering skills
 	game.load.image('es', 'assets/engineering_skills/eb_special.png');
   	 game.load.image('er', 'assets/engineering_skills/eb_reg.png');
    	game.load.image('eul', 'assets/engineering_skills/eb_ultimate.png');
    	game.load.image('eut', 'assets/engineering_skills/eb_utility.png');
//Battle screens

	//Xavier
	game.load.image('xavier_bg', 'assets/battle_screens/xavier/victoria_lane.jpg');
	game.load.image('xavier', 'assets/battle_screens/xavier/xavier.png');


	//Faisal
	game.load.image('faisal_bg', 'assets/battle_screens/faisal/background.jpg');
 	game.load.image('faisal', 'assets/battle_screens/faisal/faisal.png');

	//Jess
	game.load.image('jess_bg', 'assets/battle_screens/jess/outside_eng.jpg');

	//Tom
	game.load.image('tom_bg', 'assets/battle_screens/tom/bridge.jpg');
	game.load.image('tom', 'assets/battle_screens/tom/tom.png');


	//Alex
	game.load.image('alex_bg', 'assets/battle_screens/alex/kerr_hall.jpg');
        game.load.image('alex', 'assets/battle_screens/alex/alex.png');

	//Retinder
	game.load.image('retinder_bg', 'assets/battle_screens/retinder/outside_slc.jpg');
*/

	//Audio
	/*game.load.audio('introScreen', 'assets/music/intro_screen.mp3');
	game.load.audio('battleMusic', 'assets/music/commence_battletheme.mp3');
	game.load.audio('peacefulMusic', 'assets/music/peaceful.mp3');*/

	//Code taken from
	//http://stackoverflow.com/questions/8489710/play-an-audio-file-using-jquery-when-a-button-is-clicked
	introScreenMusic = document.createElement('audio');
	introScreenMusic.setAttribute('id', 'introMusic');
	introScreenMusic.setAttribute('src', 'assets/music/intro_screen.mp3');
	//introScreenMusic.addEventListener('canplay', function() {
		//audio_start(introScreenMusic);
	//});
	battleMusic = document.createElement('audio');
	battleMusic.setAttribute('id', 'battleMusic');
	battleMusic.setAttribute('src', 'assets/music/commence_battletheme.mp3');

	beep = document.createElement('audio');
	beep.setAttribute('id', 'beep');
	beep.setAttribute('src', 'assets/music/beep-07.mp3');
}

function create()
{
	//var intro_music = game.add.audio('introScreen');a
	//intro_music.loop = true;
	//intro_music.play();
        //battleMusic = game.add.audio('introScreen');
	//this.game.sound.play("introScreen", 1, true);
	//sound.loop = true;
	//battleMusic.play();
	//console.log(temp);
	audio_start(introScreenMusic);
	//game.sound.setDecodedCallBack(['peacefulMusic'], fadeInMusic, this);
        if (!game_started)
	{
                random = game.rnd.integerInRange(0, 1);
		startScreen();
	}
        else
        {
                log(['create','phaser'], 'game starting');
                clearScreen();
                signupScreen();
        }

	//battleMusic = game.add.audio('battleMusic');
	//battleMusic.onDecoded.add(fadeInMusic, this);
	//battleMusic.play();

}

function update()
{
}

function render() 
{
                //Code from https://phaser.io/examples/v2/display/viewport
                var x = 32;
                var y = 0;
                var yi = 32;
		loopMusic();
}


//----------------------------------- Screens ---------------------------------------

function width()
{
	return window.innerWidth;
	console.log('Width: ' + window.innerWidth);
}
function height(){
	return window.innerHeight;
	console.log('Height: ' + window.innerHeight);
}

var audio;

function startScreen()
{
    log(['startScreen'],"in start screen " + window.innerHeight);
    game.stage.backgroundColor = '#000';

	//introScreenMusic = game.add.audio('introScreen', 0, true, false);
	//console.log("Here2");
	//introScreenMusic.onDecoded.add(audio_start, this);
	//audio_start();
	//audio.onDecoded.add(audio_start,this);

	amber = game.add.sprite(100, 200,'amber');

	game.time.events.add(Phaser.Timer.SECOND , fadePicture, this);
}

/*
*Adding fade-in manually within the code below - Xavier
*/

function fadeStart(volume)
{
	for (var i = 0; i < 8000; i++)
	{
		volume += 0.000125;
	}
}

function audio_start(musicToPlay)
{
	//console.log("in audio");
	//audio.fadeIn(5000);
	//musicToPlay.animate({volume: newVolume}, 1000);

	musicToPlay.play();
	currentMusic = 0;
	//Set the  fade out time to 2 sec
	/*var fadePoint = musicToPlay.duration - (musicToPlay.duration - 2);

	var fadeAudio = setInterval(function() {
		if((musicToPlay.currentTime <= fadePoint) && (musicToPlay.volume != 1.0)) {
			musicToPlay.volume += 0.1;
		}
		console.log(musicToPlay.volume);
		if(musicToPlay.volume === 1.0) {
			clearInterval(fadeAudio);
		}
	}, 200);*/

	//console.log("Here");
	//introScreenMusic = game.add.audio('introScreen');
	//fadeInMusic(introScreenMusic);
	//introScreenMusic.onDecoded();}
	//introScreenMusic.fadeIn(4000, true);
	//introScreenMusic.play('', '', 0, true, '');
	//introScreenMusic.play();
	//fadeInMusic(introScreenMusic);
}

function switchMusic(currMusic, nextMusic) {
	currMusic.pause();
	nextMusic.play();
	if(nextMusic == battleMusic) {
		currentMusic = 1;
	}
}

function loopMusic() {
	//console.log("Current time: " + introScreenMusic.currentTime);
	//console.log("Total time: " + introScreenMusic.duration);
	if(currentMusic === 0 && introScreenMusic.currentTime >= introScreenMusic.duration || introScreenMusic.currentTime === 0) {
		//console.log("Looped");
		introScreenMusic.currentTime = 0.1;
		introScreenMusic.play();
	}
	else if(currentMusic === 1 && battleMusic.currentTime >= battleMusic.duration || battle.currentTime === 0) {
		battleMusic.currentTime = 0.1;
		battleMusic.play();
	}
	else if(currentMusic === 2) {

	}
}

function fadeInMusic() {
	/*for(var i = 0; i < 100; i++) {
		musicToFade.volume += 0.1;
		console.log("Volume method");
	}*/
	console.log("Volume method");
	battleMusic.fadeIn(4000);
}

//fix the fade picture
function fadePicture()
{

	console.log("in fade");
	game.add.tween(amber).to( {alpha: 0}, 2000, Phaser.Easing.Linear.None, true);

    start_bg = game.add.sprite(0,0,'start_bg');
 //   start_bg.scale.setTo(0.3,0.3);

    rufighter = game.add.sprite(150, 20,'rufighter');
    //rufighter.scale.setTo(1,1)
    startbtn = game.add.sprite(800, 525,'startbtn');
    //startbtn.scale.setTo(0.8,0.8);
    startbtn.anchor.set(0.5);
    startbtn.inputEnabled = true;
    startbtn.events.onInputDown.add(start_action, this);
}

function start_action()
{
	//console.log("clearing the start screen");
	remove(start_bg);
	remove(amber);
	remove(rufighter);
	remove(startbtn);
	battleFeild();
	switchMusic(introScreenMusic, battleMusic);
}

function battleFeild()
{
	//console.log("in the battle screen");
	callingServer();
}

//------------------------------------ server related ---------------------------------
function callingServer()
{
	console.log("calling the server");
	var request = new XMLHttpRequest();
	var port = ':8081';
        request.open('GET','http://35.162.14.150:8081',true);
        request.onload = function ()
        {
                if (request.status >= 200 && request.status < 400)
                {
                        var object = JSON.parse(request.response);
                        console.log(object);
                        storeJSON(object);
                }
                else
                {
			log(['callingServer', 'onload'],'game server denied request');
                        alert("game server could not be reached");
                }
        };
        request.onerror = function ()
        {
                alert("error");
        }
        request.send();
}

function storeJSON(JSON_object)
{
	uhp = JSON_object[0].stats.hp;
        ulevel = JSON_object[0].stats.level;
        umana = JSON_object[0].stats.mana;
        uspeed = JSON_object[0].stats.speed;

 	chp = JSON_object[1].stats.hp;
        clevel = JSON_object[1].stats.level;
        cmana = JSON_object[1].stats.mana;
        cspeed = JSON_object[1].stats.speed;

	ai_info(JSON_object[1].stats, JSON_object[1].facility);
	user_info(JSON_object[0].avatar, JSON_object[0].facility,JSON_object[0].name, JSON_object[0].stats);
	battle(JSON_object[0].stats.speed, JSON_object[1].stats.speed);
}

/*
Player info area
*/
var txt_color;
var uhp_txt,uhp, ulevel_txt, ulevel, umana_txt, umana, uspeed_txt, uspeed;
var chp_txt,chp, clevel_txt, clevel, cmana_txt, cmana, cspeed_txt, cspeed;

function user_info(avatar, facility, name, stats)
{
/*
	if( facility == "science")
	{
		console.log("going to science");
		science(txt_color);
	}
	else
		engineering();
*/
	if (avatar == "xavier.png")
	{
 		this.avatar = game.add.sprite(100,200,'player1');
     		this.avatar.scale.setTo(0.2,0.2);
	}
	else{
  		this.avatar = game.add.sprite(100,200,'player2');
        	this.avatar.scale.setTo(0.2,0.2);
	}

}

function ai_info(stats, facility)
{

/*
	if( location == 'devo')
	{
		devo();
	}
	else if (location == "kerr_hall")
	{
		kerr_hall();
	}
	else if (location == "outside_eng")
	{
		outside_eng();
	}
	else if (location == "outside_slc")
	{
		outside_slc();
	}
	else if (location == "bridge")
	{
		bridge();
	}
	else if (location == "victoria_lane")
	{
		victoria_lane();
	}
*/

	temp();
	//devo();
	//kerr_hall();
	//outside_eng();
	//bridge();
	//victoria_lane();

//we might not need this
/*
	if (facility == "science")
	{
		ai_science();
	}
	else
		ai_engineering();
*/

}

/*
Temporary function to start up the battle music
before the battle screen is loaded
*/
function temp() {
	introScreenMusic.pause();

	battleMusic = game.add.audio('battleMusic');
	battleMusic.play();
	devo();
}

/*
Battle screens area
*/

//faisal
function devo()
{
	//background
	faisal_bg = game.add.sprite(30,0,'faisal_bg');
    	faisal_bg.scale.setTo(0.2,0.2);

	//character
	faisal = game.add.sprite(700/*350*/,/*150*/150,'faisal');
    	faisal.scale.setTo(0.15,0.15);

	//add sprites

   //text 
        //text for hp and stuff 
        txt_color = '#0000ff';
        console.log("show the text");
        uhp_txt = game.add.text(170,15,"Hp: " + uhp,{font: "22px Arial", fill: txt_color});
        ulevel_txt = game.add.text(260,15,"Level: " + ulevel, {font: "22px Arial", fill: txt_color});
        umana_txt = game.add.text(370,15, "Mp: " +umana,{font: "22px Arial", fill: txt_color});
        uspeed_txt = game.add.text(480,15,"Speed: "+uspeed,{font: "22px Arial", fill: txt_color});

        console.log(uhp_txt);

        txt_color = '#ff0000';
        console.log("show the text");
        chp_txt = game.add.text(630,15,"Hp: " + chp,{font: "22px Arial", fill: txt_color});
        clevel_txt = game.add.text(730,15,"Level: " + clevel, {font: "22px Arial", fill: txt_color});
        cmana_txt = game.add.text(830,15, "Mp: " +cmana,{font: "22px Arial", fill: txt_color});
        cspeed_txt = game.add.text(930,15,"Speed: "+cspeed,{font: "22px Arial", fill: txt_color});
        console.log(uhp_txt);

//      dmg_txt.destroy();


}


//bg shows but alex does not appear no the screen 
function kerr_hall()
{
        //background
        alex_bg = game.add.sprite(30,0,'alex_bg');
        alex_bg.scale.setTo(0.2,0.2);

        //character
        alex = game.add.sprite(700,50,'alex');
        alex.scale.setTo(0.2,0.2);
	console.log("alex is up");
	console.log(alex);
        //add sprites

   	//text 
        //text for hp and stuff 
        txt_color = '#0000ff';
        console.log("show the text");
        uhp_txt = game.add.text(170,15,"Hp: " + uhp,{font: "22px Arial", fill: txt_color});
        ulevel_txt = game.add.text(260,15,"Level: " + ulevel, {font: "22px Arial", fill: txt_color});
        umana_txt = game.add.text(370,15, "Mp: " +umana,{font: "22px Arial", fill: txt_color});
        uspeed_txt = game.add.text(480,15,"Speed: "+uspeed,{font: "22px Arial", fill: txt_color});

        console.log(uhp_txt);

        txt_color = '#ff0000';
        console.log("show the text");
        chp_txt = game.add.text(630,15,"Hp: " + chp,{font: "22px Arial", fill: txt_color});
        clevel_txt = game.add.text(730,15,"Level: " + clevel, {font: "22px Arial", fill: txt_color});
        cmana_txt = game.add.text(830,15, "Mp: " +cmana,{font: "22px Arial", fill: txt_color});
        cspeed_txt = game.add.text(930,15,"Speed: "+cspeed,{font: "22px Arial", fill: txt_color});
        console.log(uhp_txt);

//      dmg_txt.destroy();



}

//jess is not showing up
function outside_eng()
{
        //background
        jess_bg = game.add.sprite(30,0,'jess_bg');
        jess_bg.scale.setTo(0.2,0.2);

        //character
        jess = game.add.sprite(700, 150,'jess');
        jess.scale.setTo(0.15,0.15);

        //add sprites



   //text 
        //text for hp and stuff 
        txt_color = '#0000ff';
        console.log("show the text");
        uhp_txt = game.add.text(170,15,"Hp: " + uhp,{font: "22px Arial", fill: txt_color});
        ulevel_txt = game.add.text(260,15,"Level: " + ulevel, {font: "22px Arial", fill: txt_color});
        umana_txt = game.add.text(370,15, "Mp: " +umana,{font: "22px Arial", fill: txt_color});
        uspeed_txt = game.add.text(480,15,"Speed: "+uspeed,{font: "22px Arial", fill: txt_color});

        console.log(uhp_txt);

        txt_color = '#ff0000';
        console.log("show the text");
        chp_txt = game.add.text(630,15,"Hp: " + chp,{font: "22px Arial", fill: txt_color});
        clevel_txt = game.add.text(730,15,"Level: " + clevel, {font: "22px Arial", fill: txt_color});
        cmana_txt = game.add.text(830,15, "Mp: " +cmana,{font: "22px Arial", fill: txt_color});
        cspeed_txt = game.add.text(930,15,"Speed: "+cspeed,{font: "22px Arial", fill: txt_color});
        console.log(uhp_txt);

//      dmg_txt.destroy();

}

//retinder
function outside_slc()
{
        //background
        faisal_bg = game.add.sprite(30,0,'faisal_bg');
        faisal_bg.scale.setTo(0.2,0.2);

        //character
        faisal = game.add.sprite(700/*350*/,/*150*/150,'faisal');
        faisal.scale.setTo(0.15,0.15);

        //add sprites
   //text 
        //text for hp and stuff 
        txt_color = '#0000ff';
        console.log("show the text");
        uhp_txt = game.add.text(170,15,"Hp: " + uhp,{font: "22px Arial", fill: txt_color});
        ulevel_txt = game.add.text(260,15,"Level: " + ulevel, {font: "22px Arial", fill: txt_color});
        umana_txt = game.add.text(370,15, "Mp: " +umana,{font: "22px Arial", fill: txt_color});
        uspeed_txt = game.add.text(480,15,"Speed: "+uspeed,{font: "22px Arial", fill: txt_color});

        console.log(uhp_txt);

        txt_color = '#ff0000';
        console.log("show the text");
        chp_txt = game.add.text(630,15,"Hp: " + chp,{font: "22px Arial", fill: txt_color});
        clevel_txt = game.add.text(730,15,"Level: " + clevel, {font: "22px Arial", fill: txt_color});
        cmana_txt = game.add.text(830,15, "Mp: " +cmana,{font: "22px Arial", fill: txt_color});
        cspeed_txt = game.add.text(930,15,"Speed: "+cspeed,{font: "22px Arial", fill: txt_color});
        console.log(uhp_txt);

//      dmg_txt.destroy();


}

//tom 
function bridge()
{
        //background
        tom_bg = game.add.sprite(30,0,'tom_bg');
        tom_bg.scale.setTo(0.2,0.2);

        //character
        tom = game.add.sprite(700, 0,'tom');
        tom.scale.setTo(0.7,0.7);

        //add sprites

	//text 
    	//text for hp and stuff 
        txt_color = '#0000ff';
        console.log("show the text");
        uhp_txt = game.add.text(170,15,"Hp: " + uhp,{font: "22px Arial", fill: txt_color});
        ulevel_txt = game.add.text(260,15,"Level: " + ulevel, {font: "22px Arial", fill: txt_color});
        umana_txt = game.add.text(370,15, "Mp: " +umana,{font: "22px Arial", fill: txt_color});
        uspeed_txt = game.add.text(480,15,"Speed: "+uspeed,{font: "22px Arial", fill: txt_color});

        console.log(uhp_txt);

        txt_color = '#ff0000';
        console.log("show the text");
        chp_txt = game.add.text(630,15,"Hp: " + chp,{font: "22px Arial", fill: txt_color});
        clevel_txt = game.add.text(730,15,"Level: " + clevel, {font: "22px Arial", fill: txt_color});
        cmana_txt = game.add.text(830,15, "Mp: " +cmana,{font: "22px Arial", fill: txt_color});
        cspeed_txt = game.add.text(930,15,"Speed: "+cspeed,{font: "22px Arial", fill: txt_color});
        console.log(uhp_txt);

//      dmg_txt.destroy();


}

//xavier
function victoria_lane()
{
        //background
        xavier_bg = game.add.sprite(30,0,'xavier_bg');
        xavier_bg.scale.setTo(0.2,0.2);

        //character
        xavier = game.add.sprite(750, 100,'xavier');
        xavier.scale.setTo(0.15,0.15);

        //add sprites

        //text 
        //text for hp and stuff 
        txt_color = '#0000ff';
        console.log("show the text");
        uhp_txt = game.add.text(170,15,"Hp: " + uhp,{font: "22px Arial", fill: txt_color});
        ulevel_txt = game.add.text(260,15,"Level: " + ulevel, {font: "22px Arial", fill: txt_color});
        umana_txt = game.add.text(370,15, "Mp: " +umana,{font: "22px Arial", fill: txt_color});
        uspeed_txt = game.add.text(480,15,"Speed: "+uspeed,{font: "22px Arial", fill: txt_color});

        console.log(uhp_txt);

        txt_color = '#ff0000';
        console.log("show the text");
        chp_txt = game.add.text(630,15,"Hp: " + chp,{font: "22px Arial", fill: txt_color});
        clevel_txt = game.add.text(730,15,"Level: " + clevel, {font: "22px Arial", fill: txt_color});
        cmana_txt = game.add.text(830,15, "Mp: " +cmana,{font: "22px Arial", fill: txt_color});
        cspeed_txt = game.add.text(930,15,"Speed: "+cspeed,{font: "22px Arial", fill: txt_color});
        console.log(uhp_txt);



//      dmg_txt.destroy();


}


/*
Facilities area
*/
var counter = 0;
var regTxt, specialTxt, UtilityTxt, UltimateTxt;
var ai_txt;
function science(txt_color)
{
	//log(['science'],'entered');

 	regTxt = game.add.text(120, 550, "DMG: 5     MP Cost: 0",
                                {font: "15px Arial", fill: txt_color});
        specialTxt = game.add.text(340, 550, "DMG: 8     MP Cost: 3", 
                                {font: "15px Arial", fill: txt_color});

        UitlityTxt = game.add.text(560, 550, "Heal: 5     MP Cost: 6", 
                                {font: "15px Arial", fill: txt_color});

        UltimateTxt = game.add.text(780, 550, "DMG: 18     MP Cost: 14", 
                                {font: "15px Arial", fill: txt_color});

	reg = game.add.sprite(100,450, 'sr');
	special = game.add.sprite(320 ,450,'ss');//, ss_action, this, 2,1,0);
	utility = game.add.sprite(540 ,450,'sut');//, utility_action, this,2,1,0);
	ultimate = game.add.sprite(760 ,450,'sul');//, ultimate_action, this, 2,1,0);
	console.log("buttons are up");

	reg.inputEnabled = true;
	reg.events.onInputDown.add(sr_action,this);
	special.inputEnabled = true;
        special.events.onInputDown.add(ss_action,this);
	utility.inputEnabled = true;
        utility.events.onInputDown.add(utility_action,this);
	ultimate.inputEnabled = true;
        ultimate.events.onInputDown.add(ultimate_action,this);
//	dmg_txt.destroy();
//	battle();

}

var user_counter=0, ai_counter=0;

function battle(user_speed, ai_speed){
	console.log("in the battle function");

	//first turn
	if( counter == 0)
	{
		if (user_speed == ai_speed)
		{
			console.log("speed is same");
			if (user_speed ==3)
			{
				console.log("the facility is science");
				if (random == 1)
				{
					console.log("user is going first");
					science("#0000ff"); user_counter++;
					dmg_txt = game.add.text(350, 300, "You Go First", {font: "40px Arial", fill: txt_color});

				}
				else
				{
					ai_science();
					ai_counter++;
					dmg_txt = game.add.text(350, 300, "Ai Goes First", {font: "40px Arial", fill: txt_color});

				}
			}
			else
			{
				console.log("the facility is engineering");
			 	if (random == 1)
                                {	engineering("#0000ff"); user_counter++;}
                        	else
                                {	ai_engineering(); ai_counter++;}

			}
		}
		counter++;
	}
	else
	{
		if (user_counter > ai_counter)
		{
			console.log("user's turn");
                        if (user_speed ==3)
                        {
                                console.log("the facility is science");
                                science("#0000ff"); user_counter++;
                        }
                        else
                        {
                                console.log("the facility is engineering");
                                engineering("#0000ff"); user_counter++;

                        }

		}
		else
		{
			console.log("ai's turn");
                        if (user_speed ==3)
                        {
                                console.log("the facility is science");
                                ai_science(); ai_counter++;
                        }
                        else
                        {
                                console.log("the facility is engineering");
				ai_engineering(); ai_counter++;
                        }

		}

	}

}

var dmg_txt;


function sr_action(){
	dmg_txt.destroy();
	txt_color = '#ff0000';
	chp = chp - 5;
	chp_txt.destroy();
 	console.log("user : reg attack");
	chp_txt = game.add.text(630,15,"Hp: " + chp,{font: "22px Arial", fill: txt_color});
	dmg_txt = game.add.text(700,200,"DMG: 5", {font: "30px Arial", fill: txt_color});
	if(cspeed == 3) ai_science();
}

function ss_action() {
	dmg_txt.destroy();

	if( umana >=3)
	{
		txt_color = '#ff0000';
	        chp = chp - 8;
		umana = umana-3;
        	chp_txt.destroy();
        	umana_txt.destroy();
		console.log("user : special");
        	chp_txt = game.add.text(630,15,"Hp: " + chp,{font: "22px Arial", fill: txt_color});
		txt_color = '#0000ff'
        	umana_txt = game.add.text(370,15, "Mp: " +umana,{font: "22px Arial", fill: txt_color});
		dmg_txt = game.add.text(700,200,"DMG: 8", {font: "30px Arial", fill: txt_color});
		if(cspeed == 3) ai_science(); 
	}
}
function utility_action() {
dmg_txt.destroy();
	if(umana >= 6){
		txt_color = '#0000ff';
        	uhp = uhp + 5;
        	umana =umana-6;
        	uhp_txt.destroy();
        	umana_txt.destroy();
        	console.log("user: utility");
        	uhp_txt = game.add.text(120,15,"Hp: " + uhp,{font: "22px Arial", fill: txt_color});
        	txt_color = '#0000ff'
        	umana_txt = game.add.text(370,15, "Mp: " +umana,{font: "22px Arial", fill: txt_color});
		if(cspeed == 3) ai_science(); 
	}
}
function ultimate_action() {
	dmg_txt.destroy();

	if(umana >= 14)
	{
		txt_color = '#ff0000';
  	      	chp = chp - 18;
        	umana =umana-14;
        	chp_txt.destroy();
        	umana_txt.destroy();
        	console.log("user: ultimate");
        	chp_txt = game.add.text(630,15,"Hp: " + chp,{font: "22px Arial", fill: txt_color});
        	txt_color = '#0000ff'
        	umana_txt = game.add.text(370,15, "Mp: " +umana,{font: "22px Arial", fill: txt_color});
		dmg_txt = game.add.text(700,200,"DMG: 18", {font: "30px Arial", fill: txt_color});
		if(cspeed == 3) ai_science(); 
	}
}

function ai_science(){
	console.log("ai's turn");
	//dmg_txt.destroy();
        //dmg_txt = game.add.text(350,200,"AI's Turn", {font: "50px Arial", fill: txt_color});

	//ai_txt.destroy();
	if(cmana >= 14)
	{
	 	console.log("ultimate");
	     // ai_ultimate_action();
	}
	else if (cmana >=6)
	{
		console.log("ulitlity");
        //	ai_utility_action();
	}
	else if (cmana>=3)
	{
		console.log("special");
	  //      ai_ss_action();
	}
	else
	{
		console.log("reg");
	//	ai_sr_action();
	}

/*
	function ai_sr_action(){
	console.log("ai is doing reg attack");
        dmg_txt.destroy();

        txt_color = '#0000ff';
        uhp = uhp - 5;
        uhp_txt.destroy();
        console.log("reg attack");
        uhp_txt = game.add.text(170,15,"Hp: " + uhp,{font: "22px Arial", fill: txt_color});
        dmg_txt = game.add.text(300,200,"DMG: 5", {font: "30px Arial", fill: txt_color});
        //if(uspeed == 3) science();
	}

	function ai_ss_action() {
	console.log("ai is doing special attack");
        dmg_txt.destroy();

        if( cmana >=3)
        {
                txt_color = '#0000ff';
                uhp = uhp - 8;
                cmana = cmana-3;
                uhp_txt.destroy();
                cmana_txt.destroy();
                console.log("special");
                uhp_txt = game.add.text(170,15,"Hp: " + uhp,{font: "22px Arial", fill: txt_color});
               // txt_color = '#ff0000'
                cmana_txt = game.add.text(840,15, "Mp: " +cmana,{font: "22px Arial", fill: txt_color});
                dmg_txt = game.add.text(300,200,"DMG: 8", {font: "30px Arial", fill: txt_color});
             //   if(cspeed == 3) ai_science(); 
        }
	}
	function ai_utility_action() {
	console.log("ai is doing a utility attack");
	dmg_txt.destroy();
        if(cmana >= 6){
                //txt_color = '#0000ff';
                chp = chp + 5;
                cmana =cmana-6;
                chp_txt.destroy();
                cmana_txt.destroy();
                console.log("utility");
                chp_txt = game.add.text(630,15,"Hp: " + chp,{font: "22px Arial", fill: txt_color});
                txt_color = '#ff0000'
                cmana_txt = game.add.text(840,15, "Mp: " +cmana,{font: "22px Arial", fill: txt_color});
              //  if(cspeed == 3) ai_science(); 
        }
	}
*/
	function ai_ultimate_action() {
	console.log("ai is ultimate attack");
        dmg_txt.destroy();

        if(cmana >= 14)
        {
                txt_color = '#0000ff';
                uhp = uhp - 18;
                cmana =cmana-14;
                uhp_txt.destroy();
                cmana_txt.destroy();
                console.log("ultimate");
                uhp_txt = game.add.text(170,15,"Hp: " + uhp,{font: "22px Arial", fill: txt_color});
                txt_color = '#ff0000'
                cmana_txt = game.add.text(840,15, "Mp: " +cmana,{font: "22px Arial", fill: txt_color});
                dmg_txt = game.add.text(300,200,"DMG: 18", {font: "30px Arial", fill: txt_color});
                //if(cspeed == 3) ai_science(); 
        }
	}

}

function engineering() {
}

/*
Skill function area
*/
function reg_action() {}

//remove
function remove(element)
{
        element.visible = false;
}

//log
function log(tags, message)
{
	var prefix = '';
	for (var i = 0; i < tags.length; i++)
	{
		prefix = prefix + '['+tags[i]+']';
	}
	return prefix+' : '+message;
}
