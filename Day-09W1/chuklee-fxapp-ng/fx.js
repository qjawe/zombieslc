(function() {
	var FX = angular.module("FX", []);


	var FXSvc = function($http) {
		var fxSvc = this;

		var callFixer = function(base, symbol) {
			var myparams = {};

			if (base)
				myparams.base = base.toUpperCase();

			if (symbols)
				myparams.symbols = symbols.toUpperCase();

			// GET /latest?base=xxxx&symbols=xxxx
			var promise = $http.get("http://api.fixer.io/latest", { 
					params: myparams
				}
			);

			return (promise);
		}

		fxSvc.getRatesByCallback = function(base, symbols, fn) {

			var promise = callFixer(base, symbols);

			promise.then(function(result) {
				fn(result.data);
			});
		};

		fxSvc.getRates = function(base, symbols) {

			var promise = callFixer(base, symbols);

			var promise2 = promise.then(function(result) {
				var ratesOnly = result.data;
				return (ratesOnly);
			});

			return (promise2);
		}
	}

	//FX.$inject = [ "$http" ];
	//FX.service("FXSvc", FXSvc);

	FX.service("FXSvc", ["$http", FXSvc]);
})();
