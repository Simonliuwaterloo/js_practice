"use strict";
let placeHolder = document.getElementById("placeholder");
placeHolder.style.width = "50%";

function showPic(whichpic) {
	if (!document.getElementById("placeholder")) return false;
	let source = whichpic.getAttribute("href");
	let placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src", source);
	if (document.getElementById("description")) {
		let text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		let description = document.getElementById("description");
		if (description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;
		}
	}
	return true;
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

function popUp() {
	console.log("rs");
	if (!document.getElementsByClassName) return false;
	let links = document.getElementsByClassName("popup")
		for (let i = 0; i < links.length; ++i) {
			links[i].onclick = function() {
			window.open(this.href);
			return false;
			}
		}
}

function prepareGallery() {
	if (!document.getElementsByTagName || !document.getElementById("imagegallery")) return false;
	let gallery = document.getElementById("imagegallery");
	let links = gallery.getElementsByTagName("a");
	for (let i = 0; i < links.length; ++i) {
		links[i].onclick = function() {
			return !showPic(this);
		}
	}
}
window.onload = function() {
	popUp();
	prepareGallery();
}