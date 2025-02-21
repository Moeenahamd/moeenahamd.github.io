---
layout: page
title: "Backup MySQL Databases to Amazon S3 Using PHP"
date: 2011-05-16
categories: [  MySQL, PHP ]
teaser: "With a few lines of PHP code and S3tool's s3cmd command-line tool you can backup your MySQL databases automatically to Amazon's S3. To use this script you'll need SSH access to your server. First download"

---
With a few lines of PHP code and [S3tool's s3cmd](https://s3tools.org/s3cmd) command-line tool you can backup your MySQL databases automatically to Amazon's S3. To use this script you'll need SSH access to your server. First download s3cmd and upload it to your server. Installation is straight forward. The PHP code is simple:

```
exec("mysqldump -udbuser1 -p12345 --databases db1 db2 > /home/user1/dbbackup-".date('Y-m-d').".sql");

exec("tar -zcvf /home/user1/dbbackup-".date('Y-m-d').".tar.gz /home/user1/dbbackup-".date('Y-m-d').".sql");

unlink("/home/user1/dbbackup-".date('Y-m-d').".sql");

@unlink("/home/user1/dbbackup-".date('Y-m-d', strtotime("now -3 days")).".tar.gz");

exec("s3cmd put /home/user1/dbbackup-".date('Y-m-d').".tar.gz s3://database-backups");
```

The first line creates and an SQL file of the databases listed (db1 and db2 in this example) using the **mysqldump** command line. I use the **date()** function to have the file's name end with the backup's date in the **Y-m-d** format, e.g. 2011-05-16. Passing the **-u** and **-p** parameters to mysqldump allows you to pass the username and password. Just make sure the database user has access to all the databases listed.

The second line of code creates a compressed gzip file containing the SQL file and uses the same date format.

The third line deletes the SQL file, which is not needed now that the gzip file is created. And the forth line deletes the gzip file created 3 days ago. This way the server will always have 3 backup files available if anything goes wrong with server. I also use this method to check the files to make sure they aren't corrupted every 3 days. Note: the @ at the beginning of the line is to suppress any warnings in case the file was not found.

The last line uses s3cmd to copy the file to the Amazon S3 server. The parameters are put to upload the file, the file name and the bucket the file should be uploaded to.

When you finish creating and testing the script you could schedule it using your server's crontab or use our [free cron jobs](https://cronless.com/) service which keeps a log of the success and failures of the script's execution as well as offer different types of notifications.