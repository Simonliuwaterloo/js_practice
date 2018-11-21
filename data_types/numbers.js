let billion = 1e9;
let ms = 1e-6;
console.log(billion);
console.log(ms);

console.log(0xff);
console.log(0xFF);

let num = 255;
console.log(num.toString(16));
console.log(num.toString(2));

console.log(255..toString(2));//use two dots when call method on a number
//"decimal part is empty"


let num2 = 12.3456;
//say we want to round to two digits

console.log(typeof num2.toFixed(2) );

//overflow, loss of precision

console.log(1e500);
console.log((0.1 + 0.2) == 0.3);
//