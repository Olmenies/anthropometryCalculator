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
let myButtonClean = document.getElementById("buttonClean");

myButtonCalculate.addEventListener("click", verifyInput);
myButtonPrint.addEventListener("click", () => {clearDom(fatherResults); printAllResultsDOM(fatherResults, arrayPeople)});
myButtonClean.addEventListener("click", () => {clearDom(fatherResults)});

////////////////////////////////////////////////////////////////////////////////

let myTabButtonInput = document.getElementById("form__tab__input");
let myTabButtonResults = document.getElementById("form__tab__results");

/////////////////////////////////////////////////////////////////////////////////
