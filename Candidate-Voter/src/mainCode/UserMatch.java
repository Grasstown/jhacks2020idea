package mainCode;

import java.util.*;

public class UserMatch {
	IssuesList issues; // issues of election
	private CandidateList allCandidates; // all the candidates of elections
	String party; // political party of user
	boolean filterParty = false; // if user want only their party members
	
	/**
	 * Sets up a new user profile that can be matched to candidates
	 * by user rank of importance in issues.
	 * 
	 * @param allCandidates
	 * @param issues
	 */
	public UserMatch(CandidateList allCandidates, IssuesList issues) {
		this.issues = new IssuesList(issues);
		this.allCandidates = new CandidateList(allCandidates);
	}
	
	/**
	 * Set the user's political party affiliation.
	 * 
	 * @param party
	 */
	public void setParty(String party) {
		this.party = party;
	}
	
	/**
	 * Turns on or off a filter by party for candidate searching
	 * 
	 * @return boolean regarding if you can turn on the filter or not
	 */
	public boolean filterPartyOnOff() {
		if (party.isEmpty()) {
			return false;
		}
		filterParty = !filterParty;
		return true;
	}
	
	/**
	 * Get the issue on the list with the name of the issue. The
	 * issue names should be unique.
	 * 
	 * @param name
	 * @return the issue with the given name
	 */
	public Issue getIssue(String name) {
		for (Issue issue : issues.getIssues()) {
			if (issue.getName().equals(name)) {
				return issue;
			}
		}
		return null;
	}
	
	/**
	 * For a given issue, the user can give it a rank of importance.
	 * 
	 * @param issue
	 * @param rank
	 */
	public void setIssueOpinion(Issue issue, int rank) {
		issue.setRank(rank);
	}
	
	/**
	 * 
	 * @return the issues in the list of issues
	 */
	public ArrayList<Issue> getIssues() {
		return issues.getIssues();
	}
	
	/**
	 * Sort the candidates list to candidates with the closest
	 * emphasis to the farthest emphasis on the user's issues.
	 * 
	 * @return
	 */
	public ArrayList<Candidate> sortToMatch(){
		ArrayList<Candidate> candidates = allCandidates.getCandidates();
		
		if (filterParty) {
			candidates = filterByParty(candidates);
		}
		candidates = scoreCandidates(candidates);
		Collections.sort(candidates); 
		// candidates closest to furthest in issue importance
		
		return candidates;
	}
	
	/**
	 * Called if filterParty is true. Filters out candidates who are
	 * not in the user's political party.
	 * 
	 * @return ArrayList of Candidates in user's party
	 */
	private ArrayList<Candidate> filterByParty(ArrayList<Candidate> candidates){
		
		ArrayList<Candidate> filtered = new ArrayList<>();
		for(Candidate candidate : candidates) {
			if(candidate.getParty().equals(this.party)) {
				filtered.add(candidate);
			}
		}	
		return filtered;
	}

	/**
	 * Score the candidates by taking the cos of the angle between
	 * the candidate's issue vector and the user's issue vector. Closer
	 * to 1 is the better score.
	 * 
	 * @param candidates
	 * @return
	 */
	private ArrayList<Candidate> scoreCandidates(ArrayList<Candidate> candidates){
		
		ArrayList<Integer> userVector = new ArrayList<>();
		for(Issue issue : issues.getIssues()) {
			userVector.add(issue.getRank());
		}
		double userNorm = norm(userVector);
		
		ArrayList<Integer> canVector = new ArrayList<>();
		for(Candidate candidate : candidates) {
			for(Issue issue : candidate.getIssues()) {
				canVector.add(issue.getRank());
			}
			double canNorm = norm(canVector);
			double dotProd = dotProduct(userVector, canVector);
			candidate.setScore((cosTheta(dotProd, userNorm, canNorm)));
		}
		
		return candidates;

	}
	
	private double dotProduct(ArrayList<Integer> vector1, 
			ArrayList<Integer> vector2) {
		double dotProd = 0;
		for(int pos = 0; pos < vector1.size(); pos++) {
			dotProd += vector1.get(pos) * vector2.get(pos);
		}
		return dotProd;
	}
	
	private double norm(ArrayList<Integer> vector) {
		double normSq = 0;
		
		for(Integer integer : vector) {
			normSq += integer^2;
		}	
		return Math.sqrt(normSq);
	}
	
	/**
	 * Find the cos of the angle between the vectors.
	 * A score closer to 1 is best.
	 * 
	 * @param dotProd
	 * @param norm1
	 * @param norm2
	 * @return
	 */
	private double cosTheta(double dotProd, double norm1, double norm2) {
		return(dotProd/(norm1 * norm2));
	}
	
}
