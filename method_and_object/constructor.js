//we want to create many objects of the same kind
//conventions: 1.identifier start with capital letter
//             2.executed only woth new operator

function User(name) {
	this.name = name;
	this.isAdmin = false;
	alert(new.target);//Inside a function, we can check whether it was called with new or without it, using a special new.target property.

}
let user = new User("Jack");
User();
alert(user.name);
alert(user.isAdmin);

//return from constructors
//return with an object returns that object, in all other cases this is returned
function BigUser() {
	this.name = "John";
	return {name: "Godzilla"}; //returns an object
}

console.log(new BigUser().name);

function SmallUser() {
	this.name = "John";
	return 4;
}
console.log(new SmallUser().name);