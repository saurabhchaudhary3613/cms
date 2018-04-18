'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp',  [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.dashboard',
  'myApp.customer',
  'myApp.viewStrategy',
  'myApp.addStrategy',
  'myApp.editStrategy',
  'myApp.searchStrategy',
  'myApp.viewQuestion',
  'myApp.addQuestion',
  'myApp.editQuestion',
  'myApp.searchQuestion',
  'myApp.messaging',
  'myApp.tracking',
  'myApp.analytics',
  'myApp.version',
  'ui.grid'
]);
myApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);
// myApp.factory('serviceId', function() {
//   var loginDate = new Date();
//   // factory function body that constructs shinyNewServiceInstance
//   return console.log(loginDate);
// });

