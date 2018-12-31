function createKunai()
{
	console.log("createKunai");
	var kunai = particles.kunai.create(0, game.rnd.integerInRange(0,game.height-250), 'kunai');
	kunai.animations.add('anim');
	kunai.play('anim', 10, true);
	kunai.scale.setTo(3,3);
}

function createAiKunai()
{
        console.log("createKunai");
        var aiKunai = particles.aiKunai.create(game.width, game.rnd.integerInRange(0,game.height-250), 'kunai');
        aiKunai.animations.add('anim');
        aiKunai.play('anim', 10, true);
        aiKunai.scale.setTo(-3,3);
}

function animateKunai()
{
	//console.log("animateKunai");
	particles.kunai.setAll('x', 10, true, true, 1);
	particles.kunai.forEach(checkKunai, this, true);
}

function animateAiKunai()
{
        //console.log("animateKunai");
        particles.aiKunai.setAll('x', -10, true, true, 1);
        particles.aiKunai.forEach(checkAiKunai, this, true);
}

function doKunai(repeat)
{
	console.log("doKunai");
	game.time.events.repeat(10, repeat, createKunai, this);
	//chp =  chp - 5;
}

function doAiKunai(repeat)
{
        console.log("doKunai");
        game.time.events.repeat(10, repeat, createAiKunai, this);
        //chp =  chp - 5;
}

function checkKunai(sprite)
{
	try
	{
		//log(['checkSprite', 'sprite.x'], sprite.x);
		//log(['checkSprite', 'game.width/2'], game.width/2)
		//log(['checkSprite','if'],sprite.x > game.width/2);
		if (sprite.x > game.width)
		{
			sprite.kill();
			console.log("Animation finished, user can go");
			//canGo = true;
			//particles.zombies.remove(sprite,true);
		}
	}
	catch(error)
	{
		log(['checkSprite','catch'], sprite);
	}
}

function checkAiKunai(sprite)
{
        try
        {
                //log(['checkSprite', 'sprite.x'], sprite.x);
                //log(['checkSprite', 'game.width/2'], game.width/2)
                //log(['checkSprite','if'],sprite.x > game.width/2);
                if (sprite.x < 0)
                {
                        sprite.kill();
                        console.log("Animation finished, user can go");
                        //canGo = true;
                        //particles.zombies.remove(sprite,true);
                }
        }
        catch(error)
        {
                log(['checkSprite','catch'], sprite);
        }
}

