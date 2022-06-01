create database if not exists normalization;
use normalization;
create table department (
  id int not null auto_increment primary key,
  name varchar(100) not null
);
create table employee (
  id int not null auto_increment primary key,
  first_name varchar(100) not null,
  last_name varchar(100) not null,
  registered_at datetime not null default current_timestamp()
);
create table contact (
  id int not null auto_increment primary key,
  email varchar(100) not null,
  phone varchar(100) not null,
  employee_id int not null,
  foreign key(employee_id) references employee (id)
);
create table department_employees (
  id int not null auto_increment primary key,
  employee_id int not null,
  department_id int not null,
  foreign key(employee_id) references employee (id),
  foreign key(department_id) references department (id)
);
select * from employee;
insert into department(name)
values ('Administração'), ('Vendas'), ('Operacional'), ('Estratégico'), ('Marketing');
select * from department;
insert into employee(first_name, last_name)
values
  ('Joseph', 'Rodrigues'),
  ('André', 'Freeman'),
  ('Cíntia', 'Duval'),
  ('Fernanda', 'Mendes');
insert into contact(phone, email, employee_id)
values
  ('35998552-1445', 'jo@gmail.com	', 1),
  ('4799522-4996', 'andre1990@gmail.com	', 2),
  ('3399855-4669', 'cindy@outlook.com	', 3),
  ('3399200-1556', 'fernandamendes@yahoo.com	', 4);
insert into department_employees(employee_id, department_id)
values
  (1, 1),
  (1, 2),
  (2, 3),
  (3, 4),
  (3, 2),
  (4, 5);