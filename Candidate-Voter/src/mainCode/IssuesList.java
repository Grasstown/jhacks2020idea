package mainCode;

import java.util.ArrayList;

public class IssuesList {

	private ArrayList<Issue> issues = new ArrayList<>();
	
	public IssuesList() {
		
	}
	
	public IssuesList(IssuesList other) {
		this.issues = other.issues;
	}
	
	public void addIssue(Issue issue) {
		issues.add(issue);
	}
	
	public void removeIssue(Issue issue) {
		issues.remove(issue);
	}
	
	public ArrayList<Issue> getIssues(){
		return new ArrayList<>(issues);
	}
	
	/**
	 * Match the order of this list of issues to the order by name of
	 * issues of the given parameter list of issues.
	 * 
	 * @param match
	 * @return
	 */
	public void sortToMatchByIssue(ArrayList<Issue> match){
		
		ArrayList<Issue> matched = new ArrayList<>();
		for(Issue issue : match) {
			matched.add(getIssue(issue.getName(), this.issues));
		}
		
		issues = matched;	
	}
	
	/**
	 * Get issue by name in a given list.
	 * 
	 * @param name
	 * @param givenList
	 * @return
	 */
	private Issue getIssue(String name, ArrayList<Issue> givenList) {
		for (Issue issue : givenList) {
			if (issue.getName().equals(name)) {
				return issue;
			}
		}
		return null;
	}
}
