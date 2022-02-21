//function  printDom to print the results on the dom
function printDom(_parentDiv, _arrayPeople)
{
  for(const el of _arrayPeople)
  {
    let results = document.createElement("div");
    results.classList.add("results");
    results.innerHTML = `
    <h2> ${el.name} ${el.surname} </h2>
    <p>Código: ${el.fullname}</p>
    <p>Edad: ${el.age} años</p>
    <p>Altura: ${el.height}cm</p>
    <p>Peso: ${el.weight}kg</p>
    <p>IMC: ${el.IMC}</p>
    `;
    _parentDiv.appendChild(results);
  }//end of for-of loop
}//end of printDom function

//function clearDom to clear the results added to the DOM on a previous event
function clearDom(_parentDiv)
{
  while(_parentDiv.firstChild)
  {
    _parentDiv.removeChild(_parentDiv.firstChild);
  }//end of while
}//end of function
