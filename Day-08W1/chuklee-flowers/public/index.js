//Place order
(function() {
	var OrderApp = angular.module("OrderApp", ["Flower"]);

	var initForm = function(ctrl) {
		ctrl.from = "";
		ctrl.to = "";
		ctrl.notes = "";
		ctrl.quantity = 0;
		ctrl.flower = "";
		ctrl.colours = ["", "", "", ""];
	}

	var createOrderObject = function(ctrl) {
		return ({
			to: ctrl.to,
			from: ctrl.from,
			notes: ctrl.notes,
			quantity: ctrl.quantity,
			flower: ctrl.flower,
			colours: ctrl.colours,
		});
	}

	var OrderCtrl = function(FlowerSvc) {
		var orderCtrl = this;

		initForm(orderCtrl);

		orderCtrl.placeOrder = function() {
			FlowerSvc.createOrder(createOrderObject(orderCtrl))
				.then(function() {
					initForm(orderCtrl);
				});
		}

	};

	//Either this
	//OrderCtrl.$inject = ["$http", "$log"];
	//OrderApp.controller("OrderCtrl", OrderCtrl);

	//Or this - strict DI
	OrderApp.controller("OrderCtrl", [ "FlowerSvc", OrderCtrl ]);

})();
