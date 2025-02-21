---
layout              : project
title               : "SnipsManager"
description: "Open source PHP script for sharing code snippets"

header:
  image_fullwidth: header_unsplash_12.jpg
github_title: "GitHub"
github_link: "https://github.com/amgedr/"
website_link        : "https://sourceforge.net/projects/newbanner/"
permalink           : "/oldprojects/snipsmanager/"
---

SnipsManager is a free and open source PHP script for creating websites to share source code and plain text like emails, poems and articles with others. It has an easy-to-use Ajax interface that can be customized using its admin pages. It also provides a simple developer API that can be used to integrate it with other websites, as well as features like syntax highlighting, one-click downloading of the submitted text in a file with the appropriate extension, social bookmarking and password protection.

# Website Features

- Snippets can be submitted easily from the homepage by just entering a title, the snippet and selecting programming language/script
- Resizable text area to help submit large snippets.
- Snippets can be password protected.
- Syntax highlighting for more than 25 popular programming and scripting languages and file types.
- One-click submission of snippet to popular social bookmarking websites.
- One-click download of snippet in a file with the appropriate file extension.
- An RSS feed that lists submitted snippets that are not password protected.
- URL shortening
- Optionally ask for a CAPTCHA image before displaying a snippet.
- A contact form that sends to the admin's email address.

# Web-based Administration Panel

- Submission statistic of current month and by programming/scripting languages.
- Setup website title and META tags for better SEO.
- Admin login, change password and retrieve password pages.
- Add, edit and delete links in the top menu.
- Select one of four groups of social bookmarking website icons to be displayed.
- A Moderation page to easily view, modify or delete snippets.

# Syntax Highlighting

SnipsManager currently supports syntax highlighting for the following languages: ActionScript, Apache, AppleScript, AWK, Bash, C, C#, C++, CSS, Delphi, Fortran, Haskell, Java, JavaScript, jQuery, Modula-2, MySQL, Perl, PHP, Python, Ruby on Rails, Scheme, SQL, Vim, Visual Basic, Visual Basic .NET and XML.

# System Requirements

- Apache 1.3.x or later, Microsoft IIS or later.
- PHP 5.0 or later with cURL and Rewrite modules enabled.
- MySQL 4.0.x or later.

# FAQ

# How do I install SnipsManager?

To install SnipsManager:

1. Extract the downloaded file in a folder in your computer.
2. Log in to your web hosting account using an FTP client like Filezilla and upload the contents of the folder.
3. Log in to your web hosting account’s control panel and create a MySQL database.
4. Run the installer by opening the install.php page in the root folder, and enter the details of the database you created.
5. Delete the install.php and upgrade.php files in the root folder using your FTP client.

Now SnipsManager should be working without any problems. If you need to change the database details after deleting the file install.php read the next section.

# How can I change the database connection details?

If you changed the database name, username, password or installation location and would like to change the settings in SnipsManager to reflect that you’ll find these details in the config.php page. You will not be able to view or modify the contents of the file if you open it in a web browser; you’ll have to edit the file using your control panel's text editor or download it and make the changes locally on your computer then upload it to your website. The contents of the file are:

```
<?php
$sitename = 'http://localhost/snipsmanager/';

function connect() {
    mysql_connect(<DB_Location>, <DB_User>, <DB_Password>);
    mysql_select_db(<DB_Name>);
}
?>
```

# The contact page is not working?

For the contact page to work you will need to enter your name and email address in the last two fields in the **General** tab of the **Settings** page in the **Admin area**.

If you would prefer to hide the contact page you can remove it from the top menu by editing the **Interface** Settings page.

# How can I display banner ads at the bottom of pages?

You can modify the design to add banners where you see fit, but if you do not want to mess with HTML and CSS you can display a banner at the bottom of every page by editing the footer.php page and pasting the code immediately after the:

```
<!– Advertising –>
```

line. The ideal size for banners in this location is 468 pixels by 60 pixels.

# How can I remove index.php from the homepage URL?

To hide index.php from the homepage URL, i.e. redirect http://example.com/index.php to http://example.com/ open the file .htaccess in the root folder with a text editor. Its contents should be:

```
RewriteEngine On

#shortens URLs from /show.php?id=123 to /123
RewriteRule ^([0-9].*) show.php?id=$1 [L]


#uncomment and modify domain to redirect www.example.com to example.com
#RewriteCond %{HTTP_HOST} ^www.example.com [NC]
#RewriteRule ^(.*)$ http://example.com/$1 [L,R=301]


#uncomment and modify domain to redirect /index.php to /
#RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\ /(([^/]+/)*)index\.php\ HTTP/
#RewriteRule index\.php$ http://example.com/%1 [R=301,L]

```

Then:

1. Replace the domain example.com in line 12 with the domain name SnipsManager is installed on.
2. Remove the hash sign ‘#’ at the beginning of line 12.
3. Save and close .htaccess.

# How can I disable URL Shortening?

As of version 2.3 SnipsManager has URL shortening enabled by default. So snippet URLs will be http://example.com/123 instead of http://example.com/show.php?id=123. If you would like to disable it:

1. Open the file parser.php located in the includes folder with a text editor.
2. Replace line 65 with the following line:
```
$link = $sitename . "show.php?id=" . $row['id'];
```
3. Replace line 68 with the following line:
```
//$link = $sitename . $row['id'];
```
4. Save and close includes/parser.php.
5. Open the file .htaccess in the root folder with a text editor.
6. Replace line 4 with the following line:
```
#RewriteRule ^([0-9].*) show.php?id=$1 [L]
```
7. Save and close .htacces.
