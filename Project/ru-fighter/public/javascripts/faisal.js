function devo()
{
        //background
        faisal_bg = game.add.sprite(0,0,'faisal_bg');
//        faisal_bg.scale.setTo(0.2,0.2);

        //character
        faisal = game.add.sprite(750,250,'faisal');
        faisal.scale.setTo(0.2,0.2);
	var box = game.add.graphics(0,500);
	box.beginFill(0x000000);
	box.drawRect(0,0,1100,100);
	box.alpha = 0.5;
	/*var bdock = new Phaser.Rectangle(0, 550, 1500, 50);
	game.debug.geom(bdock, '#000');
	bdock.alpha = 0.2;*/
	console.log("starttttttttttttt");
	//var attack = game.add.sprite(100,300,'kunai');
	//attack.scale.setTo(2,2);
	//attack.animations.add('kunai');
	//attack.play('walk', 1, true);
	//console.log("added");
	//var walk = attack.animations.add('walk');
	//console.log("animated");
	//attack.animations.play('walk', 10, true);
	//console.log("play");
	characterBounce(faisal);
/*
        //text for hp and stuff 
        txt_color = '#0000ff';
        console.log("show the text");
        uhp_txt = game.add.text(170,15,"Hp: " + uhp,{font: "22px Arial", fill: txt_color});
        ulevel_txt = game.add.text(260,15,"Level: " + ulevel, {font: "22px Arial", fill: txt_color});
        umana_txt = game.add.text(370,15, "Mp: " +umana,{font: "22px Arial", fill: txt_color});
        uspeed_txt = game.add.text(480,15,"Speed: "+uspeed,{font: "22px Arial", fill: txt_color});

        console.log(uhp_txt);

        txt_color = '#ff0000';
        console.log("show the text");
        chp_txt = game.add.text(630,15,"Hp: " + chp,{font: "22px Arial", fill: txt_color});
        clevel_txt = game.add.text(730,15,"Level: " + clevel, {font: "22px Arial", fill: txt_color});
        cmana_txt = game.add.text(830,15, "Mp: " +cmana,{font: "22px Arial", fill: txt_color});
        cspeed_txt = game.add.text(930,15,"Speed: "+cspeed,{font: "22px Arial", fill: txt_color});
        console.log(uhp_txt);
*/
}
/*
this.healthbar = game.add.graphics(0,0);this.group.add(this.healthbar); 
// this.group being a pre-initialised group for this entity...
this.hp = 20;
this.totalhp = 20;
this._lasthp = 0;
if (this._lasthp !== this.hp) {    
	this.healthbar.clear();    
	var x = (this.hp / this.totalhp) * 100;    
	var colour = utils.rgbToHex((x > 50 ? 1-2*(x-50)/100.0 : 1.0) * 255, (x > 50 ? 1.0 : 2*x/100.0) * 255, 0);        
	this.healthbar.beginFill(colour);    
	this.healthbar.lineStyle(5, colour, 1);    
	this.healthbar.moveTo(0,-5);    
	this.healthbar.lineTo(config.tileSize * this.hp / this.totalhp, -5);    
	this.healthbar.endFill();
}
this._lasthp = this.hp;

rgbToHex: function (r, g,  {    return "0x" + ((1 << 24) + (r << 16) + (g << 8) + .toString(16).slice(1);}
*/
