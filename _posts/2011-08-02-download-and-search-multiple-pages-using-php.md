---
layout: page
title: "Download And Search Multiple Pages Using PHP"
date: 2011-08-02
categories: [ PHP]
teaser: "Here is a simple way to loop through a list of URLs, download the page and search the contents for a string. The script starts by checking if the post variable $_POST['urls'] is set. If "

---
Here is a simple way to loop through a list of URLs, download the page and search the contents for a string.

The script starts by checking if the post variable $_POST['urls'] is set. If it is, its content is split by line breaks into the array $urls to easily read one URL at a time using the foreach loop.

I used the set_time_limit() function to reset the script's time limit to 5 minutes before processing each URL to make sure the script does not timeout if a slow page was accessed or the user entered a long list of URLs.

The script then executes the function isonline(), defined below, which returns the HTTP status code and places the contents of the page in the variable $content which is passed by reference. If isonline() returned the text 'OK' the variable $content is searched, otherwise the returned HTTP status code is printed out.

The PHP function flush() is used to display the output at the end of each pass through the loop instead of waiting for the script to end completely for the output to be displayed.

```
<?php 
if(isset($_POST['urls'])) {	
  $urls = array();
  $urls = explode(PHP_EOL, trim($_POST['urls']));
  $c = 1;
		
  echo '<strong>' . count($urls) . ' elements submitted</strong><br />';
		
  foreach($urls as $url) {
    set_time_limit(300);  
			
    $http_code = isonline($url, $content);

    if($http_code == 'OK') {
      echo "<div class='linenumber'>$c</div><div class='filename'>" . 
      "<a href='$url'>$url</a></div><div class='status'>$http_code</div>";
				
      if(!empty($_POST['search'])) {
        $content = strip_tags($content);
        if(strpos($content, $_POST['search']))
          echo '<div class="search_found">Found</div>';
        else
          echo '<div class="search_notfound">Not Found</div>';
      }
    }
    else {
      echo "<div>$c</div><div>" . 
        "<a href='$url'>$url</a></div><div>$http_code</div>";
    }
			
    echo '<br />';
    flush();  
    $c++; 
  }
		
  echo '<br /><span style="color:green;">Completed.</span><br />';
} else { 
?>

<form method="post">
  <strong>URLs:</strong><br />
  <textarea id="urls" name="urls" ></textarea>
  <strong>Search the contents of the pages for:</strong><br />
  <input type="text" id="search" name="search" /><br />
  <input type="submit" value="Submit" id="submit" name="submit" />
</form>
<?php } ?>
```

The isonline() function uses CURL to download the contents of the page to $content and return 'OK' if it was successful or the HTTP status code if it wasn't. The CURL options set the target URL and instruct it to download the body of the page, send back what it receives, set connection timeout to 5 minutes and follow redirects.

```
<?php
function isonline($url , &$content) {  
  $ch = curl_init();  
	
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_NOBODY, false);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
  curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 300);	
  curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	
  $content = @curl_exec($ch);	
  $info = curl_getinfo($ch);
  curl_close($ch);

  return($info['http_code'] == 200? 
    'OK' : 'HTTP Code '.$info['http_code']);
}
?>
```