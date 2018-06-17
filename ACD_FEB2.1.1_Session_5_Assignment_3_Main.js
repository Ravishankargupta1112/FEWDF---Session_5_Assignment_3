var student={
	studentname:"RAVI SHANKAR GUPTA",
	DOB:"1/1/1990",
	Skill:"Front End Web Development - JavaScript",
	address:{
		state:"Telangana",
		city:"Hyderabad",
		country:"INDIA",
		pin_code:500081
	}
};

student.eyecolor="black";
student.mothername="RDG";

console.log(student);

delete student.mothername;

console.log(student);

console.log("========================")
for(var itr in student)
{
	console.log(student[itr]);
}