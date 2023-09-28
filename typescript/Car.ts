class car
{
    private _id: any;   
    private _brandName: any;
    private _modelNumber: any;
    private _price: any;

    constructor()
    {
      
    }


    public get price(): any {
        return this._price;
    }
    public set price(value: any) {
        console.log("set price");
        this._price = value;
    }

    public get id(): any {
        return this._id;
    }
    public set id(value: any) {
        console.log("set id");
        this._id = value;
    }

    public get brandName(): any {
        return this._brandName;
    }
    public set brandName(value: any) {
        console.log("set brand");
        this._brandName = value;
    }
    public get modelNumber(): any {
        return this._modelNumber;
    }
    public set modelNumber(value: any) {
        console.log("set model");
        this._modelNumber = value;
    }
}

let car1=new car();

//setters
car1.id=12345;   //set id
car1.modelNumber="BH6364"; //set model
car1.brandName="ABC";//set brand
car1.price=1000000;//set price


//getters
console.log(car1.id);
console.log(car1.modelNumber);
console.log(car1.brandName);
console.log(car1.price);