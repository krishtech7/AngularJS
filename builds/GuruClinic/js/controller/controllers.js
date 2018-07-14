 

myApp.controller('searchController', ['$scope','$http', 
function searchController($scope,$http){
    $http.get('js/data.json').then(function(response){
        $scope.artists=response.data;
        $scope.artistOrder = 'name';
    });
    
}]);

myApp.controller('detailsController',['$scope','$http','$routeParams',  
function searchController($scope, $http, $routeParams){
    $http.get('js/data.json').then(function(response){
        $scope.artists=response.data;
        $scope.whichItem = $routeParams.itemId;

        if($routeParams.itemId > 0 ) {
            $scope.prevItem = Number($routeParams.itemId)  - 1;
        }
        else{
            $scope.prevItem =  $scope.artists.length-1;   //last element in the array
        }
        
        if($routeParams.itemId   <  $scope.artists.length-1  ) {
            $scope.nextItem = Number($routeParams.itemId)  +  1;
        }
        else{
            $scope.nextItem =   0;   //last element in the array
        }

    });
    
}]);