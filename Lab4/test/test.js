var app = angular.module('myApp', []); 
var sp = document.getElementById('sp');
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{"todoText":"Clean House", "done":false}, {"todoText":"Buy Groceries", "done":false}, 
        {"todoText":"Wash Dishes", "done":false}, {"todoText":"Cook Dinner", "done":false}];
    $scope.doneList = [{"todoText":"Vaccume", "done":true}];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
        for (var i = 0; i< $scope.todoList.length; i++){
            console.log("todoList: " +$scope.todoList[i].todoText+" "+$scope.todoList[i].done);
        }
    };

    $scope.remove = function() {
        var list = $scope.todoList;
        $scope.todoList = [];
        var done = $scope.doneList;
        $scope.doneList = [];
        angular.forEach(list, function(x) {  
            if (!x.done){
                 $scope.todoList.push(x);
                 console.log("a:"+x.todoText);
             } else {
                 $scope.doneList.push(x);
                 sp.insertAdjacentHTML(beforeend, x.todoText);
                 console.log("b: "+x.todoText);
             }
        });
        for (var j = 0; j<$scope.doneList.length; j++ ){
            console.log("doneList: "+ $scope.doneList[j].todoText+", done: "+ $scope.doneList[j].done);   
        }
    };
    
});

    
/*function onDragEnter(e) {
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
  if (file.type.indexOf("json") == 0) {
    var reader = new FileReader();
    reader.onload = function(e) {
    var text = JSON.parse(e.target.result);
    for (var i = 0; i < text.length; i++){
        if (text[i].done === false){
            todoList += text[i];
        } else {
            oldList += text[i];
        }
    }
    }
    reader.readAsText(file);
}*/