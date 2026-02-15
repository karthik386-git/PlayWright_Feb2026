//function without parameter
//void it doesnot return any
function add()
{
let i = 10
let j = 20

let sum = i + j;
console.log(sum);

}

//Return type - It returns number for the below method, but return string boolean int number
function add_1()
{
let i = 10
let j = 8

let output = i + j;
console.log(output);
return output    
}

//parameterized method
function add_2(i,j)
{
let output = i + j
console.log(output);
}

//parameterized method with default value
function add_3(i=90,j=60){
let sum = i+j
console.log(sum);
}

add()

add_1()

add_2(30,20)

add_3()

//replacing "i" value with 30 and not changing "j"
add_3(30)

//Assignment for function methods
