//Static: Javascript provides static method that belongs to the class instead of
//an instance of the class. 

class Test
{
    test()
    {
        return "This is a non-static method";
    }

    static test1()
    {
        return "This is a static method1";
    }

    static test1()
    {
        return "This is a static method2";
    }

    static test1()
    {
        return "This is a static method3";
    }
}

var obj=new Test();
console.log(obj.test())
console.log(Test.test1())