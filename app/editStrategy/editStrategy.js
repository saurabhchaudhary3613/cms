'use strict';

angular.module('myApp.editStrategy', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editStrategy', {
    templateUrl: 'editStrategy/editStrategy.html',
    controller: 'EditStrategyCtrl as ctrl' 
  });
}])

.controller('EditStrategyCtrl', ['$scope', '$http', delegateFunction]);

function delegateFunction($scope, $http) {
  var vm = this;
  vm.disableField = true;
  vm.strategyDetails = {
    description: '',
    body: '',
    intro: '',
    linkText: '',
    linkURL: '',
    startDate: '',
    endDate: ''
  }

  vm.updateInfo = function () {
    vm.disableField = false;
  };

  vm.initialize = function () {
    console.log('editStrategy....');
    
    // Get Rest call to view details
    $http({
      method : "GET",
      url : "../data/strategy.json"
    }).then(function mySuccess(response) {
      var strategyData = response.data.topic;
      console.log(strategyData);

      vm.topic1 = strategyData.topic1;
      vm.strategyDetails.description = strategyData.description;

      vm.strategyDetails.intro = strategyData.sections[0].titles[0].intro;
      vm.strategyDetails.body = strategyData.sections[0].titles[0].body;

      vm.strategyDetails.linkText = strategyData.sections[0].titles[0].link.text;
      vm.strategyDetails.linkURL = strategyData.sections[0].titles[0].link.url;

      vm.strategyDetails.startDate = strategyData.sections[0].titles[0].season.start;
      vm.strategyDetails.endDate = strategyData.sections[0].titles[0].season.end;

      //console.log("sa",vm.strategyDetails.description);

      // vm.topic2 = strategyData.topic2;
      // vm.section1 = strategyData.section1;

      // vm.section2 = strategyData.section2;
      // vm.title1 = strategyData.title1;
      // vm.intro = strategyData.intro;
      // vm.body = strategyData.body;



      }, function myError(response) {
        console.log('error');
    });


  };
  
  vm.initialize(); 
}