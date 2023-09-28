OOP: 
//Object : It is a real world entity that has states and behaviour.

//states - properties/characteristics
//behaviour - activities/actions

//example :  Car   

//properties - brand, model, number, color, engine type etc
//actions - drive, apply break, accelarate, slow down etc

//class - template or blueprint to create objects having common states and behaviour

class Car
{
    constructor()
    {
      console.log('default constructor invoked!!')
    }

}


var car1=new Car();
car1.brand="X";
car1.model="Y";


var car2=new Car();
car2.brand="A";
car2.model="Z";

console.log(car1);
console.log(car2);


