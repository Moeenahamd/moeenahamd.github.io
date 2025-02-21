---
layout: page
title: "Importing and Exporting MySQL Databases"
date: 2013-06-19
categories: [Linux,MySQL]
teaser: "Importing and exporting MySQL databases in a Unix/Linux environment can be done easily with a single command. You can even choose to export the database's structure or data only. Exporting is done using the mysqldump "

---
Importing and exporting MySQL databases in a Unix/Linux environment can be done easily with a single command. You can even choose to export the database's structure or data only.

Exporting is done using the **mysqldump** program and importing is done using the MySQL command line client **mysql**.

mysqldump prints out the resulting SQL to standard output and mysql gets the SQL to execute from standard input. So you will use command line redirection with each.

Both programs also accept the same command line arguments. To pass the database credentials enter **-u** followed by the username and **-p** to prompt you for the password. And lastly the name of the database you want to import to or export from.

To import a database:
```
mysql -u username -p -h server_name database_name < dump_file
```
To export a database:
```
mysqldump -u username -p database_name > dump_file
```
To export the database structure only:
```
mysqldump --no-data -u username -p database_name > dump_file
```
To export the database data only:
```
mysqldump --no-create-info -u username -p database_name > dump_file
```
If you found this post useful, I'd be very grateful if you'd help it spread by sharing it. Thank you!