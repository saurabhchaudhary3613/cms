'use strict';

angular.module('myApp.tracking', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tracking', {
    templateUrl: 'tracking/tracking.html',
    controller: 'TrackingCtrl as ctrl' 
  });
}])

.controller('TrackingCtrl', ['$scope', delegateFunction]);

function delegateFunction($scope) {
  var vm = this;
  

  vm.initialize = function () {
    console.log('Tracking...');
  };
  
  vm.initialize();

    
    
    
}