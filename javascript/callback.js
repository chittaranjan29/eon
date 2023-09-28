//Callback function:In Javascript, you can pass a function as an argument to a function.
//This function that passed as an argument inside of another function is called a callback function.

function greet(name, a)
{
    console.log('hi '+ name);
    a();
}


function test()
{
    console.log('I am callback function');
}

greet('Ranjan',test);