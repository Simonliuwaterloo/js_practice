function CalculatorMake() {
	this.read = function() {
		this.a = +prompt("Please input a number", "a");
		this.b = +prompt("Please input a number", "b");

	},
	this.sum = function() {
		return this.a + this.b;
	},
	this.mul = function() {
		return this.a*this.b;
	}
}
let calculator = new CalculatorMake();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );