---
layout: page
title: "Paging in MySQL Command-Line Client"
date: 2014-02-04
categories: [Linux , MySQL]
teaser: "By default MySQL command-line client wraps lines in a SELECT query result and has no paging. You can solve both these problems by using the less command available in Unix/Linux systems. Entering the following command "

---
 

By default, the MySQL command-line client wraps lines in a SELECT query result and has no paging. You can solve both these problems by using the less command available in Unix/Linux systems.  

Entering the following command in the MySQL command-line client will do the trick:  

```
pager less -S -X
```
The pager command lets you select a program to use as a pager. In this case we are using **less**. The **-S** argument instructs less to disable line wraps, and **-X** instructs it disable clearing of the screen when less exits.

Now when you view a SELECT query result you can scroll vertically and horizontally using the arrow keys as well as the spacebar, page up and page down keys. You can also search the query results by pressing the slash key '/' and enter the term to search for. For example to search for codehill enter /codehill. And to quit press the **'q'** key.

If you would like to use this as your default pager setting when you run MySQL command-line client; edit the file .my.cnf in your home directory or create it if it does not exist and enter the following:

```
pager=less -S -X
```
If you found this post useful, I'd be very grateful if you'd help it spread by sharing it. Thank you!
