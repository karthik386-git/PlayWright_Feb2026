//remove dupliactes from below list without set method

let names = ['Bala','Karthik','Sindhu','Bala',2,3,2]
let unique = []

for(i=0; i < names.length; i++){
    if(!unique.includes(names[i])){
     unique.push(names[i]);
    }
}
console.log(unique);

//remove dupliactes from below list with set method
let names1 = ['Bala','Karthik','Sindhu','Bala',2,3,2]

let unique1 = [new Set(names1)];
console.log(unique1);

//Find the count of each letter from the given word
let name = "KARTHIK";
let count = {};

for (let char of name){
    count[char] = (count[char] || 0) +1;
}
console.log(count);
