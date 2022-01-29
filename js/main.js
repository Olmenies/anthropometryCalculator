/*
* Title: Antropometry calculator
* Description: Script used to calculate anthropometries
* Author: Nicolás Esteban Olmedo
*/

////////////////////////////////////////////////////////////////////////////////
//Here come the functions
////////////////////////////////////////////////////////////////////////////////

//function centimeterToMeterConverter to convert data from cm to m
const centimeterToMeterConverter = (_height) => { return (_height/100);};

//function calcIMC to calculate IMC
const calcIMC = (_height, _weight) => { return (_weight / Math.pow(centimeterToMeterConverter(_height),2));};

//function printLine to print a line of 20 asteriscs
function printLine(){
  let line = "*";

  for(i=0; i<=20; i++){
    line += "*";
  }//end of for loop
  console.log(line);
}//end of printLine function

//function verifyInput to verify the input type is correct
function verifyInput(_type, _message){
  let _input = prompt(_message);
  const _average = [];

  switch (_type) {
    case "string":
    while(_input == ""){
      console.log("Ingresar un valor numérico");
      _input = prompt(_message);
    }//end of while
    return _input;

    case "number":
    while(isNaN(_input) || (_input <= 0) || (_input == "")) {
      console.log("Ingresar un valor numérico");
      _input = prompt(_message);
    }//end of while
    return _input;

    default:
      console.log("No deberías estar acá, por favor reportalo.");
      break;
  }//end of switch
}//end of verifyInput function

//function dataOutput to print the results
function dataOutput(_person){
  printLine();
  console.log("Nombre: " + _person.name + "\nEdad:" + _person.age + "\nAltura: " + _person.height + "\nPeso: " + _person.weight + "\nIMC: " + _person.IMC );
  printLine();
}//end of function

////////////////////////////////////////////////////////////////////////////////
//Here come the classes
////////////////////////////////////////////////////////////////////////////////

//class Person that symbolizes a single person
class Person {
  constructor(){
    this.name = verifyInput("string", "Ingresar el nombre: ");
    this.age = parseInt(verifyInput("number", "Ingresar la edad: "));
    this.height = parseFloat(verifyInput("number", "Ingresar la altura: "));
    this.weight = parseFloat(verifyInput("number", "Ingresar el peso: "));
    this.IMC = parseFloat(calcIMC(this.height, this.weight));
  }//end of constructor
}//end of class Person

////////////////////////////////////////////////////////////////////////////////
//Here comes the script
////////////////////////////////////////////////////////////////////////////////

console.log("Bienvenido a la calculadora de antropometrías");

let option, isValid;
option = prompt("Ingresar 1 para ejecutar o cualquier otra tecla para salir");

do {
  if (option == 1) {
    const person = new Person();
    dataOutput(person);
    option = prompt("Ingresar 1 para ejecutar el programa o cualquier otra tecla para salir");
  }//end of if
  else{
    break;
  }//end of else
} while (option == 1);//end of do-while
