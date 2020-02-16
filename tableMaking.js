
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


// example candidate to check if it works
var candidateExample = ["Bob", 34, "MD", "D", "Blah1","Blah2",
					"Blah3","Blah4","Blah5","Blah6"];

var ISSUE_NUM = 6; //number of columns for individual issues
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
	
	document.getElementById("temp").removeAttribute("id");	
	
	for(i=4; i<4+ISSUE_NUM; i++){
		document.getElementById(i).setAttribute("id", "current");
		
		addElement("table", "", "current", "choices", "currentTable");
			addElement("tr", "", "currentTable", "", "row1");
				addElement("td", candidate[i], "row1");
			addElement("tr", "", "currentTable", "", "row2");
				addElement("td", "", "row2", "", "rateCol");
					addElement("select", "", "rateCol", "Rating", "rates")
		
		for (b=1; b<=10;b++){
			addElement("option", b, "rates", "", "", b);
		}
		
		document.getElementById("current").setAttribute("id", i);
		document.getElementById("currentTable").removeAttribute("id");
		document.getElementById("row1").removeAttribute("id");
		document.getElementById("row2").removeAttribute("id");
		document.getElementById("rateCol").removeAttribute("id");
		document.getElementById("rates").removeAttribute("id");
	}
	
	for(i=4; i<4+ISSUE_NUM; i++){
		document.getElementById(i).removeAttribute("id");
	}	
}

var bob = ["Bob", 34, "MD", "D", "Blah1","Blah2", "Blah3","Blah4","Blah5","Blah6"];
var joe = ["Joe", 34, "VA", "R", "Blahad1","Bdlah2",
					"Bglah3","Blsfgah4","Balah5","Blasdah6"];
var candidateExample2 = [joe, bob];
					
function initializeRows(candidateList){
	for(a=0;a<candidateList.length;a++){
		addRow(candidateList[a]);
	}
}