var mana_count = 0;

var random ;
var reg, special, utility, ultimate, reg2, special2, utility2, ultimate2;
var uhp_txt,uhp, ulevel_txt, ulevel, umana_txt, umana, uspeed_txt, uspeed;
var chp_txt,chp, clevel_txt, clevel, cmana_txt, cmana, cspeed_txt, cspeed;
var bmd, maxhp;
//The variable is set to true after the player's attack animation is finished
//Therefore, canGo is only set to true in each individual move's functions
var canGo = false;

function battle_functions()
{
	console.log("In battle function");
	aii();
	game.physics.startSystem(Phaser.Physics.ARCADE);
}
function aii()
{
	random = game.rnd.integerInRange(0, 1);
	console.log("Faculty" + player.facility);
	console.log("random: " + random);
	if(random == 1)
	{
		topText(ai_science_hp(), ai_science_mp(), ai_science_speed());
	}
	else
	{
		topText(ai_eng_hp(), ai_eng_mp(), ai_eng_speed());
	}
}


function topText(ai_hp, ai_mp, ai_speed)
{
//c();

//rectangle box
//console.log("IN TOP TEXT FUNCTION");

	if(player.facility === 'Science') {
		sciPlayer();
	}
	else {
		engPlayer();
	}
	c();
	var graphics = game.add.graphics(10,10);

	//set a fill and line style
	graphics.beginFill(0x000000, 0.8);
	graphics.lineStyle(2, 0x0f0f12);

	//draw a rectangle
	graphics.drawRect(90,10,860,40);

	window.graphics = graphics;
	bmd = game.add.bitmapData(200,40);
	bmd.ctx.beginPath();
        bmd.ctx.rect(0,0,180,30);
        bmd.ctx.fillStyle = '#00ff00';
        bmd.ctx.fill();
        //user healt/mana hbar
        healthBar = game.add.sprite(160,35,bmd);
	healthBar.height = 20;
        healthBar.anchor.y = 0.5;
        manaBar = game.add.sprite(160,50,bmd);
        manaBar.height = 10;
        manaBar.anchor.y = 0.5;
        //ai health/mana bar
        aihealthBar = game.add.sprite(575,45,bmd);
	aihealthBar.height = 20;
        aihealthBar.anchor.y = 1;
        aimanaBar = game.add.sprite(575,55,bmd);
        aimanaBar.height = 10;
        aimanaBar.anchor.y = 1;

//Text
	
	uhp = 50;
	maxhp=50;
	uhp_txt = game.add.text(170,25,"Hp : " + uhp,{
		font: "16px Arial",
		fill: "#0000ff",
		align: "center" });
    	healthBar.width = uhp*8;
 	 umana = 25;
         umana_txt = game.add.text(235,25,"Mp : " + umana,{
                font: "16px Arial",
                fill: "#0000ff",
                align: "center" });
	manaBar.width = umana*10;
	if(player.facility == "Science")
 		var uspeed = 3;
	else
		uspeed = 2;
	//doesnt actually have to do with speed just text
	uspeed_txt = game.add.text(100,30,"User: ",{
                font: "23px Arial",
                fill: "#0000ff",
                align: "center" });
	

 	 chp = ai_hp;
         chp_txt = game.add.text(585,25,"Hp : " + chp,{
                font: "16px Arial",
                fill: "#ff0000",
                align: "center" });
	aihealthBar.width = chp*8;

 	 cmana = ai_mp;
        cmana_txt = game.add.text(660,25,"Mp : " + cmana,{
                font: "16px Arial",
                fill: "#ff0000",
                align: "center" });
	aimanaBar.width = cmana*10;
         cspeed = ai_speed;
	//doesnt actually have to do with speed just text
         cspeed_txt = game.add.text(535,30,"AI: ",{
                font: "23px Arial",
                fill: "#ff0000",
                align: "center" });
	playerSpeed(speed, cspeed);
}

var player_counter = 0, ai_counter = 0, counter = 0;
var numClicks = 0;

