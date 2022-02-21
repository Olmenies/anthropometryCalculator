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
    let intervalDates = Interval.fromDateTimes(birthDate, evalDate);
    return Math.trunc(intervalDates.length("years")); //truncate the results deleting numbers after dot

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
