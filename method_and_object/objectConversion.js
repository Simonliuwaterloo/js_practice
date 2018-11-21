//all objects are true
//only string and numeric conversions

//ToPrimitive
	//string
	//number
	//default
let user = {
	name: "John",
	money: 1000,

	[Symbol.toPrimitive](hint) {
		alert(`hint: ${hint}`);
		return hint == "string" ? `{name: "${this.name}"}` : this.money;
	}
};

//alert(user);
//alert(+user);
//alert(user + 500);

let userOld = {
	name: "John",
	money: 1000,
	toString() {
		return ` name: "{${this.name}"}`;
	},
	valueOf() {
		return this.money;
	}
};

alert(userOld);
alert(+userOld);
alert(userOld + 500);

let obj = {
	toString() {
		return "2";
	}
};

console.log(obj*2); //ToPrimitive gives "2", then it becomes 2
console.log("2"*2);
console.log(obj + 2);
console.log("2" + 2);