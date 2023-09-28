class Book
{
    //parameterized constructor
    constructor(id,name,author,price)
    {
      console.log('parameterized constructor invoked!!');
      this.id=id;
      this.name=name;
      this.author=author;
      this.price=price;
    }

    display()
    {
        console.log(this.id+ " "+this.name+" "+this.author+" "+this.price)
    }
    

}
var book1=new Book(465456,"Programming in Java","James Gosling",900);
var book2=new Book(757757,"Programming in Python","Andy Roberts",800);

console.log(book1);
console.log(book2);

book1.display();
book2.display();