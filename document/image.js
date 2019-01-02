"use strict";
function addLoadEvent(func) {
	let oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	}
	else {
		window.onload = function () {
			oldonload();
			func();
		}
	}
}

function insertAfter(inserted, target) {
	let parent = target.parentNode;
	if (parent.lastChild == target) {
		parent.appendChild(inserted);
	}
	else {
		parent.insertBefore(inserted, target.nextSibling);
	}
}
function preparePlaceholder() {
	let placeholder = document.createElement("img");
	placeholder.id = "placeholder";
	placeholder.src = "placeholder.jpg";
	placeholder.alt = "my image gallery";
	let intro = document.createElement("p");
	intro.id = "description";
	intro.appendChild(document.createTextNode("introduction"));
	placeholder.style.width = "50%";
	document.body.insertBefore(placeholder, document.testdiv);
	document.body.insertBefore(intro, document.testdiv);
	let gallery = document.getElementById("imagegallery");
	insertAfter(placeholder, gallery);
	insertAfter(description, placeholder);

}
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
		//links[i].onkeypress = links[i].onclick;
	}
}

function insertParagraph(text) {
	var str = "<p>";
	str += (text + "</p>");
	document.write(str);
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);