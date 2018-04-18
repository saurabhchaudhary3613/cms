'use strict';

angular.module('myApp.viewStrategy', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewStrategy', {
    templateUrl: 'viewStrategy/viewStrategy.html',
    controller: 'ViewStrategyCtrl as ctrl' 
  });
}])

.controller('ViewStrategyCtrl', ['$scope', '$http' , delegateFunction]);

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
    { name: 'household', enableSorting: true, displayName: 'House hold', width: '10%' },
    { name: 'approvedBy', enableSorting: true, displayName: 'Approved By', width: '10%' },
    { name: 'approvedOn', enableSorting: true, displayName: 'Approved On', width: '10%' },
    { name: 'createdBy', enableSorting: true, displayName: 'Created By', width: '10%' },
    { name: 'createdOn', enableSorting: true, displayName: 'Created On', width: '10%' }

  ];
  $scope.gridOptions.enableSorting =true;
  $scope.gridOptions.enableFiltering =true;


  $scope.gridOptions.data = [
    {
      "id": 'CIF001',
      "Inactive": "Yes",
      "category": "Carney",
      "section": "Enormo",
      "title": true,
      "totaltips": "today drawer",
      "cluster": "cluster",
      "household": "Apartment",
      "approvedBy": "test user",
      "approvedOn": "09-03-2018",
      "createdBy": "test user",
      "createdOn": "05-03-2018"
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
      "approvedBy": "test user",
      "approvedOn": "09-03-2018",
      "createdBy": "test user",
      "createdOn": "05-03-2018"
    }, 
    {
      "id": 'CIF003',
      "Inactive": "No",
      "category": "Waters",
      "section": "Fuelton",
      "title": false,
      "totaltips": "today drawer",
      "cluster": "cluster",
      "household": "House",
      "approvedBy": "test user",
      "approvedOn": "09-03-2018",
      "createdBy": "test user",
      "createdOn": "05-03-2018"
    },
    {
      "id": 'CIF004',
      "Inactive": "No",
      "category": "Waters",
      "section": "Fuelton",
      "title": false,
      "totaltips": "today drawer",
      "cluster": "cluster",
      "household": "Apartment",
      "approvedBy": "test user",
      "approvedOn": "09-03-2018",
      "createdBy": "test user",
      "createdOn": "05-03-2018"
    },
    {
      "id": 'CIF005',
      "Inactive": "No",
      "category": "Waters",
      "section": "Fuelton",
      "title": false,
      "totaltips": "today drawer",
      "cluster": "cluster",
      "household": "House",
      "approvedBy": "test user",
      "approvedOn": "09-03-2018",
      "createdBy": "test user",
      "createdOn": "05-03-2018"
    }
    
  ];
  
  vm.initialize = function () {
    console.log('view Strategies..');
  };
  
  vm.initialize();

    
    
    
}