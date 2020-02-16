package mainCode;

import java.util.*;

public class CandidateList {
	private ArrayList<Candidate> candidates = new ArrayList<>();
	
	public CandidateList() {
		
	}
	
	public CandidateList(CandidateList other) {
		this.candidates = other.candidates;
	}
	
	public void addCandidate(Candidate candidate) {
		candidates.add(new Candidate(candidate));
	}
	
	public void removeCandidate(Candidate candidate) {
		candidates.remove(candidate);
	}
	
	public ArrayList<Candidate> getCandidates(){
		return new ArrayList<>(candidates);
	}
	
}
