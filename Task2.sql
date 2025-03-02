create table student(student_id int primary key,name varchar(30),email varchar(20));
insert into student values (1,'Ravi','ravi@gmail.com');
insert into student values (2,'Sara','sara@gmail.com');
insert into student values (3,'Afreen','afreen@gmail.com');
insert into student values (4,'Balu','balu@gmail.com');
insert into student values (5,'Priya','priya@gmail.com');
select * from student;

create table courses(course_id int primary key,course_name varchar(20) not null,course_description varchar(30));
insert into courses values(123,'GenAI','Generative AI');
insert into courses values(124,'DevOps','');
insert into courses values(125,'Cloud','');
insert into courses values(126,'CyberSecurity','');

create table enrolments(enrolment_id int primary key,student_id int,course_id int,enrolment_date date,foreign key (student_id) references student(student_id),foreign key (course_id) references courses(course_id));
insert into enrolments values(1,1,124,'2024-01-10');
insert into enrolments values(2,1,123,'2024-01-10');
insert into enrolments values(3,2,126,'2024-01-23');
insert into enrolments values(4,2,125,'2024-01-22');
insert into enrolments values(5,3,124,'2024-02-1');
insert into enrolments values(6,4,123,'2024-03-5');

select name,course_name from student s inner join enrolments e on s.student_id=e.student_id inner join courses c on e.course_id=c.course_id;

select course_name,count(e.student_id) as count from courses c left join enrolments e on c.course_id=e.course_id group by course_name;

select s.student_id,name from student s join enrolments e on s.student_id=e.student_id group by e.student_id having count(e.student_id)>1;

select course_name from courses c left join enrolments e on c.course_id=e.course_id group by c.course_id having count(c.course_id)=0;