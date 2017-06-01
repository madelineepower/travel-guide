"use strict";

app.controller("bookCtrl", function($scope, guideFactory){
  console.log("hi controller");
  guideFactory.getBooks()
  .then(function(itemCollection){
    $scope.guides = itemCollection;
    console.log("here are the books", $scope.guides);
  });
});