function playerSpeed(user, computer)
{
	console.log("User's speed:" +user +", Computer's speed: " +computer);
	if(counter == 0)
	{
	 	random = game.rnd.integerInRange(0, 1);
		if(user == computer)
		{
			if(random == 1)
			{
				chancePlayer("Player goes first!");
				console.log("player will go first");

				//Let the player click a button
				canGo = true;

				player_counter++;
				 if(player.facility == "Science")
			                science();
	        		else
	        		        engineering();
					if(player.facility == "Science")
        				{
						createbtn();
						console.log("creating science btn"); 
					}
        				else
        				{
						console.log("creating eng btn");              
						createEngBtn();
					}


			}
			else
			{
				ai_counter++;
	 			chanceAI("AI goes first!");
				console.log("AI will go first");

				//Make the player wait for the computer to play
				canGo = true;

				if (computer == 3)
	        	        {
				       aisci_attacks();
				}
		                else{
	                	        aieng_attacks();
	                        }

				if(player.facility == "Science")
        			{       
					//createbtn(); 
					console.log("creating science btn"); 
				}
        			else
        			{ 
					console.log("creating eng btn");
			                //createEngBtn();
				}

			}
		}
		else if (user > computer)
		{
			player_counter++;
			chancePlayer("Player's Turn");

			//User can click on a button
			canGo = true;

			console.log("player will go first");
			if(player.facility == "Science")
	                        science();
       	         	else
		                engineering();

		}
		else
		{
			ai_counter++;
		 	chanceAI("AI's turn");
			console.log("AI will go first");

			//Make the user wait for the ai
			canGo = true;

			if (computer == 3)
				aisci_attacks();
			else
				aieng_attacks();
		}

		counter++;
		//truBattle();
	}


}
function incrementMana(player)
{
	if(player == 1) {
		umana = umana + 1;
		umana_txt.setText("Mp : " + umana);
	}
	else {
		cmana += 1;
		cmana_txt.setText("Mp : " + cmana);
	}
}
function trueBattle()
{
	mana_count = mana_count + 1;
	console.log("IN TRUE BATTLE, MANACOUNTER: " + mana_count);
	//message_txt.destroy;
	//report_txt.destroy;
	//player_report_txt.destroy;
	console.log("MANA: "  + mana_count);
	//console.log(!(mana_count%2));
	
	console.log("canGo: " + canGo);

	
	//cgraphics.visible = false;
	//pgraphics.visible = false;
	if( uhp > 0 && chp > 0)
	{
		//cgraphics.visible = true;
		//pgraphics.visible = true;
		if(player_counter < ai_counter)
		{
			 player_counter = player_counter + 2;
			 //chancePlayer("Player's turn");
                        if(player.facility == "Science") {
                                console.log("here");
				science();
				//canGo = true;
			}
                        else {
                                engineering();
				//canGo= true;
			}
		}
		else
		{
			 ai_counter = ai_counter + 2;
                         //chanceAI("AI's turn");
			 if (cspeed == 3){
				console.log("Starting sleep");
				sleep(1000).then (function (){
					console.log("stopped sleeping");
                                	aisci_attacks();
					//canGo=true;
				});
			}
                        else{
				console.log("starting sleep");
				sleep(1000).then (function (){
					console.log("stopped sleeping");
                                	aieng_attacks();
					//canGo=true;
				});
			}
		}
	}
	
	//canGo = true;
	//console.log("canGo: " + canGo);
        if(player.facility == "Science")
        {       
		createbtn(); 
		//canGo = true;
		//console.log("creating science btn"); 
	}
        else
        { 
		console.log("creating eng btn");              
		createEngBtn();
		//canGo = true;
	}
}

function sleep(time) {
	return new Promise(resolve => setTimeout(resolve, time));
}

function resetVariables() {
	player_counter = 0;
	ai_counter = 0;
	counter = 0;
	mana_count = 0;
	numClicks = 0;
}

