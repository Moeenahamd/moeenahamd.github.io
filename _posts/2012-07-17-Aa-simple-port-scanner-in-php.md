---
layout: page
title: "A Simple Port Scanner in PHP"
date: 2012-07-17
categories: [ PHP]
teaser: "Here is a simple port scanner written in PHP. It checks if a port is accessible by trying to connect to it using PHP's fsockopen function. The first foreach loop goes through the port numbers"

---
Here is a simple port scanner written in PHP. It checks if a port is accessible by trying to connect to it using PHP's fsockopen function.

```
<form method="post" >
    Domain/IP: 
    <input type="text" name="domain" /> 
    <input type="submit" value="Scan" />
</form>
<br />

<?php
if(!empty($_POST['domain'])) {  
    //list of port numbers to scan
    $ports = array(21, 22, 23, 25, 53, 80, 110, 1433, 3306);
    
    $results = array();
    foreach($ports as $port) {
        if($pf = @fsockopen($_POST['domain'], $port, $err, $err_string, 1)) {
            $results[$port] = true;
            fclose($pf);
        } else {
            $results[$port] = false;
        }
    }

    foreach($results as $port=>$val) {
        $prot = getservbyport($port,"tcp");
                echo "Port $port ($prot): ";
        if($val) {
            echo "<span style=\"color:green\">OK</span><br/>";
        }
        else {
            echo "<span style=\"color:red\">Inaccessible</span><br/>";
        }
    }
}
?>
```
The first foreach loop goes through the port numbers in the $ports array trying to connect to each one using the fsockopen function ([PHP.net reference.](https://www.php.net/manual/en/function.fsockopen.php)) The ampersand (@) is to suppress warnings when the port is inaccessible. The result of each attempt is stored in the $results array. The second loop just goes through the list of results to display it to the user. Hope you found this useful.

Check out the [Host Services tool](https://codehill.com/tools/host-services/) to see the code in action. Hope you found this post useful.