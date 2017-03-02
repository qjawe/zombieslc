(function() {
	var Flower = angular.module("Flower", []);

	var FlowerSvc = function($http) {

		var flowerSvc = this;

		flowerSvc.createOrder = function(orderDetail) {
			return ($http.get("/place-order", {
				params: orderDetail
			}));
		};

		flowerSvc.getOrders = function() {
			return ($http.get("/pending-orders")
				.then(function(result) {
					return (result.data);
				}));
		};
	};

	//Define a service
	Flower.service("FlowerSvc", [ "$http", FlowerSvc ]);

})();
