//fuction creates the object, function initializes the object, the function retuns the object
var createPerson = function(name, email) {
    return ({
        name: name,
        email: email,
        greet: function()  {
            console.log("Hello my name is %s", this.name);
        }
    });
}

var Person = function(name, email) {
    this.name = name;
    this.email = email;
};
Person.prototype.basket = [];
Person.prototype.myemail = function() {
    console.log("My email: %s", this.email);
}

var fred = createPerson("fred", "fred@bedrock.com")

//When used with a new operator
//function constructor
var betty = new Person("betty", "betty@gmail.com");
var barney = new Person("barney", "barney@gmail.com");

//This is just calling Person() function
Person("wilma", "wilma@gmail.com");
