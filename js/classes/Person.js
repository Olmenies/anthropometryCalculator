//class Person that symbolizes a single person
class Person
{
  constructor()
  {
    this.name = dataInput("name");
    this.surname = dataInput("surname");
    this.code = createCode(this.name, this.surname);
    this.age = dataInput("age");
    this.height = parseFloat(dataInput("height"));
    this.weight = parseFloat(dataInput("weight"));
    this.IMC = parseFloat(calcIMC(this.height, this.weight)).toFixed(2);
  }//end of constructor
}//end of class Person
