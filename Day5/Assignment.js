//find the age of student and check whether the student is eligible for voting or not 
function ageOfStudent(yearOfBirth, currentYear){
let age = currentYear - yearOfBirth
console.log("Age of student: ", age);
return age
}

ageOfStudent(1997, 2026)

function voteEligiblity(yearOfBirth, currentYear){
if(ageOfStudent(1999, 2026) >=18){
    console.log("Student is eligible to vote");
}
else{
    console.log("Student is not eligible to vote");
}
}

voteEligiblity(1999, 2026)