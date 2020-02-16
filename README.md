# JHacks2020
## CandiDate: An Informed Voter Web Application

This program would use data from election candidates on their stances and emphasis on various relevant issues along with user input on user opinions on relevant issues to help users identify candidates who best match with them.

### Algorithm

Each candidate has placed 100 points onto the given set of issues proportional to the importance the candidate places on each issue. The user is allocated 100 points to similarly put onto issues based on the importance of each issue to the user. The different point distributions of each candidate and user can be represented as a vector.

The closer the point distributions or priorities of the candidate to the user, the more similar their issue priority vectors will be. That can be calculated through finding the angle between the vectors. The candidates with the least angle between their vectors to the user's vectors are the candidates with closest priorities to the user.

Matching candidates are shown to the user. At that time, the user can rate the candidate's stances on the issues and identify the best candidate.
