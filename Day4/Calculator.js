//add without parameter - returns void
function add(){
let i = 30
let j = 40

let sum = i+j
console.log(sum);
}

add()

function sub(i,j){
let sum = i - j
console.log(sum);
}

sub(30,2)

function mul(i=5,j=8){
let output = i * j
console.log(output);
return output
}

mul()

function div(i,j){
let output = i / j
console.log(output);
return output
}

div(10,2)

function percentage(){
let i = 10
let j = 100
let output = (i/j)*100
console.log(output);
return output
}

percentage()