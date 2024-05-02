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


// // The 3 Arrays
// let myAdmins = ["Ahmed","Osama","Sayed","Stop","Samera"];
// let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"];
// let ActiveAdmins = [];

// // Showing the Total of Admins (3)
// for(let i = 0; i < myAdmins.length; i++){
//     if(myAdmins[i] === "Stop"){
//         break;
//     }
//     ActiveAdmins.push(myAdmins[i]);
// }
// document.write(`<h3> We Have ${ActiveAdmins.length} Admins </h3>`);
// document.write(`<hr>`);

// // The Admin For Team Number X is Admin X
// for(let j = 0; j < myAdmins.length; j++){

//     if(myAdmins[j] === "Stop"){
//         break;
//     }
//         document.write(`<div>`);

//         document.write(`<h2> The Admin For Team ${j + 1} is ${myAdmins[j]} </h2>`);
//         document.write(`<h3> Team Members :</h3>`);

// // Team Members sorted by Alphabets
//     for(let k = 0; k < myEmployees.length; k++){
//         if(myEmployees[k][0] === myAdmins[j][0]){
//             document.write(`<p> - ${myEmployees[k]}</p>`);
//         }
//     }
//         document.write(`<hr>`);
//         document.write(`</div>`);

// }


// function hiringTest(...data){

//     let name, age, isAvailable;

//     for(let i = 0; i < data.length; i++){

//         typeof (data[i]) === "string" ? 
//             name =  data[i]

//         : typeof (data[i]) === "number" ? 
//             age = data[i]

//         : data[i] === true ?
//             isAvailable = ", you are Available for Hire" :  isAvailable = ", you are not Available for Hire";
// }
// document.write(`<h3>Hello ${name}, 
//                 Your Age is ${age}
//                 ${isAvailable}.</h3>`);
// }

// hiringTest(false, "ashraf" , 34);
// hiringTest("ashraf", true , 34);
// hiringTest("ashraf", 22 , false);

// let swappingCases = "elZERo";
// let invertedNumbers = [1,-10,-20,100,-30];
// let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases.split("").map( function (e){
//     return e == e.toLowerCase() ? e.toUpperCase() : e.toLowerCase();
// }).join("");

// console.log(sw);

// let inv = invertedNumbers.map(function (e){
//     return -e;
// });

// console.log(inv.join(" | "));

// let igNum = ignoreNumbers.split("").map( function (e){
//     return isNaN(e) ? e : "";
// }).join("");

// console.log(igNum);


// let igStr = ignoreNumbers.split("").map( function (e){
//     return isNaN(e) ? "" : e;
// }).join("");


// console.log(igStr);

// let people = ["Ahmed","Osama","Sayed","Stop","Samera"];

// let pp = people.filter(function(e){
//     return e[0] == "S";
//     // return e.startsWith("S");
// });


// console.log(pp);

// let sentence = "I Love Foood Code Too Playing Much";

// let ftc = sentence.split(" ").filter(function (e){
//     return e.length <= 4  ;
// });

// console.log(ftc.join(" "));

// let ignoreNumbers = "Elz123er4o";

// let igNum = ignoreNumbers.split("").filter( function (e){
//     return isNaN(e);
// }).join("");

// console.log(igNum);

// let mix = "A13BS2ZX";

// let mx = mix.split("").filter(function(e){
//     return !isNaN(parseInt(e));
// })
// .map(function (e){
//     return e*e;
// })
// .join(" | ");

// console.log(mx);

// let list = [1,2,3,4];

// let ls = list.reduce( function (acc,ele){
// return acc + ele; 
// }, 10); // start mit 10 

// console.log(ls); // Output : 10 + die summe von allen zahlen auf dem array

// let theBiggest = ["Bla","Propaganda","Other","AAA","Batteooooory","Test"];

// let check = theBiggest.reduce(function(acc,current){
//     return  acc.length > current.length ? acc : current;
// });

// console.log(check);


// let removeChars = ["E","@","@","L","Z","@","@","E","R","@","O"];

// let rmv = removeChars.filter(function(e){
//     // return e === "@" ? "" : e;
//        return !e.startsWith("@");

// }).reduce( function(acc,curr){
//     return `${acc}${curr}`;
// });

// console.log(rmv);



// let myString = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split(",").map(function(e){

//     return !isNaN(e) ?
//     e =  "" : e === "_" ? e = " "  :
//     e.startsWith("E") ? e = "E" : e.startsWith("Z") ? e = "" : e
    
// }).reduce(function(e,curr){
//     return `${e}${curr}`;
// });

// console.log(solution); // Output is : Elzero web School

let y=2
console.log(++y);
