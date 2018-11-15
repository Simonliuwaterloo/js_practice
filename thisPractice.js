//What is a method in JS?
//It is an action conducted by an object
let user = {
	name: "John",
	age: 30,
}
user.sayHi = function() {
	alert("Hello");
};

function greeting(){
	console.log("How are you?");
}
user.how = greeting;
user.sayHi();
user.how();

//this in methods

let John = {
	name: "John",
	age: 30,

	sayHi() {
		alert(this.name);
	}
};
John.sayHi();

//Why we don't just use alert(John,name)? Imagine you copied John to another object
