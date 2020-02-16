package mainCode;

public class Issue implements Comparable<Issue> {
	private String name; // name of the issue
	private String description;
	private int leaning; // political leaning (left of 0, left, right of 0, right)
	private int rank;
	
	public Issue(String name, int leaning, String description) {
		this.name = name;
		this.leaning = leaning;
		this.description = description;
	}
	
	public Issue() {
		this("", 0, "No description");
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getName() {
		return name;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setLeaning(int leaning) {
		this.leaning = leaning;
	}
	
	public int getLeaning() {
		return leaning;
	}
	
	public void setRank(int rank) {
		this.rank = rank;
	}
	
	public int getRank() {
		return rank;
	}
	
	@Override
	public int compareTo(Issue other) {
		return this.getRank() - other.getRank();
	}
	
	@Override
	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (! (other instanceof Issue)){
			return false;
		}
		return this.getName().equals(((Issue)other).getName());
	}
	
}
