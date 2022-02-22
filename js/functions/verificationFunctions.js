//function verifyInput to verify that the inputs of the form are valid
function verifyInput()
{
  let isInputValid;

  if((inputName.value === null) || (inputName.value === ""))
  {
    isInputValid = null;
    isInputValid ?? loadUncomplete(); return;
  }
  else if ((inputSurname.value === null) || (inputSurname.value === ""))
  {
    isInputValid = null;
    isInputValid ?? loadUncomplete(); return;
  }
  else if ((inputBirthdayDate.value === null) || (inputBirthdayDate.value === ""))
  {
    isInputValid = null;
    isInputValid ?? loadUncomplete(); return;
  }
  else if ((inputEvaluationDate.value === null) || (inputEvaluationDate.value === ""))
  {
    isInputValid = null;
    isInputValid ?? loadUncomplete(); return;
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
