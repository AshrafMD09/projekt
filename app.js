// let inputTxt = document.querySelector(".inputTxt");
// let subBtn = document.querySelector(".subBtn");
// let resetBtn = document.querySelector(".resetBtn");


// function printWord(){
//     alert(inputTxt.value);
    
// }

// function clearWord(){
//     inputTxt.value = "";
// }

// subBtn.addEventListener("click", printWord);
// resetBtn.addEventListener("click", clearWord);


// for(let i=0; i<20;i++){
//     document.write(i+"Hallo!!!!!!!")
// }

// // heute 
// for(let i=0; i<20;i++){
//     document.write(i+"Hallo!!!!!!!")
// }

let zero = 0;
let counter = 3;

let my = [ 1, 3, "Ahmed","Mazero","Elham","Osama","Gamal","Ameer" ];
let onlyNames = [];
// my = my.slice(zero,++counter).reverse();
// // console.log(my);

// my = my.slice(++zero,--counter);
// // console.log(my);

// my = my[--zero].slice(zero,--counter)+my[++zero].slice(++zero);
// // console.log(my);


// my1 = my.slice(-(counter),-(--counter));

// my2 = my.slice(-(counter)).toUpperCase();


// console.log(my1 + my2);



for(let i =0; i < my.length;i++){
    
    if( typeof my[i] === "string" ){
        onlyNames.push(my[i]);
    }
}

console.log(onlyNames);