var myApp = angular.module('myApp',['ngRoute','firebase']);

// myApp.controller('myController',['$scope', function($scope){
//  $scope.message  = 'welcome to my app';
// }]);

myApp.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
      if (error == 'AUTH_REQUIRED') {
        $rootScope.message = 'Sorry, you must log in to access that page';
        $location.path('/login');
      }//Auth Required
    }); //$routeChangeError
  }]); //run

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/home',{
        templateUrl:'views/home.html',
        controller:'registrationController'
    })
    .when('/login',{
        templateUrl:'views/login.html',
        controller:'registrationController'
    }).
    when('/register',{
        templateUrl:'views/register.html',
        controller:'registrationController'
    }).
    when('/checkins/:uId/:mId',{
        templateUrl: 'views/checkins.html',
        controller: 'checkInsController' 
        
    }). 
    when('/checkins/:uId/:mId/checkinList',{
        templateUrl: 'views/checkinList.html',
        controller: 'checkInsController' 
        
    }).
    when('/patientsList',{
        templateUrl: 'views/patientsList.html',
        controller: 'patientInfoController' 
        
    }).
    when('/patientInfo',{
        templateUrl:'views/patientInfo.html',
        controller:'patientInfoController',
        resolve:{
            currentAuth: function(Authentication){
                return Authentication.requireAuth();
            }
        }//success
    }).
    when('/search', {
        templateUrl: 'views/search.html',
        controller: 'searchController'
    })//search
    .when('/details:itemId', {
        templateUrl: 'views/details.html',
        controller: 'detailsController'
    }).
    when('/contact', {
        templateUrl: 'views/contact.html',
        controller: ' '
    }).
    otherwise({
        redirectTo:'/home'
    });
}]);