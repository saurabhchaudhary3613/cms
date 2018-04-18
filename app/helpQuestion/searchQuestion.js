'use strict';

angular.module('myApp.searchQuestion', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/searchQuestion', {
      templateUrl: 'helpQuestion/searchQuestion.html',
      controller: 'SearchQuestionCtrl as ctrl'
    });
  }])

  .controller('SearchQuestionCtrl', ['$scope', '$http', delegateFunction]);

function delegateFunction($scope, $http) {
  var vm = this;
  
  $scope.gridOptions = {
  };

  $scope.gridOptions.columnDefs = [
    {field: 'action', displayName: 'Action', width: '6%', cellTemplate: '<a href="#!/editQuestion/{{row.entity.id}}">View/Edit</a>', enableSorting: false, enableFiltering: false},
    { name: 'id', enableCellEdit: false, width: '8%' },
    { name: 'category', enableSorting: true, enableCellEdit: false, displayName: 'Category', width: '10%' },
    { name: 'question', enableSorting: true, enableCellEdit: false, displayName: 'Question', width: '10%' },
    { name: 'answer', enableSorting: true, enableCellEdit: false, displayName: 'Answer', width: '10%' },
    { name: 'Followups', enableSorting: true, enableCellEdit: false, displayName: 'Follow ups', width: '10%' },
    { name: 'Inactive', enableSorting: true, enableCellEdit: false, displayName: 'In Active', width: '8%' },

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
        "question": "Enormo",
        "Followups": 2,
        "answer": "today drawer"
      }, 
      {
        "id": 'CIF002',
        "Inactive": "Yes",
        "category": "Wise",
        "question": "Enormo",
        "Followups": 4,
        "answer": "today drawer"
      }
      
    ]; 
    $scope.gridOptions.data = vm.searchData;

  };
  vm.initialize = function () {
    console.log('search Strategy....');

   
  };

  vm.initialize();
}