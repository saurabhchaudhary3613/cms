'use strict';

angular.module('myApp.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardCtrl as ctrl' 
  });
}])

.controller('DashboardCtrl', ['$scope', delegateFunction]);

function delegateFunction($scope) {
  var vm = this;
  vm.name= {
    fname: "saurabh",
    lname: 'Chaudhary'
  };

  vm.dispalyName = function() {
      console.log(vm.name.fname);
  };

  vm.submitData = function() {
      console.log("submit Data");
  };

  vm.initialize = function () {
    vm.dispalyName();
  };
  
  vm.initialize();

    
    
    
}