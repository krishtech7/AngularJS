myApp.factory('Authentication',
  ['$rootScope', '$location', '$firebaseObject', '$firebaseAuth',
  function($rootScope, $location, $firebaseObject, $firebaseAuth) {


  var ref  = firebase.database().ref();
  var auth = $firebaseAuth();
  var myObject;

auth.$onAuthStateChanged(function(authUser){
    if(authUser){
        var userRef = ref.child('users').child(authUser.uid);
        var userObj = $firebaseObject(userRef);
        $rootScope.currentUser = userObj;
    }
    else
    {
        $rootScope.currentUser = "";
    }
});

myObject = {
    login: function(user){ 
        auth.$signInWithEmailAndPassword(user.email,user.password).then
        (function(user){
            console.log("hi what is going on" +   user.uid);
            $location.path('/patientInfo'); 
        }).catch(function(error){
            $rootScope.message  = error.message;
        });//signinwithEmailAndPassword
    },//login

    logout: function(){
        return auth.$signOut();
    },//logout
    

    register: function(user) {
        
        auth.$createUserWithEmailAndPassword(
          user.email,
          user.password
        ).then(function(regUser) {
            var loggeduser = auth.currentUser;
            console.log("hi what is going on" +   loggeduser);
            $rootScope.message =  "Welcome" + user.fname + regUser.uid;
          var regRef = ref.child('users')
            .child(regUser.uid).set({
              date: firebase.database.ServerValue.TIMESTAMP,
              regUser: regUser.uid,
              firstname: user.fname,
              lastname: user.lname,
              email: user.email 
            }); //userinfo
            
            myObject.login(user);
        }).catch(function(error) {
          $rootScope.message = error.message + user.fname;
        }); //createUserWithEmailAndPassword
      }, //register

    requireAuth:function(){
        return auth.$requireSignIn();
    }
}
  return myObject;

 
} ]);//factory