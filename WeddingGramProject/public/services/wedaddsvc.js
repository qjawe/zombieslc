//start an Angular app
//IIFE - Immediately Invoked Function Expression
(function() {
    //create an instance of my Angular app
	var WedAtt = angular.module("WedAtt", []);

    //define the function to be used as controller
	var WedSvc = function($http) {

		var _wedSvc = this;

        //service for submitting/creating RSVP form
		_wedSvc.createAttList = function(createAttObject) {
			return ($http.get("/setAttList", {
				params: createAttObject
			}));
		};

        //service for submitting/creating photo&comment form
		_wedSvc.createPhList = function(createPhObject) {
			return ($http.get("/setPhList", {
				params: createPhObject
			}));;
		};
	};

	//Define the service
	WedAtt.service("WedSvc", [ "$http", WedSvc ]);

})();