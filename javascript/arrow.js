//Arrow function was introducted in ES6.
//It allow us to represent a function body as variable using arrow operator.

let a=8;
var count=0;
prime = () => {

    for(i=1;i<=a;i++)
    {
        if(a%i==0)
        {
            count=count+1;
        }
    }
    return count;
}

var count=prime();
if(count==2)
{
    console.log(a + " is a prime number");
}
else
{
    console.log(a + " is a non prime number");
}


