var facility = "Science";
var reg, special, utility, ultimate;
var hp,mp,speed;

function ai_science_hp()
{
hp = 50;
console.log(hp);
	return hp;
}
function ai_science_mp()
{
        return mp = 25;
}
function ai_science_speed()
{
        return speed = 3;
}


function aisci_attacks(){
	if (uhp <= 18 && cmana >= 14) ai_ultimate_action();
	else if (chp < 25 && cmana >= 6) ai_utility_action();
	else if (uhp <= 8 && cmana >= 3) ai_ss_action();
	else if (uhp <= 5) ai_sr_action();
	else {
	var num = game.rnd.integerInRange(0, 3);
	if (num == 0) ai_sr_action();
	else if (num == 1){
		if (cmana >= 3) ai_ss_action();
		else ai_sr_action();
	} 	
	else if (num == 2){
		if (cmana >= 6) ai_utility_action();
                else if (cmana >= 3) ai_ss_action();
                else ai_sr_action();
	}
	else {
		if (cmana >= 14) ai_ultimate_action();
		else if (cmana >= 6) ai_utility_action();
                else if (cmana >= 3) ai_ss_action();
                else ai_sr_action();

	}
	}
        /*if(cmana >= 14)
        {
                console.log("ultimate");
              ai_ultimate_action();
        }
        else if (cmana >=6)
        {
                console.log("ulitlity");
           ai_utility_action();
        }
        else if (cmana>=3)
        {
                console.log("special");
                ai_ss_action();
        }
        else
        {
                console.log("reg");
              ai_sr_action();
        }*/
	incrementMana(0);
}


