otpinput.addEventListener("keyup",myotp)

function myotp(){
    var input = document.getElementById("otpinput").value
    if(input=="12345"){
        window.location.href = "loginpage.html";
    }

}
