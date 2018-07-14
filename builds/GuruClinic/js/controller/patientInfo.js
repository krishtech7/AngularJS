myApp.controller('patientInfoController', ['$scope','$firebaseArray','$rootScope','$firebaseAuth', 
 function($scope,$firebaseArray,$rootScope,$firebaseAuth ) {
  
var ref= firebase.database().ref();
var auth = $firebaseAuth();

auth.$onAuthStateChanged(function(authUser){
  //onAuthStateChanged
  if(authUser){
    var meetingRef = ref.child('users').child(authUser.uid).child('patientInfo'); 
    var meetingArr = $firebaseArray(meetingRef);
   
     
  }//authuser
   $scope.patients = meetingArr;

   $scope.order="firstname";
    $scope.direction=null;
    $scope.query='';
  
  meetingArr.$loaded().then(function(data){
     $rootScope.patientLists=meetingArr.length;
  }) ;//make sure data is added

  meetingArr.$watch(function(data){
    $rootScope.patientLists=meetingArr.length;
 }) ;//make sure data is not counted while entering

  $scope.addPatient = function(){
  //add fields in meetingarr array
      meetingArr.$add({
      name: $scope.pName,
      date: firebase.database.ServerValue.TIMESTAMP,
      dob:$scope.pDob,
      gender:$scope.pgender
     
    }).then(function(){
        $scope.pName="";
      // $rootScope.ptName=$scope.pName;
  });//success function
}//addPatient

$scope.deletePatient = function(key){
  meetingArr.$remove(key);
}//delete


})//OnAuthStateChanged
 }]);//controller