function getNewContent() {
	let request = getHTTPObject();
	if (request) {
		request.open("GET","response.txt", true);
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				let para = document.createElement("p");
				let txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		}
		request.send();
	}
	else{
		alert("sorry, your browser doesn\'t support XMLHttpRequest");
	}
}
addLoadEvent(getNewContent);
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
