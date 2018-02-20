'use strict';

angular.module('myApp.analytics', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/analytics', {
    templateUrl: 'analytics/analytics.html',
    controller: 'AnalyticsCtrl as ctrl' 
  });
}])

.controller('AnalyticsCtrl', ['$scope', delegateFunction]);

function delegateFunction($scope) {
  var vm = this;
  

  vm.initialize = function () {
    console.log('Analytics...');
  };
  
  vm.initialize();

    
    
    
}