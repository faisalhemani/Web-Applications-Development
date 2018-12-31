function createExplosion()
{
	var explosion = particles.explosions.create(0, game.world.randomY, 'explosion');
	explosion.animations.add('walk');
	explosion.play('walk', 30, true);
}

function createAiExplosion()
{
        var aiExplosion = particles.aiExplosions.create(game.width, game.world.randomY, 'explosion');
        aiExplosion.animations.add('walk');
        aiExplosion.play('walk', 30, true);
}

var numExplosionsCompleted = 0;

function animateExplosion()
{
	particles.explosions.setAll('x', 10, true, true, 1);
	//numExplosionsCompleted = 0;
	//console.log("Here");
	particles.explosions.forEach(checkExplosion, this, true);
	//console.log("Explosions: " + numExplosionsCompleted);
        if(numExplosionsCompleted == 20) {
		//console.log("Can go");
		//canGo = true;
		numExplosionsCompleted = 0;
	}
}

function animateAiExplosion()
{
        particles.aiExplosions.setAll('x', -10, true, true, 1);
        //numExplosionsCompleted = 0;
        //console.log("Here");
        particles.aiExplosions.forEach(checkAiExplosion, this, true);
        //console.log("Explosions: " + numExplosionsCompleted);
        if(numExplosionsCompleted == 20) {
                //console.log("Can go");
                //canGo = true;
                numExplosionsCompleted = 0;
        }
}


function doExplosion(repeat)
{
	//console.log("doExplosion");
	game.time.events.repeat(50, repeat, createExplosion, this);
}

function doAiExplosion(repeat)
{
        //console.log("doExplosion");
        game.time.events.repeat(50, repeat, createAiExplosion, this);
}


function checkExplosion(sprite)
{
	try
	{
		//log(['checkSprite', 'sprite.x'], sprite.x);
		//log(['checkSprite', 'game.width/2'], game.width/2)
		//log(['checkSprite','if'],sprite.x > game.width/2);
		if (sprite.x > game.width)
		{
			//console.log("Animation finished, user can go");
			numExplosionsCompleted++;
			//console.log("numExpl");
			sprite.kill();
			//console.log("Animation finished, user can go");
			//canGo = true;
			//particles.zombies.remove(sprite,true);
		}
	}
	catch(error)
	{
		log(['checkSprite','catch'], sprite);
	}
}

function checkAiExplosion(sprite)
{
        try
        {
                //log(['checkSprite', 'sprite.x'], sprite.x);
                //log(['checkSprite', 'game.width/2'], game.width/2)
                //log(['checkSprite','if'],sprite.x > game.width/2);
                if (sprite.x < 0)
                {
                        //console.log("Animation finished, user can go");
                        numExplosionsCompleted++;
                        //console.log("numExpl");
                        sprite.kill();
                        //console.log("Animation finished, user can go");
                        //canGo = true;
                        //particles.zombies.remove(sprite,true);
                }
        }
        catch(error)
        {
                log(['checkSprite','catch'], sprite);
        }
}

