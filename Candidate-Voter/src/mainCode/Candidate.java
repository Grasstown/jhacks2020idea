package mainCode;

import java.util.*;

public class Candidate implements Comparable<Candidate> {
	String name;
	String description;
	String party;
	ArrayList<Issue> issues;
	double score;
	
	public Candidate(String name, String description, String party) {
		this.name = name;
		this.description = description;
		this.party = party;
		issues = new ArrayList<>();	
	}
	
	public Candidate(Candidate other) {
		this.name = other.name;
		this.description = other.description;
		this.party = other.party;
		this.issues = other.issues;
	}
	
	public String getName() {
		return name;
	}
	
	public String getDescription() {
		return description;
	}
	
	public String getParty() {
		return party;
	}
	
	public void addIssue(Issue issue) {
		issues.add(issue);
	}
	
	public void setScore(double cosTheta) {
		score = cosTheta;
	}
	
	public double getScore() {
		return score;
	}
	
	public void rankIssues() {
		Collections.sort(issues);
	}
	
	public Issue getNthIssue(int rank) {
		return issues.get(rank);
	}
	
	public ArrayList<Issue> getIssues(){
		return issues;
	}
	
	@Override
	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (! (other instanceof Candidate)){
			return false;
		}
		return this.getName().equals(((Candidate)other).getName());
	}
	
	@Override
	public int compareTo(Candidate other) {
		if(other.getScore() - this.getScore()<0) {
			return -1;
		}else if(other.getScore() - this.getScore()>0) {
			return 1;
		}else{
			return 0;
		}
	}
	
}