function sr_action(){
	if(canGo == true && numClicks == 0) {
		//removeBtn();
		numClicks++;
		console.log("Used regular science attack");
		//canGo = false;
		chp = chp - 5;

		if (chp<=0)
		{
			resetVariables();
			game.state.start("win");
		} else
		{
		aihealthBar.width = chp*8;
		chp_txt.setText("Hp : " + chp);
		var aiStat= "Player did 5 damage!";
		//ai_dmg(report);
		doKunai(1);
		canGo = false;
		sleep(2000).then(function()
		{
			ai_dmg(aiStat);
			trueBattle();
		});
		//trueBattle();
		}
	}
}

function ss_action() {
	if(canGo == true && numClicks == 0) {
		if( umana >=3)
		{
			numClicks++;
			canGo = false;
		        chp = chp - 8;
			umana = umana-3;
    			if (chp<=0){
				resetVariables();
				game.state.start("win");
			} else {
			//console.log("user : special");
			aihealthBar.width = chp*8;
        		chp_txt.setText("Hp : " + chp);
			manaBar.width=umana*10;
			umana_txt.setText("Mp : " + umana);
			player_report = "Player used 3 MP";
			player_dmg(player_report);
                        var aiStat = "Player did 8 damage!";
                        sleep(2000).then(function() 
                        {
                        	ai_dmg(aiStat);
				trueBattle();
                        });
                        //ai_dmg(report);
			doExplosion(20);
			//trueBattle();

//			if(cspeed == 3) ai_science(); 
			}
		}
	}
}
function utility_action() {
	if(canGo == true && numClicks == 0) {
		if(umana >= 6 && uhp>0){
			numClicks++;
			canGo = false;
//			txt_color = '#0000ff';
        		uhp = uhp + 10;
			if (uhp>maxhp){uhp = maxhp;}
        		umana =umana-6;
        		//console.log("user: utility");
			healthBar.width = uhp*8;
			uhp_txt.setText("Hp : " + uhp);
			manaBar.width = umana*10;
        	        umana_txt.setText("Mp : " + umana);
        	        player_report = "Player healed 10 HP";
        	        player_dmg(player_report);	
			doHeal(1);
			sleep(2000).then(function() {
				trueBattle();
			});
//			if(cspeed == 3) ai_science(); 
		}
	}
}
function ultimate_action() {
//	dmg_txt.destroy();
	if(canGo == true && numClicks == 0) {
		if(umana >= 14)
		{
			numClicks++;
			canGo = false;
			txt_color = '#ff0000';
  		      	chp = chp - 18;
        		umana =umana-14;
        		//console.log("user: ultimate");

			if (chp<=0){
				resetVariables();
				game.state.start("win");
			} else {
			aihealthBar.width = chp*8; 
			chp_txt.setText("Hp : " + chp);
			manaBar.width = umana*10;
	                umana_txt.setText("Mp : " + umana);
         	       var aiStat = "Player did 18 dmg! ";
         	       //ai_dmg(report);
         	       player_report = "Player used 14 MP";
         	       player_dmg(player_report);

			doAtomicRestructure(20);
	                sleep(1500).then(function()
	                {
                	        ai_dmg(aiStat);
				trueBattle();
        	        });
        	       	//trueBattle();
			}
		}
	}
}

//engineering skill attacks for player --------------------------------------------------------

function er_action(){
	if (canGo == true && numClicks == 0){
	//canGo = false;
	numClicks++;
	chp = chp - 5;
 	console.log("user : reg attack");
	if (chp<=0)
	{
		resetVariables();
		game.state.start("win");
	} 
	else 
	{
		canGo = false;
		aihealthBar.width = chp*8;
 		chp_txt.setText("Hp : " + chp);
		var aiStat= "Player did 5 damage!";
		doSlash(1);
		sleep(1000).then(function() {
		ai_dmg(aiStat);
		trueBattle(); });
	}
	}
}

