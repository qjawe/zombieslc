var myApp = angular.module('myApp', []);

myApp.controller('CartController', ['$scope', function($scope) {
  $scope.cartData = [
    {'name': 'Apple', 'quantity': 3, 'price': 1.10},
    {'name': 'Orange', 'quantity': 2, 'price': 1.99},
    {'name': 'Melon', 'quantity': 1, 'price': 3.22}
  ];

  $scope.remove = function(index) {
    $scope.cartData.splice(index, 1);
  }

  $scope.add = function() {
    var newItem = {
      'name': $scope.item,
      'quantity': $scope.quantity,
      'price': $scope.price
    };

    $scope.cartData.push(newItem);
  }
}]);
