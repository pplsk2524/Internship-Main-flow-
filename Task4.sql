select * from students;

select studentID,name,(mathscore+sciencescore+englishscore) as totalscore ,rank() over (order by (mathscore+sciencescore+englishscore) desc) as Ranking from students;

select studentID,name,sum(mathscore) over (order by studentID) as total from students;
