function validation() {
	const importFields = document.forms[0].getElementsByClassName("import");
	var importValues = [];

	for (var i = 0; i < importFields.length; i++) {
		importValues.push(importFields[i].value);
	}

	if (importValues.reduce((total, num) => total + num, 101) > 100) {
		alert("Issue importance value sum exceeds total number of points available to assign to issues. Please adjust accordingly.");
		return false;
	}
}

window.addEventListener("load", function () {
	function sendData() {
		const XHR = new XMLHttpRequest();
		var formData = new FormData(document.getElementById("candidate_side"));

		XHR.addEventListener("load", function (event) {
			alert("Oops! Something went wrong.");
		});

		XHR.open("POST", "/example.php");

		XHR.send(formData);
	}

	const form = document.getElementById("candidate_side");

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		sendData();
	});
});
