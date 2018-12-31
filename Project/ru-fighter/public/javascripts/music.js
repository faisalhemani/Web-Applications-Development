var introScreenMusic;
var battleMusic;
var peacefulMusic;
var currentMusic;

function loadMusic() {
	introScreenMusic = document.createElement('audio');
	introScreenMusic.setAttribute('id', 'introMusic');
	introScreenMusic.setAttribute('src', 'assets/music/intro_screen.mp3');

	battleMusic = document.createElement('audio');
	battleMusic.setAttribute('id', 'battleMusic');
	battleMusic.setAttribute('src', 'assets/music/commence_battletheme.mp3');

	audio_start(introScreenMusic);
}

function audio_start(musicToPlay) {
	musicToPlay.play();
	currentMusic = 0;
}

function switchMusic(currMusic, nextMusic) {
	currMusic.pause();
	nextMusic.play();
	if(nextMusic == battleMusic) {
		currentMusic = 1;
	}
}

function loopMusic() {
	if(currentMusic === 0 && introScreenMusic.currentTime >= introScreenMusic.duration || introScreenMusic.currentTime === 0) {
		introScreenMusic.currentTime = 0.1;
		introScreenMusic.play();
	}
	else if(currentMusic === 1 && battleMusic.currentTime >= battleMusic.duration || battleMusic.currentTime === 0) {
		battleMusic.currentTime = 0.1;
		battleMusic.play();
	}
	else if(currentMusic === 2) {
		
	}
}
