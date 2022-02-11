/*
* Title: Antropometry calculator
* Description: Script used to calculate anthropometries
* Author: Nicolás Esteban Olmedo
*/

/*To do:
1. Ask on afterclass the concatenation varname
2. Remove the switch on dataInput()
3. Review the process of adding persons to the array of people
4. Divide saveDada() on two different functions
5. On the switch, change getElementById for getElementByClass and use a for to iterate
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
function dataInput(_type){
  let _acc = 0, _input;
  const _arrayValues = new Array(1);

  switch (_type) {
    case "name":
    _input = document.getElementById("inputName");
    return _input.value;

    case "surname":
    _input = document.getElementById("inputSurname");
    return _input.value;

    case "age":
    _input = document.getElementById("inputAge");
    return _input.value;

    case "height":
    _acc = parseFloat(document.getElementById("inputHeight0").value) + parseFloat(document.getElementById("inputHeight1").value)
    return _acc/2;

    case "weight":
    _acc = parseFloat(document.getElementById("inputWeight0").value) + parseFloat(document.getElementById("inputWeight1").value)
    return _acc/2;

/*
    case "float":
    for(let i=0; i <= 1; i++){
      do{
        _input = parseFloat(prompt(_message + " (toma " + (i+1) + ")"));
      }while(isNaN(_input) || (_input <= 0) || (_input == ""));

      _arrayValues[i] = _input;
      _acc = _acc + _arrayValues[i];
    }//end of for

    return _acc/_arrayValues.length;
*/

//hacer con la clase y recorrerlo por ahí, devuleve un "array" htmlcollection y puedo iterar sobre ese con un for

    default:
    console.log("No deberías estar acá, por favor reportalo.");
    break;
  }//end of switch
}//end of verifyInput function


//function dataOutput to print the results
function dataOutput(_person){
  printLine();
  console.log("Nombre: " + _person.name + "\nApellido: " + _person.surname + "\nNombre completo: " + _person.fullname + "\nEdad:" + _person.age + "\nAltura: " + _person.height + "\nPeso: " + _person.weight + "\nIMC: " + _person.IMC );
  printLine();
}//end of function

//function saveData to create a new person and print the results on the DOM. It has to be divided in two different functions
function saveData(){

  const person = new Person();
/*
  console.log(person.name);
  console.log(person.surname);
  console.log(person.fullname);
  console.log(person.age);
  console.log(person.height);
  console.log(person.weight);
*/
  console.log(person.IMC);

  let results = document.createElement("div");
  results.innerHTML = `
                        <h2 class="mt-5"> Resultados: </h2>
                        <span>Nombre: ${person.name}</span>
                        <span>Apellido: ${person.surname}</span>
                        <span>Código: ${person.fullname}</span>
                        <span>Edad: ${person.age}</span>
                        <span>Altura: ${person.height}</span>
                        <span>Peso: ${person.weight}</peso>
                        <span>IMC: ${person.IMC}</span>
                        `;
  document.getElementById("fatherResults").appendChild(results);
}

////////////////////////////////////////////////////////////////////////////////
//Here come the classes
////////////////////////////////////////////////////////////////////////////////

//class Person that symbolizes a single person

class Person {
  constructor(){
    this.name = dataInput("name");
    this.surname = dataInput("surname");
    this.fullname =this.name.toUpperCase() + this.surname.toUpperCase();
    this.age = dataInput("age");
    this.height = parseFloat(dataInput("height"));
    this.weight = parseFloat(dataInput("weight"));
    this.IMC =parseFloat(calcIMC(this.height, this.weight));
  }//end of constructor
}//end of class Person

////////////////////////////////////////////////////////////////////////////////
//Here comes the script
////////////////////////////////////////////////////////////////////////////////

console.log("Bienvenido a la calculadora de antropometrías");

let option; //Option for the user to choose
//option = prompt("Ingresar 1 para ejecutar o cualquier otra tecla para salir");
//const arrayPeople = []; // Array to save people

let element = document.getElementById("buttonCalculate");
element.addEventListener("click", saveData);

/*
//we'll iterate until a option different of 1 is instroduced
do{
if(option == 1)
{
const person = new Person(); //we instanciate a new person
const flag = arrayPeople.find((el) => el.fullname === person.fullname); //we evaluate if a person with the same fullname already exists

//if a person with the same fullname already exists...
if(flag){

//we'll iterate over the array until we find the element with the sane fullname
for(const element of arrayPeople){

//we change the values for the element
if(element.fullname === person.fullname){
element.age = person.age;
element.height = person.height;
element.weight = person.weight;
element.IMC = person.IMC;
}//end of internal if
}//end of for
}//end of external if

else {
console.log("estoy en el else");
arrayPeople.push(person);
} //end of else

dataOutput(person); //we print the results on the console

option = prompt("Ingresar 1 para ejecutar el programa o cualquier otra tecla para salir");
}//end of if

else{
break;
}//end of else
} while(option == 1);
*/
