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
