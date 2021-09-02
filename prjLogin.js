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
  
  function signin(){
   
    var email = document.getElementById("email");
    var password = document.getElementById("password");
  
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Welcome "+email.value+"!!");

    var user = auth.currentUser;
    var email_ver = user.emailVerified;

  if(user){
      var email = user.email;
      var email_ver = user.emailVerified;
      alert("Active User " + email + " \nverified : "+ email_ver);      
    }

  if (email_ver){
      window.location.href = "index.html"
      }else{
      window.location.href = "email-verifier.html"
      }

 }




