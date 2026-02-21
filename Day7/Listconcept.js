const { log } = require("node:console");

let name ="Karthik"

//List >>> Array
let names = ['Bala','Karthik','Suresh','Ramesh','Kumar',22,true]
console.log(names); 

//type of array is object
console.log(typeof(names));

//to get data from array we need to use index number
console.log(names[0]);
console.log(names[1]);
console.log(names[5]);
console.log(names[3]);

//update the data in array
names[0] = "BalaKrishnan"
console.log(names); 

names[5] = 23
console.log(names);

//size of the array
console.log(names.length);

//to add data in array we can use push method
//add = push("data")
names.push("Virat")
console.log(names);

//to add data in front of the array we can use unshift method
//add in front of = unshift("data")
names.unshift("Dhoni")
console.log(names);

//to remove the last data from array we can use pop method
//pop = remove last data from array
names.pop()
console.log(names);

//removes the first data from array we can use shift method
//shift = remove first data from array
names.shift()
console.log(names); 

//traverse the array using for loop
for(i=0; i<names.length; i++){
    console.log("Welcome:", names[i]);
}