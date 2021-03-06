/*
* Title: Antropometry calculator
* Description: Script used to calculate anthropometries
* Author: Nicolás Esteban Olmedo
*/
////////////////////////////////////////////////////////////////////////////////
//Here comes the script
////////////////////////////////////////////////////////////////////////////////

console.log("Bienvenido a la calculadora de antropometrías");

const arrayPeople = [];
const DateTime = luxon.DateTime;
const Interval = luxon.Interval;

restoreData(); //Restore the data from the local storage

let myButtonCalculate = document.getElementById("buttonCalculate");
let myButtonPrint = document.getElementById("buttonPrint");
let myButtonClean = document.getElementById("buttonClean");

myButtonCalculate.addEventListener("click", verifyInput);
myButtonPrint.addEventListener("click", () => {clearDom(fatherResults); printAllResultsDOM(fatherResults, arrayPeople);});
myButtonClean.addEventListener("click", () => {clearDom(fatherResults);});

////////////////////////////////////////////////////////////////////////////////

let myTabButtonSearch = document.getElementById("form__tab__search");
myTabButtonSearch.addEventListener("click", utilityTBD);

/////////////////////////////////////////////////////////////////////////////////
/*
fetch("https://jsonplaceholder.typicode.com/posts")
.then((resp) => resp.json())
.then((dato) => console.log(dato))
*/

/////////////////////////////////////////////////////////////////////////////////
