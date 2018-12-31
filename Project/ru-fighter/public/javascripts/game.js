var game = new  Phaser.Game(1100,600,Phaser.AUTO,'phaser-container');
//game.state.add('boot', boot);
game.state.add('start', start);
game.state.add('load', load);
game.state.add('logo', logo);
game.state.add('title', title);
game.state.add('map', map);
game.state.add('char', char);
game.state.add('instructions', instructions);
game.state.add('settings', settings);
game.state.add('win', win);
game.state.add('lose', lose);
game.state.add('menu', menu);
game.state.add('play', play);
//game.state.add('faisal', faisal);
console.log('MAIN');

var introScreenMusic;
var battleMusic;
var mapTheme;
var nhanMusic;
var peacefulMusic;
var currentMusic;
var victory;
var defeat;
var beep;

introScreenMusic = document.createElement('audio');
introScreenMusic.setAttribute('id', 'introMusic');
introScreenMusic.setAttribute('src', 'assets/music/intro_screen.mp3');

battleMusic = document.createElement('audio');
battleMusic.setAttribute('id', 'battleMusic');
battleMusic.setAttribute('src', 'assets/music/commence_battletheme.mp3');

mapTheme = document.createElement('audio');
mapTheme.setAttribute('id', 'mapTheme');
mapTheme.setAttribute('src', 'assets/music/alternativePeaceful.mp3');
//mapTheme.setAttribute('src', 'assets/music/nhan.mp3');

nhanMusic = document.createElement('audio');
nhanMusic.setAttribute('id', 'nhanMusic');
nhanMusic.setAttribute('src', 'assets/music/nhan.mp3');

victoryMusic = document.createElement('audio');
victoryMusic.setAttribute('id', 'victoryMusic');
victoryMusic.setAttribute('src', 'assets/music/victory.mp3');

defeatMusic = document.createElement('audio');
defeatMusic.setAttribute('id', 'defeatMusic');
defeatMusic.setAttribute('src', 'assets/music/defeat.mp3');

beep = document.createElement('audio');
beep.setAttribute('id', 'beep');
beep.setAttribute('src', 'assets/music/beep-07.mp3');

game.state.start('start');


function switchMusic(currMusic, nextMusic) {
	currMusic.pause();
	nextMusic.play();
	currMusic.volume = 0;
	nextMusic.volume = 0;
	console.log(nextMusic.volume);
	fadeMusic(nextMusic);
	console.log("Switching music");
	if(nextMusic == battleMusic) {
		currentMusic = 1;
		console.log("Switched to battle music");
	}
	else if(nextMusic == introScreenMusic) {
		currentMusic = 0;
		console.log("Switched to battle music");
	}
	else if(nextMusic == mapTheme) {
		currentMusic = 2;
		console.log("Switched to map theme");
	}
	else if(nextMusic == nhanMusic) {
		currentMusic = 3;
		console.log("Switched to nhan's theme");
	}
}

function loopMusic() {
	if(currentMusic === 0 && (introScreenMusic.currentTime >= introScreenMusic.duration || introScreenMusic.currentTime === 0)) {
		introScreenMusic.currentTime = 0.0001;
		introScreenMusic.play();
		console.log("Intro loop");
	}
        else if(currentMusic === 1 && (battleMusic.currentTime >= battleMusic.duration || battleMusic.currentTime === 0)) {
                battleMusic.currentTime = 0.1;
                battleMusic.play();
		console.log("Battle loop");
        }
        else if(currentMusic === 2 && (mapTheme.currentTime >= mapTheme.duration || mapTheme.currentTime === 0)) {
		mapTheme.currentTime = 0.1;
		mapTheme.play();
		console.log("Map loop");
        }
	else if(currentMusic === 3 && (nhanMusic.currentTime >= nhanMusic.duration || nhanMusic.currentTime === 0)) {
		nhanMusic.currentTime = 0.1;
		nhanMusic.play();
		console.log("Nhan loop");
	}
}

function fadeMusic(musicToFade) {
	var sound = document.getElementById(musicToFade);
	var fadePoint = musicToFade.duration - (musicToFade.duration -2);

	//console.log("Print " + musicToFade);

	//console.log("CurrentTime: " + musicToFade.currentTime);

	try {
		var fadeAudio = setInterval(function () {
			//console.log("CurrentTime: " + musicToFade.currentTime);
			if((musicToFade.currentTime <= fadePoint) && (musicToFade.volume < 1.0)) {
				if(musicToFade.volume <= 1.0) {
					try {
						musicToFade.volume += 0.1;
					}
					catch(err) {
						//console.log("Shits really fucked");
					}
				}
				else {
					musicToFade.volume = 1;
				}
				//console.log("increasing volume");
			}
			/*if(musicToFade.currentTime > fadePoint && musicToFade.volume < 1) {
				musicToFade.volume = 1;
			}*/
			//console.log("Fading music");
			//console.log("Here2: " + musicToFade.volume);
			if(musicToFade === 1.0 || musicToFade.currentTime > fadePoint) {
				console.log("Finishing fade");
				musicToFade.volume = 1;
				clearInterval(fadeAudio);
			}
		}, 200);
	}
	catch(err) {
		console.log("Shits fucked bro");
	}
}
