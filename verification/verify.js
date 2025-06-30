let nam = document.getElementById("name");
let mail = document.getElementById("mail");
let pass = document.getElementById("pass");
let word = document.getElementById("word");

function submit (){
    if ((nam.value).include ("@") && (nam.value).inclue (".")){
        mail.innerHTML = "";
    } else {
        mail.innerHTML = "Enter an e-mail";
        mail.style.color = "red";
    }


}

// let check = document.getElementById("login");
// check.addEventListener("click", submit);