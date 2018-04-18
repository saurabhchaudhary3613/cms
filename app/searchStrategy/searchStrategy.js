'use strict';

angular.module('myApp.searchStrategy', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/searchStrategy', {
      templateUrl: 'searchStrategy/searchStrategy.html',
      controller: 'SearchStrategyCtrl as ctrl'
    });
  }])

  .controller('SearchStrategyCtrl', ['$scope', '$http', delegateFunction]);

function delegateFunction($scope, $http) {
  var vm = this;
  
  $scope.gridOptions = {
  };

  $scope.gridOptions.columnDefs = [
    {field: 'action', displayName: 'Action', width: '6%', cellTemplate: '<a href="#!/editStrategy/{{row.entity.id}}">View/Edit</a>', enableSorting: false, enableFiltering: false},
    { name: 'id', enableCellEdit: false, width: '8%' },
    { name: 'Inactive', enableSorting: true, enableCellEdit: false, displayName: 'In Active', width: '8%' },
    { name: 'category', enableSorting: true, enableCellEdit: false, displayName: 'Category', width: '10%' },
    { name: 'section', enableSorting: true, displayName: 'Section', enableCellEdit: false, width: '10%' },
    { name: 'title', enableSorting: true, displayName: 'Title', width: '10%' },
    { name: 'totaltips', enableSorting: true, displayName: 'Total Tips', width: '10%' },
    { name: 'cluster', enableSorting: true, displayName: 'Cluster', width: '10%' },
    { name: 'household', enableSorting: true, displayName: 'House hold', width: '10%' }

  ];
  $scope.gridOptions.enableSorting =true;
  $scope.gridOptions.enableFiltering =true;

  vm.searchData = [];
   

  
  vm.searchDetails = function () {
    console.log("search details");
    vm.searchData = [
      {
        "id": 'CIF001',
        "Inactive": "Yes",
        "category": "Carney",
        "section": "Enormo",
        "title": true,
        "totaltips": "today drawer",
        "cluster": "cluster",
        "household": "Apartment",
      }, 
      {
        "id": 'CIF002',
        "Inactive": "Yes",
        "category": "Wise",
        "section": "Comveyer",
        "title": false,
        "totaltips": "today drawer",
        "cluster": "cluster",
        "household": "House",
       }
      
    ]; 
    $scope.gridOptions.data = vm.searchData;

  };
  vm.initialize = function () {
    console.log('search Strategy....');

   
  };

  vm.initialize();
}