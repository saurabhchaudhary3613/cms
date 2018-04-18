'use strict';

angular.module('myApp.editQuestion', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/editQuestion/:Id', {
      templateUrl: 'helpQuestion/editQuestion.html',
      controller: 'EditQuestionCtrl as ctrl'
    });
  }])

  .controller('EditQuestionCtrl', ['$scope', '$http', delegateFunction]);

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
    console.log('editStrategy....');

    // Get Rest call to view details
    $http({
      method: "GET",
      url: "../data/helpQuestion.json"
    }).then(function mySuccess(response) {
      var questionData = response.data.helpQuestion;
      console.log(questionData);
      vm.questionDetails.category = questionData.category;
      vm.questionDetails.question = questionData.question;
      vm.questionDetails.answer = questionData.answer;
      vm.questionDetails.rank = questionData.rank;
      vm.questionDetails.isActive = questionData.isActive;

    }, function myError(response) {
      console.log('error');
    });

  };

  vm.initialize();
}