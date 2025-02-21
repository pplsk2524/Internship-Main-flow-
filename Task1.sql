CREATE TABLE Students (
    StudentID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Gender CHAR(1) CHECK (Gender IN ('M', 'F')),
    Age INT CHECK (Age > 0),
    Grade VARCHAR(10),
    MathScore INT CHECK (MathScore BETWEEN 0 AND 100),
    ScienceScore INT CHECK (ScienceScore BETWEEN 0 AND 100),
    EnglishScore INT CHECK (EnglishScore BETWEEN 0 AND 100)
);
INSERT INTO Students (Name, Gender, Age, Grade, MathScore, ScienceScore, EnglishScore) VALUES
('John', 'M', 20, 'A', 90, 92, 88),
('Michael', 'M', 21, 'B', 78, 82, 80),
('David', 'M', 19, 'C', 72, 75, 73),
('James', 'M', 22, 'A', 94, 96, 91),
('Robert', 'M', 20, 'A', 87, 83, 86),
('Daniel', 'M', 19, 'A', 95, 98, 97),
('Sophia', 'F', 23, 'C', 63, 67, 66),
('William', 'M', 21, 'B', 86, 88, 87),
('Emily', 'F', 21, 'B', 81, 85, 86),
('Matthew', 'M', 20, 'A', 96, 95, 94),
('Olivia', 'F', 22, 'A', 92, 94, 91);

SELECT * FROM Students;

SELECT 
    AVG(MathScore) AS Avg_Math_Score, 
    AVG(ScienceScore) AS Avg_Science_Score, 
    AVG(EnglishScore) AS Avg_English_Score
FROM Students;

SELECT Name, Gender, Age, Grade, MathScore, ScienceScore, EnglishScore, 
       (MathScore + ScienceScore + EnglishScore) AS TotalScore
FROM Students
ORDER BY TotalScore DESC
LIMIT 1;

SELECT Grade, COUNT(*) AS Student_Count
FROM Students
GROUP BY Grade;

SELECT Gender, 
       AVG(MathScore) AS Avg_Math_Score, 
       AVG(ScienceScore) AS Avg_Science_Score, 
       AVG(EnglishScore) AS Avg_English_Score
FROM Students
GROUP BY Gender;

SELECT * FROM Students
WHERE MathScore > 80;

UPDATE Students
SET Grade = 'B'
WHERE StudentID = 5;  

