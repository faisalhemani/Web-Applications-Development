var cgraphics;
var pgraphics;
function c()
{
	cgraphics = game.add.graphics(0,0);
        //cgraphics.visible = true;
        //set a fill and line style
        //cgraphics.beginFill(0x1B58C1, 0.8);
        //cgraphics.lineStyle(2, 0x000000);

        //draw a rectangle
        //cgraphics.drawRect(200,200,650,150);
	
        window.graphics = cgraphics;

}

function playerOrAi(message, player)
{
	pgraphics = game.add.graphics(0,0);
	if (player === true) pgraphics.beginFill(0x1B58C1, 0.8);
        else pgraphics.beginFill(0xAA2A06, 0.8)
        box2 = pgraphics.drawRect(200,200,650,150);
        message_txt2 = game.add.text(220,255,message,{
                font: "40px Arial",
                fill: "#FFFFFF",
                align: "center" });

        game.time.events.add(1000, function()
        {
                game.add.tween(message_txt2).to({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);
                console.log("Fading the box");
                game.add.tween(box2).to({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);
        }, this);
	game.time.events.add(2500, function()
	{
		message_txt2.destroy();
		box2.destroy();
		console.log("Text destroyed!");
		pgraphics.destroy(true);
	}, this);
}

function chanceAI(message)
{
	console.log("Graphics: ", cgraphics);
        cgraphics.beginFill(0xAA2A06, 0.8);
        var box = cgraphics.drawRect(200,200,650,150);
        console.log("Graphics: ", cgraphics);
        message_txt = game.add.text(220,255,message,{
                font: "40px Arial",
                fill: "#FFFFFF",
                align: "center" });

        game.time.events.add(1000, function()
        {
                game.add.tween(message_txt).to({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);
                console.log("Fading the box");
                game.add.tween(box).to({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);
        }, this);
	game.time.events.add(2500, function()
	{
		console.log("Fucking up the box");
		cgraphics.destroy();
	}, this);
}

function chancePlayer(message){

//        console.log("chance function will display who will be playing first");

/*cgraphics = game.add.graphics(0,0);
	cgraphics.visible = true;
        //set a fill and line style
        cgraphics.beginFill(0x000000, 0.8);
        cgraphics.lineStyle(2, 0x0f0f12);

        //draw a rectangle
        cgraphics.drawRect(200,200,650,150);

        window.graphics = cgraphics;
*/
	//cgraphics.visible = true;
	cgraphics.beginFill(0x1B58C1, 0.8);
        var box = cgraphics.drawRect(200,200,650,150);
	message_txt = game.add.text(220,255,message,{
		font: "40px Arial",
		fill: "#FFFFFF",
		align: "center" });

	game.time.events.add(1000, function()
	{
		game.add.tween(message_txt).to({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);
                console.log("Fading the box");
		game.add.tween(box).to({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);
	}, this);
        /*game.time.events.add(2500, function()
        {
                message_txt.destroy();
                box.destroy(true);
                console.log("Text destroyed!");
        }, this);*/	
}
//var report_txt, message_txt;
function ai_dmg(report){

  //      console.log("function will display the dmg the ai has taken");
        //var graphics = game.add.graphics(0,(7*game.width)/8);

	console.log("Ai damage report");

        //set a fill and line style
        //graphics.beginFill(0x1B58C1, 0.8);
        //graphics.lineStyle(2, 0xF2D882);

        //draw a rectangle
        //box=graphics.drawRect(780,245,90,40);

        //window.graphics = graphics;

        var report_txt = game.add.text((3*game.width)/4,(3*game.height)/4,report,{
                font: "20px Arial",
                fill: "#ffffff",
                align: "center" });
        game.time.events.add(0, function()
        {
		game.add.tween(report_txt).to({y: game.height/2}, 1000, Phaser.Easing.Linear.None, true);
                game.add.tween(report_txt).to({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);
                //game.add.tween(box).to({alpha: 0}, 500, Phaser.Easing.Linear.None, true);
        }, this);
	game.time.events.add(1500, function()
        {
		console.log("Destroyed the ai report");
        	report_txt.destroy();                      
        }, this);


}

//var player_report_txt;
function player_dmg(report){

    //    console.log("This will show the dmg player has taken");
        //var graphics = game.add.graphics(game.width/8, game.width/8);

        //set a fill and line style
        //graphics.beginFill(0x000000, 0.8);
        //graphics.lineStyle(2, 0x0f0f12);

        //draw a rectangle
        //box = graphics.drawRect(250,245,90,50);

        //window.graphics = graphics;

        var player_report_txt = game.add.text(40, (game.height*3)/4,report,{
                font: "20px Arial",
                fill: "#ffffff",
                align: "center" });

        game.time.events.add(0, function()
        {
		game.add.tween(player_report_txt).to({y: game.height/2}, 1000, Phaser.Easing.Linear.None, true);
                game.add.tween(player_report_txt).to({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);
                //game.add.tween(box).to({alpha: 0}, 500, Phaser.Easing.Linear.None, true);
        }, this);
        game.time.events.add(1500, function()
        {
		console.log("Destroyed the text");
                //player_report_txt.destroy();
        }, this);

}
//not being used atm
var endgame_txt;
function endgame(report){

      //  console.log("This will show the dmg player has taken");
        var graphics = game.add.graphics(0,0);

        //set a fill and line style
        graphics.beginFill(0x000000, 0.8);
        graphics.lineStyle(2, 0x0f0f12);

        //draw a rectangle
        graphics.drawRect(250,245,90,50);

        window.graphics = graphics;

        endgame_txt = game.add.text(260,255,report,{
                font: "20px Arial",
                fill: "#ffffff",
                align: "center" });

}








/*
function topText(ai_hp, ai_mp, ai_speed)
{

//rectangle box

	var graphics = game.add.graphics(10,10);

	//set a fill and line style
	graphics.beginFill(0x000000, 0.8);
	graphics.lineStyle(2, 0x0f0f12);

	//draw a rectangle
	graphics.drawRect(90,10,860,40);

	window.graphics = graphics;

//Text

	var hp = "50";
	var hplbl = game.add.text(110,30,"Hp : " + hp,{
		font: "20px Arial",
		fill: "#ff0000",
		align: "center" });

 	var mp = "25";
        var mplbl = game.add.text(260,30,"Mp : " + mp,{
                font: "20px Arial",
                fill: "#ff0000",
                align: "center" });

	if(player.facility == "Science")
 		var speed = "3";
	else
		speed = "2";

var speedlbl = game.add.text(410,30,"Speed : " + speed,{
                font: "20px Arial",
                fill: "#ff0000",
                align: "center" });


 	var chp = ai_hp;
        var chplbl = game.add.text(560,30,"Hp : " + chp,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });


 	var cmp = ai_mp;
        var cmplbl = game.add.text(710,30,"Hp : " + cmp,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });

        var cspeed = ai_speed;
        var cspeedlbl = game.add.text(860,30,"Speed : " + cspeed,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });

playerSpeed(speed, cspeed);
}
*/
