// IFFE
(function(){
    var app = angular.module("githubViewer",[]);
    var MainController = function($scope,github, $interval,
            $anchorScroll, $location){

        var onUserComplete = function(data){
            console.log(data)
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, onError)
        }

        var onRepos = function(data){
            $scope.repos = data;
            $location.hash("userDetails");
            $anchorScroll;
        }
        var onError = function(reason){
            $scope.error = " could not fetch data"
        }
    
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
            github.getUser(username).then(onUserComplete, onError)
            if(countdownInterval){
                $interval.cancel(countdownInterval)
                $scope.countdown = null;
            }
        }

        $scope.username = "aakashdeveloper"
        $scope.name= "Angular App"
        // $scope.product = Product;
        $scope.repoSortOrder = "-stargazers_count"
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