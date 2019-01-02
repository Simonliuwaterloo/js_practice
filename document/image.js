"use strict";
window.onload = function() {
	popUp();
	prepareGallery();
	let para = document.createElement("p");//the node is floating free
	let info = "nodeName: ";
	info += para.nodeName;
	info += " nodeType: ";
	info += para.nodeType;
	alert(info);
	let testdiv = document.createElement("div");
	document.body.appendChild(testdiv);
	testdiv.innerHTML = "<p>I inserted this.</P>";
	testdiv.appendChild(para);
	let txt = document.createTextNode("I created text");//the node is floating free
	para.appendChild(txt);
	//insert " This is my content" to document
	let sentence = document.createElement("p");
	let txt1 = document.createTextNode("This is ");
	let txt2 = document.createElement("em");
	let emph = document.createTextNode("my ");
	let txt3 = document.createTextNode("content");
	txt2.appendChild(emph);
	sentence.appendChild(txt1);
	sentence.appendChild(txt2);
	sentence.appendChild(txt3);
	testdiv.appendChild(sentence);
	//create placeholder
	let placeholder = document.createElement("img");
	placeholder.id = "placeholder";
	placeholder.src = "placeholder.jpg";
	placeholder.alt = "my image gallery";
	let intro = document.createElement("p");
	intro.id = "description";
	intro.appendChild(document.createTextNode("introduction"));
	//document.body.appendChild(placeholder);
	//document.body.appendChild(intro);
	placeholder.style.width = "50%";
	document.body.insertBefore(placeholder, document.testdiv);
	document.body.insertBefore(intro, document.testdiv);
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
console.log(document.getElementsByTagName("body"));