'use strict';

angular.module('myApp.addStrategy', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addStrategy', {
    templateUrl: 'addStrategy/addStrategy.html',
    controller: 'AddStrategyCtrl as ctrl' 
  });
}])

.controller('AddStrategyCtrl', ['$scope', '$http' , delegateFunction]);

function delegateFunction($scope, $http) {
  var vm = this;
  
  vm.strategyDetails = {
    description: '',
    body: '',
    intro: '',
    linkText: '',
    linkURL: '',
    startDate: '',
    endDate: '',
    approval: '',
    household: '',
    cluster:'',
    season: '',
    topic: '',
    section: '',
    frequency: '',
    delivery1: '',
    delivery2: '',
    delivery3: '',
    delivery4: '',
    delivery5: '',
    delivery6: '',
    delivery7: '',
    time1: '',
    time2: '',
    time3: '',
    time4: '',
    type1: '',
    type2: '',
    type3: '',
    type4: '',
    type5: '',
    response1: '',
    response2: '',
    response3: '',
    response4: '',
    response5: '',
    homePageTip: '',
    homePageTitle: '',
    sectionTitle: ['Title1', 'Title4'],
	displayOrderTopic: null,
    displayOrderSection: null,
    displayOrderTitle: null
  }

  $scope.xs = [
    {id: 1, value: 'Title 1'},
    {id: 2, value: 'Title 2'},
    {id: 3, value: 'Title 3'},
  ];
  $scope.y = {xs:[2]}; 

  vm.approvalOptions = [
    {id: '1', name: 'Sapient'},
    {id: '2', name: 'Oshawa'}
  ];

  vm.householdOptions = [
    {id: '1', name: 'Condo'},
    {id: '2', name: 'House'}
  ];

  vm.clusterOptions = [
    { id: '1', name: 'cluster 1' },
    { id: '2', name: 'cluster 2' },
    { id: '3', name: 'cluster 3' }
  ];

  vm.seasonOptions = [
    {id: '1', name: 'Summer'},
    {id: '2', name: 'Spring'},
    {id: '2', name: 'Winter'},
    {id: '2', name: 'Autumn'}
  ];

  vm.topicOptions = [
    { id: '1', name: 'Way to Save' },
    { id: '2', name: 'Learnings' }
  ];
  
  vm.sectionOptions = [
    { id: '1', name: 'Cooling' },
    { id: '2', name: 'Electronics' },
    { id: '2', name: 'Appliance' },
    { id: '1', name: 'Generic' },
    { id: '2', name: 'Electronics' },
    { id: '2', name: 'Heating' }
  ];

  vm.homePageTitleOptions = [
    {id: '1', name: 'Title 1'},
    {id: '2', name: 'Title 2'},
    {id: '2', name: 'Title 3'}
  ];

  //Topic having multiple sections - section grid
  vm.gridOptionsSection = {
  };

  vm.gridOptionsSection.columnDefs = [
    {field: 'action', displayName: 'Action', width: '6%', cellTemplate: '<span ng-click="grid.appScope.getSectionDetails(row.entity)">View/Edit</span>', enableSorting: false, enableFiltering: false},
    { name: 'topic', enableSorting: true, enableCellEdit: false, displayName: 'Topic', width: '12%' },
    { name: 'section', enableSorting: true, enableCellEdit: false, displayName: 'Section', width: '10%' },
    { name: 'diasplayOrder', enableSorting: true, displayName: 'Display Order', enableCellEdit: false, width: '12%' },
    { name: 'title', enableSorting: true, displayName: 'Title', enableCellEdit: false, width: '14%' }

  ];
  vm.gridOptionsSection.enableSorting =true;
  vm.gridOptionsSection.enableFiltering =true;

  // Title Grid Config

  vm.gridOptionsTitle = {
  };

  vm.gridOptionsTitle.columnDefs = [
    {field: 'action', displayName: 'Action', width: '6%', cellTemplate: '<span ng-click="grid.appScope.getTitleDetails(row.entity)">View/Edit</span>', enableSorting: false, enableFiltering: false},
    { name: 'section', enableSorting: true, enableCellEdit: false, displayName: 'Section', width: '10%' },
    { name: 'title', enableSorting: true, displayName: 'Title', enableCellEdit: false, width: '14%' },
    { name: 'diasplayOrder', enableSorting: true, displayName: 'Display Order', enableCellEdit: false, width: '12%' },
    { name: 'intro', enableSorting: true, displayName: 'Intro', enableCellEdit: false, width: '12%' },
    { name: 'body', enableSorting: true, displayName: 'Body', enableCellEdit: false, width: '12%' },
    { name: 'link', enableSorting: true, displayName: 'Link', enableCellEdit: false, width: '10%' },
    { name: 'approval', enableSorting: true, displayName: 'Approval', enableCellEdit: false, width: '10%' },
    { name: 'household', enableSorting: true, displayName: 'House hold', enableCellEdit: false, width: '10%' },
    { name: 'cluster', enableSorting: true, displayName: 'Cluster', enableCellEdit: false, width: '10%' },
    { name: 'season', enableSorting: true, displayName: 'Season', enableCellEdit: false, width: '10%' },
    { name: 'startDate', enableSorting: true, displayName: 'Start Date', enableCellEdit: false, width: '10%' },
    { name: 'endDate', enableSorting: true, displayName: 'End Date', enableCellEdit: false, width: '10%' }

  ];
  vm.gridOptionsTitle.enableSorting =true;
  vm.gridOptionsTitle.enableFiltering =true;

  vm.gridOptionsTitleSectionModal = {
  };

  vm.gridOptionsTitleSectionModal.columnDefs = [
    {field: 'action', displayName: 'Action', width: '6%', cellTemplate: '<span ng-click="grid.appScope.getTitleDetails(row.entity)">View/Edit</span>', enableSorting: false, enableFiltering: false},
    { name: 'section', enableSorting: true, enableCellEdit: false, displayName: 'Section', width: '10%' },
    { name: 'title', enableSorting: true, displayName: 'Title', enableCellEdit: false, width: '14%' },
    { name: 'diasplayOrder', enableSorting: true, displayName: 'Display Order', enableCellEdit: false, width: '12%' },
    { name: 'intro', enableSorting: true, displayName: 'Intro', enableCellEdit: false, width: '12%' },
    { name: 'body', enableSorting: true, displayName: 'Body', enableCellEdit: false, width: '12%' },
    { name: 'link', enableSorting: true, displayName: 'Link', enableCellEdit: false, width: '10%' },
    { name: 'approval', enableSorting: true, displayName: 'Approval', enableCellEdit: false, width: '10%' },
    { name: 'household', enableSorting: true, displayName: 'House hold', enableCellEdit: false, width: '10%' },
    { name: 'cluster', enableSorting: true, displayName: 'Cluster', enableCellEdit: false, width: '10%' },
    { name: 'season', enableSorting: true, displayName: 'Season', enableCellEdit: false, width: '10%' },
    { name: 'startDate', enableSorting: true, displayName: 'Start Date', enableCellEdit: false, width: '10%' },
    { name: 'endDate', enableSorting: true, displayName: 'End Date', enableCellEdit: false, width: '10%' }

  ];
  vm.gridOptionsTitleSectionModal.enableSorting =true;
  vm.gridOptionsTitleSectionModal.enableFiltering =true;


  vm.wayToSaveData = [];
  vm.learningsData = [];
  vm.coolingData = [];
  vm.electronicsData = [];
  vm.applianceData = [];



  vm.submitDetails = function () {
    // data object
     
    // var config = {
    //   headers : {
    //       'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
    //   }
    // }

    var submitObj = {};

    submitObj.topic = {};
    submitObj.topic.displayOrder = vm.strategyDetails.displayOrderTopic;
    submitObj.topic.title = vm.strategyDetails.topic;
    submitObj.topic.description = vm.strategyDetails.description;

    submitObj.topic.sections = [];

    var tempSectionObj = {};

    tempSectionObj.displayOrder = vm.strategyDetails.displayOrderSection;

    tempSectionObj.description = 'description';

    tempSectionObj.titles = [];

    var tempObjTitles = {}

    tempObjTitles.displayOrder = vm.strategyDetails.displayOrderTitle;
    tempObjTitles.intro = vm.strategyDetails.intro;
    tempObjTitles.body = vm.strategyDetails.body;
    tempObjTitles.link = {};
    tempObjTitles.link.linkText = vm.strategyDetails.text;
    tempObjTitles.link.linkURL = vm.strategyDetails.url;

    tempObjTitles.approval = vm.strategyDetails.approval;
    tempObjTitles.household = vm.strategyDetails.household;
    tempObjTitles.season = {};

    tempObjTitles.season.name = vm.strategyDetails.season;
    tempObjTitles.season.start = vm.strategyDetails.startDate;
    tempObjTitles.season.end = vm.strategyDetails.endDate;

    tempObjTitles.delivery = [];
    if(vm.strategyDetails.delivery1 === 'Monday') {
      tempObjTitles.delivery.push('Monday');
    }

    if(vm.strategyDetails.delivery2 === 'Tuesday') {
      tempObjTitles.delivery.push('Tuesday');
    }

    if(vm.strategyDetails.delivery3 === 'Wednesday') {
      tempObjTitles.delivery.push('Wednesday');
    }
    if(vm.strategyDetails.delivery4 === 'Thursday') {
      tempObjTitles.delivery.push('Thursday');
    }
    if(vm.strategyDetails.delivery5 === 'Friday') {
      tempObjTitles.delivery.push('Friday');
    }
    if(vm.strategyDetails.delivery6 === 'Saturday') {
      tempObjTitles.delivery.push('Saturday');
    }
    if(vm.strategyDetails.delivery7 === 'Sunday') {
      tempObjTitles.delivery.push('Sunday');
    }

    tempObjTitles.time = [];
    if(vm.strategyDetails.time1 === 'Morning') {
      tempObjTitles.time.push('Morning');
    }
    if(vm.strategyDetails.time2 === 'Noon') {
      tempObjTitles.time.push('Noon');
    }
    if(vm.strategyDetails.time3 === 'Evening') {
      tempObjTitles.time.push('Evening');
    }
    if(vm.strategyDetails.time4 === 'Before Dusk') {
      tempObjTitles.time.push('Before Dusk');
    }

    
    tempObjTitles.frequency = vm.strategyDetails.frequency;

    tempObjTitles.type = [];

    if(vm.strategyDetails.type1 === 'Todays Drawer') {
      tempObjTitles.type.push('Todays Drawer');
    }

    if(vm.strategyDetails.type2 === 'Top Tier Tip') {
      tempObjTitles.type.push('Top Tier Tip');
    }

    if(vm.strategyDetails.type3 === 'Mid Top Tier Tip') {
      tempObjTitles.type.push('Mid Top Tier Tip');
    }

    if(vm.strategyDetails.type4 === 'InApp Message') {
      tempObjTitles.type.push('InApp Message');
    }

    if(vm.strategyDetails.type5 === 'High Usage') {
      tempObjTitles.type.push('High Usage');
    }

    tempObjTitles.responseOptions = [];

    if(vm.strategyDetails.response1 === 'Yes') {
      tempObjTitles.responseOptions.push('Yes');
    }

    if(vm.strategyDetails.response2 === 'No') {
      tempObjTitles.responseOptions.push('No');
    }
    if(vm.strategyDetails.response3 === 'Save') {
      tempObjTitles.responseOptions.push('Save');
    }
    if(vm.strategyDetails.response4 === 'Done') {
      tempObjTitles.responseOptions.push('Done');
    }

    if(vm.strategyDetails.response5 === 'Remind me') {
      tempObjTitles.responseOptions.push('Remind me');
    }


    tempObjTitles.homePageTitle = vm.strategyDetails.homePageTitle;
    tempObjTitles.homePageTip = vm.strategyDetails.homePageTip;

    tempSectionObj.titles.push(tempObjTitles);

    submitObj.topic.sections.push(tempSectionObj);

    
    
    var config = {
      headers : {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
      }
    };
    //---> Post call to save the data
    $http.post('/strategy', submitObj, config)
      .success(function (data, status, headers, config) {
          $scope.PostDataResponse = data;
      })
      .error(function (data, status, header, config) {
        $('#myModal').modal('show');
          $scope.ResponseDetails = "Data: " + data +
              "<hr />status: " + status +
              "<hr />headers: " + header +
              "<hr />config: " + config;
    });
    
  };

  
  vm.initialize = function () {
    
  };
  
  vm.initialize();

    
    
    
}