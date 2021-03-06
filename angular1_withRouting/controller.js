// IFFE
(function(){
    var app = angular.module("githubViewer");
    var MainController = function($scope, $interval,$location){

        var decrementCountDown = function(){
            $scope.countdown -=1;
            if($scope.countdown < 1){
                $scope.search($scope.username);
            }
        }
        var countdownInterval = null;
        var startCountdown = function(){
            countdownInterval = $interval(decrementCountDown, 1000, $scope.countdown);
        }

        $scope.search = function(username){
            if(countdownInterval){
                $interval.cancel(countdownInterval)
                $scope.countdown = null;
            }
            $location.path("/user" + username);
        }

        $scope.username = "aakashdeveloper"
        $scope.countdown = 5;
        startCountdown();
    }

    app.controller("MainController", MainController)
}())





/*
    var Product = {
        productName: "Video Game Controller",
        productCode: "GMG-0042",
        releaseDate: "October 15, 2015",
        description: "Standard two-button video game controller",
        price: 35.95,
        starRating: 4.6,
        imageUrl: "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
*/


















/*function add(a,b){
    return a+b
}

(function(a,b){return a+b}())     
$scope
$rootScope
*/