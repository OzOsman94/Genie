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



 <!-- create a form to send message -->
<form onsubmit="return sendMessage();">
    <input id="message" placeholder="Enter message" autocomplete="off">
 
    <input type="submit">
</form>
     
<script>
    function sendMessage() {
        // get message
        var message = document.getElementById("message").value;
 
        // save in database
        firebase.database().ref("messages").push().set({
            "sender": myName,
            "message": message
        });
 
        // prevent form from submitting
        return false;

</script>
