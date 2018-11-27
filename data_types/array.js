let styles = ['Jazz', 'Blues'];
console.log(styles);
styles.push('Rock-n-roll');
console.log(styles);
styles[(styles.length - 1)/2] = 'Classics';
console.log(styles);
alert(styles.shift());
console.log(styles);
styles.unshift('Rap', 'Reggae');
console.log(styles);
function sumInput() {
	let resume = true;
	let count = 0;
	let result = 0;
	let arr =[];
	while (resume) {
		let input = +prompt("Please input a number", 0);
		if (isNaN(input) || input == null || input == '') {
			resume = false;
			for (let value of arr) {
				result += value;
			}
			return result;
		}
		else {
			arr[count] = input;
			++count;
		}
	}
}

console.log(sumInput());
//maxmun subarray problem
function getMaxSubSum(arr) {

}