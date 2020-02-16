//exporting input from candidate side form into a csv file

var name = document.getElementById("name");

var issues = ["Foreign Policy", "Abortion", "Education"];
// the list of issues is hardcoded

var rows = [["Name", "Issue", "Opinion", "Rank"]]

for(i = 0, a = 0; i < issues.length; i ++, a+= 2){
	rows.push([name, issues[0],
	document.getElementById("candidate_side").elements[3+a].value,
	document.getElementById("candidate_side").elements[4+a].value]);
	
	// first 3 elements in form are name photo bio
	// following are pairs of opinion + rank inputs
}

// I don't actually really understand how this works, but stackoverflow
// is my friend
let csvContent = "data:text/csv;charset=utf-8," 
    + rows.map(e => e.join(",")).join("\n");
	
var encodedUri = encodeURI(csvContent);
window.open(encodedUri);