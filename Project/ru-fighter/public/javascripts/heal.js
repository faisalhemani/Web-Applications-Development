function createHeal() {
	var heal = particles.heal.create(0, 300, 'laserBeam');
	heal.animations.add('anim');
	heal.play('anim', 10, true);
	heal.scale.setTo(1,1);
}

function createAiHeal() {
        var aiHeal = particles.aiHeal.create(game.width, 300, 'laserBeam');
        aiHeal.animations.add('anim');
        aiHeal.play('anim', 10, true);
        aiHeal.scale.setTo(1,1);
}

function animateHeal() {
	particles.heal.setAll('x', 10, true, true, 1);
	particles.heal.forEach(checkHeal, this, true);
}

function animateAiHeal() {
        particles.aiHeal.setAll('x', -10, true, true, 1);
        particles.aiHeal.forEach(checkAiHeal, this, true);
}

function doHeal(repeat) {
	game.time.events.repeat(10, repeat, createSlash, this);
}

function doAiHeal(repeat) {
        game.time.events.repeat(10, repeat, createAiSlash, this);
}

function checkHeal(sprite) {
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

function checkAiHeal(sprite) {
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

