//function centimeterToMeterConverter to convert data from cm to m
const centimeterToMeterConverter = (_height) => { return (_height/100);};

//function calcIMC to calculate IMC
const calcIMC = (_height, _weight) => { return (_weight / Math.pow(centimeterToMeterConverter(_height),2));};

//function createCode to create the code for the person
function createCode(_name, _surname)
{
  _name = _name.replaceAll(" ", ".");
  _surname = _surname.replaceAll(" ", ".");
  return (_name + "." + _surname);
}//end of createCode function
