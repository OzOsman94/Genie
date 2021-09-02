var date = Date()
    function sendMessage() {
        // get message
        var message = document.getElementById("message").value;
 
        // save in database
       auth.ref("messages").push().set({
            "sender": myName,
            "message": message,
            "time": date
        });
 
        // prevent form from submitting
        return false;
    }