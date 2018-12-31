
var particles = {
	lights : {},
	explosions : {},
	kunai : {},
	slash : {},
	water : {},
	laserBeam : {},
	heal : {},
	aiLights : {},
	aiExplosions : {},
	aiKunai : {},
	aiSlash : {},
	aiWater : {},
	aiLaserBeam: {},
	aiHeal : {}
};


var load = {
        preload: function () {
                console.log("In the Load funtion:)");
		//this.physics.startSystem(Phaser.Physics.ARCADE);
                this.logo = this.add.sprite(this.game.world.centerX/5, this.game.centerY/2,'logo');
                //this.logo.anchor.setTo(0.5);
		this.logo.scale.setTo(0.5,0.5);

                this.preloadBar = this.add.sprite(this.game.world.centerX/3.5, this.game.world.centerY/2, 'preloadBar');
                //this.preloadBar.anchor.setTo(0.5);
		//this.preloadBar.scale.setTo(0.8);
                this.load.setPreloadSprite(this.preloadBar);
		loading = game.add.text(500,500,"Loading....",{font: "22px Arial", fill: "#fff"});
 		this.map = this.load.image("map", "assets/map.png");
                this.town = this.load.image("town", "assets/enemy_btn.png");
		
		this.load.image('lose','/assets/defeat.png%3fdl=0');
		this.load.image('win','/assets/victory.png%3fdl=0');
		this.load.image('playbutton', '/assets/nTBME6Xzc.png');
		this.load.image('settings','/assets/settings-256.png');
		this.load.image('instructions','/assets/692673_info_512x512.png');
		this.load.image('back','/assets/x-mark.png');
		//change the faisal and xavier once  player 1 and player 2 are ready
		this.load.image('player1', 'assets/Engineer.png');
        	this.load.image('player2', 'assets/science.png');
		this.load.image('menubg','/assets/title_screen/slc_tiles.jpg');
		//FONTS
		this.game.load.bitmapFont('font', 'assets/fonts/ProFontWindows.png', 'assets/fonts/ProFontWindows.xml');
/*
		this.load.image("player1", "http://35.162.14.150/game_engine/js/CharSelect/faisal.png");
                this.load.image("player2", "http://35.162.14.150/game_engine/js/CharSelect/xavier.png");
  */
//                this.load.image("transp", "http://35.162.14.150/game_engine/js/CharSelect/transp.png");
                this.load.image("bg", "assets/charselect/atrium.jpg");
                //load all game images here
//Science skills 
        this.load.spritesheet('ss', 'assets/science_skills/sb_special.png', 200,100);
        this.load.spritesheet('sr', 'assets/science_skills/sb_reg.png', 200,100);
        this.load.spritesheet('sul', 'assets/science_skills/sb_ultimate.png',200,100);
        this.load.spritesheet('sut', 'assets/science_skills/sb_utility.png',200,100);
//engineering skills
        this.load.image('es', 'assets/engineering_skills/eb_special.png');
        this.load.image('er', 'assets/engineering_skills/eb_reg.png');
        this.load.image('eul', 'assets/engineering_skills/eb_ultimate.png');
        this.load.image('eut', 'assets/engineering_skills/eb_utility.png');
//Battle screens

        //Xavier
        this.load.image('xavier_bg', 'assets/battle_screens/xavier/victoria_lane.jpg');
        this.load.image('xavier', 'assets/battle_screens/xavier/xavier.png');


        //Faisal
        this.load.image('faisal_bg', 'assets/battle_screens/faisal/devo.jpg');
        this.load.image('faisal', 'assets/battle_screens/faisal/faisal.png');
	//this.load.spritesheet('kunai','/assets/kunai-bomba.png', 55,55,19);
        //Jess
        this.load.image('jess_bg', 'assets/battle_screens/jessica/outside_eng.jpg');
	this.load.image('jess', 'assets/battle_screens/jessica/jessica.png');
	this.load.spritesheet('explode','/assets/explode.png');
        //Tom
        this.load.image('tom_bg', 'assets/battle_screens/tom/bridge.jpg');
        this.load.image('tom', 'assets/battle_screens/tom/tom.png');
	this.load.spritesheet('red','/assets/red.png');

        //Alex
        this.load.image('alex_bg', 'assets/battle_screens/alex/kerr_hall.jpg');
        this.load.image('alex', 'assets/battle_screens/alex/alex.png');
	this.load.spritesheet('cats','/assets/runningcat.png');
        //Retinder
        this.load.image('retinder_bg', 'assets/battle_screens/retinder/outside_slc.jpg');
	this.load.image('retinder', 'assets/battle_screens/retinder/retinder.png');
	//Nhan
	this.load.image('nhan_bg', 'assets/battle_screens/nhan/classroom.jpg');
	this.load.image('nhan', 'assets/battle_screens/nhan/nhan.png');

	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.setScreenSize();
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;

	//Music
	//this.introScreenMusic = document.createElement('audio');
        //this.introScreenMusic.setAttribute('id', 'introMusic');
        //this.introScreenMusic.setAttribute('src', 'assets/music/intro_screen.mp3');

        //this.battleMusic = document.createElement('audio');
        //this.battleMusic.setAttribute('id', 'battleMusic');
	//this.battleMusic.setAttribute('src', 'assets/music/commence_battletheme.mp3');

	loadParticles();
	this.load.spritesheet('slash', 'assets/slash.png', 200, 200);
	this.load.spritesheet('water', 'assets/water.png', 200, 200);
	this.load.spritesheet('laserBeam', 'assets/sheet2.png', 0, 1250);
	this.load.spritesheet('heal', 'assets/sheet2.png', 370, 180);


	//this.load.image('bluePartical', 'assets/blue.png');
	//this.load.image('redPartical', 'assets/red.png');
	//this.load.spritesheet('explosion','assets/explode.png',128,128);
	
	particles.lights = this.game.add.group();
	
	introScreenMusic.play();
	introScreenMusic.volume = 0;
	fadeMusic(introScreenMusic);
	//beep.play();
	currentMusic = 0;

	},
        create: function () {
		//particles.lights = this.add.group();	
		this.state.start('logo');
        },
	update: function () {
		console.log('here');
		loopMusic();
		//player1Skills();
		animateAtomicRestructure();
	}
};


function loadParticles()
{
	//load ligbts
	game.load.image('bluePartical', 'assets/blue.png');
	game.load.image('redPartical', 'assets/red.png');
	//load explosion sprite sheet
	game.load.spritesheet('explosion','assets/explode.png',128,128);
	//load zombie sprite sheet
	game.load.spritesheet('zombie', 'assets/metalslug.png',37, 45, 18);
	game.load.spritesheet('kunai','/assets/kunai-bomba.png', 55,55,19);
}
