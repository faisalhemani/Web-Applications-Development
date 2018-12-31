function bridge_map()
{
        //background
        tom_bg = game.add.sprite(0,0,'tom_bg');
//        tom_bg.scale.setTo(0.2,0.2);

        //character
        tom = game.add.sprite(780, 180,'tom');
        tom.scale.setTo(0.2,0.2);
	characterBounce(tom);
        //add sprites
/*
        //text 
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
//      dmg_txt.destroy();
*/
}


