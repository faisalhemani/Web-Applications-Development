var player = new Object();

//Basic player prototype WIP
/*
var player = {
	name,
	level,
	hp,
	maxhp,
	exp,
	ramz,
	hair,
	face,
	eyes,
	skin,
	flacility,
	wins,
	loss
};
*/

function storePlayerData()
{	
	var name_field = document.getElementById("name_field");
	//var facility = document.getElementById("facility_field");
	
	player.name = name_field.value;
	player.hp = 50;
	alert("Player name stored: "+player.name);	
	bridgeJongo();
	//player.facility = facility.value;					
}

function loadJSON()
{
	var request = new XMLHttpRequest();
	request.open('GET', 'player.json', true);
	request.onload = function()
	{
		if(request.status>=200 && request.status<400)
		{
			var ourData = JSON.parse(request.responseText);
			parseJSON(request.responseText);
		} 
		else
		{
			console.log("server error");
		}
	}
}

function bridgeJongo()
{
	var request = new XMLHttpRequest();
	request.open('GET', 'http://cake-net.zapto.org:8081/response.json', true);
	alert("request sent");
	request.onload = function()
	{
		//if (request.status>=200 && request.status<400)
		{
			var ourData = JSON.parse(request.responseText);
			alert(request.responseText);
		}
		//else
		{
			//console.log("server error");
		}
	}
	request.send();
}

/*
function parseJSON()
{

}
*/

