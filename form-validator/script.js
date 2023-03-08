const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function error(input, message) {

    input.className = "form-control is-invalid";
    const div = input.nextElementSibling;
    //nextElementSibling property returns the next element in the same tree level.
    div.innerText = message;
    div.className = "invalid-feedback";
};

function success(input) {
    input.className = "form-control is-valid";
};

function ValidateEmail(email) 
{
 const re= /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;
 return re.test(String(email).toLowerCase());
};

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (username.value === "") {
        error(username, "username is required");
    }
    else {
        success(username);
    }
    if (email.value === "") {
        error(email, "email is required");
    }
    else if(!ValidateEmail(email)){
        error(email,"enter correct e-mail address");
    }
    else {
        success(email);
    }
    if (password.value === "") {
        error(password, "password is required");
    }
    else {
        success(password);
    }
    if (repassword.value === "") {
        error(repassword, "repassword is required");
    }
    else {
        success(repassword);
    }
})

