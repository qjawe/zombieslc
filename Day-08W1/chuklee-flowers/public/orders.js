(function() {
	var ViewOrderApp = angular.module("ViewOrderApp", ["Flower"]);

	var ViewOrderCtrl = function(FlowerSvc) {
		var viewOrderCtrl = this;

		viewOrderCtrl.orders = [];

		viewOrderCtrl.getOrders = function() {

			FlowerSvc.getOrders()
				.then(function(allOrders) {
					viewOrderCtrl.orders = allOrders;
				});

		//Load the first order
		//viewOrderCtrl.getOrders();
		};
	}

	ViewOrderCtrl.$inject = [ "FlowerSvc" ];
	ViewOrderApp.controller("ViewOrderCtrl", ViewOrderCtrl);
})();
