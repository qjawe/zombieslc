        // for client side we use IIFE to execute the application
(function(){

    //the first param is the app name
    //the second is the app dependencies
    // every node module is a module, every angular module is a module
    // everything inside this function is our application
    // inside application will have controller(s)

    angular.module("FirstApp", []).controller("FirstCtrl", [FirstCtrl]);

    // Define a controller called FirstCtrl

    function FirstCtrl() {
        // hold a reference of this controller so that when this changes we are still referencing
        // this controller

        var firstCtrl = this;
        firstCtrl.myNo = 0;
        firstCtrl.myNo2 = 0;
        //console.log(firstNumber);
        firstCtrl.answer = 0;

        firstCtrl.addition = function(){
            console.log("add");
            firstCtrl.answer = parseInt(firstCtrl.myNo) + parseInt(firstCtrl.myNo2);
        }

        //Define first model of this controller/vm

    }
    // first one is always a string "controller statement", second one is a function
    //always do javascript first before doign angular
    //FirstApp.controller("FirstCtrl", [ FirstCtrl ])

    //angular App inside html tag, means scope is html

})();
