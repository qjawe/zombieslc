//intialized imageList
var imageList = getImageListFromSomeService();

//make sure to keep a refrence of original list and create a new list refrence for scope using concat method.
$scope.imageList = imageList.concat([]);

//apply search on the list base on searchTxt which can be binded to an input element
$scope.$watch('searchTxt', function (val) {
    val = val.toLowerCase();
    $scope.imageList = imageList.filter(function (obj) {
        return obj.title.toLowerCase().indexOf(val) != -1;
    });
});

//apply filter based on type
$scope.showImagesOfType  = function(type){
    $scope.imageList = imageList.filter(function (obj) {
        return obj.type == type;
    });
}

//sort images by something (lets say likes)
$scope.sortByLikes = function () {
    $scope.imageList.sort(function (a, b) {
        return b.likes - a.likes;
    });
}
