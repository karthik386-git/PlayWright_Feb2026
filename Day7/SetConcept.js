//Set

//const names = new Set(['Bala','Karthik','Suresh','Ramesh','Kumar',22,true])
const names = new Set();
names.add("Bala")
names.add("Karthik")
names.add("Suresh")
names.add("Ramesh")
names.add("Kumar")
names.add(22)
names.add(true)
console.log(names);
//to find the type of set is object - typeof
console.log(typeof(names));
//to get data from set we need to use .has method
console.log(names.has("Bal"));

//to delete data from set we can use .delete method
names.delete(22)
console.log(names);

//to get the size of the set we can use .size method
console.log(names.size);

for(let n of names)
{
    console.log(n);
}

//or 

//for each loop
names.forEach(n => console.log(n));

//assignment

//1. Remove duplicates from list without set
//2. Remove duplicates from list with set
