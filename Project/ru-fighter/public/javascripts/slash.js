function createSlash() {
	var slash = particles.slash.create(0,300, 'slash');
	slash.animations.add('anim');
	slash.play('anim', 10, true);
	slash.scale.setTo(1,1);
}

function createAiSlash() {
        var aiSlash = particles.aiSlash.create(game.width,300, 'slash');
        aiSlash.animations.add('anim');
        aiSlash.play('anim', 10, true);
        aiSlash.scale.setTo(1,1);
}


function animateSlash() {
	particles.slash.setAll('x', 10, true, true, 1);
	particles.slash.forEach(checkSlash, this, true);
}

function animateAiSlash() {
        particles.aiSlash.setAll('x', -10, true, true, 1);
        particles.aiSlash.forEach(checkAiSlash, this, true);
}


function doSlash(repeat) {
	console.log("slahsing");
	game.time.events.repeat(10, repeat, createSlash, this);
}

function doAiSlash(repeat) {
        console.log("slahsing");
        game.time.events.repeat(10, repeat, createAiSlash, this);
}


function checkSlash(sprite) {
	try {
		if(sprite.x > game.width) {
			sprite.kill();
			console.log("Animation finished, user can go");
			canGo = true;
		}
	}
	catch(err) {
		log(['checkSprite','catch'], sprite);
	}
}

function checkAiSlash(sprite) {
        try {
                if(sprite.x < 0) {
                        sprite.kill();
                        console.log("Animation finished, user can go");
                        canGo = true;
                }
        }
        catch(err) {
                log(['checkSprite','catch'], sprite);
        }
}

