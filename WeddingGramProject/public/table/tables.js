//start an Angular app
(function() {
	//create an instance of my Angular app
	var TableOrderApp = angular.module("TableOrderApp", []);

	//define the functions to be used as controller
	var TableOrderCtrl = function($http) {
		var tableOrderCtrl = this;

		tableOrderCtrl.orders = [];

		//table list controller
		tableOrderCtrl.getOrders = function() {
			$http.get("/rsvp-pending")
				.then(function(res) {
					tableOrderCtrl.orders = res.data;
				});
		};

	};

	//define the controller
	TableOrderApp.controller("TableOrderCtrl",["$http", TableOrderCtrl]);
})();