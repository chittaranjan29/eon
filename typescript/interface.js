//implementation using object
var product1 = {
    id: 1233,
    name: "Lenovo G50",
    price: 55000,
    calculate: function (qunatity) {
        return this.price * qunatity;
    },
};
console.log(product1.calculate(5));
var add = function (a, b) {
    return a + b;
};
console.log(add(10, 20));
//implementation using class
var MyProduct = /** @class */ (function () {
    function MyProduct(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    MyProduct.prototype.calculate = function (qunatity) {
        return this.price * qunatity;
    };
    return MyProduct;
}());
var product2 = new MyProduct(12662, "Dell", 40000);
console.log(product2.calculate(5));
