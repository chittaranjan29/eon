//Encapsulation: It is a process of binding data with functions togeteher as 
//a single Unit. It allows us to control and validate the data.

//ways - i)var keyword to make data members private
//ii)Using getters and setters


class Order
{
    constructor()
    {
        var id;
        var price;
    }

    getId()
    {
        return this.id;
    }  

    getPrice()
    {
        return this.price;
    }


    setId(id)
    {
        this.id=id
    }

    setPrice(price)
    {
        this.price=price;
    }
}


var order1=new Order();

order1.setId(32434);
order1.setPrice(4000);

console.log(order1.getId() + " "+ order1.getPrice());