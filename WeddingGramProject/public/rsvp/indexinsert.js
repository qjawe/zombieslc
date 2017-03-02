//start an Angular app
(function() {
	//create an instance of my Angular app
	var TableApp = angular.module("TableApp", []);

	//initialize all value to default for attendence form
	var initForm = function(abc) {
		abc.name = "";
		abc.email = "";
		abc.tickets = 0;
		abc.att = "";
	}

	//create attendence object for attendence submission
	var createQueryString = function(abc) {
		return ({
			name: abc.name,
			email: abc.email,
			tickets: abc.tickets,
			att: abc.att,
		});
	}

	//define the functions to be used as controller
	var TableCtrl = function($http) {
		var tableCtrl = this;

		initForm(tableCtrl);

		//attendence submit controller
		tableCtrl.placeOrder = function() {
			$http.get("/rsvp", {
			params: createQueryString(tableCtrl)
			});
			console.log("attendence submission information as shown: %s", JSON.stringify(createQueryString(tableCtrl)));
			initForm(tableCtrl);
		}

	};

	//define the controller
	TableApp.controller("TableCtrl", [ "$http", TableCtrl ]);
})();