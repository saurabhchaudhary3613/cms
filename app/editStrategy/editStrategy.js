'use strict';

angular.module('myApp.editStrategy', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/editStrategy/:Id', {
      templateUrl: 'editStrategy/editStrategy.html',
      controller: 'EditStrategyCtrl as ctrl'
    });
  }])

  .controller('EditStrategyCtrl', ['$scope', '$http', delegateFunction]);

function delegateFunction($scope, $http) {
  var vm = this;
  vm.disableField = false;
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
    cluster: '',
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
    { id: 1, value: 'Title 1' },
    { id: 2, value: 'Title 2' },
    { id: 3, value: 'Title 3' },
  ];
  $scope.y = { xs: [2] };

  vm.approvalOptions = [
    { id: '1', name: 'Sapient' },
    { id: '2', name: 'Oshawa' }
  ];

  vm.householdOptions = [
    { id: '1', name: 'Condo' },
    { id: '2', name: 'House' }
  ];
  vm.clusterOptions = [
    { id: '1', name: 'cluster 1' },
    { id: '2', name: 'cluster 2' },
    { id: '3', name: 'cluster 3' }
  ];

  
  vm.seasonOptions = [
    { id: '1', name: 'Summer' },
    { id: '2', name: 'Spring' },
    { id: '2', name: 'Winter' },
    { id: '2', name: 'Autumn' }
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
  vm.sectionOptionsWTS = [
    { id: '1', name: 'Cooling' },
    { id: '2', name: 'Electronics' },
    { id: '2', name: 'Appliance' }
  ];

  vm.homePageTitleOptions = [
    { id: '1', name: 'Title 1' },
    { id: '2', name: 'Title 2' },
    { id: '2', name: 'Title 3' }
  ];

  // vm.updateInfo = function () {
  //   vm.disableField = false;
  // };

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


  vm.wayToSaveData = [
    {
      "topic": "Way to Save",
      "section": "Cooling",
      "diasplayOrder": 1,
      "title": "CIF001, EIA001, AIF001"
    },
    {
      "topic": "Way to Save",
      "section": "Electronics",
      "diasplayOrder": 2,
      "title": "CIF001, AIF001"
    },
    {
      "topic": "Way to Save",
      "section": "Appliance",
      "diasplayOrder": 3,
      "title": "AIF001"
    }
  ];
  vm.learningsData = [
    {
      "topic": "Learnings",
      "section": "Generic",
      "diasplayOrder": 1,
      "title": "L001, L002"
    },
    {
      "topic": "Learnings",
      "section": "Electronics",
      "diasplayOrder": 2,
      "title": "L003"
    },
    {
      "topic": "Learnings",
      "section": "Heating",
      "diasplayOrder": 3,
      "title": "L005"
    }
  ];
  vm.coolingData = [
    {
      "section": "Cooling",
      "title": "CIF001",
      "diasplayOrder": 1,
      "intro": "Lorem ipsum dolor sit amet",
      "body": "Lorem ipsum dolor sit amet",
      "link": "https://www.google.co.in/",
      "approval": "Sapient",
      "household": "Condo",
      "cluster": "cluster 3",
      "season": "Summer",
      "startDate": "10-10-2017",
      "endDate": "10-10-2017"

    },
    {
      "section": "Cooling",
      "title": "EIA001",
      "diasplayOrder": 2,
      "intro": "Lorem ipsum dolor sit amet",
      "body": "Lorem ipsum dolor sit amet",
      "link": "https://www.google.co.in/",
      "approval": "Sapient",
      "household": "Condo",
      "cluster": "cluster 2",
      "season": "Summer",
      "startDate": "10-10-2017",
      "endDate": "10-10-2017"

    },
    {
      "section": "Cooling",
      "title": "AIF001",
      "diasplayOrder": 3,
      "intro": "Lorem ipsum dolor sit amet",
      "body": "Lorem ipsum dolor sit amet",
      "link": "https://www.google.co.in/",
      "approval": "Sapient",
      "household": "Condo",
      "cluster": "cluster 1",
      "season": "Summer",
      "startDate": "10-10-2017",
      "endDate": "10-10-2017"

    }
  ];
  vm.electronicsData = [
    {
      "section": "Electronics",
      "title": "CIF001",
      "diasplayOrder": 1,
      "intro": "Lorem ipsum dolor sit amet",
      "body": "Lorem ipsum dolor sit amet",
      "link": "https://www.google.co.in/",
      "approval": "Sapient",
      "household": "Condo",
      "cluster": "cluster 1",
      "season": "Summer",
      "startDate": "10-10-2018",
      "endDate": "10-10-2018"

    },
    {
      "section": "Electronics",
      "title": "AIF001",
      "diasplayOrder": 2,
      "intro": "Lorem ipsum dolor sit amet",
      "body": "Lorem ipsum dolor sit amet",
      "link": "https://www.google.co.in/",
      "approval": "Sapient",
      "household": "Condo",
      "cluster": "cluster 2",
      "season": "Summer",
      "startDate": "10-10-2018",
      "endDate": "10-10-2018"

    }
  ];
  vm.applianceData = [
    {
      "section": "Appliance",
      "title": "AIF001",
      "diasplayOrder": 3,
      "intro": "Lorem ipsum dolor sit amet",
      "body": "Lorem ipsum dolor sit amet",
      "link": "https://www.google.co.in/",
      "approval": "Sapient",
      "household": "Condo",
      "cluster": "cluster 3",
      "season": "Summer",
      "startDate": "10-10-2019",
      "endDate": "10-10-2019"

    }
  ];
  vm.gridOptionsSection.data = vm.wayToSaveData;
  vm.gridOptionsTitle.data = vm.coolingData;

  vm.onChangeTopic = function (val) {
    console.log(val);
    if(val === 'Cooling') {
      vm.gridOptionsTitle.data = vm.coolingData;
    }
    if(val === 'Electronics') {
      vm.gridOptionsTitle.data = vm.electronicsData;
    }
    if(val === 'Appliance') {
      vm.gridOptionsTitle.data = vm.applianceData;
    }
    console.log('sa');
  };
  $scope.getSectionDetails = function (rowData) {
    console.log("rowData=>", rowData);
    vm.sectionDetails = {
      'topic': rowData.topic,
      'section': rowData.section,
      'diasplayOrder': rowData.diasplayOrder,
      'title': rowData.title
    };

    if(rowData.section === 'Cooling') {
      vm.gridOptionsTitle.data = vm.coolingData;
    }
    if(rowData.section === 'Electronics') {
      vm.gridOptionsTitle.data = vm.electronicsData;
    }
    if(rowData.section === 'Appliance') {
      vm.gridOptionsTitle.data = vm.applianceData;
    }

    $('#sectionModal').modal('show');

  };

  vm.onChangeSection = function (val) {
    console.log(val);
    if(val === 'Way to Save') {
      vm.gridOptionsSection.data = vm.wayToSaveData;
    }
    if(val === 'Learnings') {
      vm.gridOptionsSection.data = vm.learningsData;
    }
    console.log('sa');
  };

  $scope.getTitleDetails = function(rowData) {
    console.log("rowData=>", rowData);
    vm.titleDetails = {
      'section': rowData.section,
      'title': rowData.title,
      'diasplayOrder': rowData.diasplayOrder,
      'intro': rowData.intro,
      'body': rowData.body,
      'link': rowData.link,
      'approval': rowData.approval,
      'household': rowData.household,
      'cluster': rowData.cluster,
      'season': rowData.season,
      'startDate': new Date(rowData.startDate),
      'endDate': new Date(rowData.endDate)
      
    };
    $('#titleModal').modal('show');

  };
  vm.submitDetails = function () {
    // data object

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
    if (vm.strategyDetails.delivery1 === 'Monday') {
      tempObjTitles.delivery.push('Monday');
    }

    if (vm.strategyDetails.delivery2 === 'Tuesday') {
      tempObjTitles.delivery.push('Tuesday');
    }

    if (vm.strategyDetails.delivery3 === 'Wednesday') {
      tempObjTitles.delivery.push('Wednesday');
    }
    if (vm.strategyDetails.delivery4 === 'Thursday') {
      tempObjTitles.delivery.push('Thursday');
    }
    if (vm.strategyDetails.delivery5 === 'Friday') {
      tempObjTitles.delivery.push('Friday');
    }
    if (vm.strategyDetails.delivery6 === 'Saturday') {
      tempObjTitles.delivery.push('Saturday');
    }
    if (vm.strategyDetails.delivery7 === 'Sunday') {
      tempObjTitles.delivery.push('Sunday');
    }

    tempObjTitles.time = [];
    if (vm.strategyDetails.time1 === 'Morning') {
      tempObjTitles.time.push('Morning');
    }
    if (vm.strategyDetails.time2 === 'Noon') {
      tempObjTitles.time.push('Noon');
    }
    if (vm.strategyDetails.time3 === 'Evening') {
      tempObjTitles.time.push('Evening');
    }
    if (vm.strategyDetails.time4 === 'Before Dusk') {
      tempObjTitles.time.push('Before Dusk');
    }


    tempObjTitles.frequency = vm.strategyDetails.frequency;

    tempObjTitles.type = [];

    if (vm.strategyDetails.type1 === 'Todays Drawer') {
      tempObjTitles.type.push('Todays Drawer');
    }

    if (vm.strategyDetails.type2 === 'Top Tier Tip') {
      tempObjTitles.type.push('Top Tier Tip');
    }

    if (vm.strategyDetails.type3 === 'Mid Top Tier Tip') {
      tempObjTitles.type.push('Mid Top Tier Tip');
    }

    if (vm.strategyDetails.type4 === 'InApp Message') {
      tempObjTitles.type.push('InApp Message');
    }

    if (vm.strategyDetails.type5 === 'High Usage') {
      tempObjTitles.type.push('High Usage');
    }

    tempObjTitles.responseOptions = [];

    if (vm.strategyDetails.response1 === 'Yes') {
      tempObjTitles.responseOptions.push('Yes');
    }

    if (vm.strategyDetails.response2 === 'No') {
      tempObjTitles.responseOptions.push('No');
    }
    if (vm.strategyDetails.response3 === 'Save') {
      tempObjTitles.responseOptions.push('Save');
    }
    if (vm.strategyDetails.response4 === 'Done') {
      tempObjTitles.responseOptions.push('Done');
    }

    if (vm.strategyDetails.response5 === 'Remind me') {
      tempObjTitles.responseOptions.push('Remind me');
    }


    tempObjTitles.homePageTitle = vm.strategyDetails.homePageTitle;
    tempObjTitles.homePageTip = vm.strategyDetails.homePageTip;

    tempSectionObj.titles.push(tempObjTitles);

    submitObj.topic.sections.push(tempSectionObj);

    console.log("submit->", submitObj);

    var config = {
      headers: {
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
        console.log("status " + status);
        console.log("config " + config);
        console.log("config " + config);
      });

  };

  vm.initialize = function () {
    console.log('editStrategy....');

    // Get Rest call to view details
    $http({
      method: "GET",
      url: "../data/strategy.json"
    }).then(function mySuccess(response) {
      var strategyData = response.data.topic;
      console.log(strategyData);

      vm.strategyDetails.topic = strategyData.title;
      vm.strategyDetails.displayOrderTopic = strategyData.displayOrder;
      vm.strategyDetails.description = strategyData.description;

      // vm.strategyDetails.intro = strategyData.sections[0].titles[0].intro;
      // vm.strategyDetails.body = strategyData.sections[0].titles[0].body;

      // vm.strategyDetails.linkText = strategyData.sections[0].titles[0].link.text;
      // vm.strategyDetails.linkURL = strategyData.sections[0].titles[0].link.url;

      // vm.strategyDetails.startDate = new Date(strategyData.sections[0].titles[0].season.start);
      // vm.strategyDetails.endDate = new Date(strategyData.sections[0].titles[0].season.end);

      // vm.strategyDetails.approval = strategyData.sections[0].titles[0].approval;
      // vm.strategyDetails.household = strategyData.sections[0].titles[0].household;
      // vm.strategyDetails.season = strategyData.sections[0].titles[0].season.name;
      // vm.strategyDetails.section = strategyData.sections[0].description;
      vm.strategyDetails.frequency = strategyData.sections[0].titles[0].frequency;
      var deliveryOptions = strategyData.delivery;

      angular.forEach(deliveryOptions, function (value, key) {
        console.log("value=>", value);
        if (value === 'Monday') {
          vm.strategyDetails.delivery1 = 'Monday';
        }
        if (value === 'Tuesday') {
          vm.strategyDetails.delivery2 = 'Tuesday';
        }
        if (value === 'Wednesday') {
          vm.strategyDetails.delivery3 = 'Wednesday';
        }
        if (value === 'Thursday') {
          vm.strategyDetails.delivery4 = 'Thursday';
        }
        if (value === 'Friday') {
          vm.strategyDetails.delivery5 = 'Friday';
        }
        if (value === 'Saturday') {
          vm.strategyDetails.delivery6 = 'Saturday';
        }
        if (value === 'Sunday') {
          vm.strategyDetails.delivery7 = 'Sunday';
        }
      });

      var timeOptions = strategyData.time;
      angular.forEach(timeOptions, function (value, key) {
        console.log("value=>", value);
        if (value === 'Morning') {
          vm.strategyDetails.time1 = 'Morning';
        }
        if (value === 'Noon') {
          vm.strategyDetails.time2 = 'Noon';
        }
        if (value === 'Evening') {
          vm.strategyDetails.time3 = 'Evening';
        }
        if (value === 'Before Dusk') {
          vm.strategyDetails.time4 = 'Before Dusk';
        }
      });

      var typeOptions = strategyData.type;
      angular.forEach(typeOptions, function (value, key) {

        if (value === 'Todays Drawer') {
          vm.strategyDetails.type1 = 'Todays Drawer';
        }
        if (value === 'Top Tier Tip') {
          vm.strategyDetails.type2 = 'Top Tier Tip';
        }
        if (value === 'Mid-Top Tier Tip') {
          vm.strategyDetails.type3 = 'Mid-Top Tier Tip';
        }
        if (value === 'InApp Message') {
          vm.strategyDetails.type4 = 'InApp Message';
        }
        if (value === 'High Usage') {
          vm.strategyDetails.type5 = 'High Usage';
        }
      });

      var responseOptions = strategyData.responseOptions;
      angular.forEach(responseOptions, function (value, key) {

        if (value === 'Yes') {
          vm.strategyDetails.response1 = 'Yes';
        }
        if (value === 'No') {
          vm.strategyDetails.response2 = 'No';
        }
        if (value === 'Save') {
          vm.strategyDetails.response3 = 'Save';
        }
        if (value === 'Done') {
          vm.strategyDetails.response4 = 'Done';
        }
        if (value === 'Remind me') {
          vm.strategyDetails.response5 = 'Remind me';
        }
      });

      vm.strategyDetails.homePageTip = strategyData.homePageTip;
      vm.strategyDetails.homePageTitle = strategyData.homePageTitle;

    }, function myError(response) {
      console.log('error');
    });

  };

  vm.initialize();
}