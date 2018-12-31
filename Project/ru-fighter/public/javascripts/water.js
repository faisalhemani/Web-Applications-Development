function createWater() {
	var water = particles.slash.create(0,300, 'water');
	water.animations.add('anim');
	water.play('anim', 10, true);
	water.scale.setTo(1,1);
} 

function createAiWater() {
        var aiWater = particles.aiSlash.create(game.width,300, 'water');
        aiWater.animations.add('anim');
        aiWater.play('anim', 10, true);
        aiWater.scale.setTo(1,1);
}


function animateWater() {
	particles.slash.setAll('x', 10, true, true, 1);
	particles.slash.forEach(checkWater, this, true);
} 

function animateAiWater() {
        particles.aiSlash.setAll('x', -10, true, true, 1);
        particles.aiSlash.forEach(checkAiWater, this, true);
}


function doWater(repeat) {
	game.time.events.repeat(10, repeat, createWater, this);
} 

function doAiWater(repeat) {
        game.time.events.repeat(10, repeat, createAiWater, this);
}


function checkWater(sprite) {
	try {
		if(sprite.x > game.width) {
			sprite.kill();
			canGo = true;
		}
	}
	catch(err) {
		log(['checkSprite','catch'], sprite);
	}
}

function checkAiWater(sprite) {
        try {
                if(sprite.x < 0) {
                        sprite.kill();
                        canGo = true;
                }
        }
        catch(err) {
                log(['checkSprite','catch'], sprite);
        }
}

