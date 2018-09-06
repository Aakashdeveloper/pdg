// IFFE
(function(){
    var app = angular.module("githubViewer");
    var UserController = function($scope,github, $routeParams){

        var onUserComplete = function(data){
            console.log(data)
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, onError)
        }

        var onRepos = function(data){
            $scope.repos = data;
        }
        var onError = function(reason){
            $scope.error = " could not fetch data"
        }

        $scope.username = $routeParams.username
        $scope.name= "Angular App"
        $scope.repoSortOrder = "-stargazers_count"
        github.getUser($scope.username).then(onUserComplete, onError)
    }

    app.controller("UserController", UserController)
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