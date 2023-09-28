class Book
{
    id:any;
    name:any;
    author:any;
    price:any;

    constructor()
    {
        console.log("default constructor");
    }


    /*
    constructor(id:any, name:any, author:any, price:any)
    {
        this.id=id;
        this.name=name;
        this.author=author;
        this.price=price;
    }
    */
}

let book1=new Book();
book1.id=3737383;
book1.name="Programming in java";
book1.author="james Gosling";
book1.price=900;

console.log(book1);