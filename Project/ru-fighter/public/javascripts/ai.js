function ai()
{

var random = game.rnd.integerInRange(0, 1);//random = game.rnd.integerInRange(0, 1);

console.log("random: " + random);

	if(random == 1)
	{
		topText(ai_science_hp(), ai_science_mp(), ai_science_speed());
	}
	else
		topText(ai_eng_hp(), ai_eng_mp(), ai_eng_speed());
}