function es_action() {
	if( umana >=3 && canGo == true && numClicks == 0)
	{
		numClicks++;
		canGo = false;
		//txt_color = '#ff0000';
	        chp = chp - 8;
		umana = umana-3;
		console.log("user : special");
        	if (chp<=0){
			resetVariables();
			game.state.start("win");
		} else {
 			//aihealthBar.width = chp*8;
			//chp_txt.setText("Hp : " + chp);
			//manaBar.width=umana*10;
                        //umana_txt.setText("Mp : " + umana);
		report = "Player did 8 damage!";
		doWater();
		sleep(2000).then(function() {
			ai_dmg(report);
                        aihealthBar.width = chp*8;
                        chp_txt.setText("Hp : " + chp);
                        manaBar.width=umana*10;
                        umana_txt.setText("Mp : " + umana);
			player_report = "Player used 3 MP";
			player_dmg(player_report);
			trueBattle();
		});
		}
	}
}
function eutility_action() {
	if(umana >= 6 && numClicks == 0){
		numClicks++;
//		txt_color = '#0000ff';
        	chp = chp - 10;
        	umana =umana-6;
        	console.log("user: utility");
		if (chp<=0){
			resetVariables();
			game.state.start("win");
		} else {
 			aihealthBar.width = chp*8;
			chp_txt.setText("Hp : " + chp);
			manaBar.width=umana*10;
                        umana_txt.setText("Mp : " + umana);
                report = "Player did 10 damage!"
		doAtomicRestructure(20);
		sleep(2000).then(function() {
			ai_dmg(report);
                	player_report = "Player used 6 MP";
                	player_dmg(player_report);
          		trueBattle();
		});
		}
	}
}
function eultimate_action() {
//	dmg_txt.destroy();

	if(umana >= 14 && numClicks == 0)
	{
		numClicks++;
		//txt_color = '#ff0000';
  	      	chp = chp - 18;
        	umana = umana - 14;
        	console.log("user: ultimate");
 		if (chp<=0){
			resetVariables();
			game.state.start("win");
		} else {
		 	aihealthBar.width = chp*8;
			chp_txt.setText("Hp : " + chp);
			manaBar.width = umana*10;
                        umana_txt.setText("Mp : " + umana);
                report = "Player did 18 damage!";
                doExplosion(20);
		sleep(2000).then(function() {
			ai_dmg(report);
                	player_report = "Player used 14 MP";
                	player_dmg(player_report);
            		trueBattle();
		});
		}
	}
}


//---------------------------AI Attack Functions ---------------------------------------------
function ai_ultimate_action()
{
	//canGo = true;
	numClicks = 0;
	uhp = uhp - 18;
	cmana = cmana - 14;
	if (uhp<=0){
		resetVariables();
		game.state.start("lose");
	} else {
	healthBar.width = uhp*8;
	uhp_txt.setText("Hp : " + uhp);
	aimanaBar.width=cmana*10;
	cmana_txt.setText("Mp : " + cmana);
	player_report = "Computer did 18 damage!";
        player_dmg(player_report);
        report = "Computer used 14 MP";
        ai_dmg(report);
	canGo = true;
	//sleep(2000).then(function(){
	doAtomicRestructure(20);
      	trueBattle();
	//});
	}


}
function ai_utility_action()
{
	numClicks = 0;
	//canGo = true;
	chp = chp + 10;
	if (chp>maxhp){chp = maxhp;}
        cmana = cmana - 6;
	if (uhp<=0){
		resetVariables();
		game.state.start("lose");
	} else {
	healthBar.width = uhp*8;
	uhp_txt.setText("Hp : " + uhp);
	aimanaBar.width=cmana*10;
        cmana_txt.setText("Mp : " + cmana);
        report = "Computer used 6 MP and recovered 10 HP";
        ai_dmg(report);
	//sleep(2000).then(function(){
	doAiHeal(1);
        trueBattle();
	//});
	}

}
function  ai_ss_action()
{
        numClicks = 0;
	//canGo = true;
	uhp = uhp - 8;
        cmana = cmana - 3;
        if (uhp<=0){
		resetVariables();
		game.state.start("lose");
	} else {
	healthBar.width = uhp*8;
	uhp_txt.setText("Hp : " + uhp);
	aimanaBar.width=cmana*10;
        cmana_txt.setText("Mp : " + cmana);
        player_report = "Computer did 8 damage!";
	sleep(1000).then(function(){
        player_dmg(player_report);
	});
        report = "Computer used 3 MP";
        ai_dmg(report);
	canGo = true;
	//sleep(2000).then(function() {
	doAiExplosion(20);
        trueBattle();
	//});
	}


}
function ai_sr_action()
{
        numClicks = 0;
	//canGo = true;
	uhp = uhp - 5;

        if (uhp<=0){
		resetVariables();
		game.state.start("lose");
	} else {
	healthBar.width = uhp*8;
	uhp_txt.setText("Hp : " + uhp);
	aimanaBar.width=cmana*10;
        cmana_txt.setText("Mp : " + cmana);
	player_report = "Computer did 5 damage!";
        sleep(1000).then(function(){
        player_dmg(player_report);
	});
       	//report = "";
       	//ai_dmg(report);
	canGo = true;
	//sleep(2000).then(function(){
	doAiKunai(1);
	trueBattle();
	//});
	}
}



