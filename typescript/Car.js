var car = /** @class */ (function () {
    function car() {
    }
    Object.defineProperty(car.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            console.log("set price");
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(car.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            console.log("set id");
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(car.prototype, "brandName", {
        get: function () {
            return this._brandName;
        },
        set: function (value) {
            console.log("set brand");
            this._brandName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(car.prototype, "modelNumber", {
        get: function () {
            return this._modelNumber;
        },
        set: function (value) {
            console.log("set model");
            this._modelNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    return car;
}());
var car1 = new car();
car1.id = 12345;
car1.modelNumber = "BH6364";
car1.brandName = "ABC";
car1.price = 1000000;
console.log(car1.id);
console.log(car1.modelNumber);
console.log(car1.brandName);
console.log(car1.price);
