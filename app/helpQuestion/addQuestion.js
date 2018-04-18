'use strict';

angular.module('myApp.addQuestion', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addQuestion', {
    templateUrl: 'helpQuestion/addQuestion.html',
    controller: 'AddQuestionCtrl as ctrl' 
  });
}])

.controller('AddQuestionCtrl', ['$scope', '$http' , delegateFunction]);

function delegateFunction($scope, $http) {
  var vm = this;
  vm.questionDetails = {
    category: '',
    question: '',
    answer: '',
    rank: '',
    isActive: false
  }

  vm.categoryOptions = [
    { id: '1', name: 'Way to save' },
    { id: '2', name: 'Learnings' }
  ];

  vm.rankOptions = [
    { id: '1', name: 1 },
    { id: '2', name: 2 },
    { id: '3', name: 3 },
    { id: '4', name: 4 },
    { id: '5', name: 5 }
  ];

  
  vm.submitDetails = function () {
    // data object

    var submitObj = {};

    
    
    //---> Post call to save the data
    // $http.post('/strategy', submitObj, config)
    //   .success(function (data, status, headers, config) {
    //     $scope.PostDataResponse = data;
    //   })
    //   .error(function (data, status, header, config) {
    //     $('#myModal').modal('show');
    //     console.log("status " + status);
    //     console.log("config " + config);
    //     console.log("config " + config);
    //   });

  };

  vm.initialize = function () {
   

  };

  vm.initialize();   
}