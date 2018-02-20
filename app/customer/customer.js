'use strict';

angular.module('myApp.customer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/customer', {
    templateUrl: 'customer/customer.html',
    controller: 'CustomerCtrl as ctrl' 
  });
}])

.controller('CustomerCtrl', ['$scope', delegateFunction]);

function delegateFunction($scope) {
  var vm = this;
  // vm.name= {
  //   fname: "saurabh",
  //   lname: 'Chaudhary'
  // };

  // vm.dispalyName = function() {
  //     console.log(vm.name.fname);
  // };

  // vm.submitData = function() {
  //     console.log("submit Data");
  // };

  vm.initialize = function () {
    //vm.dispalyName();
  };
  
  vm.initialize();
 
}