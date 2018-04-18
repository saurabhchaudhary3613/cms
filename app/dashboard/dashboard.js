'use strict';

angular.module('myApp.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardCtrl as ctrl' 
  });
}])

.controller('DashboardCtrl', ['$scope', '$http', delegateFunction]);

function delegateFunction($scope, $http) {
  var vm = this;
  vm.dasboardInfo = {
    'activeCustomer': 0,
    'inActiveCustomer': 0,
    'appAccessedToday': 0,
    'appAccessedYesterday': 0,
    'appAccessedWeekly': 0,
    'lastUssageFile': 0,
    'lastWeatherFeed': 0,
    'appInstallation': 0,
    'accessDevice': 0

  };
  

  vm.initialize = function () {

    $http({
      method: "GET",
      url: "../data/dashboard.json"
    }).then(function mySuccess(response) {
      var dashboardData = response.data.dashboard;
      console.log(dashboardData);
      vm.dasboardInfo.activeCustomer = dashboardData.activeCustomer;
      vm.dasboardInfo.inActiveCustomer = dashboardData.InactiveCustomer;
      vm.dasboardInfo.appAccessedToday = dashboardData.appAccessed.today;
      vm.dasboardInfo.appAccessedYesterday = dashboardData.appAccessed.yesterday;
      vm.dasboardInfo.appAccessedWeekly = dashboardData.appAccessed.weekly;
      vm.dasboardInfo.lastUssageFile = dashboardData.lastUssageFile;
      vm.dasboardInfo.lastWeatherFeed = dashboardData.lastWeatherFeed;
      vm.dasboardInfo.appInstallation = dashboardData.appInstallation;
      vm.dasboardInfo.accessDevice = dashboardData.accessDevice;

    }, function myError(response) {
      console.log('error');
    });


  };
  
  vm.initialize();

    
    
    
}