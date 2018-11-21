let calculator = {
	read() {
		this.a = +prompt("Please enter a number", "a");
		this.b = +prompt("Please enter a number", "b");
	},

	sum() {
		return this.a + this.b;
	},
	mul() {
		return this.a*this.b;
	},
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );