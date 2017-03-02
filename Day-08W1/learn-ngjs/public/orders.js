(function() {
	var ViewOrderApp = angular.module("ViewOrderApp", []);

	var ViewOrderCtrl = function($http) {
		var viewOrderCtrl = this;

		viewOrderCtrl.orders = [];

		viewOrderCtrl.getOrders = function() {
			$http.get("/pending-orders")
				.then(function(res) {
					viewOrderCtrl.orders = res.data;
				});
		};

		//Load the first order
		//viewOrderCtrl.getOrders();
	};
	ViewOrderCtrl.$inject = [ "$http" ];

	ViewOrderApp.controller("ViewOrderCtrl", ViewOrderCtrl);
})();
