
loginform.addEventListener("submit", mylogin)
 var reguser = JSON.parse(localStorage.getItem("savedata"))

function mylogin(event){
    event.preventDefault();
    var email= document.querySelector("input").value
    for(var i=0; i<reguser.length; i++){
        if(reguser[i].resemail==email){
            alert("sucess")
            var password = document.createElement("input")
            password.textContent="";
            document.querySelector("#loginform").append(password)
            var loginpass = password.value
            for(var j=0; j<reguser.length; j++){
                if(reguser[j].userpassword==password)
                {
                    alert("login sucess")
                    break;
                }
            }

        }
        else{
            alert("check your email")
            break;
        }
    }

}