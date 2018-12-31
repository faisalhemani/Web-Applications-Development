var settings = {
        preload: function () {
                console.log("instructions");
		var bg = this.game.add.sprite (0,0,'menubg');
        },
        create: function () {
                this.game.stage.backgroundColor = '#fff000';
              	this.back = game.add.button(900, 20, 'back', this.actionOnClick, this, 2, 1, 0);
		this.back.scale.setTo(0.4);
		var box = game.add.graphics(150,game.world.centerY - 100);
        	box.beginFill(0xffffff);
        	box.drawRect(0,0,750,200);
        	box.alpha = 0.5;
		var style = { font: '800 px, Press Start 2P, cursive' };
		this.txt =  game.add.text(180,game.world.centerY -50, 'You Pleb, You dare try to defy the creators settings,\n Your account will be deleted. :)', style);
		this.txt.scale.setTo(3);

        },
        actionOnClick: function () {
                this.state.start('menu');

        },
};



