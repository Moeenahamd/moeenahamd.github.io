---
layout: page
title: "Navigating MySQL Databases and Tables"
date: 2013-06-18
categories: [MySQL]
teaser: "Here is a list of MySQL's command line client commands to navigate through the databases and their tables. First run the client program by entering the following at the command line: The -u option is"

---
Here is a list of MySQL's command line client commands to navigate through the databases and their tables.

First run the client program by entering the following at the command line:
```
mysql -u root -p
```
The -u option is for passing the username. So change root to the username you have access to. And the -p options prompts you for your password. You can omit it if your username does not have a password. Now at the mysql> prompt try the following commands:


| **show databases;**            | List the names of the databases on the server. |
| **use database_name;**         | Select a database to access its contents. e.g.: *use college*; |
| **show tables;**               | List the names of tables in the currently selected database. |
| **desc table_name;**           | List the structure of the table: field names, data types, and attributes. e.g.: *desc student_courses;* |
| **show indexes from table_name;** | Display a detailed list of the indexes of a table. e.g.: *show indexes from student_courses;* |


If you found this post useful, I'd be very grateful if you'd help it spread by sharing it. Thank you!

