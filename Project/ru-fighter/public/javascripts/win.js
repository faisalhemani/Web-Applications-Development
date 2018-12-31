
var win = {
        preload: function () {
                console.log("WIN");
        },
        create: function () {
		var bg = this.game.add.sprite (0,0,'menubg');
		var vc = this.game.add.sprite(game.world.centerX,game.world.centerY, 'win');
		vc.anchor.setTo(0.5);
		this.back = game.add.button(900, 20, 'back', this.actionOnClick, this, 2, 1, 0);
                this.back.scale.setTo(0.4);
		if(nhanMap == true) {
			switchMusic(nhanMusic, victoryMusic);
		}
		else {
			switchMusic(battleMusic, victoryMusic);
        	}
	},
	actionOnClick: function () {
		if(nhanMap == true) {
			nhanMap = false;
			console.log("nhan to map");
			switchMusic(victoryMusic, mapTheme);
		}
		else {
			console.log("battle to map");
			switchMusic(victoryMusic, mapTheme);
		}
		this.state.start('map');

        }
};




