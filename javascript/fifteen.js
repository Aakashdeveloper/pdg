///////////literal/////////
var person = {
    city:'london',
    color:'dark'
}

var person = {
    city:'london',
    color:'dark'
}
undefined
typeof(person)
"object"
person
{city: "london", color: "dark"}
person.color
"dark"
person.city
"london"
person.age = 10
10
person
{city: "london", color: "dark", age: 10}
person.city="amsterdam"
"amsterdam"
person
{city: "amsterdam", color: "dark", age: 10}
delete person.color
true
person['city']
"amsterdam"
person['eyes']="brown"
"brown"
person
{city: "amsterdam", age: 10, eyes: "brown"}

var database = {
    add: function(a,b){return a+b},
    sub: function(a,b){return a-b}
}

var sum = database.add(3,5);
var abc = database.sub(5,3);

////////////////////////Constructor////////////////
var bob  = new Object();
bob.age = 10
bob.color= "white"


var bob  = new Object();
undefined
typeof(bob)
"object"
bob
{}
bob.age = 10
bob.color= "white"
"white"
bob
{age: 10, color: "white"}
bob['age']
10
bob.age
10


var bob = new Object();
bob.age = 10;
bob.color="white"
bob.setAge = function(newAge){
    bob.age = newAge
}

var john = new Object();
john.age = 10;
john.color="white"
john.setAge = function(newAge){
    john.age = newAge
}

var createAge = function(newAge){
    this.age = newAge
}

var john = new Object();
john.age = 10;
john.color="white"
john.setAge = createAge;

var bob = new Object();
bob.age = 10;
bob.color="white"
bob.setAge = createAge

function city(name,pop){
    this.name = name;
    this.city = city;
    this.country = "India"
}

var rajasthan = new city()


function city(name,pop){
    this.name = name;
    this.pop = pop;
    this.country = "India"
}

var rajasthan = new city()
undefined
rajasthan
city {name: undefined, pop: undefined, country: "India"}
rajasthan.country
"India"
rajasthan.city
undefined
var rajasthan = new city("jaipur", 2000000)
undefined
rajasthan
city {name: "jaipur", pop: 2000000, country: "India"}
rajasthan.name
"jaipur"

function database(){
    this.add = function(table,age){
        console.log("select * from "+table+" where age > "+age)
    }
    this.delete = function(table,age){
        console.log("delete * from "+table+" where age < "+age)
    }
}

var product = new database()