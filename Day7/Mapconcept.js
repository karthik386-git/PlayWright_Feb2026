//Key value pairs - map

let customerDetails = new Map()

customerDetails.set("name", "Karthik");
customerDetails.set("age", 30);
customerDetails.set("city", "Chennai");
customerDetails.set("Email","sk@gmail.com");
customerDetails.set("email","kkk@gmail.com");
customerDetails.set("mobile","5236679252");

console.log(customerDetails);

//to get the deatils of customer age

console.log("Customer Age:", customerDetails.get("age"));
console.log("Customer Name:", customerDetails.get("name"));

console.log(customerDetails.size)

console.log(customerDetails.keys());
console.log(customerDetails.values());

console.log(customerDetails.delete("mobile"));
console.log(customerDetails);


if(customerDetails.has("email1")){
    console.log("Email is present in map");
}
else{
    customerDetails.set("email1", "karthi@gmail.com")
}
console.log(customerDetails);

customerDetails.clear()
console.log(customerDetails);

//Find the count of each letter from the given word
//BALA = B=1, A=2, L= 1
