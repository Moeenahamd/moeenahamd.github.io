# Recipients


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Recipients</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Recipients</div>
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
              
<div class="code-block curl active" id="Retrieve Recipients-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/recipients?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Recipients-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.RecipientsApi;

import java.io.File;
import java.util.*;

public class RecipientsApiExample {

    public static void main(String[] args) {
        
        RecipientsApi apiInstance = new RecipientsApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.recipientsGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RecipientsApi#recipientsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Recipients-code-android">
```js
import io.swagger.client.api.RecipientsApi;

public class RecipientsApiExample {

    public static void main(String[] args) {
        RecipientsApi apiInstance = new RecipientsApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.recipientsGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RecipientsApi#recipientsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Recipients-code-objc">
```js
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

RecipientsApi *apiInstance = [[RecipientsApi alloc] init];

[apiInstance recipientsGetWith:from
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

<div class="code-block javascript" id="Retrieve Recipients-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.RecipientsApi()
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
api.recipientsGet(opts, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Recipients-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class recipientsGetExample
    {
        public void main()
        {

            var apiInstance = new RecipientsApi();
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.recipientsGet(from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RecipientsApi.recipientsGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Recipients-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiRecipientsApi();
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->recipientsGet($from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RecipientsApi->recipientsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Recipients-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::RecipientsApi;

my $api_instance = WWW::SwaggerClient::RecipientsApi->new();
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->recipientsGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling RecipientsApi->recipientsGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Recipients-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RecipientsApi()
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.recipients_get(from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RecipientsApi->recipientsGet: %s\n" % e)
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
            <h3>Delete Recipients ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Delete Recipients ID</div>
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
              
<div class="code-block curl active" id="Delete Recipients ID-code-curl">
```js
curl -X DELETE\
-H "Accept: application/json"\
"https://api.omise.co/recipients/{id}"
```
</div>

<div class="code-block java" id="Delete Recipients ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.RecipientsApi;

import java.io.File;
import java.util.*;

public class RecipientsApiExample {

    public static void main(String[] args) {
        
        RecipientsApi apiInstance = new RecipientsApi();
        String id = id_example; // String | 
        try {
            recipient result = apiInstance.recipientsIdDelete(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RecipientsApi#recipientsIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Delete Recipients ID-code-android">
```js
import io.swagger.client.api.RecipientsApi;

public class RecipientsApiExample {

    public static void main(String[] args) {
        RecipientsApi apiInstance = new RecipientsApi();
        String id = id_example; // String | 
        try {
            recipient result = apiInstance.recipientsIdDelete(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RecipientsApi#recipientsIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Delete Recipients ID-code-objc">
```js
String *id = id_example; // 

RecipientsApi *apiInstance = [[RecipientsApi alloc] init];

[apiInstance recipientsIdDeleteWith:id
              completionHandler: ^(recipient output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Delete Recipients ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.RecipientsApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.recipientsIdDelete(id, callback);
```
</div>

<div class="code-block csharp" id="Delete Recipients ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class recipientsIdDeleteExample
    {
        public void main()
        {

            var apiInstance = new RecipientsApi();
            var id = id_example;  // String | 

            try
            {
                recipient result = apiInstance.recipientsIdDelete(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RecipientsApi.recipientsIdDelete: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Delete Recipients ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiRecipientsApi();
$id = id_example; // String | 

try {
    $result = $api_instance->recipientsIdDelete($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RecipientsApi->recipientsIdDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Delete Recipients ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::RecipientsApi;

my $api_instance = WWW::SwaggerClient::RecipientsApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->recipientsIdDelete(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling RecipientsApi->recipientsIdDelete: $@\n";
}
```
</div>

<div class="code-block python" id="Delete Recipients ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RecipientsApi()
id = id_example # String | 

try: 
    api_response = api_instance.recipients_id_delete(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RecipientsApi->recipientsIdDelete: %s\n" % e)
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
            <h3>Retrieve Recipients ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Recipients ID</div>
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
              
<div class="code-block curl active" id="Retrieve Recipients ID-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/recipients/{id}"
```
</div>

<div class="code-block java" id="Retrieve Recipients ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.RecipientsApi;

import java.io.File;
import java.util.*;

public class RecipientsApiExample {

    public static void main(String[] args) {
        
        RecipientsApi apiInstance = new RecipientsApi();
        String id = id_example; // String | 
        try {
            recipient result = apiInstance.recipientsIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RecipientsApi#recipientsIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Recipients ID-code-android">
```js
import io.swagger.client.api.RecipientsApi;

public class RecipientsApiExample {

    public static void main(String[] args) {
        RecipientsApi apiInstance = new RecipientsApi();
        String id = id_example; // String | 
        try {
            recipient result = apiInstance.recipientsIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RecipientsApi#recipientsIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Recipients ID-code-objc">
```js
String *id = id_example; // 

RecipientsApi *apiInstance = [[RecipientsApi alloc] init];

[apiInstance recipientsIdGetWith:id
              completionHandler: ^(recipient output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Recipients ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.RecipientsApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.recipientsIdGet(id, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Recipients ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class recipientsIdGetExample
    {
        public void main()
        {

            var apiInstance = new RecipientsApi();
            var id = id_example;  // String | 

            try
            {
                recipient result = apiInstance.recipientsIdGet(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RecipientsApi.recipientsIdGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Recipients ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiRecipientsApi();
$id = id_example; // String | 

try {
    $result = $api_instance->recipientsIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RecipientsApi->recipientsIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Recipients ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::RecipientsApi;

my $api_instance = WWW::SwaggerClient::RecipientsApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->recipientsIdGet(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling RecipientsApi->recipientsIdGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Recipients ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RecipientsApi()
id = id_example # String | 

try: 
    api_response = api_instance.recipients_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RecipientsApi->recipientsIdGet: %s\n" % e)
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
            <h3>Update Recipients ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Update Recipients ID</div>
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
              
<div class="code-block curl active" id="Update Recipients ID-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/recipients/{id}"
```
</div>

<div class="code-block java" id="Update Recipients ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.RecipientsApi;

import java.io.File;
import java.util.*;

public class RecipientsApiExample {

    public static void main(String[] args) {
        
        RecipientsApi apiInstance = new RecipientsApi();
        String id = id_example; // String | 
        recipientsid_bank_account bankAccount = ; // recipientsid_bank_account | 
        String description = description_example; // String | 
        String email = email_example; // String | 
        Object metadata = ; // Object | 
        String name = name_example; // String | 
        String taxId = taxId_example; // String | 
        String type = type_example; // String | 
        try {
            recipient result = apiInstance.recipientsIdPatch(id, bankAccount, description, email, metadata, name, taxId, type);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RecipientsApi#recipientsIdPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Update Recipients ID-code-android">
```js
import io.swagger.client.api.RecipientsApi;

public class RecipientsApiExample {

    public static void main(String[] args) {
        RecipientsApi apiInstance = new RecipientsApi();
        String id = id_example; // String | 
        recipientsid_bank_account bankAccount = ; // recipientsid_bank_account | 
        String description = description_example; // String | 
        String email = email_example; // String | 
        Object metadata = ; // Object | 
        String name = name_example; // String | 
        String taxId = taxId_example; // String | 
        String type = type_example; // String | 
        try {
            recipient result = apiInstance.recipientsIdPatch(id, bankAccount, description, email, metadata, name, taxId, type);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RecipientsApi#recipientsIdPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Update Recipients ID-code-objc">
```js
String *id = id_example; // 
recipientsid_bank_account *bankAccount = ; //  (optional)
String *description = description_example; //  (optional)
String *email = email_example; //  (optional)
Object *metadata = ; //  (optional)
String *name = name_example; //  (optional)
String *taxId = taxId_example; //  (optional)
String *type = type_example; //  (optional)

RecipientsApi *apiInstance = [[RecipientsApi alloc] init];

[apiInstance recipientsIdPatchWith:id
    bankAccount:bankAccount
    description:description
    email:email
    metadata:metadata
    name:name
    taxId:taxId
    type:type
              completionHandler: ^(recipient output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Update Recipients ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.RecipientsApi()
var id = id_example; // {{String}} 
var opts = { 
  'bankAccount':  // {{recipientsid_bank_account}} 
  'description': description_example // {{String}} 
  'email': email_example // {{String}} 
  'metadata':  // {{Object}} 
  'name': name_example // {{String}} 
  'taxId': taxId_example // {{String}} 
  'type': type_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.recipientsIdPatch(id, opts, callback);
```
</div>

<div class="code-block csharp" id="Update Recipients ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class recipientsIdPatchExample
    {
        public void main()
        {

            var apiInstance = new RecipientsApi();
            var id = id_example;  // String | 
            var bankAccount = new recipientsid_bank_account(); // recipientsid_bank_account |  (optional) 
            var description = description_example;  // String |  (optional) 
            var email = email_example;  // String |  (optional) 
            var metadata = new Object(); // Object |  (optional) 
            var name = name_example;  // String |  (optional) 
            var taxId = taxId_example;  // String |  (optional) 
            var type = type_example;  // String |  (optional) 

            try
            {
                recipient result = apiInstance.recipientsIdPatch(id, bankAccount, description, email, metadata, name, taxId, type);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RecipientsApi.recipientsIdPatch: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Update Recipients ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiRecipientsApi();
$id = id_example; // String | 
$bankAccount = ; // recipientsid_bank_account | 
$description = description_example; // String | 
$email = email_example; // String | 
$metadata = ; // Object | 
$name = name_example; // String | 
$taxId = taxId_example; // String | 
$type = type_example; // String | 

try {
    $result = $api_instance->recipientsIdPatch($id, $bankAccount, $description, $email, $metadata, $name, $taxId, $type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RecipientsApi->recipientsIdPatch: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Update Recipients ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::RecipientsApi;

my $api_instance = WWW::SwaggerClient::RecipientsApi->new();
my $id = id_example; # String | 
my $bankAccount = ; # recipientsid_bank_account | 
my $description = description_example; # String | 
my $email = email_example; # String | 
my $metadata = ; # Object | 
my $name = name_example; # String | 
my $taxId = taxId_example; # String | 
my $type = type_example; # String | 

eval { 
    my $result = $api_instance->recipientsIdPatch(id => $id, bankAccount => $bankAccount, description => $description, email => $email, metadata => $metadata, name => $name, taxId => $taxId, type => $type);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling RecipientsApi->recipientsIdPatch: $@\n";
}
```
</div>

<div class="code-block python" id="Update Recipients ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RecipientsApi()
id = id_example # String | 
bankAccount =  # recipientsid_bank_account |  (optional)
description = description_example # String |  (optional)
email = email_example # String |  (optional)
metadata =  # Object |  (optional)
name = name_example # String |  (optional)
taxId = taxId_example # String |  (optional)
type = type_example # String |  (optional)

try: 
    api_response = api_instance.recipients_id_patch(id, bankAccount=bankAccount, description=description, email=email, metadata=metadata, name=name, taxId=taxId, type=type)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RecipientsApi->recipientsIdPatch: %s\n" % e)
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
| bank_account | recipientsid_bank_account |
| description | String |
| email | String |
| metadata | Object |
| name | String |
| tax_id | String |
| type | String |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Recipients ID Schedules</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Recipients ID Schedules</div>
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
              
<div class="code-block curl active" id="Retrieve Recipients ID Schedules-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/recipients/{id}/schedules?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Recipients ID Schedules-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.RecipientsApi;

import java.io.File;
import java.util.*;

public class RecipientsApiExample {

    public static void main(String[] args) {
        
        RecipientsApi apiInstance = new RecipientsApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.recipientsIdSchedulesGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RecipientsApi#recipientsIdSchedulesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Recipients ID Schedules-code-android">
```js
import io.swagger.client.api.RecipientsApi;

public class RecipientsApiExample {

    public static void main(String[] args) {
        RecipientsApi apiInstance = new RecipientsApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.recipientsIdSchedulesGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RecipientsApi#recipientsIdSchedulesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Recipients ID Schedules-code-objc">
```js
String *id = id_example; // 
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

RecipientsApi *apiInstance = [[RecipientsApi alloc] init];

[apiInstance recipientsIdSchedulesGetWith:id
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

<div class="code-block javascript" id="Retrieve Recipients ID Schedules-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.RecipientsApi()
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
api.recipientsIdSchedulesGet(id, opts, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Recipients ID Schedules-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class recipientsIdSchedulesGetExample
    {
        public void main()
        {

            var apiInstance = new RecipientsApi();
            var id = id_example;  // String | 
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.recipientsIdSchedulesGet(id, from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RecipientsApi.recipientsIdSchedulesGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Recipients ID Schedules-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiRecipientsApi();
$id = id_example; // String | 
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->recipientsIdSchedulesGet($id, $from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RecipientsApi->recipientsIdSchedulesGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Recipients ID Schedules-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::RecipientsApi;

my $api_instance = WWW::SwaggerClient::RecipientsApi->new();
my $id = id_example; # String | 
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->recipientsIdSchedulesGet(id => $id, from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling RecipientsApi->recipientsIdSchedulesGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Recipients ID Schedules-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RecipientsApi()
id = id_example # String | 
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.recipients_id_schedules_get(id, from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RecipientsApi->recipientsIdSchedulesGet: %s\n" % e)
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
            <h3>Update Recipients ID Verify</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Update Recipients ID Verify</div>
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
              
<div class="code-block curl active" id="Update Recipients ID Verify-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
"https://api.omise.co/recipients/{id}/verify"
```
</div>

<div class="code-block java" id="Update Recipients ID Verify-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.RecipientsApi;

import java.io.File;
import java.util.*;

public class RecipientsApiExample {

    public static void main(String[] args) {
        
        RecipientsApi apiInstance = new RecipientsApi();
        String id = id_example; // String | 
        try {
            recipient result = apiInstance.recipientsIdVerifyPatch(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RecipientsApi#recipientsIdVerifyPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Update Recipients ID Verify-code-android">
```js
import io.swagger.client.api.RecipientsApi;

public class RecipientsApiExample {

    public static void main(String[] args) {
        RecipientsApi apiInstance = new RecipientsApi();
        String id = id_example; // String | 
        try {
            recipient result = apiInstance.recipientsIdVerifyPatch(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RecipientsApi#recipientsIdVerifyPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Update Recipients ID Verify-code-objc">
```js
String *id = id_example; // 

RecipientsApi *apiInstance = [[RecipientsApi alloc] init];

[apiInstance recipientsIdVerifyPatchWith:id
              completionHandler: ^(recipient output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Update Recipients ID Verify-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.RecipientsApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.recipientsIdVerifyPatch(id, callback);
```
</div>

<div class="code-block csharp" id="Update Recipients ID Verify-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class recipientsIdVerifyPatchExample
    {
        public void main()
        {

            var apiInstance = new RecipientsApi();
            var id = id_example;  // String | 

            try
            {
                recipient result = apiInstance.recipientsIdVerifyPatch(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RecipientsApi.recipientsIdVerifyPatch: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Update Recipients ID Verify-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiRecipientsApi();
$id = id_example; // String | 

try {
    $result = $api_instance->recipientsIdVerifyPatch($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RecipientsApi->recipientsIdVerifyPatch: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Update Recipients ID Verify-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::RecipientsApi;

my $api_instance = WWW::SwaggerClient::RecipientsApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->recipientsIdVerifyPatch(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling RecipientsApi->recipientsIdVerifyPatch: $@\n";
}
```
</div>

<div class="code-block python" id="Update Recipients ID Verify-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RecipientsApi()
id = id_example # String | 

try: 
    api_response = api_instance.recipients_id_verify_patch(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RecipientsApi->recipientsIdVerifyPatch: %s\n" % e)
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
            <h3>Create Recipients</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Create Recipients</div>
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
              
<div class="code-block curl active" id="Create Recipients-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/recipients"
```
</div>

<div class="code-block java" id="Create Recipients-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.RecipientsApi;

import java.io.File;
import java.util.*;

public class RecipientsApiExample {

    public static void main(String[] args) {
        
        RecipientsApi apiInstance = new RecipientsApi();
        recipientsid_bank_account bankAccount = ; // recipientsid_bank_account | 
        String description = description_example; // String | 
        String email = email_example; // String | 
        Object metadata = ; // Object | 
        String name = name_example; // String | 
        String taxId = taxId_example; // String | 
        String type = type_example; // String | 
        try {
            recipient result = apiInstance.recipientsPost(bankAccount, description, email, metadata, name, taxId, type);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RecipientsApi#recipientsPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Create Recipients-code-android">
```js
import io.swagger.client.api.RecipientsApi;

public class RecipientsApiExample {

    public static void main(String[] args) {
        RecipientsApi apiInstance = new RecipientsApi();
        recipientsid_bank_account bankAccount = ; // recipientsid_bank_account | 
        String description = description_example; // String | 
        String email = email_example; // String | 
        Object metadata = ; // Object | 
        String name = name_example; // String | 
        String taxId = taxId_example; // String | 
        String type = type_example; // String | 
        try {
            recipient result = apiInstance.recipientsPost(bankAccount, description, email, metadata, name, taxId, type);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RecipientsApi#recipientsPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Create Recipients-code-objc">
```js
recipientsid_bank_account *bankAccount = ; //  (optional)
String *description = description_example; //  (optional)
String *email = email_example; //  (optional)
Object *metadata = ; //  (optional)
String *name = name_example; //  (optional)
String *taxId = taxId_example; //  (optional)
String *type = type_example; //  (optional)

RecipientsApi *apiInstance = [[RecipientsApi alloc] init];

[apiInstance recipientsPostWith:bankAccount
    description:description
    email:email
    metadata:metadata
    name:name
    taxId:taxId
    type:type
              completionHandler: ^(recipient output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Create Recipients-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.RecipientsApi()
var opts = { 
  'bankAccount':  // {{recipientsid_bank_account}} 
  'description': description_example // {{String}} 
  'email': email_example // {{String}} 
  'metadata':  // {{Object}} 
  'name': name_example // {{String}} 
  'taxId': taxId_example // {{String}} 
  'type': type_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.recipientsPost(opts, callback);
```
</div>

<div class="code-block csharp" id="Create Recipients-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class recipientsPostExample
    {
        public void main()
        {

            var apiInstance = new RecipientsApi();
            var bankAccount = new recipientsid_bank_account(); // recipientsid_bank_account |  (optional) 
            var description = description_example;  // String |  (optional) 
            var email = email_example;  // String |  (optional) 
            var metadata = new Object(); // Object |  (optional) 
            var name = name_example;  // String |  (optional) 
            var taxId = taxId_example;  // String |  (optional) 
            var type = type_example;  // String |  (optional) 

            try
            {
                recipient result = apiInstance.recipientsPost(bankAccount, description, email, metadata, name, taxId, type);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RecipientsApi.recipientsPost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Create Recipients-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiRecipientsApi();
$bankAccount = ; // recipientsid_bank_account | 
$description = description_example; // String | 
$email = email_example; // String | 
$metadata = ; // Object | 
$name = name_example; // String | 
$taxId = taxId_example; // String | 
$type = type_example; // String | 

try {
    $result = $api_instance->recipientsPost($bankAccount, $description, $email, $metadata, $name, $taxId, $type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RecipientsApi->recipientsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Create Recipients-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::RecipientsApi;

my $api_instance = WWW::SwaggerClient::RecipientsApi->new();
my $bankAccount = ; # recipientsid_bank_account | 
my $description = description_example; # String | 
my $email = email_example; # String | 
my $metadata = ; # Object | 
my $name = name_example; # String | 
my $taxId = taxId_example; # String | 
my $type = type_example; # String | 

eval { 
    my $result = $api_instance->recipientsPost(bankAccount => $bankAccount, description => $description, email => $email, metadata => $metadata, name => $name, taxId => $taxId, type => $type);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling RecipientsApi->recipientsPost: $@\n";
}
```
</div>

<div class="code-block python" id="Create Recipients-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RecipientsApi()
bankAccount =  # recipientsid_bank_account |  (optional)
description = description_example # String |  (optional)
email = email_example # String |  (optional)
metadata =  # Object |  (optional)
name = name_example # String |  (optional)
taxId = taxId_example # String |  (optional)
type = type_example # String |  (optional)

try: 
    api_response = api_instance.recipients_post(bankAccount=bankAccount, description=description, email=email, metadata=metadata, name=name, taxId=taxId, type=type)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RecipientsApi->recipientsPost: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| bank_account | recipientsid_bank_account |
| description | String |
| email | String |
| metadata | Object |
| name | String |
| tax_id | String |
| type | String |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Recipients Search</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Recipients Search</div>
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
              
<div class="code-block curl active" id="Retrieve Recipients Search-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/recipients/search?scope=&query=&filters[active]=&filters[activated_at]=&filters[bank_last_digits]=&filters[created]=&filters[deleted]=&filters[failure_code]=&filters[type]=&filters[verified]=&filters[verified_at]="
```
</div>

<div class="code-block java" id="Retrieve Recipients Search-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.RecipientsApi;

import java.io.File;
import java.util.*;

public class RecipientsApiExample {

    public static void main(String[] args) {
        
        RecipientsApi apiInstance = new RecipientsApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Boolean filters[active] = true; // Boolean | 
        Date filters[activatedAt] = 2013-10-20T19:20:30+01:00; // Date | 
        String filters[bankLastDigits] = filters[bankLastDigits]_example; // String | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        Boolean filters[deleted] = true; // Boolean | 
        String filters[failureCode] = filters[failureCode]_example; // String | 
        String filters[type] = filters[type]_example; // String | 
        Boolean filters[verified] = true; // Boolean | 
        Date filters[verifiedAt] = 2013-10-20T19:20:30+01:00; // Date | 
        try {
            recipient result = apiInstance.recipientsSearchGet(scope, query, filters[active], filters[activatedAt], filters[bankLastDigits], filters[created], filters[deleted], filters[failureCode], filters[type], filters[verified], filters[verifiedAt]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RecipientsApi#recipientsSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Recipients Search-code-android">
```js
import io.swagger.client.api.RecipientsApi;

public class RecipientsApiExample {

    public static void main(String[] args) {
        RecipientsApi apiInstance = new RecipientsApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Boolean filters[active] = true; // Boolean | 
        Date filters[activatedAt] = 2013-10-20T19:20:30+01:00; // Date | 
        String filters[bankLastDigits] = filters[bankLastDigits]_example; // String | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        Boolean filters[deleted] = true; // Boolean | 
        String filters[failureCode] = filters[failureCode]_example; // String | 
        String filters[type] = filters[type]_example; // String | 
        Boolean filters[verified] = true; // Boolean | 
        Date filters[verifiedAt] = 2013-10-20T19:20:30+01:00; // Date | 
        try {
            recipient result = apiInstance.recipientsSearchGet(scope, query, filters[active], filters[activatedAt], filters[bankLastDigits], filters[created], filters[deleted], filters[failureCode], filters[type], filters[verified], filters[verifiedAt]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RecipientsApi#recipientsSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Recipients Search-code-objc">
```js
String *scope = scope_example; //  (optional) (default to recipient)
String *query = query_example; //  (optional)
Boolean *filters[active] = true; //  (optional)
Date *filters[activatedAt] = 2013-10-20T19:20:30+01:00; //  (optional)
String *filters[bankLastDigits] = filters[bankLastDigits]_example; //  (optional)
Date *filters[created] = 2013-10-20T19:20:30+01:00; //  (optional)
Boolean *filters[deleted] = true; //  (optional)
String *filters[failureCode] = filters[failureCode]_example; //  (optional)
String *filters[type] = filters[type]_example; //  (optional)
Boolean *filters[verified] = true; //  (optional)
Date *filters[verifiedAt] = 2013-10-20T19:20:30+01:00; //  (optional)

RecipientsApi *apiInstance = [[RecipientsApi alloc] init];

[apiInstance recipientsSearchGetWith:scope
    query:query
    filters[active]:filters[active]
    filters[activatedAt]:filters[activatedAt]
    filters[bankLastDigits]:filters[bankLastDigits]
    filters[created]:filters[created]
    filters[deleted]:filters[deleted]
    filters[failureCode]:filters[failureCode]
    filters[type]:filters[type]
    filters[verified]:filters[verified]
    filters[verifiedAt]:filters[verifiedAt]
              completionHandler: ^(recipient output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Recipients Search-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.RecipientsApi()
var opts = { 
  'scope': scope_example, // {{String}} 
  'query': query_example, // {{String}} 
  'filters[active]': true, // {{Boolean}} 
  'filters[activatedAt]': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'filters[bankLastDigits]': filters[bankLastDigits]_example, // {{String}} 
  'filters[created]': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'filters[deleted]': true, // {{Boolean}} 
  'filters[failureCode]': filters[failureCode]_example, // {{String}} 
  'filters[type]': filters[type]_example, // {{String}} 
  'filters[verified]': true, // {{Boolean}} 
  'filters[verifiedAt]': 2013-10-20T19:20:30+01:00 // {{Date}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.recipientsSearchGet(opts, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Recipients Search-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class recipientsSearchGetExample
    {
        public void main()
        {

            var apiInstance = new RecipientsApi();
            var scope = scope_example;  // String |  (optional)  (default to recipient)
            var query = query_example;  // String |  (optional) 
            var filters[active] = true;  // Boolean |  (optional) 
            var filters[activatedAt] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var filters[bankLastDigits] = filters[bankLastDigits]_example;  // String |  (optional) 
            var filters[created] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var filters[deleted] = true;  // Boolean |  (optional) 
            var filters[failureCode] = filters[failureCode]_example;  // String |  (optional) 
            var filters[type] = filters[type]_example;  // String |  (optional) 
            var filters[verified] = true;  // Boolean |  (optional) 
            var filters[verifiedAt] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 

            try
            {
                recipient result = apiInstance.recipientsSearchGet(scope, query, filters[active], filters[activatedAt], filters[bankLastDigits], filters[created], filters[deleted], filters[failureCode], filters[type], filters[verified], filters[verifiedAt]);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RecipientsApi.recipientsSearchGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Recipients Search-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiRecipientsApi();
$scope = scope_example; // String | 
$query = query_example; // String | 
$filters[active] = true; // Boolean | 
$filters[activatedAt] = 2013-10-20T19:20:30+01:00; // Date | 
$filters[bankLastDigits] = filters[bankLastDigits]_example; // String | 
$filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
$filters[deleted] = true; // Boolean | 
$filters[failureCode] = filters[failureCode]_example; // String | 
$filters[type] = filters[type]_example; // String | 
$filters[verified] = true; // Boolean | 
$filters[verifiedAt] = 2013-10-20T19:20:30+01:00; // Date | 

try {
    $result = $api_instance->recipientsSearchGet($scope, $query, $filters[active], $filters[activatedAt], $filters[bankLastDigits], $filters[created], $filters[deleted], $filters[failureCode], $filters[type], $filters[verified], $filters[verifiedAt]);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RecipientsApi->recipientsSearchGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Recipients Search-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::RecipientsApi;

my $api_instance = WWW::SwaggerClient::RecipientsApi->new();
my $scope = scope_example; # String | 
my $query = query_example; # String | 
my $filters[active] = true; # Boolean | 
my $filters[activatedAt] = 2013-10-20T19:20:30+01:00; # Date | 
my $filters[bankLastDigits] = filters[bankLastDigits]_example; # String | 
my $filters[created] = 2013-10-20T19:20:30+01:00; # Date | 
my $filters[deleted] = true; # Boolean | 
my $filters[failureCode] = filters[failureCode]_example; # String | 
my $filters[type] = filters[type]_example; # String | 
my $filters[verified] = true; # Boolean | 
my $filters[verifiedAt] = 2013-10-20T19:20:30+01:00; # Date | 

eval { 
    my $result = $api_instance->recipientsSearchGet(scope => $scope, query => $query, filters[active] => $filters[active], filters[activatedAt] => $filters[activatedAt], filters[bankLastDigits] => $filters[bankLastDigits], filters[created] => $filters[created], filters[deleted] => $filters[deleted], filters[failureCode] => $filters[failureCode], filters[type] => $filters[type], filters[verified] => $filters[verified], filters[verifiedAt] => $filters[verifiedAt]);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling RecipientsApi->recipientsSearchGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Recipients Search-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RecipientsApi()
scope = scope_example # String |  (optional) (default to recipient)
query = query_example # String |  (optional)
filters[active] = true # Boolean |  (optional)
filters[activatedAt] = 2013-10-20T19:20:30+01:00 # Date |  (optional)
filters[bankLastDigits] = filters[bankLastDigits]_example # String |  (optional)
filters[created] = 2013-10-20T19:20:30+01:00 # Date |  (optional)
filters[deleted] = true # Boolean |  (optional)
filters[failureCode] = filters[failureCode]_example # String |  (optional)
filters[type] = filters[type]_example # String |  (optional)
filters[verified] = true # Boolean |  (optional)
filters[verifiedAt] = 2013-10-20T19:20:30+01:00 # Date |  (optional)

try: 
    api_response = api_instance.recipients_search_get(scope=scope, query=query, filters[active]=filters[active], filters[activatedAt]=filters[activatedAt], filters[bankLastDigits]=filters[bankLastDigits], filters[created]=filters[created], filters[deleted]=filters[deleted], filters[failureCode]=filters[failureCode], filters[type]=filters[type], filters[verified]=filters[verified], filters[verifiedAt]=filters[verifiedAt])
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RecipientsApi->recipientsSearchGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| scope | String |
| query | String |
| filters[active] | Boolean |
| filters[activated_at] | Date (date-time) |
| filters[bank_last_digits] | String |
| filters[created] | Date (date-time) |
| filters[deleted] | Boolean |
| filters[failure_code] | String |
| filters[type] | String |
| filters[verified] | Boolean |
| filters[verified_at] | Date (date-time) |

          </div>
        </div>
        <div>
          ### Responses

 ### Status: 200

```json
 {
  "object": {
    "pattern": "recipient",
    "type": "string",
    "default": "recipient"
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
  "bank_account": {
    "type": "object",
    "properties": {
      "object": {
        "pattern": "bank_account",
        "type": "string",
        "default": "bank_account"
      },
      "livemode": {
        "type": "boolean",
        "enum": [
          true,
          false
        ]
      },
      "last_digits": {
        "pattern": "^[0-9]{4}$",
        "type": "string"
      },
      "account_number": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "type": {
        "type": "string",
        "enum": [
          "normal",
          "current"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time"
      },
      "brand": {
        "type": "string"
      },
      "bank_code": {
        "type": "string"
      },
      "branch_code": {
        "type": "string"
      }
    }
  },
  "active": {
    "type": "boolean",
    "enum": [
      true,
      false
    ]
  },
  "default": {
    "type": "boolean",
    "enum": [
      true,
      false
    ]
  },
  "verified": {
    "type": "boolean",
    "enum": [
      true,
      false
    ]
  },
  "description": {
    "type": "string",
    "nullable": true
  },
  "email": {
    "type": "string"
  },
  "failure_code": {
    "type": "string",
    "nullable": true,
    "enum": [
      "name_mismatch",
      "account_not_found",
      "bank_not_found"
    ]
  },
  "name": {
    "type": "string"
  },
  "tax_id": {
    "type": "string",
    "nullable": true
  },
  "type": {
    "type": "string",
    "enum": [
      "individual",
      "corporation"
    ]
  },
  "created_at": {
    "type": "string",
    "format": "date-time"
  },
  "schedule": {
    "oneOf": [
      {
        "type": "object",
        "properties": {
          "object": {
            "pattern": "schedule",
            "type": "string",
            "default": "schedule"
          },
          "id": {
            "pattern": "schd_[0-9a-z]+",
            "type": "string"
          },
          "deleted": {
            "type": "boolean",
            "enum": [
              true,
              false
            ]
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
          "every": {
            "type": "integer"
          },
          "occurrences": {
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
          "on": {
            "type": "object",
            "properties": {
              "days_of_month": {
                "type": "array",
                "items": {}
              },
              "weekday_of_month": {
                "type": "string"
              },
              "weekdays": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "enum": [
                  "sunday",
                  "monday",
                  "tuesday",
                  "wednesday",
                  "thursday",
                  "friday",
                  "saturday"
                ]
              }
            }
          },
          "in_words": {
            "type": "string"
          },
          "period": {
            "type": "string",
            "enum": [
              "day",
              "week",
              "month"
            ]
          },
          "status": {
            "type": "string",
            "enum": [
              "running",
              "active",
              "expiring",
              "expired",
              "deleted",
              "suspended"
            ]
          },
          "active": {
            "type": "boolean",
            "enum": [
              true,
              false
            ]
          },
          "state": {
            "type": "string",
            "enum": [
              "Active",
              "Pause"
            ]
          },
          "charge": {
            "type": "object",
            "properties": {
              "object": {
                "pattern": "charge_schedule",
                "type": "string",
                "default": "charge_schedule"
              },
              "id": {
                "pattern": "rchg_[0-9a-z]+",
                "type": "string"
              },
              "livemode": {
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
              "default_card": {
                "type": "boolean",
                "enum": [
                  true,
                  false
                ]
              },
              "card": {
                "oneOf": [
                  {
                    "type": "object",
                    "properties": {
                      "object": {
                        "pattern": "card",
                        "type": "string",
                        "default": "card"
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
                      "street1": {
                        "type": "string",
                        "nullable": true
                      },
                      "street2": {
                        "type": "string",
                        "nullable": true
                      },
                      "city": {
                        "type": "string",
                        "nullable": true
                      },
                      "state": {
                        "type": "string",
                        "nullable": true
                      },
                      "phone_number": {
                        "type": "string",
                        "nullable": true
                      },
                      "postal_code": {
                        "type": "string",
                        "nullable": true
                      },
                      "country": {
                        "pattern": "^[a-z]{0,2}$",
                        "type": "string"
                      },
                      "financing": {
                        "type": "string"
                      },
                      "bank": {
                        "type": "string"
                      },
                      "brand": {
                        "type": "string"
                      },
                      "fingerprint": {
                        "type": "string"
                      },
                      "first_digits": {
                        "pattern": "^[0-9]{6}$",
                        "type": "string",
                        "nullable": true
                      },
                      "last_digits": {
                        "pattern": "^[0-9]{4}$",
                        "type": "string"
                      },
                      "name": {
                        "type": "string"
                      },
                      "expiration_month": {
                        "type": "integer"
                      },
                      "expiration_year": {
                        "type": "integer"
                      },
                      "security_code_check": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "tokenization_method": {
                        "type": "string"
                      },
                      "created_at": {
                        "type": "string",
                        "format": "date-time"
                      }
                    }
                  },
                  {
                    "type": "string"
                  }
                ]
              },
              "customer": {
                "oneOf": [
                  {
                    "type": "object",
                    "properties": {
                      "object": {
                        "pattern": "customer",
                        "type": "string",
                        "default": "customer"
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
                      "metadata": {
                        "type": "object",
                        "default": {}
                      },
                      "cards": {
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
                      "default_card": {
                        "oneOf": [
                          {
                            "type": "object",
                            "properties": {
                              "object": {
                                "pattern": "card",
                                "type": "string",
                                "default": "card"
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
                              "street1": {
                                "type": "string",
                                "nullable": true
                              },
                              "street2": {
                                "type": "string",
                                "nullable": true
                              },
                              "city": {
                                "type": "string",
                                "nullable": true
                              },
                              "state": {
                                "type": "string",
                                "nullable": true
                              },
                              "phone_number": {
                                "type": "string",
                                "nullable": true
                              },
                              "postal_code": {
                                "type": "string",
                                "nullable": true
                              },
                              "country": {
                                "pattern": "^[a-z]{0,2}$",
                                "type": "string"
                              },
                              "financing": {
                                "type": "string"
                              },
                              "bank": {
                                "type": "string"
                              },
                              "brand": {
                                "type": "string"
                              },
                              "fingerprint": {
                                "type": "string"
                              },
                              "first_digits": {
                                "pattern": "^[0-9]{6}$",
                                "type": "string",
                                "nullable": true
                              },
                              "last_digits": {
                                "pattern": "^[0-9]{4}$",
                                "type": "string"
                              },
                              "name": {
                                "type": "string"
                              },
                              "expiration_month": {
                                "type": "integer"
                              },
                              "expiration_year": {
                                "type": "integer"
                              },
                              "security_code_check": {
                                "type": "boolean",
                                "enum": [
                                  true,
                                  false
                                ]
                              },
                              "tokenization_method": {
                                "type": "string"
                              },
                              "created_at": {
                                "type": "string",
                                "format": "date-time"
                              }
                            }
                          },
                          {
                            "type": "string"
                          }
                        ]
                      },
                      "linked_accounts": {
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
                        "type": "string",
                        "nullable": true
                      },
                      "email": {
                        "type": "string",
                        "nullable": true
                      },
                      "created_at": {
                        "type": "string",
                        "format": "date-time"
                      }
                    }
                  },
                  {
                    "type": "string"
                  }
                ]
              },
              "linked_account": {
                "oneOf": [
                  {
                    "type": "object",
                    "properties": {
                      "object": {
                        "pattern": "linked_account",
                        "type": "string",
                        "default": "linked_account"
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
                      "registration_uri": {
                        "type": "string",
                        "format": "uri"
                      },
                      "return_uri": {
                        "type": "string",
                        "format": "uri"
                      },
                      "type": {
                        "type": "string"
                      },
                      "status": {
                        "type": "string",
                        "enum": [
                          "failed",
                          "expired",
                          "deleted",
                          "pending",
                          "successful"
                        ]
                      },
                      "last_digits": {
                        "type": "string",
                        "nullable": true
                      },
                      "metadata": {
                        "type": "object",
                        "default": {}
                      },
                      "failure_code": {
                        "type": "string",
                        "nullable": true
                      },
                      "failure_message": {
                        "type": "string",
                        "nullable": true
                      },
                      "registered_at": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "expires_at": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "created_at": {
                        "type": "string",
                        "format": "date-time"
                      }
                    }
                  },
                  {
                    "type": "string"
                  }
                ]
              },
              "description": {
                "type": "string",
                "nullable": true
              },
              "metadata": {
                "type": "object",
                "default": {}
              },
              "created_at": {
                "type": "string",
                "format": "date-time"
              }
            }
          },
          "transfer": {
            "type": "object",
            "properties": {
              "object": {
                "pattern": "transfer_schedule",
                "type": "string",
                "default": "transfer_schedule"
              },
              "id": {
                "pattern": "rtrf_[0-9a-z]+",
                "type": "string"
              },
              "livemode": {
                "type": "boolean",
                "enum": [
                  true,
                  false
                ]
              },
              "amount": {
                "type": "integer",
                "nullable": true
              },
              "currency": {
                "type": "string",
                "format": "currency"
              },
              "percentage_of_balance": {
                "type": "number",
                "format": "float",
                "nullable": true
              },
              "recipient": {
                "oneOf": [
                  {
                    "type": "object",
                    "properties": {
                      "object": {
                        "pattern": "recipient",
                        "type": "string",
                        "default": "recipient"
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
                      "bank_account": {
                        "type": "object",
                        "properties": {
                          "object": {
                            "pattern": "bank_account",
                            "type": "string",
                            "default": "bank_account"
                          },
                          "livemode": {
                            "type": "boolean",
                            "enum": [
                              true,
                              false
                            ]
                          },
                          "last_digits": {
                            "pattern": "^[0-9]{4}$",
                            "type": "string"
                          },
                          "account_number": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          },
                          "type": {
                            "type": "string",
                            "enum": [
                              "normal",
                              "current"
                            ]
                          },
                          "created_at": {
                            "type": "string",
                            "format": "date-time"
                          },
                          "brand": {
                            "type": "string"
                          },
                          "bank_code": {
                            "type": "string"
                          },
                          "branch_code": {
                            "type": "string"
                          }
                        }
                      },
                      "active": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "default": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "verified": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "description": {
                        "type": "string",
                        "nullable": true
                      },
                      "email": {
                        "type": "string"
                      },
                      "failure_code": {
                        "type": "string",
                        "nullable": true,
                        "enum": [
                          "name_mismatch",
                          "account_not_found",
                          "bank_not_found"
                        ]
                      },
                      "name": {
                        "type": "string"
                      },
                      "tax_id": {
                        "type": "string",
                        "nullable": true
                      },
                      "type": {
                        "type": "string",
                        "enum": [
                          "individual",
                          "corporation"
                        ]
                      },
                      "created_at": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "schedule": {
                        "oneOf": [
                          {
                            "type": "object",
                            "properties": {
                              "object": {
                                "pattern": "schedule",
                                "type": "string",
                                "default": "schedule"
                              },
                              "id": {
                                "pattern": "schd_[0-9a-z]+",
                                "type": "string"
                              },
                              "deleted": {
                                "type": "boolean",
                                "enum": [
                                  true,
                                  false
                                ]
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
                              "every": {
                                "type": "integer"
                              },
                              "occurrences": {
                                "$ref": "#/components/schemas/list"
                              },
                              "on": {
                                "$ref": "#/components/schemas/schedule_on"
                              },
                              "in_words": {
                                "type": "string"
                              },
                              "period": {
                                "type": "string",
                                "enum": [
                                  "day",
                                  "week",
                                  "month"
                                ]
                              },
                              "status": {
                                "type": "string",
                                "enum": [
                                  "running",
                                  "active",
                                  "expiring",
                                  "expired",
                                  "deleted",
                                  "suspended"
                                ]
                              },
                              "active": {
                                "type": "boolean",
                                "enum": [
                                  true,
                                  false
                                ]
                              },
                              "state": {
                                "type": "string",
                                "enum": [
                                  "Active",
                                  "Pause"
                                ]
                              },
                              "charge": {
                                "$ref": "#/components/schemas/charge_schedule"
                              },
                              "transfer": {
                                "$ref": "#/components/schemas/transfer_schedule"
                              },
                              "next_occurrences_on": {
                                "type": "array",
                                "items": {
                                  "type": "string",
                                  "format": "date"
                                }
                              },
                              "ended_at": {
                                "type": "string",
                                "format": "date-time"
                              },
                              "start_on": {
                                "type": "string",
                                "format": "date"
                              },
                              "end_on": {
                                "type": "string",
                                "format": "date"
                              },
                              "created_at": {
                                "type": "string",
                                "format": "date-time"
                              },
                              "execute_time": {
                                "type": "string",
                                "nullable": true
                              },
                              "deleted_by": {
                                "type": "string",
                                "nullable": true
                              },
                              "merchant_name": {
                                "type": "string"
                              }
                            }
                          },
                          {
                            "type": "string"
                          }
                        ]
                      },
                      "metadata": {
                        "type": "object",
                        "default": {}
                      },
                      "verified_at": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "activated_at": {
                        "type": "string",
                        "format": "date-time"
                      }
                    }
                  },
                  {
                    "type": "string"
                  }
                ]
              },
              "created_at": {
                "type": "string",
                "format": "date-time"
              },
              "is_realtime_payout": {
                "type": "boolean",
                "nullable": true,
                "enum": [
                  true,
                  false
                ]
              }
            }
          },
          "next_occurrences_on": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "date"
            }
          },
          "ended_at": {
            "type": "string",
            "format": "date-time"
          },
          "start_on": {
            "type": "string",
            "format": "date"
          },
          "end_on": {
            "type": "string",
            "format": "date"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "execute_time": {
            "type": "string",
            "nullable": true
          },
          "deleted_by": {
            "type": "string",
            "nullable": true
          },
          "merchant_name": {
            "type": "string"
          }
        }
      },
      {
        "type": "string"
      }
    ]
  },
  "metadata": {
    "type": "object",
    "default": {}
  },
  "verified_at": {
    "type": "string",
    "format": "date-time"
  },
  "activated_at": {
    "type": "string",
    "format": "date-time"
  }
} 
```

        </div>
      </div>

