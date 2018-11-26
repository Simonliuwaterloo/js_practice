//embeded expression and multiple lines
console.log(`1+1 = ${1 + 1}`);
let me = ` simon
li
jianyan `;

console.log(me);
//newline character
console.log("I am \n your \n father");

//unicode

console.log("\u{1F60D}");

//escape character
console.log('I\'m')
function ucFirst(str) {
	return str[0].toUpperCase() + str.slice(1, str.length);
}
console.log(ucFirst("darth"));

function checkSpam(str) {
	let lowerStr = str.toLowerCase;
	return lowerStr.includes('viagra') || lowerStr.includes('xxx');
	//return lower.includes('viagra') || lower.includes('XXX');
}
//why this doesn't work?
alert(typeof("buy ViAgRA now"))

function truncate(str, maxlength) {
	if (str.length > maxlength){
		return str.slice(0, maxlength - 1) + "...";
	}
	else {
	return str;
	}
}
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("hello", 20));

function extractCurrencyValue(str) {
	let count = 0;
	for (let k = str.indexOf('$'); Number(str[k]) != NaN && k < str.length; ++k) {
		++count; 
	}
	return str.slice(str.indexOf('$') + 1, str.indexOf('$') + count);
}
alert( extractCurrencyValue('$120'));

