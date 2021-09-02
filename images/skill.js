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

    function sendSkill(skill) {
        firebase.database().ref("userSkills").push().set({
            
            "user": user.val(),
            "skill": skill 
        });
      };