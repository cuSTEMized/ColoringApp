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
    .when('/', {
      templateUrl: 'views/startView.html',
      controller: 'StartCtrl'
    });
  $routeProvider
    .otherwise({
      redirectTo: '/',
    });
});

// === CONTROLLERS ===

// Start
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

// Modal
coloringApp.controller('ModalController', ['$scope', 'close', function($scope, close) {
  $scope.close = function(result) {
    $scope.display = true;
    close(result, 100);
  };

}]);
