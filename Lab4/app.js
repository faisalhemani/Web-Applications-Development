
var app = angular.module('myApp', []); 
var sp = document.getElementById('sp');
var ob, text;
var to = [];
var done = [];
var ov = [];
window.onload = function () { //make this window.onload
	var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', "test/test.json");
        ourRequest.onload = function(){
                if(ourRequest.status>=200 && ourRequest.status<400){
                    text = JSON.parse(ourRequest.responseText);
                    console.log(text);
		    for (var i = 0; i < text.length; i++){
            		if (text[i].done === false){
                    		to.push(text[i]);
				ov.push(text[i]);
                    		console.log("WORKSS");
            		} else {
                    		done.push(text[i]);
				ov.push(text[i]);
            		}
   		    }
			to.forEach(function (x) {
        			console.log("to: todoList: " +x.todoText+" "+x.done);
  			});
  			done.forEach(function(x) {
        			console.log("done: todoList: " +x.doneText+" "+x.done);
  			});

                } else{
                        console.log("server error");
                  }
		};
		ourRequest.onerror = function(){
			console.log("connection fail");
		}
		ourRequest.send();
		alert("Please wait a while before closing this message...it takes a while to load ...if not then you may need to reload/refresh multiple times to make content appear...no idea why");
}
app.controller('todoCtrl', function($scope) {
   // $scope.todoList = [{"todoText":"Clean House", "done":false}, {"todoText":"Buy Groceries", "done":false}, 
   //     {"todoText":"Wash Dishes", "done":false}, {"todoText":"Cook Dinner", "done":false}];
   // $scope.doneList = [{"todoText":"Vaccume", "done":true}];
    $scope.view = "view.html";
   // var scope = angular.element($("#outer")).scope();
   $scope.todoList = to;
   $scope.doneList = done;
   $scope.gawd = ov;
    $scope.todoAdd = function() {
	var exists = false;
	for (var x = 0; x < $scope.todoList.length; x++){
		if ($scope.todoList[x].todoText === $scope.todoInput){
			exists = true;
		}
	}
	if (!exists){
		$scope.todoList.push({"todoText":$scope.todoInput, "description": $scope.desInput, "done":false});
		//$scope.gawd.push({"todoText":$scope.todoInput, "description": $scope.desInput, "done":false});
		console.log($scope.gawd);
	} else {
		alert("Item is already on list");
	}
        $scope.todoInput = "";
	$scope.desInput = "";
    };

    $scope.remove = function() {
        var list = $scope.todoList;
        $scope.todoList = [];
        list.forEach(function(x) {  
            if (!x.done){
                 $scope.todoList.push(x);
		// $scope.gawd.push(x);
             } else {
                 $scope.doneList.push(x);
		console.log($scope.gawd[$scope.gawd.length-1]);
		//console.log("Bruh" ,$scope.gawd[x].done);
		 //$scope.gawd[x].done =  true;
		//console.log("broo: " $scope.gawd[x].done);
             }
        });
    };
});

function onDragEnter(e) {
  e.preventDefault();
  document.getElementById("dropzone").style.borderColor = "#000000";
  document.getElementById("dropzone").style.color = "#000000";
}

function onDragLeave(e) {
  document.getElementById("dropzone").style.backgroundColor = "#ffffff";
  document.getElementById("dropzone").style.color = "#ccc";
  document.getElementById("dropzone").style.borderColor = "#ccc";
}

function allowDrop(e) {
  e.preventDefault();
  document.getElementById("dropzone").style.backgroundColor = "#9ad3de";
}

function drop(e) {
  e.preventDefault();
  document.getElementById("dropzone").style.backgroundColor = "#ffffff";
  document.getElementById("dropzone").style.color = "#ccc";
  document.getElementById("dropzone").style.borderColor = "#ccc";
  var file = e.dataTransfer.files[0];
  var reader = new FileReader();
  //if (!file.type.match('application/jsonp')) {
	//alert("invalid type");
  //} else {
  	console.log("WORKSS");
  	reader.onload = function(e) {
  	text = JSON.parse(e.target.result);
  	console.log("WORKSS!!!!!");
  	for (var i = 0; i < text.length; i++){
        	if (text[i].done === false){
            		to.push(text[i]);
			//send();
			angular.element(document.getElementById('todoCtrl')).scope().todoAdd().$apply();
			//angular.element(document.getElementById('todoCtrl')).injector().todoAdd('$rootScope');
        	} else {
            		done.push(text[i]);
        	}
    	}
  //}
  to.forEach(function (x) {
 	console.log("todoList: " +x.todoText+" "+x.done); 
  });
  done.forEach(function(x) {
	console.log("todoList: " +x.doneText+" "+x.done);
  });

 }
 reader.readAsText(file);
}


