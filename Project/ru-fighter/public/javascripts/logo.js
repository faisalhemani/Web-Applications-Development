var logo = {
        preload: function () {
                console.log("LOGO");
		this.logo = this.add.sprite(this.game.world.centerX/5, this.game.centerY/2,'logo');
                this.logo.scale.setTo(0.5,0.5);
                this.preloadBar = this.add.sprite(this.game.world.centerX/3.5, this.game.world.centerY/2, 'preloadBar');

        },
        create: function () {

//		this.state.start('menu');
	//console.log(player.created);
	/*if( player.created == true)
		this.state.start('menu');
	else 
		this.state.start('char');
	*/	//requestCreated();
	game.state.start("menu");
      },


      update: function () {
                loopMusic();
        }

};

function requestCreated()
{
	console.log('requestCreated sent');
	var request = new XMLHttpRequest();
	request.open('POST', '/api/create/character', true);
	request.onload = new function ()
	{
		if (request.status >= 200 && request.status < 400)
		{
			console.log(request.responseText);
			return JSON.parse(request.responseText);
		}
		else 
		{
			//alert('Request to create character was denied!');
		}
	};
	request.onerror = new function ()
	{
		//alert('Error sending request for character created!');
	};
	request.send(JSON.stringify(player));
}



