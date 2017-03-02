//Place order
(function() {
	var OrderApp = angular.module("OrderApp", []);

	var initForm = function(ctrl) {
		ctrl.from = "";
		ctrl.to = "";
		ctrl.notes = "";
		ctrl.quantity = 0;
		ctrl.flower = "";
		ctrl.colours = ["", "", "", ""];
	}

	var createQueryString = function(ctrl) {
		return ({
			to: ctrl.to,
			from: ctrl.from,
			notes: ctrl.notes,
			quantity: ctrl.quantity,
			flower: ctrl.flower,
			colours: ctrl.colours,
		});
	}

	var OrderCtrl = function($http) {
		var orderCtrl = this;

		initForm(orderCtrl);

		orderCtrl.placeOrder = function() {
			$http.get("/place-order", {
				params: createQueryString(orderCtrl)
			});
			initForm(orderCtrl);
		}

	};

	//Either this
	//OrderCtrl.$inject = ["$http", "$log"];
	//OrderApp.controller("OrderCtrl", OrderCtrl);

	//Or this - strict DI
	OrderApp.controller("OrderCtrl", [ "$http", OrderCtrl ]);
})();
