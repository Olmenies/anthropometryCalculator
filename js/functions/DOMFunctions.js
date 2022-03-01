//function  printAllResultsDOM to print the results on the dom
function printAllResultsDOM(_parentDiv, _arrayPeople)
{
  for(const el of _arrayPeople)
  {
    let results = document.createElement("div");
    results.classList.add("results");
    results.innerHTML = `
    <h2> ${el.name} ${el.surname} </h2>
    <p>Código: ${el.code}</p>
    <p>Edad: ${el.age} años</p>
    <p>Altura: ${el.height}cm</p>
    <p>Peso: ${el.weight}kg</p>
    <p>IMC: ${el.IMC}</p>
    `;
    _parentDiv.appendChild(results);
  }//end of for-of loop
}//end of printAllResultsDOM function

//function clearDom to clear the results added to the DOM on a previous event
function clearDom(_parentDiv)
{
  while(_parentDiv.firstChild)
  {
    _parentDiv.removeChild(_parentDiv.firstChild);
  }//end of while
}//end of function

//function printDOM to print the results of the curren person on the DOM
function printDOM(_parentDiv, _person)
{
  let results = document.createElement("div");
  results.classList.add("results");
  results.innerHTML = `
  <h2> ${_person.name} ${_person.surname} </h2>
  <p>Código: ${_person.code}</p>
  <p>Edad: ${_person.age} años</p>
  <p>Altura: ${_person.height}cm</p>
  <p>Peso: ${_person.weight}kg</p>
  <p>IMC: ${_person.IMC}</p>
  `;
  _parentDiv.appendChild(results);
}
