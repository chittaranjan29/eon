const book={ id:1234, name:"Programming in Java", price:700, isbn:"KJHDGGD24474774"};


//for-in loop - used to access properties of an object
for(let i in book)  //loops through the properties of an object
{
    console.log(book[i])
}




//for-of loop - used to iterate over arrays, strings, maps etc
var countries=["India","Pakistan","China","UK","USA"];
for(let c of countries)
{
    console.log(c);
}

var country="INDIA";
for(let c of country)
{
    console.log(c);
}

//for    - Should be considered when a defined condition is present and needs to perform some action.
//for-in - Should be considered when we want to access properties of object.
//for-of - Should be considered when need to iterate over a collection type of data structure like array, strings, maps etc.


//Iterables - Map, Set
const vowels=new Set(["a","e","i","o","u"]);

    for(var v of vowels)
    {
        console.log(v);
    }

const laptops=new Map([
    ["Acer", 35000],
    ["Lenovo", 45000],
    ["HP", 40000],
    ["Dell", 50000]
]);  

for(var l of laptops)
{
    console.log(l);
}
