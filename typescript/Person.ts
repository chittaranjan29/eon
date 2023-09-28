class Person
{
     //data members/instance variables
    id:number;         
    firstName:string;
    lastName:string;

    //parameterized constructor
    constructor(id:number,firstName:string, lastName:string)
    {
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
    }

    //method 
    display()
    {
        return this.firstName+ " "+this.lastName;
    }

} 


let person1=new Person(3432432,'Raman','Sharma');
let person2=new Person(7478393,'Kumar','Das');

console.log(person1.display());
console.log(person2.display());