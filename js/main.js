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

restoreData() //Restore the data from the local storage

let myButtonCalculate = document.getElementById("buttonCalculate");
let myButtonPrint = document.getElementById("buttonPrint");

myButtonCalculate.addEventListener("click", verifyInput);
myButtonPrint.addEventListener("click", () => {clearDom(fatherResults); printDom(fatherResults, arrayPeople)});

////////////////////////////////////////////////////////////////////////////////

let myTabButtonInput = document.getElementById("form__tab__input");
let myTabButtonResults = document.getElementById("form__tab__results");

/////////////////////////////////////////////////////////////////////////////////
