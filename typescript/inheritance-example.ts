class Person
{
    firstName:any;
    lastName:any;

    constructor(firstName:any, lastName:any)
    {
        this.firstName=firstName;
        this.lastName=lastName;
    }

    display()
    {
        return this.firstName + " " +this.lastName;
    }
}

class Employee extends Person
{
    jobType:any;

    constructor(firstName:any, lastName:any, jobType:any)
    {
        super(firstName, lastName);
        this.jobType=jobType;
    }

    display()
    {
        return super.display() + " " + this.jobType;
    }
}

let emp1=new Employee("Raman","Roy","Fulltime");

console.log(emp1);
console.log(emp1.display())