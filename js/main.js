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

//function dataInput to verify the input type is correct
function dataInput(_type, _message){
  let _acc = 0, _input;
  const _arrayValues = new Array(1);

  switch (_type) {
    case "string":
    _input = prompt(_message);
    while(_input == ""){
      console.log("Ingresar nombre");
      _input = prompt(_message);
    }//end of while
    return _input;

    case "integer":
      do{
        _input = prompt(_message);
      }while(isNaN(_input) || (_input <= 0) || (_input == "")); //end of do-while

    return _input

    case "float":
      for(let i=0; i <= 1; i++){
        do{
          _input = parseFloat(prompt(_message + " (toma " + (i+1) + ")"));
        }while(isNaN(_input) || (_input <= 0) || (_input == ""));

        _arrayValues[i] = _input
        _acc = _acc + _arrayValues[i];
      }//end of for

      return _acc/_arrayValues.length;

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
    this.name = dataInput("string", "Ingresar nombre:");
    this.age = parseInt(dataInput("integer", "Ingresar la edad:"));
    this.height = parseFloat(dataInput("float", "Ingresar el peso en Kg"));
    this.weight = parseFloat(dataInput("float", "Ingresar la altura en Cm"));
    this.IMC =parseFloat(calcIMC(this.height, this.weight));
  }//end of constructor
}//end of class Person

////////////////////////////////////////////////////////////////////////////////
//Here comes the script
////////////////////////////////////////////////////////////////////////////////

console.log("Bienvenido a la calculadora de antropometrías");

let option; //Option for the user to choose
option = prompt("Ingresar 1 para ejecutar o cualquier otra tecla para salir")
const people = []; // Array to save people

do{
  if(option == 1)
  {
    const person = new Person();
    people.push(person);
    dataOutput(person);

    option = prompt("Ingresar 1 para ejecutar el programa o cualquier otra tecla para salir");
  }//end of if

  else{
    break;
  }//end of else
} while(option == 1);
