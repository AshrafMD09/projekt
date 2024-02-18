let inputTxt = document.querySelector(".inputTxt");
let subBtn = document.querySelector(".subBtn");
let resetBtn = document.querySelector(".resetBtn");


function printWord(){
    alert(inputTxt.value);
    
}

function clearWord(){
    inputTxt.value = "";
}

subBtn.addEventListener("click", printWord);
resetBtn.addEventListener("click", clearWord);


console.log('heeeey');
console.log('heeeey');
