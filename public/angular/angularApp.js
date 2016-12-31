angular
    .module('app',[])
    .controller('HomeController',HomeController);

HomeController.$inject = ['$scope','$http']

function HomeController($scope,$http) {
    $scope.test = 'This is test variable'
    $scope.test1 = {};
    $http.get('/test')
    .then(function(response){
        console.log(response)
    })
}