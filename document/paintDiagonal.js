/*let table = document.body.firstElementChild;
for (let i = 0; i < 5; ++i) {
	table.rows[i].cells[i].style.backgroundColor = "red";
}*/let divArray = document.getElementsByTagName("div");
console.log(divArray.length);
console.log(document.getElementsByTagName("*"));
let element = document.getElementById("elem");
element.setAttribute("title", "a list of goods");
console.log(element.getAttribute("title"));