var foreman = angular.module('dm8', []);

foreman.controller('mainCtrl', function($scope, $timeout) {
  $scope.saySomethingPicard = "Beam me up, Scotty!";

  $scope.picardsWords = "Yes you can";
  $timeout(function() {
    $scope.picardsWords = "This is bad, warp speed escape!";
  }, 2000);

  $scope.crew = [
    {name: "Picard", rank: "Captain"},
    {name: "Data", rank: "Data guy"},
    {name: "Scotty", rank: "Dog"},
    {name: "Worf", rank: "Shipping Lead"},
    {name: "Spock", rank: "Speck"}
  ];

  $scope.isAwesome = true;

  $scope.btnClicked = function() {
     $scope.isAwesome = !$scope.isAwesome;
  };
});
