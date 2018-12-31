log(['viewport', 'width'],window.innerWidth);
log(['viewport', 'width'],window.innerHeight);

var game = new Phaser.Game(1100, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render : render });

var json_url = {
	ip : 'http://35.162.14.150',
	port : ':8081'
}

//object to store player related information
var player1;
var player2;
var player3; 
//stores the particle sprites in game groups
var particles = {
	zombies : {},
	explosions : {},
	lights : {},
	spiritBomb : {},
	text : {}
}

var buttons = {}; 

var music;

function preload() 
{
	log(['preload'],'started');
	//creates the players of the game
	player1 = new Player(100, game.world.centerY, 'player1');
	player2 = new Player(game.world.width-100, game.world.centerY, 'player2');
	player3 = new Player(100, game.world.centerY, 'zombie');
	//use Phaser.ScaleManage.EXACT_FIT for exact screen scaling
	scaleGame();
	//request player data from game db & wait until player response is recieved
	requestPlayers();
	//load the player sprite images
	game.load.image('player1', 'assets/'+player1.model.avatar);
	game.load.image('player2', 'assets/'+player2.model.avatar);
	//load 
	game.load.image('bluePartical', 'assets/blue.png');
	game.load.image('redPartical', 'assets/red.png');
	//load explosion sprite sheet
	game.load.spritesheet('explosion','assets/explode.png',128,128);
	//load zombie sprite sheet
	game.load.spritesheet('zombie', 'assets/metalslug.png',37, 45, 18);
	//load the game background image
	game.load.image('background', 'assets/battle_screens/'+player2.model.name+'/'+'background.jpg');
	
	game.load.audio('battletheme', 'assets/music/battletheme.mp3');
	//sets the background color
	game.stage.backgroundColor = '#000';

	//logs player1's relative sprite image path 
	log(['preload','player1'],'assets/'+player1.model.avatar);
	log(['preload','player1'],'assets/'+player2.model.avatar);
	log(['preload'],'ended');
}

//all phaser functionality to scale the game to the viewport
function scaleGame()
{
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.setScreenSize();
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
	game.scale.maxWidth = 720;
	game.scale.maxheight = 720;
}

function create() 
{
	log(['create'],'started');
	//game.stage.scale.startFullScreen();
	//game.physics.startSystem(Phaser.Physics.ARCADE);
	createBackground('background');
	//displays our 2 players
	displayPlayer(player1);
	displayPlayer(player2);
	//animates player3 (zombie_large)
	//animatePlayer(player3);
	//initializes zombies particle group
	particles.explosions = game.add.group();
	//initializes lights particle group
	particles.lights = game.add.group();
	//initializes spiritbomb particle group
	particles.spiritBomb = game.add.group();
	//
	doAtomicRestructure(50);
	//
	doExplosion(50);
	//
	doSpiritBomb();
	buttons = game.add.group();
	//add music to the game
	music = game.add.audio('battletheme');
	music.play();

	log(['create'],'ended');
}

function createBackground(key)
{
	var background = game.add.sprite(30,0,key);
	//background.anchor.setTo(0,0);
	background.scale.setTo(0.2,0.2);
	return background;
}

function update() 
{
	player1Skills();
	animateExplosion();
	animateAtomicRestructure();
	animateSpiritBomb();
	if (game.input.keyboard.isDown(Phaser.Keyboard.M))
		music.pause();
	//controlPlayer(player1,game.input.x,player1.y);
}

function log(tags, message)
{
	var prefix = '';
	for (var i = 0; i < tags.length; i++)
	{
		prefix = prefix + '['+tags[i]+']';
	}
	console.log(prefix+' : '+message);
}

function render()
{

}
