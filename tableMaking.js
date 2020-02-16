
// General function for creating a new element in the html document
function addElement(typeIn, textIn, existingId, classIn, setId, value){
	var newElement = document.createElement(typeIn);
	var txt = document.createTextNode(textIn);
	newElement.appendChild(txt);
	newElement.className = classIn;
	newElement.setAttribute("id", setId);
	newElement.setAttribute("value", value);

	var existingElement = document.getElementById(existingId);
	existingElement.appendChild(newElement);
	}

var ISSUE_NUM = 6;
var candidateExample = ["Bob", 34, "MD", "D", "Blah","Blah","Blah","Blah","Blah","Blah"];


// adds an empty row
function addRow(candidate){
	addElement("tr", "", "candidates", "", "temp");
	for(i=0; i<4+ISSUE_NUM; i++){
		var text = "";
		if (i<4){
			text = candidate[i];
		}
		addElement("td", text, "temp", "facts", i);
	}
	
	for(i=4; i<4+ISSUE_NUM; i++){
		document.getElementById(i).setAttribute("id", "current");
		
		addElement("table", "", "current", "choices", "currentTable");
			addElement("tr", "", "currentTable", "", "row1");
				addElement("td", "a", "row1");
			addElement("tr", "", "currentTable", "", "row2");
				addElement("td", "a", "row2", "", "rateCol");
					addElement("select", "", "rateCol", "Rating", "rates")
		
		for (i=1; i<=10;i++){
			addElement("option", i, "rates", "", "", i);
		}
		
		document.getElementById("current").setAttribute("id", i+1);
		document.getElementById("currentTable").removeAttribute("id");
	}
	
	document.getElementById("temp").removeAttribute("id");	
}