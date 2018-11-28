"use strict";
let placeHolder = document.getElementById("placeholder");
placeHolder.style.width = "50%";
function showPic(whichpic) {
	let source = whichpic.getAttribute("href");
	let placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	let text = whichpic.getAttribute("title");
	let description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}

function countBodyChildren() {
	let body = document.getElementsByTagName("body")[0];
	for (let children = 0; children < 5; ++children ) {
		console.log(body.childNodes[children]);
	}
	console.log(body.childNodes.length);
	console.log(body.nodeType);
	//element nodes = 1; attribute node = 2; text node = 3
}
//window.onload = countBodyChildren;
//window.open("https://www.google.ca/webhp?hl=en&sa=X&ved=0ahUKEwiOgdnznvfeAhVs7IMKHemMCagQPAgH");
