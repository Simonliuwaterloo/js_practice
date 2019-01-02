function addLoadEvent (func) {
	let oddfunc = window.onload;
	if (typeof oddfunc != "function") {
		window.onload = func();
	}
	else {
		window.onload = function () {
			oddfunc();
			func();
		}
	}
}
function displayAbbreviation() {
	if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	let abbs = document.getElementsByTagName("abbr");
	if (abbs.length < 1) return false;

	let defList = document.createElement("dl");
	let heading = document.createElement("h2");
	heading.appendChild(document.createTextNode("Abbreviations"));
	document.body.appendChild(heading);
	document.body.appendChild(defList);
	for (let node of abbs) {
		let name = document.createElement("dt");
		let def = document.createElement("dd");
		name.appendChild(document.createTextNode(node.lastChild.nodeValue));
		def.appendChild(document.createTextNode(node.title));
		defList.appendChild(name);
		defList.appendChild(def);
	}	
}
function displayCite() {
	let sources = document.getElementsByTagName("blockquote");
	for (let node of sources) {
		let cite = document.createElement("a");
		cite.appendChild(document.createTextNode("source"));
		let superscript = document.createElement("sup");
		superscript.appendChild(cite);
		let quoteChildren = node.getElementsByTagName("*");
		quoteChildren[quoteChildren.length - 1].appendChild(superscript);
		cite.href = node.cite;
	}	
}
function displayAccessKey() {
	let nodeList = document.getElementsByTagName("a");
	//create caption
	let caption = document.createElement("h2");
	caption.appendChild(document.createTextNode("Accesskeys"));
	document.body.appendChild(caption);
	//create list of access keys
	let keyList = document.createElement("ul");
	document.body.appendChild(keyList);
	for (let node of nodeList) {
		if (node.hasAttribute("accesskey")) {
			let item = document.createElement("li");
			keyList.appendChild(item);
			item.appendChild(document.createTextNode(node.getAttribute("accesskey") + " : " + node.childNodes[0].nodeValue ));
		}
	}
}
addLoadEvent(displayAbbreviation);
addLoadEvent(displayCite);
addLoadEvent(displayAccessKey);