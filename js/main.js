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

//function clearDom to clear the results added to the DOM on a previous event
function clearDom(_parentDiv)
{
  while(_parentDiv.firstChild)
  {
    _parentDiv.removeChild(_parentDiv.firstChild);
  }//end of while
}//end of function

//function saveToArray to create a new person and print the results on the DOM. It has to be divided in three different functions
function saveToArray()
{
  console.log(arrayPeople);
  const person = new Person(); //instanciation of a new person
  const flag = arrayPeople.some((el) => { return el.fullname === person.fullname;}); //we evaluate if a person with the same fullname already exists --> Flag is alwas undefined

  //if a person with the same fullname already exists...
  if(flag == true)
  {
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
    arrayPeople.push(person);
  }//end of else

  //Ask what do I have to do to remove below lines from this function
  let stringJSON = JSON.stringify(arrayPeople);
  saveLocal(arrayPeople);

  let parentDiv = document.getElementById("fatherResults");

  //We clean up the DOM
  clearDom(parentDiv);

  //we print the saved data on the DOM
  printDom(parentDiv, arrayPeople);

}//end of saveToArray function

//function saveLocal to save data on local storage
function saveLocal(_arrayPeople)
{
  localStorage.setItem("savedPeopleList", JSON.stringify(_arrayPeople));
}//end of saveLocal functions

//function  printDom to print the results on the dom
function printDom(_parentDiv, _arrayPeople)
{

  for(const el of _arrayPeople)
  {
    let results = document.createElement("div.results");
    results.innerHTML = `
    <h2 class="mt-5"> Resultados: </h2>
    <span>Nombre: ${el.name}</span>
    <span>Apellido: ${el.surname}</span>
    <span>Código: ${el.fullname}</span>
    <span>Edad: ${el.age}</span>
    <span>Altura: ${el.height}</span>
    <span>Peso: ${el.weight}</span>
    <span>IMC: ${el.IMC}</span>
    `;
    _parentDiv.appendChild(results);
  }//end of for-of loop
}//end of printDom function

//function restoreData to restore the data from the localStorage to a live array
function restoreData()
{
  let flag = localStorage.getItem("savedPeopleList");

  //we verify if the local storage is empty
  if(flag != null){
    const parsedSavedPopleList = JSON.parse(localStorage.getItem("savedPeopleList"))

    //we restore the saved persons to the live arrayPeople
    for(const el of parsedSavedPopleList){
      arrayPeople.push(el);
    }//end of for loop
  }//end of if
}//end of restoreData function

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
const arrayPeople = []
let element = document.getElementById("buttonCalculate");
element.addEventListener("click", saveToArray);
