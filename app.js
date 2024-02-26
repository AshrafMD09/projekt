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


// let products = ["keyboard","mouse","pen","pad","monitor"];
// let colors =   ["red","white","blue"];
// let models =   [2023,2024];
// let showCount = 3;

// document.write(`<h1>Show ${showCount} Products </h1>`);

// for(let i = 0; i < showCount; i++){
//     document.write(`<div>`);
//     document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);

//     for(let j = 0; j < colors.length; j++){

//     }
//     document.write(`<p>${colors.join(" | ")}</p>`);

//     for(let k = 0; k < models.length; k++){

//     }
//     document.write(`<strong>${models.join(" | ")}</strong>`);
    
//     document.write(`</div>`);
// }


// The 3 Arrays
let myAdmins = ["Ahmed","Osama","Sayed","Stop","Samera"];
let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"];
let ActiveAdmins = [];

// Showing the Total of Admins (3)
for(let i = 0; i < myAdmins.length; i++){
    if(myAdmins[i] === "Stop"){
        break;
    }
    ActiveAdmins.push(myAdmins[i]);
}
document.write(`<h3> We Have ${ActiveAdmins.length} Admins </h3>`);
document.write(`<hr>`);

// The Admin For Team Number X is Admin X
for(let j = 0; j < myAdmins.length; j++){

    if(myAdmins[j] === "Stop"){
        break;
    }
        document.write(`<div>`);

        document.write(`<h2> The Admin For Team ${j + 1} is ${myAdmins[j]} </h2>`);
        document.write(`<h3> Team Members :</h3>`);

// Team Members sorted by Alphabets
    for(let k = 0; k < myEmployees.length; k++){
        if(myEmployees[k][0] === myAdmins[j][0]){
            document.write(`<p> - ${myEmployees[k]}</p>`);
        }
    }
        document.write(`<hr>`);
        document.write(`</div>`);

}


