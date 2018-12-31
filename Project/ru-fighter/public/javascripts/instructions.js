var instructions = {
        preload: function () {
                console.log("instructions");
		var bg = this.game.add.sprite (0,0,'menubg');
        },
        create: function () {
		this.game.stage.backgroundColor = '#fff000';
                this.back = game.add.button(900, 20, 'back', this.actionOnClick, this, 2, 1, 0);
                this.back.scale.setTo(0.4);
		var box = game.add.graphics(100,game.world.centerY - 100);
                box.beginFill(0xffffff);
                box.drawRect(0,0,800,300);
                box.alpha = 0.5;
                var style = { font: '800 px, Press Start 2P, cursive' };
                this.txt =  game.add.text(130,game.world.centerY -50, 'This is a turn based RPG Game, where your chosen \n character can battle artificial intelligence \ncharchters by chosing a series of attacks until \n one players health hits 0', style);
                this.txt.scale.setTo(3);
        },
	actionOnClick: function () {
                this.state.start('menu');

        },
};


