function sendHttpRequest(url, onComplete, obj, body) {
	let httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function () {
		if (this.readyState == 4) {
			onComplete(this.status == 200, this.responseText, obj);
		}
	};
	if (body) {
		httpRequest.open("POST", url, true);
		httpRequest.setRequestHeader("Content-Type", "application/json");
		httpRequest.send(body);
	} else {
		httpRequest.open("GET", url, true);
		httpRequest.send();
	}
}