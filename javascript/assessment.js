chunk="Delhi deLhI \n BombAY BOMBAY  \n Himachal hima ";

var lines=chunk.toString().split('\n');


for(let line of lines)
{
  var input=line.trim().split(' ');
  var result=formCheck(input[0],input[1]);
  console.log(result);	
}


function formCheck(a,b)
{

 if(a.toLowerCase()==b.toLowerCase())
 {
 	return 'YES'; 
 }
 else
 {
	return 'NO'; 
 }
}


