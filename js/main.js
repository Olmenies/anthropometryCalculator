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
function printLine()
{
  let line = "*";

  for(i=0; i<=20; i++)
  {
    line += "*";
  }//end of for loop
  console.log(line);
}//end of printLine function

//function dataInput to verify the input type is correct *** This function should be deprecated as it was useful only when working with console ***
function dataInput(_type)
{
  let _acc = 0; //accumulator variable
  let _input; //variable to temporary save the input introduced before checking if it's correct

  switch (_type)
  {
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
    let collectionHeight = document.getElementsByClassName("inputHeight");
    for (const el of collectionHeight)
    {
      _acc += parseFloat(el.value);
    }//end of for
    return _acc/collectionHeight.length;

    case "weight":
    let collectionWeight = document.getElementsByClassName("inputWeight");
    for (const el of collectionWeight)
    {
      _acc += parseFloat(el.value);
    }//end of for
    return _acc/collectionWeight.length;

    default:
    console.log("No deberías estar acá, por favor reportalo.");
    break;
  }//end of switch
}//end of verifyInput function

//function saveData to create a new person and print the results on the DOM. It has to be divided in three different functions
function saveData()
{
  const person = new Person(); //instanciation of a new person
  const flag = arrayPeople.some((el) => { return el.fullname === person.fullname}); //we evaluate if a person with the same fullname already exists --> Flag is alwas undefined

  //if a person with the same fullname already exists...
  if(flag == true)
  {
    console.log("I'm on the if");
    //we'll iterate over the array until we find the element with the sane fullname
    for(const element of arrayPeople){

      //if the person already exists (according to the fullname), we update it's values
      if(element.fullname === person.fullname){
        element.age = person.age;
        element.height = person.height;
        element.weight = person.weight;
        element.IMC = person.IMC;
      }//end of internal if
    }//end fo for-loop
  }//end of external loop

  //else, we add a new person to the array ---------------------> ***is this fine or should I concatenate a new array?***
  else
  {
    console.log("I'm on the else");
    arrayPeople.push(person);
  }//end of else


  for(let i=0; i<= arrayPeople.length; i++){
    console.log(arrayPeople[i]);
  }//end of for loop

  //to do: the for-loop to add divs on the body ***Replace this with a ul-li*** MAKE THIS TO PRINT THE ARRAYPEOPLE
  for(const el of arrayPeople)
  {
    let results = document.createElement("div");
    results.innerHTML = `
    <h2 class="mt-5"> Resultados: </h2>
    <span>Nombre: ${person.name}</span>
    <span>Apellido: ${person.surname}</span>
    <span>Código: ${person.fullname}</span>
    <span>Edad: ${person.age}</span>
    <span>Altura: ${person.height}</span>
    <span>Peso: ${person.weight}</span>
    <span>IMC: ${person.IMC}</span>
    `;
    document.getElementById("fatherResults").appendChild(results);
  }//end of for-of loop
}//end of saveData function

////////////////////////////////////////////////////////////////////////////////
//Here come the classes
////////////////////////////////////////////////////////////////////////////////

//class Person that symbolizes a single person
class Person
{
  constructor()
  {
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

const arrayPeople = []; // Array to save people. Made global to make it usable on the different functions
let element = document.getElementById("buttonCalculate");
element.addEventListener("click", saveData);
