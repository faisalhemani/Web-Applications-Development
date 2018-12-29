var dropbox = document.getElementById("map").addEventListener("drop", false);
var nLat = "" , nLong = "", setLat = "", setLong = "";
var setpos = false;
var tor = {lat: 43.6525, lng: -79.381667};
var panel = document.getElementById('panel');
var curr = document.getElementById('curr');
var input = document.getElementById('input');
var dis = document.getElementById('dis');
panel.style.display = "none";
var worker; 

window.onload = function () {
  alert('This app works well on microsoft edge. Chrome restricts Webworker');
  alert('You may drag and drop location file anywhere on the map');
  alert('location file must be in the format "latitude, longitude" without quotes');
}
function initMap() {
  var infowindow = new google.maps.InfoWindow;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: tor
  });
  var marker = new google.maps.Marker({
    position: tor,
    map: map
  });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      marker.setPosition(pos);
      map.setCenter(pos);
      var geocoder = new google.maps.Geocoder;
      var infowindow = new google.maps.InfoWindow;
      geocoder.geocode({'location': pos}, function(results, status) {
          if (status === 'OK') {
            if (results[1]) {
              infowindow.setContent(results[1].formatted_address);
              infowindow.open(map, marker);
              panel.style.display = 'block';
              curr.innerHTML = results[1].formatted_address;
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
    }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
  } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }


  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  }

  var geocoder = new google.maps.Geocoder();
  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map, marker);
  });
  var center;
  function calculateCenter() {
    center = map.getCenter();
  }
  google.maps.event.addDomListener(map, 'idle', function() {
    calculateCenter();
  });
  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(center);
  }); 
}

function geocodeAddress(geocoder, resultsMap, marker) {
  var bruhv = window.setLat;
  var bruhv2 = window.setLong;
  console.log("Coordinates are: " +bruhv +", " +bruhv2);
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
   if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      marker.setPosition(results[0].geometry.location);
      var bruh = window.setLat;
      console.log(bruh);
      console.log(setLat, setLong);
      setLat = marker.getPosition().lat();
      setLong = marker.getPosition().lng();
      setpos = true;
      var geocoder = new google.maps.Geocoder;
      var infowindow = new google.maps.InfoWindow;
      var loc = {lat: parseFloat(setLat), lng: parseFloat(setLong)};
      geocoder.geocode({'location': loc}, function(results, status) {
          if (status === 'OK') {
            if (results[1]) {
              infowindow.setContent(results[1].formatted_address);
              infowindow.open(map, marker);
              panel.style.display = 'block';
              curr.innerHTML = results[1].formatted_address;
	      collect(setLat, setLong);
	      update();
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}


function onDragEnter(e) {
  e.preventDefault();
  document.getElementById("map").style.borderColor = "#000000";
  document.getElementById("map").style.color = "#000000";
}

function onDragLeave(e) {
  document.getElementById("map").style.backgroundColor = "#ffffff";
  document.getElementById("map").style.color = "#ccc";
  document.getElementById("map").style.borderColor = "#ccc";
}

function allowDrop(e) {
    e.preventDefault();
  document.getElementById("map").style.backgroundColor = "#9ad3de";
}

function drop(e) {
  e.preventDefault();
  document.getElementById("map").style.backgroundColor = "#ffffff";
  document.getElementById("map").style.color = "#ccc";
  document.getElementById("map").style.borderColor = "#ccc";
  var file = e.dataTransfer.files[0];
  if (file.type.indexOf("text") == 0) {
    var reader = new FileReader();
    reader.onload = function(e) {
    var text = e.target.result;
    text.trim();
    var split;
    for (var i = 0; i < text.length; i++) {
      if (text[i] === ','){
        split  = i;
      }
    }
    for (var j = 0; j < text.length; j++) {
      if (j < split) nLat += text[j];
      if (j > split) nLong += text[j];
    }
    if (isNaN(parseInt(nLong)) || isNaN(parseInt(nLong))) {
      nLat = "" ;
      nLong = "";
      alert("Invalid File Input");
    }
    console.log(text);
    console.log(nLat);
    console.log(nLong);
    }
    reader.readAsText(file);
    update();
  } else {
      alert("Invalid File Input");
  }
}

function update () {
 if (((parseFloat(nLat)) > 85.0511 || ((parseFloat(nLat)) < -85.0511)) || ((parseFloat(nLong) > 180)) || ((parseFloat(nLong) < -180))) 
  {
    alert("Invalid Latitude and longitude values");
  }

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: tor
  });
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      if (setpos === false){
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        collect(position.coords.latitude, position.coords.longitude);
      } else {
        var pos = {
          lat: setLat,
          lng: setLong
        };
        collect(setLat, setLong);
      }
	console.log("pos is" + pos);
      var marker = new google.maps.Marker({
        position: pos,
        map: map
      });
     if (nLat != "" | nLong != "") {
      var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(nLat, nLong),
        map: map
      });
      bounds.extends(marker2.getPosition());
      console.log("marker2 set");
     }
         
      var bounds = new google.maps.LatLngBounds();
      bounds.extend(marker.getPosition());
     // bounds.extend(marker2.getPosition());
      map.fitBounds(bounds);
      var route = new google.maps.Polyline({
        path: 
          [
            new google.maps.LatLng(pos), 
            new google.maps.LatLng(nLat, nLong)
          ],
        strokeColor: "#000000",
        strokeWeight: 1,
        map: map
      });
      var geocoder = new google.maps.Geocoder;
      var infowindow = new google.maps.InfoWindow;
      var infowindow1 = new google.maps.InfoWindow;
      var pos2 = {lat: parseFloat(nLat), lng: parseFloat(nLong)};
      geocoder.geocode({'location': pos}, function(results, status) {
          if (status === 'OK') {
            if (results[1]) {
              infowindow.setContent(results[1].formatted_address);
              infowindow.open(map, marker);
              panel.style.display = 'block';
              curr.innerHTML = results[1].formatted_address;
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
      geocoder.geocode({'location': pos2}, function(results, status) {
          if (status === 'OK') {
            if (results[1]) {
              infowindow1.setContent(results[1].formatted_address);
              infowindow1.open(map, marker2);
              panel.style.display = 'block';
              input.innerHTML = results[1].formatted_address;
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
    }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
  } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.');
    }
}

function collect (clat, clong) {
  startWork(clat, clong, nLat, nLong);
}

function startWork(clat, clong, nLat, nLong) {
  worker = new Worker("wworker.js");
  console.log('works');
  worker.postMessage({
    'clat': clat,
    'clong': clong,
    'nLat': nLat,
    'nLong': nLong
  });
  worker.onmessage = function(e) {
    dis.innerHTML = e.data + " km";
  }
}


