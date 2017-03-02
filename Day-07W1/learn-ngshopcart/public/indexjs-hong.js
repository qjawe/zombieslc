//start the AngularJS App
//IIFE - Immediately Invoked Function Expression
(function() {
   //create an instance of my Angular app
   var CartApp = angular.module("CartApp", []);

   //define the function to be used as controller
  //  shopping CartApp
   var CartCtrl = function() {
       var _cartCtrl = this;

       _cartCtrl.item = "";
       _cartCtrl.quantity = 0;
       _cartCtrl.basket = [];

       _cartCtrl.addToBasket = function(){
           //add item to basket
           _cartCtrl.basket.push({
               item : _cartCtrl.item,
               quantity : _cartCtrl.quantity
           });

           //reset the model
           _cartCtrl.item = "";
           _cartCtrl.quantity = 0;
       }
       }
   //define the controller
   CartApp.controller("CartCtrl", [ CartCtrl ]);


})();
