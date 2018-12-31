var uhp, umana, umaxhp, umaxmana, aihp, aimana, aimaxhp, aimaxmana;
var battletest = {
	preload: function() {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		var graphics = game.add.graphics(10,10);

        	//set a fill and line style
        	graphics.beginFill(0x000000, 0.8);
        	graphics.lineStyle(2, 0x0f0f12);

        	//draw a rectangle
        	graphics.drawRect(90,10,860,40);

        	window.graphics = graphics;
		uph = player.stats.hp;
		umana =  player.stats.mana;
		umaxhp = player.stats.maxhp;
		umaxmana = player.stats.maxmana;
		aihp =  50;
		aimana = 25;
		aimaxhp =  50;
        	aimaxmana = 25;
	},
	create: function(){
		var bmd = game.add.bitmapData(200,40);
         	bmd.ctx.beginPath();
         	bmd.ctx.rect(0,0,180,30);
        	bmd.ctx.fillStyle = '#00ff00';
        	bmd.ctx.fill();
		//user healt/mana hbar
		healthBar = game.add.sprite(game.world.centerX-200,game.world.centerY,bmd);
         	healthBar.anchor.y = 0.5;
         	manaBar = game.add.sprite(game.world.centerX-200,game.world.centerY+20,bmd);
         	manaBar.height = 10;
         	manaBar.anchor.y = 0.5;
        	 //ai health/mana bar
         	aihealthBar = game.add.sprite(game.world.centerX+200,game.world.centerY,bmd);
         	aihealthBar.anchor.y = 0.5;
         	aimanaBar = game.add.sprite(game.world.centerX+200,game.world.centerY+20,bmd);
         	aimanaBar.height = 10;
         	aimanaBar.anchor.y = 0.5;

		

	},
	update: function(){
        	healthBar.width = uhp;
		aihealthBar.width = aihp;
		manaBar.width = uhp;
                aimanahBar.width = aihp;
		if (aihp <= 0){
			game.state.start("win");
		}
		if (uhp <=0){
			game.state.start('lose');
		}
	}
}
