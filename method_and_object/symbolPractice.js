// symbol value is an identifier
let id = Symbol();

//we can assign symbol a description, for debugging purpose

id = Symbol("id");

//symbols are always unique, even if they have same description

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2);

//symbols don't auto convert to string

//alert(id); error
alert(id.toString());

//of course, we can use Symbol as identifiers

let user = {
	name: "John",
};

user[id] = "ID value";
console.log( user[id]);

//why we don't just use an string as key?
//We want to avoid overwritting, "id" == "id" when there re two "id"s in two different scripts,
//but Symbols are always different.

//we need to put Symbol in brackets in object literal

let user2 = {
	name: "John",
	[id]: 123,
};
console.log(user2[id]);
//if we use id, JS intepret id as a string

//symbol properties don't participate in for in loop

for (let key in user2){
	console.log(key);
}
//Symbol is hidden

//but Object.assign copies Symbol
let user3 = Object.assign({}, user);
console.log(user3[id]);

//global symbol, access it gives same return

let id3 = Symbol.for("id");

let idAgain = Symbol.for("id");
console.log(id3 === idAgain);
console.log(Symbol.keyFor(id3));
console.log(Symbol.keyFor(idAgain));