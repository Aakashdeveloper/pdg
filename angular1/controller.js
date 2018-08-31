// IFFI
(function(){
    var app = angular.module("githubViewer", []);

    var Product = {
        productName: "Video Game Controller",
        productCode: "GMG-0042",
        releaseDate: "October 15, 2015",
        description: "Standard two-button video game controller",
        price: 35.95,
        starRating: 4.6,
        imageUrl: "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
    var MainController = function($scope, $http){

        var onUserComplete = function(response){
            $scope.user = response.data
        }

        var onError = function(reason){
            $scope.error = " Cloud not find user"
        }
        $http.get("https://api.github.com/users/aakashdeveloper")
             .then(onUserComplete, onError)

        $scope.name= "Angular App"
        $scope.product = Product;
    }

    app.controller("MainController", MainController)
}())






















/*function add(a,b){
    return a+b
}

(function(a,b){return a+b}())     
$scope
$rootScope
*/