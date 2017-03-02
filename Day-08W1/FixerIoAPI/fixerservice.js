(function() {
	var ServiceRatesApp = angular.module("ServiceRatesApp", []);

	var RatesSvc = function($http) {
		var RatesSvc = this;


		RatesSvc.getRates = function() {
		return ($http.get("http://api.fixer.io/latest")
			.then(function(res) {
				return(res.data)
			}));

		};

		//Load the first order
		//RatesSvc.getRates();
	};
	RatesSvc.$inject = [ "$http" ];

	ServiceRatesApp.service("RatesSvc", RatesSvc);
})();
