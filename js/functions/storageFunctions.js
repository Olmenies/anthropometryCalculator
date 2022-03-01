//function removeLocal to reove items from the local localStorage
function removeLocal()
{
  localStorage.removeItem("savedPeopleList");
}

//function saveLocal to save data on local storage
function saveLocal(_arrayPeople)
{
  localStorage.setItem("savedPeopleList", JSON.stringify(_arrayPeople));
}//end of saveLocal functions

//function saveToArray to create a new person and print the results on the DOM. It has to be divided in three different functions
function saveToArray()
{
  const person = new Person(); //instanciation of a new person
  const isDuplicated = arrayPeople.some((el) => { return el.code === person.code;}); //we evaluate if a person with the same code already exists --> Flag is alway undefined
  console.log("isDuplicated: " + isDuplicated);

  //if a person with the same code already exists...
  if(isDuplicated === true)
  {
    //we'll iterate over the array until we find the element with the sane code
    for(const element of arrayPeople){

      //if the person already exists (according to the code), we update it's values
      if(element.code === person.code){
        element.age = person.age;
        element.height = person.height;
        element.weight = person.weight;
        element.IMC = person.IMC;
      }//end of internal if
    }//end fo for-loop

    clientUpdate();
  }//end of external loop

  //else, we add a new person to the array ---------------------> ***is this fine or should I concatenate a new array?***
  else
  {
    arrayPeople.push(person);
  }//end of else

  console.log("Voy a imprimir el arrayPeople");
  for(const el of arrayPeople)
  {
    console.log(el);
  }

  let stringJSON = JSON.stringify(arrayPeople);

  //removeLocal();
  saveLocal(arrayPeople);

  let parentDiv = document.getElementById("fatherResults");

  //We clean up the DOM
  clearDom(parentDiv);

  //we print the saved data on the DOM
  printDOM(parentDiv, person);
}//end of saveToArray function

//function restoreData to restore the data from the localStorage to a live array
function restoreData()
{
  let flag = localStorage.getItem("savedPeopleList");

  simulateLookForData(true).then(lookForCompleted).catch(lookForNotCompleted);

  //We load the data from the ../data/patients.json file
  fetch("../data/patients.json")
  .then((resp) => resp.json())
  .then((data) =>
  {
    for(const patient of data){
      arrayPeople.push(patient);
    }
  });

  //////////////////////////////////////////////////////////////////////////////

  //we verify if the local storage is empty
  if(flag != null){
    const parsedSavedPopleList = JSON.parse(localStorage.getItem("savedPeopleList"));

    //we restore the saved persons to the live arrayPeople
    for(const el of parsedSavedPopleList){
      arrayPeople.push(el);
    }//end of for loop
  }//end of if
}//end of restoreData function

//function simulateLookForData to simulate that we're looking for data in a database
function simulateLookForData(_value)
{
  lookForStarted();

  return new Promise((resolve, reject) =>
  {
    setTimeout(() =>
    {
      (_value === true) ? resolve(true) : reject(false);
    },2000);//end of setTimeout
  });//end of promise
}//end of simulateLookForData
