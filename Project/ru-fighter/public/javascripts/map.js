var kerr;
var lake;
var vic;
var eng;
var slc;
var bridge;
var classroom;
var currLocation;

var nhanMap = false;

var map = {
        preload: function () {
                console.log("MAP");
        },
        create: function () {
                // this is just to test stuff
                /*game.background = this.game.add.sprite(0,0, 'bg');
                var character = game.add.sprite(0,0,'faisal');
                character.anchor.set(0.5);
                character.inputEnabled = true;
                character.scale.setTo(0.65);*/

		//createSlash();

		this.map = this.add.image(0, 0, "map");
		//this.map.scale.setTo(1);
		this.map.width = 1100;
		this.map.height = 600;
/*
		for(var i = 0; i < 7; i++) {
			var town = this.add.image(this.rnd.integerInRange(50, this.game.world.width - 50), game.rnd.integerInRange(50, this.game.world.height - 50), "town");
			town.anchor.setTo(0.5);
			town.inputEnabled = true;
			town.events.onInputDown.add(selectTown,this);
			town.events.onInputUp.add(confirmTown, this);
		}
*/

 			kerr = this.add.image(730,210, "town");
                        kerr.anchor.setTo(0.5);
			kerr.scale.setTo(0.5,0.5);
                        kerr.inputEnabled = true;
                        kerr.events.onInputDown.add(selectKerr,this);
                        kerr.events.onInputUp.add(confirmKerr, this);
			kerr.events.onInputOver.add(hover, this);
			kerr.events.onInputOut.add(endHover, this);

 			lake = this.add.image(540, 330, "town");
                        lake.anchor.setTo(0.5);
			lake.scale.setTo(0.5,0.5);
                        lake.inputEnabled = true;
                        lake.events.onInputDown.add(selectLake,this);
                        lake.events.onInputUp.add(confirmLake, this);
			lake.events.onInputOver.add(hover, this);
			lake.events.onInputOut.add(endHover, this);

 			vic = this.add.image(490, 295, "town");
                        vic.anchor.setTo(0.5);
			vic.scale.setTo(0.5,0.5);
                        vic.inputEnabled = true;
                        vic.events.onInputDown.add(selectVic,this);
                        vic.events.onInputUp.add(confirmVic, this);
			vic.events.onInputOver.add(hover, this);
			vic.events.onInputOut.add(endHover, this);

			eng = this.add.image(820, 280, "town");
                        eng.anchor.setTo(0.5);
                        eng.scale.setTo(0.5,0.5);
                        eng.inputEnabled = true;
                        eng.events.onInputDown.add(selectEng,this);
                        eng.events.onInputUp.add(confirmEng, this);
			eng.events.onInputOver.add(hover, this);
			eng.events.onInputOut.add(endHover, this);

                        slc = this.add.image(380, 330, "town");
                        slc.anchor.setTo(0.5);
                        slc.scale.setTo(0.5,0.5);
                        slc.inputEnabled = true;
                        slc.events.onInputDown.add(selectSLC,this);
                        slc.events.onInputUp.add(confirmSLC, this);
			slc.events.onInputOver.add(hover, this);
			slc.events.onInputOut.add(endHover, this);

 			bridge = this.add.image(790, 240, "town");
                        bridge.anchor.setTo(0.5);
                        bridge.scale.setTo(0.5,0.5);
                        bridge.inputEnabled = true;
                        bridge.events.onInputDown.add(selectBridge,this);
                        bridge.events.onInputUp.add(confirmBridge, this);
			bridge.events.onInputOver.add(hover, this);
			bridge.events.onInputOut.add(endHover, this);

 			classroom = this.add.image(530, 265, "town");
                        classroom.anchor.setTo(0.5);
                        classroom.scale.setTo(0.5,0.5);
                        classroom.inputEnabled = true;
                        classroom.events.onInputDown.add(selectClass,this);
                        classroom.events.onInputUp.add(confirmClass, this);
			classroom.events.onInputOver.add(hover, this);
			classroom.events.onInputOut.add(endHover, this);

			var style = { font: "32px Arial"};

			currLocation = game.add.text(75,10, "", style);

		this.input.onUp.add(clickMap, this);
                //if (faisal)
                //      this.state.start('faisal');
                //else if (alex)
                //      this.state.start('alex');
                // and therest of the people like that as well
        },
	update: function() {
		this.input.onUp.add(clickMap, this);
		loopMusic();
		//console.log("canGo: " + canGo);
		animateAtomicRestructure();
		if (typeof particles.explosions.setAll != 'undefined') {
			//console.log(particles.emitters);
			animateExplosion();
		}
		if (typeof particles.kunai.setAll != 'undefined') {
			//console.log("Here 2");
			animateKunai();
		}
		if(typeof particles.slash.setAll != 'undefined') {
			animateSlash();
		}
		if(typeof particles.water.setAll != 'undefined') {
			animateWater();
		}
		if(typeof particles.laserBeam.setAll != 'undefined') {
			animateLaserBeam();
		}
		if(typeof particles.aiExplosions.setAll != 'undefined') {
			animateAiExplosion();
		}
                if(typeof particles.aiKunai.setAll != 'undefined') {
                        animateAiKunai();
                }
                if(typeof particles.aiSlash.setAll != 'undefined') {
                        animateAiSlash();
                }
                if(typeof particles.aiWater.setAll != 'undefined') {
                        animateAiWater();
                }
                //if(typeof particles.aiLaserBeam.setAll != 'undefined') {
                        //animateAiLaserBeam();
                //}
                if(typeof particles.aiHeal.setAll != 'undefined') {
                        animateAiHeal();
                }
		//if(typeof particles.heal.setAll != 'underfined') {
		//	animateHeal();
		//}
	}
};