// AI ATTACK FOR ENG  ---------------------------------------------------------------------------

function ai_eultimate_action()
{
        numClicks = 0;
	console.log("Eng AI used ult");
	//canGo = true;
	uhp = uhp - 18;
	cmana = cmana - 14;

	if (uhp<=0){
		resetVariables();
		game.state.start("lose");
	} else {
	healthBar.width = uhp*8;
	uhp_txt.setText("Hp : " + uhp);
	aimanaBar.width=cmana*10;
        cmana_txt.setText("Mp : " + cmana);
	player_report = "Computer did 18 damage!";
	sleep(1000).then(function(){
        player_dmg(player_report);
	});
        report = "Computer used 14 MP";
        ai_dmg(report);
	canGo = true;
	doAiExplosion(20);
  	trueBattle();
	}


}
function ai_eutility_action()
{
        numClicks = 0;
	console.log("Eng AI used utility");
	//canGo = true;
	uhp = uhp - 10;
        cmana = cmana - 6;
	if(uhp<=0) {
		resetVariables();
		game.state.start("lose");
	} else {
	healthBar.width = uhp*8;
	uhp_txt.setText("Hp : " + uhp);
	aimanaBar.width=cmana*10;
        cmana_txt.setText("Mp : " + cmana);
        report = "Computer used 6 MP";
        ai_dmg(report);
	 player_report = "Computer did 10 damage!";
        player_dmg(player_report);
	canGo = true;
	doAtomicRestructure(20);
    	trueBattle();
	}

}
function  ai_es_action()
{
        numClicks = 0;
	console.log("Eng AI used special");
	//canGo = true;
	uhp = uhp - 8;
        cmana = cmana - 3;
        if (uhp<=0){
		resetVariables();
		game.state.start("lose");
	} else {
	healthBar.width = uhp*8;
        uhp_txt.setText("Hp : " + uhp);
	aimanaBar.width=cmana*10;
        cmana_txt.setText("Mp : " + cmana);
	player_report = "Computer did 8 damage!";
	sleep(1000).then(function(){
        player_dmg(player_report);
	});
        report = "Computer used 3 MP";
        ai_dmg(report);
	canGo = true;
	doAiWater();
        trueBattle();
	}

}
function ai_er_action()
{
        numClicks = 0;
	console.log("Eng AI used regular");
	//canGo = true;
	uhp = uhp - 5;
        if (uhp<=0){
		resetVariables();
		game.state.start("lose");
	} else {
	healthBar.width = uhp*8;
        uhp_txt.setText("Hp : " + uhp);
	aimanaBar.width=cmana*10;
        cmana_txt.setText("Mp : " + cmana);
	player_report = "Computer did 5 damage!";
	sleep(1000).then(function(){
        player_dmg(player_report);
	});
	canGo = true;
	doAiSlash();
        trueBattle();

	}
}

/*function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}*/
