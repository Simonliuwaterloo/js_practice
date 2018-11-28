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

function prepareGallery() {
	if (!document.getElementsByTagName && document.getElementById("imagegallery")) return false;
	let gallery = document.getElementById("imagegallery");
	let links = gallery.getElementsByTagName("a");
}	for (let i = 0; i < links.length; ++i) {
	links[i].onclick = function() {
		showPic(this); return false;
		}
	}