interface Product
{
    id:number;
    name:string;
    price:number;
    calculate:(qunatity:number)=>number
}

//implementation using object
let product1:Product={
   id:1233,
   name:"Lenovo G50",
   price:55000  ,
   calculate(qunatity:number) {
       return this.price*qunatity;
   },
};

console.log(product1.calculate(5))

//implementation using function
interface Add
{
    (a:number, b:number):number
}

let add=function(a:number,b:number){
    return a+b;
}

console.log(add(10,20));

//implementation using class

class MyProduct implements Product
{
    id:number;
    name:string;
    price:number;
    constructor(id:number,name:string,price:number)
    {
        this.id=id;
        this.name=name;
        this.price=price;
    }


    calculate (qunatity: number):number 
    {
        return this.price * qunatity;
    }
}

let product2=new MyProduct(12662,"Dell",40000);
console.log(product2.calculate(5));