var candidateVic;

function hover(sprite, pointer) {
	if(sprite == vic) {
		currLocation.setText("Victoria Building");
		updateTextLocation(pointer);
	}
	else if(sprite == lake) {
		currLocation.setText("Lake Devo");
		updateTextLocation(pointer);
	}
	else if(sprite == slc) {
		currLocation.setText("Student Learning Centre");
		updateTextLocation(pointer);
	}
	else if(sprite == eng) {
		currLocation.setText("Eng Building");
		updateTextLocation(pointer);
	}
	else if(sprite == bridge) {
		currLocation.setText("Bridge");
		updateTextLocation(pointer);
	}
	else if(sprite == kerr) {
		currLocation.setText("Kerr Hall");
		updateTextLocation(pointer);
	}
	else if(sprite == classroom) {
		//Change this plz
		currLocation.setText("Hell on Earth");
		updateTextLocation(pointer);
	}
}

function endHover(sprite, pointer) {
	currLocation.setText("");
}

function updateTextLocation(pointer) {
	currLocation.x = pointer.x;
        currLocation.y = pointer.y + 20;
}

function clickMap() {
	//console.log("Clicked the map");
}

function selectVic(sprite, pointer) {
	candidateVic = sprite;
}

function confirmVic(sprite, pointer) {
	if(candidateVic == sprite) {
		//alert("Vic selected");
		clearMap();
		switchMusic(mapTheme, battleMusic);
		victoria_lane();
		battle_functions();
	}
}

var candidateLake;

function selectLake(sprite, pointer) {
        candidateLake = sprite;
}

function confirmLake(sprite, pointer) {
        if(candidateLake == sprite) {
                //alert("Lake");
		clearMap();
		switchMusic(mapTheme, battleMusic);
		devo();
                battle_functions();

        }
}

var candidateEng;

function selectEng(sprite, pointer) {
        candidateEng = sprite;
}

function confirmEng(sprite, pointer) {
        if(candidateEng == sprite) {
                //alert("Eng");
		clearMap();
		switchMusic(mapTheme, battleMusic);
		outside_eng();
                battle_functions();
        }
}
var candidateSLC;

function selectSLC(sprite, pointer) {
        candidateSLC = sprite;
}

function confirmSLC(sprite, pointer) {
        if(candidateSLC == sprite) {
                //alert("SLC");
		clearMap();
		switchMusic(mapTheme, battleMusic);
		outside_slc();
                battle_functions();
        }
}


var candidateTown;

function selectTown(sprite, pointer) {
        candidateTown = sprite;
}

function confirmTown(sprite, pointer) {
        if(candidateTown == sprite) {
                //alert("Town");
        }
}

var candidateBridge;

function selectBridge(sprite, pointer) {
        candidateBridge = sprite;
}

function confirmBridge(sprite, pointer) {
        if(candidateBridge == sprite) {
                //alert("Bridge");
		clearMap();
		switchMusic(mapTheme, battleMusic);
		bridge_map();
                battle_functions();
        }
}
var candidateKerr;

function selectKerr(sprite, pointer) {
        candidateKerr = sprite;
}

function confirmKerr(sprite, pointer) {
        if(candidateKerr == sprite) {
                //alert("Kerr");
		clearMap();
		switchMusic(mapTheme, battleMusic);
		kerr_hall();
                battle_functions();
        }
}

var candidateClass;

function selectClass(sprite, pointer) {
        candidateClass = sprite;
}

function confirmClass(sprite, pointer) {
        if(candidateClass == sprite) {
//                alert("Class: Nhan's ckass not made yet");
                //kerr_hall();
	clearMap();
	switchMusic(mapTheme, nhanMusic);
	nhanMap = true;
	nhanclass();
        battle_functions();

      }
}

/*
Destorys the map images so that they can no longer be clicked on
from other states
*/
function clearMap() {
	vic.destroy();
	kerr.destroy();
	lake.destroy();
	eng.destroy();
	slc.destroy();
	bridge.destroy();
	classroom.destroy();
}
