
ageArray=[1,3,3,2,11,6];

function fixage(ageArray)
{
    temp=[];
    for(let age of ageArray)
    {
        if(age>=18 && age<=60)
          temp.push(age)

    }

    if(temp.length==0)
    {
        return "NA";
    }
    else
    {
        return temp;
    }
}
console.log(fixage(ageArray));