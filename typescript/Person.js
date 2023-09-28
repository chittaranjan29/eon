var Person = /** @class */ (function () {
    //parameterized constructor
    function Person(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //method 
    Person.prototype.display = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var person1 = new Person(3432432, 'Raman', 'Sharma');
var person2 = new Person(7478393, 'Kumar', 'Das');
console.log(person1.display());
console.log(person2.display());
