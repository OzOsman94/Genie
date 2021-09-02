// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBJUmsl9RGEit_ppEnnxeouvXeWFkAjr7A",
    authDomain: "showdownprj.firebaseapp.com",
    projectId: "showdownprj",
    storageBucket: "showdownprj.appspot.com",
    messagingSenderId: "237417581155",
    appId: "1:237417581155:web:d13010f0b5686716634656"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  var user = auth.currentUser;


auth.onAuthStateChanged(function(user){

  if (user.displayName == null){

     user.updateProfile({
      displayName: prompt("name")
     }).then(function(){
       alert(user.displayName);
     })

     localStorage.setItem('nameuser', user.displayName);

  }else{

    alert(user.displayName)

    document.getElementById("userName").innerHTML = user.displayName;

  }
      
  });

function signout(){

    auth.signOut();

    alert("Good bye!!");
    window.location.href = "prjloginForm.html"

 }




    function sendSkill(skill) {
        const name = localStorage.getItem('nameuser');
        firebase.database().ref("userSkills").push().set({
            
            "user": name,
            "skill": skill 
        });
      };


