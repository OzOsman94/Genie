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



 
            

    function findSkill() {

        document.getElementById("list").innerHTML = " ";
        var skillz = document.getElementById("skill").value

firebase.database().ref('userSkills/').orderByChild('skill').equalTo(skillz).once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var username = userSnapshot.val();
        console.log(username.user);


        var htmlpri = "";
        
        htmlpri += "<div class='borderskill' style='border-style:outset;margin:40px;' >";
        htmlpri += "<button id='userSkills" + snapshot.key + "'>"
        htmlpri +=  "users:" + username.user;
        htmlpri += "</button>";
        htmlpri += "<br>";
        htmlpri += "<button id='contact' onclick='privatechat()'" + snapshot.key + "'>"
        htmlpri += "contact: " + username.user;
        htmlpri += "</button>";
        htmlpri += "<img src='User-green.svg' style='height:100px;width:100px;float:right;'></img>";
        htmlpri += "</div>";
        htmlpri += "<br><br><br><br>";
        

 
        document.getElementById("list").innerHTML += htmlpri;
    });
});
}