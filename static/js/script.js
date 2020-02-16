function validation() {
	const importFields = document.getElementById("candidate_side").getElementsByClassName("import");
	var importValues = [];

	for (var i = 0; i < importFields.length; i++) {
		importValues.push(parseInt(importFields[i]));
		console.log(importFields[i]);
	}

	var total = parseInt(0);

	for (var j = 0; j < importValues.length; j++) {
		total += parseInt(importValues[j]);
	}

	console.log(parseInt(total));

	if (total > 100) {
		alert("Issue importance value sum exceeds total number of points available to assign to issues. Please adjust accordingly.");
		return false;
	}
}

function redirect(p) {
	if (parseInt(p) == 1) {
		window.location.replace("http://localhost:5000/vote")
	} else {
		window.location.replace("http://localhost:5000/candidate")
	}
}
