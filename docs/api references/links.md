# Links


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Links</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Links</div>
              <div class="code-dropdown">
                <select  onChange={(e) => handleLanguageChange(e.target)}>
                  <option value="curl">curl</option><option value="java">java</option><option value="android">android</option><option value="objc">objc</option><option value="javascript">javascript</option><option value="csharp">csharp</option><option value="php">php</option><option value="perl">perl</option><option value="python">python</option>
                </select>
                <button className="copy-btn" onClick={(e) => copyActiveCode(e.currentTarget)} title="Copy to clipboard">

                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.375c0-.345.28-.625.625-.625h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 6.375Zm0 2.25C4 8.28 4.28 8 4.625 8h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 8.625Z"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.437 1.5A2 2 0 0 0 6.5 0h-1a2 2 0 0 0-1.937 1.5H3a2 2 0 0 0-2 2V10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-.563ZM4.9 3.1h2.2V2a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6v1.1ZM8 4.5H4a.5.5 0 0 1-.5-.5V2.9H3a.6.6 0 0 0-.6.6V10a.6.6 0 0 0 .6.6h6a.6.6 0 0 0 .6-.6V3.5a.6.6 0 0 0-.6-.6h-.5V4a.5.5 0 0 1-.5.5Z"></path>
                        </svg>
                      </button>
              </div>
              
<div class="code-block curl active" id="Retrieve Links-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/links?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Links-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.LinksApi;

import java.io.File;
import java.util.*;

public class LinksApiExample {

