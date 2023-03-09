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

function checkEmail(input) 
{
 const re= /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;
 
 if(re.test(input.value)){
    success(input);
 }
 else{
    error(input,"email address is not correct");
 }
};

// function checkLength(input,min,max){
//     if(input.value.length<min){
//         error(input,`${input.i}`)
//     }
// }


function chechRequired(inputs){
    inputs.forEach(function(input){
        if(input.value===""){
            error(input,`${input.id} is required`);
        
        }
        else{
            success(input);
        }
    })
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    chechRequired([username,email,password,repassword]);

    checkEmail(email);
});

