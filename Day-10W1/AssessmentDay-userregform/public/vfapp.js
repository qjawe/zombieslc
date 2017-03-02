(function() {
	var ServiceVFormApp = angular.module("ServiceVFormApp", []);


	var ServiceVFormAppSvc = function($http) {
		var ServiceVFormAppSvc = this;

		var getPhotos = function(base, symbol) {
			var myparams = {};

			if (base)
				myparams.base = base.toUpperCase();

			if (images)
				myparams.images = images.toUpperCase();

			// GET /latest photos
			var promise = $http.get("https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK", {
					params: myparams
				}
			);

			return (promise);
		}

		ServiceVFormAppSvc.getMandatory = function(base, images, fn) {

			var promise = getPhotos(base, images);

			promise.then(function(result) {
				fn(result.data);
			});
		};

		ServiceVFormAppSvc.getMan = function(base, images) {

			var promise = getPhotos(base, images);

			var promise2 = promise.then(function(result) {
				var ratesOnly = result.data;
				return (ratesOnly);
			});

			return (promise2);
		}
	}

	//ServiceVFormApp.$inject = [ "$http" ];
	//ServiceVFormApp.service("ServiceVFormAppSvc", ServiceVFormAppSvc);

	ServiceVFormApp.service("ServiceVFormAppSvc", ["$http", ServiceVFormAppSvc]);
})();
