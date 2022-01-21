
form.addEventListener("submit", getdata)
    var savedata = JSON.parse(localStorage.getItem("savedata")) || [];
function getdata(event){
    event.preventDefault()
    var firstname = document.querySelector("#firstname").value;
    var lastname = document.querySelector("#lastname").value;
    var birthday = document.querySelector("#birthday").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    
    var userobj={
        first : firstname,
        last : lastname,
        birthday: birthday,
        resemail: email,
        userpassword: password,
    }
    savedata.push(userobj)

    localStorage.setItem("savedata",JSON.stringify(savedata))
    window.location.href = "otp.html";



}
