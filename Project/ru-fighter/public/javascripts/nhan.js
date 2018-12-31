function nhanclass()
{
	nhan_bg = game.add.sprite(0,0,'nhan_bg');
        nhan_bg.scale.setTo(0.9,0.9);
//	console.log("Background: " + nhan_bg);

        //character
        nhan = game.add.sprite(780,180,'nhan');
//	console.log("Nhan: " + nhan);
        nhan.scale.setTo(0.25,0.25);
	characterBounce(nhan);
}
