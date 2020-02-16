
class Issue{
	constructor(name, description){
		// copy constructor
		if(name instanceof Issue){
			this.name = name.name;
			this.description = name.description;
			this.rank = 0;
		} else {
			this.name = name;
			this.description = description;
			this.rank = 0; 
		}
	}
	
	get _name(){
		return this.name;
	}
	
	get _description(){
		return this.description;
	}
	
	set _rank(rank){
		this.rank = rank;
	}
	
	get _rank(){
		return this.rank;
	}
	
	equals(other){
		if (this == other) {
			return true;
		}
		if (! (other instanceof Issue)){
			return false;
		}
		return this.name.equals(other.name);
	}
	
	compareTo(other) {
		return this.rank - other.rank;
	}
	
}


class Candidate{
	constructor(name, description, party){
		// copy constructor must be within the original constructor
		if(name instanceof Candidate){
			this.name = name.name;
			this.description = name.description;
			this.party = name.party;
			this.issues = name.issues;
			this.score = 0;
		} else {
			this.name = name;
			this.description = description;
			this.party = party;
			this.issues = [];
			this.score = 0;
		}
	}
	
	get _name(){
		return name;
	}
	
	get _description(){
		return description;
	}
	
	get _party(){
		return party;
	}
	
	addIssue(issue){
		issues.push(issue);
	}
	
	get _issues(){
		return issues;
	}
	
	setScore(cosTheta){
		this.score = cosTheta;
	}
	
	get _score(){
		return score;
	}

	equals(other){
		if (this == other) {
			return true;
		}
		if (! (other instanceof Candidate)){
			return false;
		}
		return this.name.equals(other.name);
	}

	// a compare function for when using array.sort(compareFunc) to sort
	compareTo(other){
		if(other.score - this.score<0) {
			return -1;
		}else if(other.score) - this.score>0) {
			return 1;
		}else{
			return 0;
		}
	}

}

class CandidateList{
	constructor(other){
		if (other instanceof CandidateList){
			this.candidates = [];
			for(i = 0; i<other.candidates.length; i++){
				this.candidates.push(other.candidates[i]);
			}
		} else {
			this.candidates = [];
		}
	}
	
	get _candidates(){
		return this.candidates;
	}
	
	add(candidate){
		this.candidates.push(new Candidate(candidate));
	}
	
	removeCandidate(candidate) {
		this.candidates = this.candidates.filter(person => !(person.equals(candidate)));
	}

}

class IssuesList{
	constructor(){
		if (other instanceof IssuesList){
			this.issues = [];
			for(i = 0; i<other.issues.length; i++){
				this.issues.push(other.issues[i]);
			}
		} else {
			this.issues = [];
		}
	}
	
	get _issues(){
		return this.issues;
	}
	
	add(issue){
		this.issues.push(new Issue(issue));
	}
	
	removeIssue(issue) {
		this.issues = this.issues.filter(issue => !(issue.equals(issue)));
	}
	
	getIssue(name, givenList){
		for(i=0;i<givenList.length;i++){
			if (givenList[i]._name.equals(name)){
				return givenList[i];
			}
		}
	}
	
	sortToMatchByIssue(matchList){
		matched = [];
		for(i = 0; i<matchList.length; i++){
			matched.add(getIssue(matchList[i]._name, this.issues));
		}
	}
	
}

class UserMatch{
	constructor(allCandidates, allIssues){
		this.allIssues = new IssuesList(allIssues);
		this.allCandidates = new CandidateList(allCandidates);
		this.party = "";
		this.filterParty = false;
	}
	
	set party(party){
		this.party = party;
	}
	
	// turns filterParty on/off; returns true or false to verify action
	filterPartyOnOff(){
		if(party === ""){
			return false;
		}
		filterParty = !filterParty;
		return true;
	}
	
	getIssueByName(name){
		for(i=0; i<allIssues.length;i++){
			if(allIssues[i]._name.equals(name)){
				return allIssues[i];
			}
		}
	}
	
	// actually I have no idea about setter syntax,
	// so not sure this works
	setIssueOpinion(issue, rank){
		issue.set rank(rank);
	}
	
	sortToMatch(){
		candidates = allCandidates;
		
		if(filterParty){
			candidates = filterByParty(candidates);
		}
		// this is where the algorithm would be run
		//the algo is not in here right now
		
		return candidates;
	}
	
	// this is not meant to be called except for when sorting
	// cannot 'un-filter,' removes those from outside of your party
	filterByParty(candidates){
		filtered = [];
		for(i=0;i<candidates.length;i++){
			if(candidate._party.equals(this._party)){
				filtered.push(candidates[i]);
			}
		}
		return filtered;
	}
	
}