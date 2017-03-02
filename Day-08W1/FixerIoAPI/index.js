(function() {
	var RatesApp = angular.module("RatesApp", ["ServiceRatesApp"]);

	var RatesCtrl = function(RatesSvc) {
		var ratesCtrl = this;


		ratesCtrl.getRates = function() {
			RatesSvc.getRates()
				.then(function(resultsrates) {
					console.log(resultsrates);
				});


		};

		//Load the first order
		//RatesCtrl.getRates();
	};
	RatesCtrl.$inject = [ "RatesSvc" ];

	RatesApp.controller("RatesCtrl", RatesCtrl);
})();
