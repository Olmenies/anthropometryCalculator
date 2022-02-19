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
    let birthDate = DateTime.fromISO(inputBirthdayDate.value);
    let evalDate = DateTime.fromISO(inputEvaluationDate.value);
    //let differenceDates =  evalDate.diff(birthDate, "years");
    //console.log(differenceDates.toObject());
    let intervalDates = Interval.fromDateTimes(birthDate, evalDate);
    console.log(intervalDates);
    return intervalDates.length("years");

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
}//end of dataInput function

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
  restoreData(); //We restore the data from the last execution

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
    const parsedSavedPopleList = JSON.parse(localStorage.getItem("savedPeopleList"));

    //we restore the saved persons to the live arrayPeople
    for(const el of parsedSavedPopleList){
      arrayPeople.push(el);
    }//end of for loop
  }//end of if
}//end of restoreData function

//function verifyInput to verify that the inputs of the form are valid
function verifyInput()
{
  let isInputValid;
  /*
  //ARREGLAR ESTO, EL RETURN IMPLÍCITO NO ME DEJA SALIR DE LA FUNCIÓN CUANDO TENEMOS UN RESULTADO FALSY
  !inputName.value ? isInputValid = false && loadUncomplete(): null; //evaluate if inputName is Falsy
  !inputSurname.value ? isInputValid = false && loadUncomplete() : null;//evaluate if inputSurname is Falsy
  !inputBirthdayDate.value ? isInputValid == false && loadUncomplete() : null;//evaluate if inputBirthdayDate is Falsy
  !inputEvaluationDate.value ? isInputValid == false && loadUncomplete() : null;//evaluate if inputBirthdayDate is Falsy


  isInputValid = verifyInputClass("inputHeight");
  !isInputValid ? loadUncomplete() : null;

  isInputValid = verifyInputClass("inputWeight");
  !isInputValid ? loadUncomplete() : null;

  //isInputValid ? loadComplete() && saveToArray() : loadUncomplete(); -------------------> ¿Por qué no ejecuta saveToArray?
  */

  if((inputName.value === null) || (inputName.value === ""))
  {
    isInputValid = false;
    if(isInputValid === false)
    {
      loadUncomplete();
      return;
    }
  }
  else if ((inputSurname.value === null) || (inputSurname.value === ""))
  {
    isInputValid = false;
    if(isInputValid === false)
    {
      loadUncomplete();
      return;
    }
  }
  else if ((inputBirthdayDate.value === null) || (inputBirthdayDate.value === ""))
  {
    isInputValid = false;
    if(isInputValid === false)
    {
      loadUncomplete();
      return;
    }
    else if ((inputEvaluationDate.value === null) || (inputEvaluationDate.value === ""))
    {
      isInputValid = false;
      if(isInputValid === false)
      {
        loadUncomplete();
        return;
      }
    }
  }
  else
  {
    isInputValid = true;
  }//end of if

  isInputValid = verifyInputClass("inputHeight");
  if(isInputValid === false)
  {
    loadUncomplete();
    return;
  }

  isInputValid = verifyInputClass("inputWeight");
  if(isInputValid === false)
  {
    loadUncomplete();
    return;
  }
  if(isInputValid)
  {
    loadComplete();
    saveToArray();
  } else {
    loadUncomplete();
  }
}//end of verifyInput function

//function verifyInputClass to verify the inputs caught by getElementsByClassName()
function verifyInputClass(_className)
{
  let collection = document.getElementsByClassName(_className);
  let inputValue; //variable to save the value of the inputs
  let _isInputValid = true;

  for (const el of collection)
  {
    inputValue = parseFloat(el.value);
    if(isNaN(inputValue))
    {
      _isInputValid = false;
    }//end of if
  }//end of for
  return _isInputValid;
}

//function loadComplete() to issue a sweetalert if all the data has been properly updated
function loadComplete()
{
  swal
  ({
    title: "Carga completa",
    text: "Estamos calculando los resultados",
    icon: "success",
  });
}//end of function

//function loadUnComplete() to issue a sweealert if there was an error on the data updated
function loadUncomplete() {
  swal
  ({
    title: "Error",
    text: "Por favor, chequear que los datos sean correctos",
    icon: "error",
  });
}

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

const arrayPeople = [];
const DateTime = luxon.DateTime;
const Interval = luxon.Interval;

let myButton = document.getElementById("buttonCalculate");

myButton.addEventListener("click", verifyInput);
