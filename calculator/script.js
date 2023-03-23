let keys=document.querySelector(".calculator-keys");

let input =document.querySelector(".calculator-input");

let inputValue="0";

updateValue();

function updateValue(){
    input.value=inputValue;
};


keys.addEventListener("click",function(e){
    let element=e.target;
    if(!element.matches("button")) return;

    if(element.classList.contains("operator")){
        console.log("operator",element.value);
        return;
    }
    if(element.classList.contains("decimal")){
        // console.log("operator",element.value);
        
        inputDecimal();
        updateValue();
        return;
    }
    if(element.classList.contains("clear")){
        clear();
        updateValue();
        return;
    }
    inputNumber(element.value);
    updateValue();
});

function inputNumber(num){
    inputValue=inputValue === "0" ? num: inputValue + num;
};

function inputDecimal() {
    if (!inputValue.includes('.')) {
        inputValue += '.';
    }
};

function clear() {
    inputValue = '0';
};



