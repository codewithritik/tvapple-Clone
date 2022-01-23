
loginform.addEventListener("submit", mylogin)
 var reguser = JSON.parse(localStorage.getItem("savedata"))

function mylogin(event){
    event.preventDefault();
    var email= document.querySelector("input").value
    for(var i=0; i<reguser.length; i++){
        if(reguser[i].resemail==email){
           window.location.href="homepage.html"
           break;
            
        }
        else{
            alert("check your email")
            break;
        }
    }

}