    public static void main(String[] args) {
        
        LinksApi apiInstance = new LinksApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.linksGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinksApi#linksGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Links-code-android">
```js
import io.swagger.client.api.LinksApi;

public class LinksApiExample {

    public static void main(String[] args) {
        LinksApi apiInstance = new LinksApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.linksGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinksApi#linksGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Links-code-objc">
```js
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

LinksApi *apiInstance = [[LinksApi alloc] init];

[apiInstance linksGetWith:from
    to:to
    offset:offset
    limit:limit
    order:order
              completionHandler: ^(list output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Links-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.LinksApi()
var opts = { 
  'from': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'to': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'offset': 56, // {{Integer}} 
  'limit': 56, // {{Integer}} 
  'order': order_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.linksGet(opts, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Links-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class linksGetExample
    {
        public void main()
        {

            var apiInstance = new LinksApi();
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.linksGet(from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LinksApi.linksGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Links-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiLinksApi();
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->linksGet($from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LinksApi->linksGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Links-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::LinksApi;

my $api_instance = WWW::SwaggerClient::LinksApi->new();
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->linksGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling LinksApi->linksGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Links-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LinksApi()
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.links_get(from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LinksApi->linksGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| from | Date (date-time) |
| to | Date (date-time) |
| offset | Integer |
| limit | Integer |
| order | String |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Links ID Charges</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Links ID Charges</div>
              <div class="code-dropdown">
                <select  onChange={(e) => handleLanguageChange(e.target)}>
                  <option value="curl">curl</option><option value="java">java</option><option value="android">android</option><option value="objc">objc</option><option value="javascript">javascript</option><option value="csharp">csharp</option><option value="php">php</option><option value="perl">perl</option><option value="python">python</option>
                </select>
                <button className="copy-btn" onClick={(e) => copyActiveCode(e.currentTarget)} title="Copy to clipboard">

                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.375c0-.345.28-.625.625-.625h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 6.375Zm0 2.25C4 8.28 4.28 8 4.625 8h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 8.625Z"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.437 1.5A2 2 0 0 0 6.5 0h-1a2 2 0 0 0-1.937 1.5H3a2 2 0 0 0-2 2V10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-.563ZM4.9 3.1h2.2V2a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6v1.1ZM8 4.5H4a.5.5 0 0 1-.5-.5V2.9H3a.6.6 0 0 0-.6.6V10a.6.6 0 0 0 .6.6h6a.6.6 0 0 0 .6-.6V3.5a.6.6 0 0 0-.6-.6h-.5V4a.5.5 0 0 1-.5.5Z"></path>
                        </svg>
                      </button>
              </div>
              
<div class="code-block curl active" id="Retrieve Links ID Charges-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/links/{id}/charges?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Links ID Charges-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.LinksApi;

import java.io.File;
import java.util.*;

public class LinksApiExample {

    public static void main(String[] args) {
        
        LinksApi apiInstance = new LinksApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.linksIdChargesGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinksApi#linksIdChargesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Links ID Charges-code-android">
```js
import io.swagger.client.api.LinksApi;

public class LinksApiExample {

    public static void main(String[] args) {
        LinksApi apiInstance = new LinksApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.linksIdChargesGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinksApi#linksIdChargesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Links ID Charges-code-objc">
```js
String *id = id_example; // 
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

LinksApi *apiInstance = [[LinksApi alloc] init];

[apiInstance linksIdChargesGetWith:id
    from:from
    to:to
    offset:offset
    limit:limit
    order:order
              completionHandler: ^(list output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Links ID Charges-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.LinksApi()
var id = id_example; // {{String}} 
var opts = { 
  'from': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'to': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'offset': 56, // {{Integer}} 
  'limit': 56, // {{Integer}} 
  'order': order_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.linksIdChargesGet(id, opts, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Links ID Charges-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class linksIdChargesGetExample
    {
        public void main()
        {

            var apiInstance = new LinksApi();
            var id = id_example;  // String | 
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.linksIdChargesGet(id, from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LinksApi.linksIdChargesGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Links ID Charges-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiLinksApi();
$id = id_example; // String | 
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->linksIdChargesGet($id, $from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LinksApi->linksIdChargesGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Links ID Charges-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::LinksApi;

my $api_instance = WWW::SwaggerClient::LinksApi->new();
my $id = id_example; # String | 
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->linksIdChargesGet(id => $id, from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling LinksApi->linksIdChargesGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Links ID Charges-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LinksApi()
id = id_example # String | 
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.links_id_charges_get(id, from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LinksApi->linksIdChargesGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| id* | String Required |


### Parameters

| Name | Description |
|------|-------------|
| from | Date (date-time) |
| to | Date (date-time) |
| offset | Integer |
| limit | Integer |
| order | String |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Delete Links ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Delete Links ID</div>
              <div class="code-dropdown">
                <select  onChange={(e) => handleLanguageChange(e.target)}>
                  <option value="curl">curl</option><option value="java">java</option><option value="android">android</option><option value="objc">objc</option><option value="javascript">javascript</option><option value="csharp">csharp</option><option value="php">php</option><option value="perl">perl</option><option value="python">python</option>
                </select>
                <button className="copy-btn" onClick={(e) => copyActiveCode(e.currentTarget)} title="Copy to clipboard">

                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.375c0-.345.28-.625.625-.625h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 6.375Zm0 2.25C4 8.28 4.28 8 4.625 8h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 8.625Z"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.437 1.5A2 2 0 0 0 6.5 0h-1a2 2 0 0 0-1.937 1.5H3a2 2 0 0 0-2 2V10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-.563ZM4.9 3.1h2.2V2a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6v1.1ZM8 4.5H4a.5.5 0 0 1-.5-.5V2.9H3a.6.6 0 0 0-.6.6V10a.6.6 0 0 0 .6.6h6a.6.6 0 0 0 .6-.6V3.5a.6.6 0 0 0-.6-.6h-.5V4a.5.5 0 0 1-.5.5Z"></path>
                        </svg>
                      </button>
              </div>
              
<div class="code-block curl active" id="Delete Links ID-code-curl">
```js
curl -X DELETE\
-H "Accept: application/json"\
"https://api.omise.co/links/{id}"
```
</div>

<div class="code-block java" id="Delete Links ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.LinksApi;

import java.io.File;
import java.util.*;

public class LinksApiExample {

    public static void main(String[] args) {
        
        LinksApi apiInstance = new LinksApi();
        String id = id_example; // String | 
        try {
            link result = apiInstance.linksIdDelete(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinksApi#linksIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Delete Links ID-code-android">
```js
import io.swagger.client.api.LinksApi;

public class LinksApiExample {

    public static void main(String[] args) {
        LinksApi apiInstance = new LinksApi();
        String id = id_example; // String | 
        try {
            link result = apiInstance.linksIdDelete(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinksApi#linksIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Delete Links ID-code-objc">
```js
String *id = id_example; // 

LinksApi *apiInstance = [[LinksApi alloc] init];

[apiInstance linksIdDeleteWith:id
              completionHandler: ^(link output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Delete Links ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.LinksApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.linksIdDelete(id, callback);
```
</div>

<div class="code-block csharp" id="Delete Links ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class linksIdDeleteExample
    {
        public void main()
        {

            var apiInstance = new LinksApi();
            var id = id_example;  // String | 

            try
            {
                link result = apiInstance.linksIdDelete(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LinksApi.linksIdDelete: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Delete Links ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiLinksApi();
$id = id_example; // String | 

try {
    $result = $api_instance->linksIdDelete($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LinksApi->linksIdDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Delete Links ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::LinksApi;

my $api_instance = WWW::SwaggerClient::LinksApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->linksIdDelete(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling LinksApi->linksIdDelete: $@\n";
}
```
</div>

<div class="code-block python" id="Delete Links ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LinksApi()
id = id_example # String | 

try: 
    api_response = api_instance.links_id_delete(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LinksApi->linksIdDelete: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| id* | String Required |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Links ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Links ID</div>
              <div class="code-dropdown">
                <select  onChange={(e) => handleLanguageChange(e.target)}>
                  <option value="curl">curl</option><option value="java">java</option><option value="android">android</option><option value="objc">objc</option><option value="javascript">javascript</option><option value="csharp">csharp</option><option value="php">php</option><option value="perl">perl</option><option value="python">python</option>
                </select>
                <button className="copy-btn" onClick={(e) => copyActiveCode(e.currentTarget)} title="Copy to clipboard">

                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.375c0-.345.28-.625.625-.625h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 6.375Zm0 2.25C4 8.28 4.28 8 4.625 8h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 8.625Z"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.437 1.5A2 2 0 0 0 6.5 0h-1a2 2 0 0 0-1.937 1.5H3a2 2 0 0 0-2 2V10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-.563ZM4.9 3.1h2.2V2a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6v1.1ZM8 4.5H4a.5.5 0 0 1-.5-.5V2.9H3a.6.6 0 0 0-.6.6V10a.6.6 0 0 0 .6.6h6a.6.6 0 0 0 .6-.6V3.5a.6.6 0 0 0-.6-.6h-.5V4a.5.5 0 0 1-.5.5Z"></path>
                        </svg>
                      </button>
              </div>
              
<div class="code-block curl active" id="Retrieve Links ID-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/links/{id}"
```
</div>

<div class="code-block java" id="Retrieve Links ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.LinksApi;

import java.io.File;
import java.util.*;

public class LinksApiExample {

    public static void main(String[] args) {
        
        LinksApi apiInstance = new LinksApi();
        String id = id_example; // String | 
        try {
            link result = apiInstance.linksIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinksApi#linksIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Links ID-code-android">
```js
import io.swagger.client.api.LinksApi;

public class LinksApiExample {

    public static void main(String[] args) {
        LinksApi apiInstance = new LinksApi();
        String id = id_example; // String | 
        try {
            link result = apiInstance.linksIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinksApi#linksIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Links ID-code-objc">
```js
String *id = id_example; // 

LinksApi *apiInstance = [[LinksApi alloc] init];

[apiInstance linksIdGetWith:id
              completionHandler: ^(link output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Links ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.LinksApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.linksIdGet(id, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Links ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class linksIdGetExample
    {
        public void main()
        {

            var apiInstance = new LinksApi();
            var id = id_example;  // String | 

            try
            {
                link result = apiInstance.linksIdGet(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LinksApi.linksIdGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Links ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiLinksApi();
$id = id_example; // String | 

try {
    $result = $api_instance->linksIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LinksApi->linksIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Links ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::LinksApi;

my $api_instance = WWW::SwaggerClient::LinksApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->linksIdGet(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling LinksApi->linksIdGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Links ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LinksApi()
id = id_example # String | 

try: 
    api_response = api_instance.links_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LinksApi->linksIdGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| id* | String Required |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Create Links</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Create Links</div>
              <div class="code-dropdown">
                <select  onChange={(e) => handleLanguageChange(e.target)}>
                  <option value="curl">curl</option><option value="java">java</option><option value="android">android</option><option value="objc">objc</option><option value="javascript">javascript</option><option value="csharp">csharp</option><option value="php">php</option><option value="perl">perl</option><option value="python">python</option>
                </select>
                <button className="copy-btn" onClick={(e) => copyActiveCode(e.currentTarget)} title="Copy to clipboard">

                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.375c0-.345.28-.625.625-.625h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 6.375Zm0 2.25C4 8.28 4.28 8 4.625 8h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 8.625Z"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.437 1.5A2 2 0 0 0 6.5 0h-1a2 2 0 0 0-1.937 1.5H3a2 2 0 0 0-2 2V10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-.563ZM4.9 3.1h2.2V2a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6v1.1ZM8 4.5H4a.5.5 0 0 1-.5-.5V2.9H3a.6.6 0 0 0-.6.6V10a.6.6 0 0 0 .6.6h6a.6.6 0 0 0 .6-.6V3.5a.6.6 0 0 0-.6-.6h-.5V4a.5.5 0 0 1-.5.5Z"></path>
                        </svg>
                      </button>
              </div>
              
<div class="code-block curl active" id="Create Links-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/links"
```
</div>

<div class="code-block java" id="Create Links-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.LinksApi;

import java.io.File;
import java.util.*;

public class LinksApiExample {

    public static void main(String[] args) {
        
        LinksApi apiInstance = new LinksApi();
        Boolean multiple = true; // Boolean | 
        String currency = currency_example; // String | 
        Integer amount = 56; // Integer | 
        String description = description_example; // String | 
        String title = title_example; // String | 
        try {
            link result = apiInstance.linksPost(multiple, currency, amount, description, title);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinksApi#linksPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Create Links-code-android">
```js
import io.swagger.client.api.LinksApi;

public class LinksApiExample {

    public static void main(String[] args) {
        LinksApi apiInstance = new LinksApi();
        Boolean multiple = true; // Boolean | 
        String currency = currency_example; // String | 
        Integer amount = 56; // Integer | 
        String description = description_example; // String | 
        String title = title_example; // String | 
        try {
            link result = apiInstance.linksPost(multiple, currency, amount, description, title);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinksApi#linksPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Create Links-code-objc">
```js
Boolean *multiple = true; //  (optional)
String *currency = currency_example; //  (optional)
Integer *amount = 56; //  (optional)
String *description = description_example; //  (optional)
String *title = title_example; //  (optional)

LinksApi *apiInstance = [[LinksApi alloc] init];

[apiInstance linksPostWith:multiple
    currency:currency
    amount:amount
    description:description
    title:title
              completionHandler: ^(link output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Create Links-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.LinksApi()
var opts = { 
  'multiple': true // {{Boolean}} 
  'currency': currency_example // {{String}} 
  'amount': 56 // {{Integer}} 
  'description': description_example // {{String}} 
  'title': title_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.linksPost(opts, callback);
```
</div>

<div class="code-block csharp" id="Create Links-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class linksPostExample
    {
        public void main()
        {

            var apiInstance = new LinksApi();
            var multiple = true;  // Boolean |  (optional) 
            var currency = currency_example;  // String |  (optional) 
            var amount = 56;  // Integer |  (optional) 
            var description = description_example;  // String |  (optional) 
            var title = title_example;  // String |  (optional) 

            try
            {
                link result = apiInstance.linksPost(multiple, currency, amount, description, title);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LinksApi.linksPost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Create Links-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiLinksApi();
$multiple = true; // Boolean | 
$currency = currency_example; // String | 
$amount = 56; // Integer | 
$description = description_example; // String | 
$title = title_example; // String | 

try {
    $result = $api_instance->linksPost($multiple, $currency, $amount, $description, $title);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LinksApi->linksPost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Create Links-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::LinksApi;

my $api_instance = WWW::SwaggerClient::LinksApi->new();
my $multiple = true; # Boolean | 
my $currency = currency_example; # String | 
my $amount = 56; # Integer | 
my $description = description_example; # String | 
my $title = title_example; # String | 

eval { 
    my $result = $api_instance->linksPost(multiple => $multiple, currency => $currency, amount => $amount, description => $description, title => $title);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling LinksApi->linksPost: $@\n";
}
```
</div>

<div class="code-block python" id="Create Links-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LinksApi()
multiple = true # Boolean |  (optional)
currency = currency_example # String |  (optional)
amount = 56 # Integer |  (optional)
description = description_example # String |  (optional)
title = title_example # String |  (optional)

try: 
    api_response = api_instance.links_post(multiple=multiple, currency=currency, amount=amount, description=description, title=title)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LinksApi->linksPost: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| multiple | Boolean |
| currency | String (currency) |
| amount | Integer |
| description | String |
| title | String |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Links Search</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Links Search</div>
              <div class="code-dropdown">
                <select  onChange={(e) => handleLanguageChange(e.target)}>
                  <option value="curl">curl</option><option value="java">java</option><option value="android">android</option><option value="objc">objc</option><option value="javascript">javascript</option><option value="csharp">csharp</option><option value="php">php</option><option value="perl">perl</option><option value="python">python</option>
                </select>
                <button className="copy-btn" onClick={(e) => copyActiveCode(e.currentTarget)} title="Copy to clipboard">

                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.375c0-.345.28-.625.625-.625h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 6.375Zm0 2.25C4 8.28 4.28 8 4.625 8h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 8.625Z"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.437 1.5A2 2 0 0 0 6.5 0h-1a2 2 0 0 0-1.937 1.5H3a2 2 0 0 0-2 2V10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-.563ZM4.9 3.1h2.2V2a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6v1.1ZM8 4.5H4a.5.5 0 0 1-.5-.5V2.9H3a.6.6 0 0 0-.6.6V10a.6.6 0 0 0 .6.6h6a.6.6 0 0 0 .6-.6V3.5a.6.6 0 0 0-.6-.6h-.5V4a.5.5 0 0 1-.5.5Z"></path>
                        </svg>
                      </button>
              </div>
              
<div class="code-block curl active" id="Retrieve Links Search-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/links/search?scope=&query=&filters[amount]=&filters[created]=&filters[currency]=&filters[multiple]=&filters[used]=&filters[used_at]=&filters[pending]="
```
</div>

<div class="code-block java" id="Retrieve Links Search-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.LinksApi;

import java.io.File;
import java.util.*;

public class LinksApiExample {

    public static void main(String[] args) {
        
        LinksApi apiInstance = new LinksApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Integer filters[amount] = 56; // Integer | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        String filters[currency] = filters[currency]_example; // String | 
        Boolean filters[multiple] = true; // Boolean | 
        Boolean filters[used] = true; // Boolean | 
        Date filters[usedAt] = 2013-10-20T19:20:30+01:00; // Date | 
        Boolean filters[pending] = true; // Boolean | 
        try {
            link result = apiInstance.linksSearchGet(scope, query, filters[amount], filters[created], filters[currency], filters[multiple], filters[used], filters[usedAt], filters[pending]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinksApi#linksSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Links Search-code-android">
```js
import io.swagger.client.api.LinksApi;

public class LinksApiExample {

    public static void main(String[] args) {
        LinksApi apiInstance = new LinksApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Integer filters[amount] = 56; // Integer | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        String filters[currency] = filters[currency]_example; // String | 
        Boolean filters[multiple] = true; // Boolean | 
        Boolean filters[used] = true; // Boolean | 
        Date filters[usedAt] = 2013-10-20T19:20:30+01:00; // Date | 
        Boolean filters[pending] = true; // Boolean | 
        try {
            link result = apiInstance.linksSearchGet(scope, query, filters[amount], filters[created], filters[currency], filters[multiple], filters[used], filters[usedAt], filters[pending]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LinksApi#linksSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Links Search-code-objc">
```js
String *scope = scope_example; //  (optional) (default to link)
String *query = query_example; //  (optional)
Integer *filters[amount] = 56; //  (optional)
Date *filters[created] = 2013-10-20T19:20:30+01:00; //  (optional)
String *filters[currency] = filters[currency]_example; //  (optional)
Boolean *filters[multiple] = true; //  (optional)
Boolean *filters[used] = true; //  (optional)
Date *filters[usedAt] = 2013-10-20T19:20:30+01:00; //  (optional)
Boolean *filters[pending] = true; //  (optional)

LinksApi *apiInstance = [[LinksApi alloc] init];

[apiInstance linksSearchGetWith:scope
    query:query
    filters[amount]:filters[amount]
    filters[created]:filters[created]
    filters[currency]:filters[currency]
    filters[multiple]:filters[multiple]
    filters[used]:filters[used]
    filters[usedAt]:filters[usedAt]
    filters[pending]:filters[pending]
              completionHandler: ^(link output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Links Search-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.LinksApi()
var opts = { 
  'scope': scope_example, // {{String}} 
  'query': query_example, // {{String}} 
  'filters[amount]': 56, // {{Integer}} 
  'filters[created]': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'filters[currency]': filters[currency]_example, // {{String}} 
  'filters[multiple]': true, // {{Boolean}} 
  'filters[used]': true, // {{Boolean}} 
  'filters[usedAt]': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'filters[pending]': true // {{Boolean}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.linksSearchGet(opts, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Links Search-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class linksSearchGetExample
    {
        public void main()
        {

            var apiInstance = new LinksApi();
            var scope = scope_example;  // String |  (optional)  (default to link)
            var query = query_example;  // String |  (optional) 
            var filters[amount] = 56;  // Integer |  (optional) 
            var filters[created] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var filters[currency] = filters[currency]_example;  // String |  (optional) 
            var filters[multiple] = true;  // Boolean |  (optional) 
            var filters[used] = true;  // Boolean |  (optional) 
            var filters[usedAt] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var filters[pending] = true;  // Boolean |  (optional) 

            try
            {
                link result = apiInstance.linksSearchGet(scope, query, filters[amount], filters[created], filters[currency], filters[multiple], filters[used], filters[usedAt], filters[pending]);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LinksApi.linksSearchGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Links Search-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiLinksApi();
$scope = scope_example; // String | 
$query = query_example; // String | 
$filters[amount] = 56; // Integer | 
$filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
$filters[currency] = filters[currency]_example; // String | 
$filters[multiple] = true; // Boolean | 
$filters[used] = true; // Boolean | 
$filters[usedAt] = 2013-10-20T19:20:30+01:00; // Date | 
$filters[pending] = true; // Boolean | 

try {
    $result = $api_instance->linksSearchGet($scope, $query, $filters[amount], $filters[created], $filters[currency], $filters[multiple], $filters[used], $filters[usedAt], $filters[pending]);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LinksApi->linksSearchGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Links Search-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::LinksApi;

my $api_instance = WWW::SwaggerClient::LinksApi->new();
my $scope = scope_example; # String | 
my $query = query_example; # String | 
my $filters[amount] = 56; # Integer | 
my $filters[created] = 2013-10-20T19:20:30+01:00; # Date | 
my $filters[currency] = filters[currency]_example; # String | 
my $filters[multiple] = true; # Boolean | 
my $filters[used] = true; # Boolean | 
my $filters[usedAt] = 2013-10-20T19:20:30+01:00; # Date | 
my $filters[pending] = true; # Boolean | 

eval { 
    my $result = $api_instance->linksSearchGet(scope => $scope, query => $query, filters[amount] => $filters[amount], filters[created] => $filters[created], filters[currency] => $filters[currency], filters[multiple] => $filters[multiple], filters[used] => $filters[used], filters[usedAt] => $filters[usedAt], filters[pending] => $filters[pending]);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling LinksApi->linksSearchGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Links Search-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LinksApi()
scope = scope_example # String |  (optional) (default to link)
query = query_example # String |  (optional)
filters[amount] = 56 # Integer |  (optional)
filters[created] = 2013-10-20T19:20:30+01:00 # Date |  (optional)
filters[currency] = filters[currency]_example # String |  (optional)
filters[multiple] = true # Boolean |  (optional)
filters[used] = true # Boolean |  (optional)
filters[usedAt] = 2013-10-20T19:20:30+01:00 # Date |  (optional)
filters[pending] = true # Boolean |  (optional)

try: 
    api_response = api_instance.links_search_get(scope=scope, query=query, filters[amount]=filters[amount], filters[created]=filters[created], filters[currency]=filters[currency], filters[multiple]=filters[multiple], filters[used]=filters[used], filters[usedAt]=filters[usedAt], filters[pending]=filters[pending])
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LinksApi->linksSearchGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| scope | String |
| query | String |
| filters[amount] | Integer |
| filters[created] | Date (date-time) |
| filters[currency] | String |
| filters[multiple] | Boolean |
| filters[used] | Boolean |
| filters[used_at] | Date (date-time) |
| filters[pending] | Boolean |

          </div>
        </div>
        <div>
          ### Responses

 ### Status: 200

```json
 {
  "object": {
    "pattern": "link",
    "type": "string",
    "default": "link"
  },
  "id": {
    "type": "string"
  },
  "livemode": {
    "type": "boolean",
    "enum": [
      true,
      false
    ]
  },
  "location": {
    "type": "string"
  },
  "deleted": {
    "type": "boolean",
    "enum": [
      true,
      false
    ]
  },
  "multiple": {
    "type": "boolean",
    "enum": [
      true,
      false
    ]
  },
  "used": {
    "type": "boolean",
    "enum": [
      true,
      false
    ]
  },
  "currency": {
    "type": "string",
    "format": "currency"
  },
  "amount": {
    "type": "integer"
  },
  "charges": {
    "type": "object",
    "properties": {
      "object": {
        "pattern": "list",
        "type": "string",
        "default": "list"
      },
      "data": {
        "type": "array",
        "items": {}
      },
      "limit": {
        "type": "integer"
      },
      "offset": {
        "type": "integer"
      },
      "total": {
        "type": "integer"
      },
      "location": {
        "type": "string"
      },
      "order": {
        "type": "string",
        "enum": [
          "chronological",
          "reverse_chronological"
        ]
      },
      "from": {
        "type": "string",
        "format": "date-time"
      },
      "to": {
        "type": "string",
        "format": "date-time"
      }
    }
  },
  "description": {
    "type": "string"
  },
  "title": {
    "type": "string"
  },
  "payment_uri": {
    "type": "string",
    "format": "uri"
  },
  "created_at": {
    "type": "string",
    "format": "date-time"
  },
  "used_at": {
    "type": "string",
    "format": "date-time"
  },
  "deleted_at": {
    "type": "string",
    "format": "date-time"
  },
  "merchant_name": {
    "type": "string"
  },
  "merchant_uid": {
    "type": "string"
  }
} 
```

        </div>
      </div>

