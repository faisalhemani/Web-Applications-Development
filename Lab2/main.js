var cel = false;
var ret, city;
var url, ourl = "http://api.openweathermap.org/data/2.5/weather?q="; 
var url3, ourl3 ="http://api.openweathermap.org/data/2.5/forecast?q=";
var apikey = "&appid=5451741a41420472f861d332c4a999ed" ;
var current = document.getElementById("current");
var hour = document.getElementById("hourly");
var day = document.getElementById("days");
function readBoxCel(){
	ret = document.getElementById("form");
	city = ret.elements["city"].value;
	cel=true;
	current.innerHTML = "";
	hour.innerHTML = "";
	day.innerHTML = "";
	makeURL();
}
function readBoxFar(){
	ret = document.getElementById("form");
	city = ret.elements["city"].value;
	cel=false;
	current.innerHTML = "";
	hour.innerHTML = "";
	day.innerHTML = "";
	makeURL();
}
function makeURL (){
	url = ourl + city + apikey;
	url3 = ourl3 + city+ apikey;
	getInfo();
}
function getInfo() {
	var ourRequest = new XMLHttpRequest();
	var ourRequest2 = new XMLHttpRequest();
        ourRequest.open('GET', url);
		ourRequest2.open ('GET', url3);
        ourRequest.onload = function(){
                if(ourRequest.status>=200 && ourRequest.status<400){
                        var ourData = JSON.parse(ourRequest.responseText);
                        console.log(ourData);
						if (cel == true){
							celcius(ourData);
						}
						if (cel == false){
							farenheit(ourData);
						}
                }
                else{
                        console.log("server error");
                }
		};
		ourRequest.onerror = function(){
			console.log("connection fail");
		}
		ourRequest2.onload = function(){
                if(ourRequest2.status>=200 && ourRequest2.status<400){
                        var ourData2 = JSON.parse(ourRequest2.responseText);
                        console.log(ourData2);
						if (cel == true){
							celcius3(ourData2);
						}
						if (cel == false){
							farenheit3(ourData2);
						}
                }
                else{
                        console.log("server error");
                }
		};
		ourRequest2.onerror = function(){
			console.log("connection fail");
		}
		ourRequest.send();
		ourRequest2.send();
}
function celcius (data) {
	var t = data.main.temp - 273.15;
	var temp = Math.round(t);
	var cond = data.weather[0].description;
	var icon = data.weather[0].icon;
	var w = data.wind.speed*3.6;
	var wind = Math.round(w);
	var hum = data.main.humidity;
    	var iurl = "http://openweathermap.org/img/w/" + icon + ".png";
	var currstring = "<h3>"+data.name+"</h3><h1>"+temp+'</h1><img id="pic"; src='+iurl+"><h4>"+cond+"</h4><h5>Windspeed: "+wind+" km/h</h5><h5>Humidity: "+hum+" %</h5>" ;
	current.insertAdjacentHTML("beforeend", currstring);
}
function farenheit (data) {
	var t = data.main.temp * (9/5) - 459.67;
	var temp = Math.round(t);
	var cond = data.weather[0].description;
	var icon = data.weather[0].icon;
	var w = data.wind.speed*2.236936;
	var wind = Math.round(w);
	var hum = data.main.humidity;
     	var iurl = "http://openweathermap.org/img/w/" + icon + ".png";
	var currstring = "<h3>"+data.name+"</h3><h1>"+temp+'</h1><img id="pic"; src='+iurl+"><h4>"+cond+"</h4><h5>Windspeed: "+wind+" mph</h5><h5>Humidity: "+hum+" %</h5>" ;
	current.insertAdjacentHTML("beforeend", currstring);
}
function celcius3 (data) {
	var hrstring = "<h4>Hourly (by 3 hrs) Forecast</h4>";
	var daystring = "<h4>Five Day Forecast</h4>";
	for (var i=0; i < 12; i++){
		var t = data.list[i].main.temp_max - 273.15;
		var temp = Math.round(t);
		var icon = data.list[i].weather[0].icon;
		var divo = '<div id="hr2">';
		var divc = '</div>';
		var tm = data.list[i].dt_txt;
		var time = tm.substring(10,16);
	     	var iurl = "http://openweathermap.org/img/w/" + icon + ".png";
		hrstring += divo+"<p>"+time+"</p><br/><img src="+iurl+"><br/><p>"+temp+"</p>"+divc;
	}
	hour.insertAdjacentHTML("beforeend", hrstring);
 	var max_temp = new Array();
    	var day_one = new Date(data.list[0].dt*1000).getDay();
    	for (var j=0; j<data.list.length; j++){
		var t = data.list[j].main.temp_max - 273.15;
		var temp = Math.round(t);
		
		var divo = '<div id="hr2">';
		var divc = '</div>';
		var d = new Date(data.list[j].dt*1000).getDay();
	   	if (!(max_temp[d]) || max_temp[d] < temp ){
			max_temp[d] = temp;
		}
	}
    	var j = day_one;
    	while (max_temp[j])
    	{
		var icon = data.list[j].weather[0].icon;
	     	var iurl = "http://openweathermap.org/img/w/" + icon + ".png";		
		if (j >= 6)
	    		j = 0;
		var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		daystring += divo+'<p>'+weekdays[j]+"<br/><img src="+iurl+"><br/>"+max_temp[j]+'</p>' + divc;
		j++;
    	}
	day.insertAdjacentHTML("beforeend", daystring);
}
function farenheit3 (data) {
	var hrstring = "<h4>Hourly (by 3 hrs) Forecast</h4>";
	var daystring = "<h4>Five Day Forecast</h4>";
	
	for (var i=0; i < 12; i++){
		var t = data.list[i].main.temp_max * (9/5) - 459.67;
		var temp = Math.round(t);
		var icon = data.list[i].weather[0].icon;
		var divo = '<div id="hr2">';
		var divc = '</div>';
		var tm = data.list[i].dt_txt;
		var time = tm.substring(10,16);
	     	var iurl = "http://openweathermap.org/img/w/" + icon + ".png";
		hrstring += divo+"<p>"+time+"</p><br/><img src="+iurl+"><br/><p>"+temp+"</p>"+divc;
	}
	hour.insertAdjacentHTML("beforeend", hrstring);
	var max_temp = new Array();
    	var day_one = new Date(data.list[0].dt*1000).getDay();
    	for (var j=0; j<data.list.length; j++){
		var t = data.list[j].main.temp_max * (9/5) - 459.67;
		var temp = Math.round(t);
		
		var divo = '<div id="hr2">';
		var divc = '</div>';
		var d = new Date(data.list[j].dt*1000).getDay();
	   	if (!(max_temp[d]) || max_temp[d] < temp ){
			max_temp[d] = temp;
		}
	}
    	var j = day_one;
    	while (max_temp[j])
    	{
		var icon = data.list[j].weather[0].icon;
	     	var iurl = "http://openweathermap.org/img/w/" + icon + ".png";		
		if (j >= 6)
	    		j = 0;
		var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		daystring += divo+'<p>'+weekdays[j]+"<br/><img src="+iurl+"><br/>"+max_temp[j]+'</p>' + divc;
		j++;
    	}
	day.insertAdjacentHTML("beforeend", daystring);
}
