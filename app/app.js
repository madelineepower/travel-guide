"use strict";

var app = angular.module("TravelGuideApp", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.
  when('/', {
    templateUrl: 'partials/books.html',
    controller: 'bookCtrl'
  }).
  otherwise('/');
});
