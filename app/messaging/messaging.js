'use strict';

angular.module('myApp.messaging', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/messaging', {
    templateUrl: 'messaging/messaging.html',
    controller: 'MessagingCtrl as ctrl' 
  });
}])

.controller('MessagingCtrl', ['$scope', delegateFunction]);

function delegateFunction($scope) {
  var vm = this;
  

  vm.initialize = function () {
    console.log('messaging...')
  };
  
  vm.initialize();

    
    
    
}