'use strict';

angular.module('myApp.addStrategy', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addStrategy', {
    templateUrl: 'addStrategy/addStrategy.html',
    controller: 'AddStrategyCtrl as ctrl' 
  });
}])

.controller('AddStrategyCtrl', ['$scope', delegateFunction]);

function delegateFunction($scope) {
  var vm = this;
  

  vm.initialize = function () {
    console.log("addStrategy...New")
  };
  
  vm.initialize();

    
    
    
}