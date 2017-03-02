//start an Angular app
//IIFE - Immediately Invoked Function Expression
(function() {
    //create an instance of my Angular app
    var WedApp = angular.module("WedApp", [ "WedAtt" ]);

    //initialize all value to default for photo upload
    var initPhotoForm = function(_wedCtrl) {
        _wedCtrl.photo = "";
        _wedCtrl.phComment = "";
    }

    //create photo&comment object for photo upload
    var createPhObject = function(_wedCtrl) {
		return ({
			photo: _wedCtrl.photo,
			phComment: _wedCtrl.phComment
		});
	}

    //define the functions to be used as controller
    var WedCtrl = function(WedSvc) {
        var _wedCtrl = this;
        initPhotoForm(_wedCtrl);

        //photo&comment submit controller
        _wedCtrl.photoSubmit = function() {
            WedSvc.createPhList(createPhObject(_wedCtrl))
				.then(function() {
                    console.log("Photo file name and comment as shown: %s", JSON.stringify(createPhObject(_wedCtrl)));
					initPhotoForm(_wedCtrl);
				});
        };

    };
		
    //define the controller
    WedApp.controller("WedCtrl", [ "WedSvc" , WedCtrl ]);

})();