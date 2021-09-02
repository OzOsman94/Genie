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

  function showPass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
      } else {
      x.type = "password";
    }
  }

  const auth = firebase.auth();

  function register(){
   
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var passValid = document.getElementById("passValid");

    if(password.value==passValid.value){
      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));

      alert("registered!!")
      }
 }


