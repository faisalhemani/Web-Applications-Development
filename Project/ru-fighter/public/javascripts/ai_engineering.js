var hp, mp, speed;

function ai_eng_hp()
{
hp = 50;
console.log(hp);
        return hp;
}
function ai_eng_mp(){
 mp = 25;
return mp;
}

function ai_eng_speed(){
speed = 2;
return speed;
}


function aieng_attacks(){
	
	if(uhp <= 18 && cmana >= 14) ai_eultimate_action();
	else if (hp <= 10 && cmana >= 6) ai_eutility_action();
	else if (uhp <= 8 && cmana >= 3) ai_es_action();
	else if (uhp <= 5) ai_er_action();
	else{
	var num = game.rnd.integerInRange(0, 3);
        if (num == 0) ai_er_action();
        else if (num == 1){
                if (cmana >= 3) ai_es_action();
                else ai_er_action();
        }
        else if (num == 2){
                if (cmana >= 6) ai_eutility_action();
                else if (cmana >= 3) ai_es_action();
                else ai_er_action();
        }
        else if (num == 3){
                if (cmana >= 14) ai_eultimate_action();
                else if (cmana >= 6) ai_eutility_action();
                else if (cmana >= 3) ai_es_action();
                else ai_er_action();

        }
	}
	/*if(cmana >= 14)
	{
	 	console.log("ultimate");
	      ai_eultimate_action();
	}
	else if (cmana >=6)
	{
		console.log("ulitlity");
        	ai_eutility_action();
	}
	else if (cmana>=3)
	{
		console.log("special");
	      ai_es_action();
	}
	else
	{
		console.log("reg");
		ai_er_action();
	}*/
	incrementMana(0);
}





