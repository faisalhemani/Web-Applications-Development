var url = 'http://35.162.14.150';

var menu = {
        preload: function () {
                console.log("MENUUUU");
	var bg = this.game.add.sprite (0,0,'menubg');
        console.log("calling the server");
        var request = new XMLHttpRequest();
        var port = ':8081';
        request.open('GET','http://35.162.14.150:8081',true);
        request.onload = function ()
        {
                if (request.status >= 200 && request.status < 400)

                {
                        var object = JSON.parse(request.response);
                        console.log(object);
                        storeJSON(object);
                }
                else
                {
                        log(['callingServer', 'onload'],'game server denied request');
                        alert("game server could not be reached");
                }
        };
        request.onerror = function ()
        {
                alert("error");
        }
        request.send();


	function storeJSON(JSON_object)
	{

		console.log("inside the store Json")
		console.log(player.name);
	/*
        uhp = JSON_object[0].stats.hp;
        ulevel = JSON_object[0].stats.level;
        umana = JSON_object[0].stats.mana;
        uspeed = JSON_object[0].stats.speed;

        chp = JSON_object[1].stats.hp;
        clevel = JSON_object[1].stats.level;
        cmana = JSON_object[1].stats.mana;
        cspeed = JSON_object[1].stats.speed;

        ai_info(JSON_object[1].stats, JSON_object[1].facility);
        user_info(JSON_object[0].avatar, JSON_object[0].facility,JSON_object[0].name, JSON_object[0]$
        battle(JSON_object[0].stats.speed, JSON_object[1].stats.speed);
	*/

	}




        },
	//load settings image
	//load instructions image
	//load back button / X
	// work with button placement for menu/instructions/settings
        create: function () {
		this.game.stage.backgroundColor = '#fff000';
		this.playbutton = game.add.button(400, 150, 'playbutton', this.actionOnClick, this, 2,1, 0);
		this.instructions = game.add.button(300, 450, 'instructions', this.onClick, this, 2, 1, 0);
		this.instructions.scale.setTo(0.5);
		this.settings = game.add.button(600, 450, 'settings', this.clickMe, this, 2, 1, 0);
		this.settings.scale.setTo(0.5);
              	//this.playbutton = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'playbutton');

 // this.state.start('play');
//	if()

//		console.log("in create");
	},
	actionOnClick: function () {
		switchMusic(introScreenMusic, mapTheme);
		if( player.created == true){
                	this.state.start('map'); 
        	} else  {
                	this.state.start('char');
		}

	},
	onClick: function () {
                this.state.start('instructions');

        },
	clickMe: function () {
                this.state.start('settings');

        },

	update: function (){
		loopMusic();
		//console.log("Here");
	}

};

