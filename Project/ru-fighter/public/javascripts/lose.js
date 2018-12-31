var lose = {
        preload: function () {
                console.log("LOSE");
        },
        create: function () {
                var bg = this.game.add.sprite (0,0,'menubg');
                var df = this.game.add.sprite(game.world.centerX,game.world.centerY, 'lose');
                df.anchor.setTo(0.5);
                this.back = game.add.button(900, 20, 'back', this.actionOnClick, this, 2, 1, 0);
                this.back.scale.setTo(0.4);
		if(nhanMap == true) {
                        switchMusic(nhanMusic, defeatMusic);
                }
                else {
                        switchMusic(battleMusic, defeatMusic);
                }
        },
        actionOnClick: function () {
                if(nhanMap == true) {
			nhanMap = false;
			console.log("nhan to map");
                        switchMusic(defeatMusic, mapTheme);
                }
                else {
			console.log("battle to map");
                        switchMusic(defeatMusic, mapTheme);
                }
		this.state.start('map');

        }

};




