select * from students;

select studentID,name,(mathscore+sciencescore+englishscore) as totalscore from students order by totalscore desc limit 5;

select avg(mathscore) as avg_math_score from students where mathscore>70;

select distinct MathScore from students order by MathScore desc limit 1 offset 1;