
		var firebaseConfig = {
    apiKey: "AIzaSyCFHHk3d5qqGLG_FIXeZYYBsedXnAFzonM",
    authDomain: "pkmshowdown.firebaseapp.com",
    projectId: "pkmshowdown",
    storageBucket: "pkmshowdown.appspot.com",
    messagingSenderId: "552351151919",
    appId: "1:552351151919:web:cea76ef1405317894553da",
    measurementId: "G-R2QT3E1M8J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var myName = prompt("enter name");



/////////////////////////////////////////////////////////////////////////////////////////////////////
    




    


    firebase.database().ref("messages").on("child_added", function (snapshot) {
        var html = "";
        
        html += "<li id='message-" + snapshot.key + "'>";
      
        html += snapshot.val().sender + ": " + snapshot.val().message;
        html += "</li>";
 
        document.getElementById("messages").innerHTML += html;

          });


   firebase.database().ref("privates").orderByChild("pm").equalTo(myName).on("child_added", function(snapshot) {

       var htmlpri = "";
        
        htmlpri += "<li id='message-" + snapshot.key + "'>";
      
        htmlpri += snapshot.val().sender + ": " + snapshot.val().message;
        htmlpri += "</li>";
 
        document.getElementById("privates").innerHTML += htmlpri;

          });

    firebase.database().ref("privates").orderByChild("self").equalTo(myName).on("child_added", function(snapshot) {

       var htmlpri = "";
        
        htmlpri += "<li id='message-" + snapshot.key + "'>";
      
        htmlpri += snapshot.val().sender + ": " + snapshot.val().message;
        htmlpri += "</li>";
 
        document.getElementById("privates").innerHTML += htmlpri;

          });
   
   
   

      
  


/////////////////////////////////////////////////////////////////////////////////////////////////////



    function sendMessage() {
        var pri = document.getElementById("private").value

        if (pri.length == 0 ){

          // get message
        var message = document.getElementById("message").value;
        var private = document.getElementById("private").value;
 
        // save in database
        firebase.database().ref("messages").push().set({
            "sender":myName,
            "message":message
        });

        var field = document.getElementById("message");

        field.value= ' ';
 
        // prevent form from submitting
        return false;
            
            } else {


          // get message
        var message = document.getElementById("message").value;
        var private = document.getElementById("private").value;

 
        // save in database
        firebase.database().ref("privates").push().set({
            "sender":myName,
            "message":message,
            "pm":private,
            "self":myName
        });

        var field = document.getElementById("message");

        field.value= ' ';
 
        // prevent form from submitting
        return false;
            
            }





        

}



function privatechat(){

    var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
    win.window.location = 'chatcheck.html'



}

