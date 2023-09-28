var Book = /** @class */ (function () {
    function Book() {
        console.log("default constructor");
    }
    return Book;
}());
var book1 = new Book();
book1.id = 3737383;
book1.name = "Programming in java";
book1.author = "james Gosling";
book1.price = 900;
console.log(book1);
