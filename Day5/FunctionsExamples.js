function getDetails(){
console.log("This is a getDeatils methods");
}

//arrow of functions - Constant variable declaration
const panCardnumber = () =>{
console.log("This is a panCardnumber method");
}

//CallBack function - A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows us to handle asynchronous operations and ensures that certain code is executed only after a specific task is finished.
function getBankDeatails(customerName, callback){
console.log("Welcome", customerName);
callback()
}

getDetails()
panCardnumber()
getBankDeatails("Karthik", () => { console.log("This is a callback function");})
getBankDeatails("SK", getDetails)
