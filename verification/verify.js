let nam = document.getElementById("name");
let mail = document.getElementById("mail");
let pass = document.getElementById("pass");
let word = document.getElementById("word");
let last = document.getElementById("last");
let output = document.getElementById("output");

function submit (){
    if ((nam.value).includes("@") && (nam.value).includes(".")){
        mail.innerHTML = " ";
        // mail.style.color ="green"
    } else {
        mail.innerHTML = "Enter an e-mail";
        mail.style.color = "red";
    }

    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passRegex.test(pass.value)) {
      word.innerHTML = "Valid password";
      word.style.color = "green";
    } else {
      word.innerHTML =
        "Password should contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character";
      word.style.color = "red";
    }

    if ((last.value.length < 6 ) || (last.value.length > 15 )){
        output.innerHTML = "";
        
    } else {
        output.innerHTML = "Name must be less than 6 and greather than 15 characters";
        output.style.color = "red";
    }


}

let check = document.getElementById("login");
check.addEventListener("click", submit);

const sign = [
  {
    icon: `<i class="fa-brands fa-google"></i>`,
    account: `Login with Google`,
  },
  {
    icon: `<i class="fa-brands fa-x-twitter"></i>`,
    account: `Login with X (or twitter)`,
  },

  {
    icon: `<i class="fa-brands fa-facebook"></i>`,
    account: `Login with Facebook`
  },
];

let auto = sign 
.map(
    (item) => `
    <div class="list-class">
        <p class="icon">${item.icon}</p>
        <p>${item.account}</p>
    </div>
    `
    
)

.join("");
document.getElementById("list").innerHTML = auto;

let navlink = document.getElementById("navlink");
function show() {
  navlink.style.right = "0";
}
function hide() {
  navlink.style.right = "-200px";
}


