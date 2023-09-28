
document.write('WELCOME TO JAVASCRIPT')
console.log('WELCOME TO JAVASCRIPT')
var a=100;//global scoped variable
//alert('Hi there');
//var name=prompt('Please enter your name:');
//document.write(name);
//var status=confirm('Please confirm?(OK/CANCEL)');
//document.write(status);
 
    {
        console.log(a);
    }

    function display()
    {
        let b=20;
        console.log(a*a);
    }
   // console.log(b)
    display();

        {
        var x=100;  //function scope
        }
        console.log(x)

      {
        let y=100;  //block scope
      }
      console.log(y)