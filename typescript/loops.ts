let i:number;
for(i=1;i<=10;i++)
{
    console.log(i);
}

i=1;
while(i<=10)
{
    console.log(i);
    i=i+1;
}

i=1;
do
{

    console.log(i);
    i=i+1;
}
while(i<=10);

//for-of loop - used to iterate over arrays, strings, maps etc
var countries=["India","Pakistan","China","UK","USA"];
for(let c of countries)
{
    console.log(c);
}


const book={ id:1234, name:"Programming in Java", price:700, isbn:"KJHDGGD24474774"};


//for-in loop - used to access properties of an object
for(let i in book)  //loops through the properties of an object
{
    console.log(book[i]);
}

let p:number;
p=2;

switch(p)
{
    case 1: console.log('Sunday'); break;
    case 2: console.log('Monday'); break;
    case 3: console.log('Tuesday'); break;
    case 4: console.log('Wednesday'); break;
    case 5: console.log('Thrusday'); break;
    case 6: console.log('Friday'); break;
    case 7: console.log('Saturday'); break;
    default: console.log('Wrong choice!!');break;
}