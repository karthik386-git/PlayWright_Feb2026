//  String Functions
var firstName = "Karthik"
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.length);

//charAt() method returns the character at the specified index in a string
console.log(firstName.charAt(0));
console.log(firstName.charAt(5));

//3 is the index position where we want to stop slicing
console.log(firstName.slice(0, 3));

//concatinating two strings
console.log(firstName.concat(" SK"));

//includes() method checks if a string contains a specified value and returns true or false
console.log(firstName.includes("Messi"));

//endsWith() method checks if a string ends with a specified value and returns true or false
console.log(firstName.endsWith("ik"));

//indexOf() method returns the index of the first occurrence of a specified value in a string
console.log(firstName.indexOf("t"));

//lastIndexOf() method returns the index of the last occurrence of a specified value in a string
console.log(firstName.lastIndexOf("k"));

//replace() method replaces a specified value with another value in a string
console.log(firstName.replace("Karthik", "Kalpana"));

//split() method splits a string into an array of substrings based on a specified separator
console.log(firstName.split(""));

var city = "Chennai,Bangalore,Mumbai"
console.log(city.split(","));
console.log(city.split(",")[2]);

var state = "  Tamil Nadu  "
//trim() method removes whitespace from both ends of a string
console.log(state.trim());
console.log(state.trimStart());
console.log(state.trimEnd());

//repeat() method returns a new string with a specified number of copies of the original string
console.log(firstName.repeat(3));

//replaceall() method replaces all occurrences of a specified value with another value in a string
var sentence = "I am learning JavaScript. JavaScript is a versatile language."
console.log(sentence.replaceAll("JavaScript", "Python"));

//typeof operator returns the data type of a variable
let number = 28
console.log(typeof (number));
console.log(typeof (number.toString()));