myApp.controller('checkInsController', ['$scope','$firebaseArray','$rootScope','$firebaseObject',
'$routeParams','$location',
 function($scope,$firebaseArray,$rootScope,$firebaseObject,$routeParams,$location) { 
    var patientRef 
    var checkin;
    $scope.patientId = $routeParams.mId;
    $scope.userId = $routeParams.uId;
    var dbref=firebase.database().ref();

    var ref= dbref.child('users')
               .child( $scope.userId)
               .child('patientInfo')
               .child($scope.patientId)
               .child('consultation');

    
     //make sure data is added
     patientRef = firebase.database().ref().child('users').child($scope.userId).child('patientInfo')
    .child($scope.patientId)
    var userObj = $firebaseObject(patientRef);
    $scope.currentPatient = userObj;

  //   //no of consultation per patients  array
  //   var consArr = $firebaseArray(ref);
  //   $scope.consultArr=consArr;
  //   patientArr.$loaded().then(function(data){
  //     $rootScope.noconsult=consArr.length;
  //  }) ;//make sure data is added
    
  //get all the consultation per patient
    checkin=$firebaseArray(ref);
    $scope.checkinList=checkin;
    
    
   

    $scope.addcheckin = function(){
        console.log("add checkin");
        // console.log($rootScope.currentPatient+ "add");
      $firebaseArray(ref).$add({
          cDate:firebase.database.ServerValue.TIMESTAMP,
          drNotes:$scope.user.drnotes,
          CName:$scope.user.cName

      }).then(function(){
        console.log("added checkin");
        //  $location.path('/checkins/'+ $scope.userId + "/" + $scope.patientId + "/" + 'checkinList')
      });//add
          
     
    }//addcheckin
 }]);//controller