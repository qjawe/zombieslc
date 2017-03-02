(function() {
	var VFormApp = angular.module("VFormApp", ["ServiceVFormApp"]);

	var vformctrl = function(FormsSvc) {
		var vformctrl = this;


		vformctrl.getMandatory = function() {
			FormsSvc.getMandatory()
				.then(function(resultsMandatory) {
					console.log(resultsMandatory);
				});


		};

		//Load the first order
		//vformctrl.getMandatory();
	};
	vformctrl.$inject = [ "FormsSvc" ];

	VFormApp.controller("vformctrl", vformctrl);
})();
