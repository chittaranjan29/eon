//consumer-producer pattern

 let promise=new Promise(function(resolve, reject){

    let a="Welcome to promise";
    let b="Welcome to promise";

     if(a===b)
     {
        resolve();
     }   
     else
     {
        reject();
     }
 });

 promise.then(
    function()
    {
        console.log('success');
    }
 ).catch(
    function()
    {
        console.log('error occurred'); 
    }
 );