var myTestApp = angular.module('weddgram', ['thatisuday.ng-image-gallery']);

myApp.config(function(ngImageGalleryOptsProvider){
    ngImageGalleryOptsProvider.setOpts({
        thumbnails  :   true,
        inline      :   false,
        imgBubbles  :   false,
        bgClose     :   true
        bubbles     :   true,
        imgAnim     :   'fadeup',
    });
})


// inside your app controller
$scope.images = [...];

// gallery methods
$scope.methods = {};

// so you will bind openGallery method to a button on page
// to open this gallery like ng-click="openGallery();"
$scope.openGallery = function(){
    $scope.methods.open();

    // You can also open gallery model with visible image index
    // Image at that index will be shown when gallery modal opens
    //scope.methods.open(index);
};

// Similar to above function
$scope.closeGallery = function(){
    $scope.methods.close();
};

$scope.nextImg = function(){
    $scope.methods.next();
};

$scope.prevImg = function(){
    $scope.methods.prev();
};
