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

//function clearDom to clear the results added to the DOM on a previous event
function clearDom(_parentDiv)
{
  while(_parentDiv.firstChild)
  {
    _parentDiv.removeChild(_parentDiv.firstChild);
  }//end of while
}//end of function
