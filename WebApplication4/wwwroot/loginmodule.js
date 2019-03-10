function initobj(id) {


	sendHttpRequest("loginmodule.html", function (success, response, obj) {
		if (success) {
			document.getElementById(id).innerHTML = response;
		}
	}, this);
	



}