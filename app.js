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


for(let i=0; i<20;i++){
    document.write(i+"Hallo!!!!!!!")
}
