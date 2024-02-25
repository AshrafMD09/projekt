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

// let zero = 0;
// let counter = 3;

// let my = ["Ahmed","Mazero","Elham","Osama","Gamal","Ameer" ];
// let colors =["red","white","blue"];
// let onlyNames = [];
// my = my.slice(zero,++counter).reverse();
// // console.log(my);

// my = my.slice(++zero,--counter);
// // console.log(my);

// my = my[--zero].slice(zero,--counter)+my[++zero].slice(++zero);
// // console.log(my);


// my1 = my.slice(-(counter),-(--counter));

// my2 = my.slice(-(counter)).toUpperCase();


// console.log(my1 + my2);



// for(let i = 0; i < my.length; i++){

//         console.log(`# ${my[i]}`);
        
        
    
//     for(let j = 0; j < colors.length; j++){
//         console.log(`+ ${colors[j]}`);
//         // console.log(`---------`);
//     }
//     console.log(`---------`);
// }


let products = ["keyboard","mouse","pen","pad","monitor"];
let colors =["red","white","blue"];
let showCount = 3;

document.write(`<h1>Show ${showCount} Products </h1>`);

for(let i = 0; i < showCount; i++){
    document.write(`<div>`);
    document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
    
    for(let j = 0; j < colors.length; j++){
    // document.write(`<p>${colors[j]}</p>`);
    }
    document.write(`<p>${colors.join(" | ")}</p>`);

    document.write(`</div>`);
}