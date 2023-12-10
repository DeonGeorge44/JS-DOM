//---------------------------Sample On Accessing Dom--------------------------------------------------------------------------------------------------
// ************DOM SELECTORS*******************************
//1.getElementByTagName
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);

//2.getElementById
console.log(document.getElementById("id-1"));

//3.getElementByClassName
console.log(document.getElementsByClassName("cls"));

//4.querySelector
//most used one is "query Selector"
console.log(document.querySelector(".cls"));
console.log(document.querySelector("#id-1"));

//5.querySelectorAll
console.log(document.querySelectorAll(".cls"));
console.log(document.querySelectorAll("li"));

//Storing Data Variables
const h1 = document.querySelector("h1");
console.log(h1);

//----------------------------------------------------------------------
//Storing Data in Variables

// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
const h4 = document.getElementsByTagName("h4");
console.log(h4);

// 2. Select div with the class of "green" which holds text (Green) by using getElementsByTagName
const div = document.getElementsByClassName("green");
console.log(div);

// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsByClassName
const divTwo = document.getElementById("blue");
console.log(divTwo);

// 4. Select div which has the class & Id of "yello" by using querySelector()
const divThree = document.querySelector("#yellow");
console.log(divThree);

// 5. Select all the elements which has the class of "teal" by using querySelectorAll
const divAll = document.querySelectorAll(".teal");
console.log(divAll);
