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
addLoadEvent(displayAbbreviation);
addLoadEvent(displayCite);