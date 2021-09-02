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


  function verify(){


    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
    alert("Email has been sent")
    window.location.href = "prjloginForm.html"
    }).catch(function(error) {
    alert("error")
    });
  }