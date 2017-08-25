// $(function() {
//
//     // Modal screen triggers
//     modal_triggers = ["#about"]
//     for (var i = 0; i < modal_triggers.length; i++) {
// 	$(modal_triggers[i]).on("click", function() {
// 	    $(".modal").addClass("modal-is-visible")
// 	    $(".cover").addClass("modal-is-visible")
// 	});
//     }
//
// });

// Declare app level module
var coloringApp = angular.module('coloringApp', ['ngRoute', 'angularModalService']);
  // .config(['$routeProvider', function($routeProvider) {
  //   $routeProvider.when('/', {templateUrl: 'partials/startView.html', controller: 'StartCtrl'});
  //   $routeProvider.otherwise({redirectTo: '/'});
  // }]);

// Route Configurations
coloringApp.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    // route for home page
    .when('/', {
      templateUrl: 'views/startView.html',
      controller: 'StartCtrl'
    })

    // route for main page
    .when('/main', {
      templateUrl: 'views/mainView.html',
      controller: 'MainCtrl'
    })

    // route for coloring page
    .when('/coloring', {
      templateUrl: 'views/coloringView.html',
      controller: 'ColoringCtrl'
    })

    // route for story page
    .when('/story', {
      templateUrl: 'views/storyView.html',
      controller: 'StoryCtrl'
    });

  $routeProvider
    .otherwise({
      redirectTo: '/',
    });

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');
});

// === CONTROLLERS ===

// StartCtrl
coloringApp.controller('StartCtrl', ['$scope', 'ModalService', function($scope, ModalService) {
  $scope.message = 'hello';

  $scope.showModal = function() {
    console.log("open modal");

    ModalService.showModal({
      templateUrl: "views/_modal.html",
      controller: "ModalController",
      bodyClass: "modal-open"
    })
    .then(function(modal) {
      modal.display = false;
      modal.close.then(function(result) {
        console.log("close");
      });
    });
  };

  // $scope.keyPress = function(value) {
  //   if (value.keyCode == 42) {
  //     ModalService.closeModals(null, 500);
  //   }
  // }

}]);


coloringApp.controller('ModalController', ['$scope', 'close', function($scope, close) {
  $scope.close = function(result) {
    $scope.display = true;
    close(result, 100);
  };

}]);

// MainCtrl
coloringApp.controller('MainCtrl', ['$scope', function($scope) {

}]);

// ColoringCtrl
coloringApp.controller('ColoringCtrl', ['$scope', function($scope) {

}]);

// StoryCtrl
coloringApp.controller('StoryCtrl', ['$scope', function($scope) {

}]);
