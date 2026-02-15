//Variable declaration using var
var location = "Chennai"
//Reassigning the value of location variable
location = "Bangalore"
console.log("My Native is",location);

//Redeclaring the variable location
var location = "Mumbai"
console.log("My Current Location is", location);

//let and const are block scoped variables
let Name = "Karthik"
console.log("My Name is:", Name);

//Reassigning the value of firstName variable
Name = "Karthik SK"
console.log("My full name is:", Name);

//const variable declaration
const Age = 28
console.log(Age);
//Age = 29 // This will throw an error as we cannot reassign a value to a const variable
console.log(Age);

//Type of variables
var i = "Karthik";
console.log(typeof i);

var j = 28;
console.log(typeof j);

var k = true;
console.log(typeof k);