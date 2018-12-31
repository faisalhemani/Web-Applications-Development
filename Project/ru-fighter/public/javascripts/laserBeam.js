function createLaserBeam() {
	var laserBeam = particles.laserBeam.create(0,200, 'laserBeam');
	laserBeam.animations.add('anim');
	laserBeam.play('anim', 10, true);
	laserBeam.scale.setTo(1,1);
}

function animateLaserBeam() {
	particles.laserBeam.setAll('x', 10, true, true, 1);
	particles.laserBeam.forEach(checkLaserBeam, this, true);
}

function doLaserBeam(repeat) {
	game.time.events.repeat(10, repeat, createLaserBeam, this);
}

function checkLaserBeam(sprite) {
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
