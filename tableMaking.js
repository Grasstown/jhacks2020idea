
// General function for creating a new element in the html document
function addElement(typeIn, textIn, existingId, classIn, setId){
	var newElement = document.createElement(typeIn);
	var txt = document.createTextNode(textIn);
	newElement.appendChild(txt);
	newElement.className = classIn;
	newElement.setAttribute("id", setId);

	var existingElement = document.getElementById(existingId);
	existingElement.appendChild(newElement);
	}

var candidateExample = ["Bob", 34, "MD", "D", "Blah","Blah","Blah","Blah","Blah","Blah"];

// adds an empty row
function addRow(candidate){
	addElement("tr", "", "candidates", "", "temp");
	for(i=0; i<10; i++){
		var text = "";
		if (i<4){
			text = candidate[i];
		}
		addElement("td", text, "temp", "facts", "");
	}
	document.getElementById("temp").removeAttribute("id");	
}