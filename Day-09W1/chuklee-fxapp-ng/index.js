(function() {
	var FXApp = angular.module("FXApp", ["FX"]);

	var FXCtrl = function(FXSvc) {
		var fxCtrl = this;
		fxCtrl.base = null;
		fxCtrl.currency = null;
		fxCtrl.rates = {};
		fxCtrl.ready = false;
		fxCtrl.getRates = function() {
			fxCtrl.ready = false;

			var promise = FXSvc.getRates(fxCtrl.base, fxCtrl.currency)
			promise.then(function(abc) {
					fxCtrl.rates = abc.rates;
					fxCtrl.ready = true;
				});

			//FXSvc.getRatesByCallback(fxCtrl.base, fxCtrl.currency, function(abc) {
			//		fxCtrl.rates = abc.rates;
			//		fxCtrl.ready = true;
			//});

		}
	};

	//FXCtrl.$inject = ["$http"]
	//FXApp.controller("FXCtrl", FXCtrl);

	FXApp.controller("FXCtrl", ["FXSvc", FXCtrl]);
})();
