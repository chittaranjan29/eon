function test(a:number, b:number):void
{
    console.log(a+b);
}

test(10,70);

function addition(a:number, b:number):number
{
    return a+b;
}

console.log(addition(60,40));

//optional parameters

function multiply(a:number, b:number, c?:number):number
{
    if(typeof c!== 'undefined')
    {
        return a*b*c;
    }

    return a*b;
}

console.log(multiply(2,3,4));
console.log(multiply(2,3));

//Default parameters

function accountDetails(name:string, id:number, balance:number, rateOfInterest:number=8.3, time:number=1 )
{
    console.log("Account Holder Name:"+name);
    console.log("Account Id:"+id);
    console.log("Balance:"+balance);
    console.log("Interest:"+(balance*time*rateOfInterest)/100);
}

accountDetails("A.Roy",4354354354353, 10000);
accountDetails("A.Roy",4354354354353, 10000,7.9, 2);
accountDetails("A.Roy",4354354354353, 10000,7.9);


//Rest parameter - accepts 0 or more arguments
function getTotal(...values:number[]):void
{
    let total=0;

    values.forEach(
        (v) => total=total+v       //total=0+2=2   total=2+4=6 total=6+5=11
    );

    console.log(total);
}

getTotal();
getTotal(2,4);
getTotal(2,4,5);
getTotal(2,4,5,6);
