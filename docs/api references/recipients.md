# Recipients


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>recipientsGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">recipientsGet</div>
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
              
<div class="code-block curl active" id="recipientsGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/recipients?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="recipientsGet-code-java">
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

<div class="code-block android" id="recipientsGet-code-android">
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

<div class="code-block objc" id="recipientsGet-code-objc">
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

<div class="code-block javascript" id="recipientsGet-code-javascript">
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

<div class="code-block csharp" id="recipientsGet-code-csharp">
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

<div class="code-block php" id="recipientsGet-code-php">
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

<div class="code-block perl" id="recipientsGet-code-perl">
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

<div class="code-block python" id="recipientsGet-code-python">
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
          ### Responses

 ### Status: 200

| Name | Type | Format | Default | Enum | Pattern |
|------|------|--------|---------|------|---------|
| id | string |  |  |  | account_[0-9a-z]+ |
| team | string |  |  |  | acct_[0-9a-z]+ |
| livemode | boolean |  |  | true, false |  |
| location | string |  |  |  |  |
| country | string |  |  |  |  |
| currency | string | currency |  |  |  |
| email | string |  |  |  |  |
| created_at | string | date-time |  |  |  |
| supported_currencies | array |  |  |  |  |
| api_version | string |  |  |  |  |
| auto_activate_recipients | boolean |  |  | true, false |  |
| chain_enabled | boolean |  |  | true, false |  |
| zero_interest_installments | boolean |  |  | true, false |  |
| chain_return_uri | string | uri |  |  |  |
| webhook_uri | string | uri |  |  |  |
| metadata_export_keys | object |  |  |  |  |
| chaining_allowed | boolean |  |  | true, false |  |
| last_updated_api_version | string |  |  |  |  |
| transfer_config | object |  |  |  |  |

        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>recipientsIdDelete</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">recipientsIdDelete</div>
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
              
<div class="code-block curl active" id="recipientsIdDelete-code-curl">
```js
curl -X DELETE\
-H "Accept: application/json"\
"https://api.omise.co/recipients/{id}"
```
</div>

<div class="code-block java" id="recipientsIdDelete-code-java">
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

<div class="code-block android" id="recipientsIdDelete-code-android">
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

<div class="code-block objc" id="recipientsIdDelete-code-objc">
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

<div class="code-block javascript" id="recipientsIdDelete-code-javascript">
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

<div class="code-block csharp" id="recipientsIdDelete-code-csharp">
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

<div class="code-block php" id="recipientsIdDelete-code-php">
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

<div class="code-block perl" id="recipientsIdDelete-code-perl">
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

<div class="code-block python" id="recipientsIdDelete-code-python">
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
          ### Responses

 ### Status: 200

| Name | Type | Format | Default | Enum | Pattern |
|------|------|--------|---------|------|---------|
| id | string |  |  |  | account_[0-9a-z]+ |
| team | string |  |  |  | acct_[0-9a-z]+ |
| livemode | boolean |  |  | true, false |  |
| location | string |  |  |  |  |
| country | string |  |  |  |  |
| currency | string | currency |  |  |  |
| email | string |  |  |  |  |
| created_at | string | date-time |  |  |  |
| supported_currencies | array |  |  |  |  |
| api_version | string |  |  |  |  |
| auto_activate_recipients | boolean |  |  | true, false |  |
| chain_enabled | boolean |  |  | true, false |  |
| zero_interest_installments | boolean |  |  | true, false |  |
| chain_return_uri | string | uri |  |  |  |
| webhook_uri | string | uri |  |  |  |
| metadata_export_keys | object |  |  |  |  |
| chaining_allowed | boolean |  |  | true, false |  |
| last_updated_api_version | string |  |  |  |  |
| transfer_config | object |  |  |  |  |

        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>recipientsIdGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">recipientsIdGet</div>
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
              
<div class="code-block curl active" id="recipientsIdGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/recipients/{id}"
```
</div>

<div class="code-block java" id="recipientsIdGet-code-java">
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

<div class="code-block android" id="recipientsIdGet-code-android">
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

<div class="code-block objc" id="recipientsIdGet-code-objc">
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

<div class="code-block javascript" id="recipientsIdGet-code-javascript">
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

<div class="code-block csharp" id="recipientsIdGet-code-csharp">
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

<div class="code-block php" id="recipientsIdGet-code-php">
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

<div class="code-block perl" id="recipientsIdGet-code-perl">
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

<div class="code-block python" id="recipientsIdGet-code-python">
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
          ### Responses

 ### Status: 200

| Name | Type | Format | Default | Enum | Pattern |
|------|------|--------|---------|------|---------|
| id | string |  |  |  | account_[0-9a-z]+ |
| team | string |  |  |  | acct_[0-9a-z]+ |
| livemode | boolean |  |  | true, false |  |
| location | string |  |  |  |  |
| country | string |  |  |  |  |
| currency | string | currency |  |  |  |
| email | string |  |  |  |  |
| created_at | string | date-time |  |  |  |
| supported_currencies | array |  |  |  |  |
| api_version | string |  |  |  |  |
| auto_activate_recipients | boolean |  |  | true, false |  |
| chain_enabled | boolean |  |  | true, false |  |
| zero_interest_installments | boolean |  |  | true, false |  |
| chain_return_uri | string | uri |  |  |  |
| webhook_uri | string | uri |  |  |  |
| metadata_export_keys | object |  |  |  |  |
| chaining_allowed | boolean |  |  | true, false |  |
| last_updated_api_version | string |  |  |  |  |
| transfer_config | object |  |  |  |  |

        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>recipientsIdPatch</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">recipientsIdPatch</div>
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
              
<div class="code-block curl active" id="recipientsIdPatch-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/recipients/{id}"
```
</div>

<div class="code-block java" id="recipientsIdPatch-code-java">
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

<div class="code-block android" id="recipientsIdPatch-code-android">
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

<div class="code-block objc" id="recipientsIdPatch-code-objc">
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

<div class="code-block javascript" id="recipientsIdPatch-code-javascript">
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

<div class="code-block csharp" id="recipientsIdPatch-code-csharp">
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

<div class="code-block php" id="recipientsIdPatch-code-php">
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

<div class="code-block perl" id="recipientsIdPatch-code-perl">
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

<div class="code-block python" id="recipientsIdPatch-code-python">
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
          ### Responses

 ### Status: 200

| Name | Type | Format | Default | Enum | Pattern |
|------|------|--------|---------|------|---------|
| id | string |  |  |  | account_[0-9a-z]+ |
| team | string |  |  |  | acct_[0-9a-z]+ |
| livemode | boolean |  |  | true, false |  |
| location | string |  |  |  |  |
| country | string |  |  |  |  |
| currency | string | currency |  |  |  |
| email | string |  |  |  |  |
| created_at | string | date-time |  |  |  |
| supported_currencies | array |  |  |  |  |
| api_version | string |  |  |  |  |
| auto_activate_recipients | boolean |  |  | true, false |  |
| chain_enabled | boolean |  |  | true, false |  |
| zero_interest_installments | boolean |  |  | true, false |  |
| chain_return_uri | string | uri |  |  |  |
| webhook_uri | string | uri |  |  |  |
| metadata_export_keys | object |  |  |  |  |
| chaining_allowed | boolean |  |  | true, false |  |
| last_updated_api_version | string |  |  |  |  |
| transfer_config | object |  |  |  |  |

### Responses

 ### Status: 200

| Name | Type | Format | Default | Enum | Pattern |
|------|------|--------|---------|------|---------|
| id | string |  |  |  | account_[0-9a-z]+ |
| team | string |  |  |  | acct_[0-9a-z]+ |
| livemode | boolean |  |  | true, false |  |
| location | string |  |  |  |  |
| country | string |  |  |  |  |
| currency | string | currency |  |  |  |
| email | string |  |  |  |  |
| created_at | string | date-time |  |  |  |
| supported_currencies | array |  |  |  |  |
| api_version | string |  |  |  |  |
| auto_activate_recipients | boolean |  |  | true, false |  |
| chain_enabled | boolean |  |  | true, false |  |
| zero_interest_installments | boolean |  |  | true, false |  |
| chain_return_uri | string | uri |  |  |  |
| webhook_uri | string | uri |  |  |  |
| metadata_export_keys | object |  |  |  |  |
| chaining_allowed | boolean |  |  | true, false |  |
| last_updated_api_version | string |  |  |  |  |
| transfer_config | object |  |  |  |  |

        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>recipientsIdSchedulesGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">recipientsIdSchedulesGet</div>
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
              
<div class="code-block curl active" id="recipientsIdSchedulesGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/recipients/{id}/schedules?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="recipientsIdSchedulesGet-code-java">
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

<div class="code-block android" id="recipientsIdSchedulesGet-code-android">
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

<div class="code-block objc" id="recipientsIdSchedulesGet-code-objc">
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

<div class="code-block javascript" id="recipientsIdSchedulesGet-code-javascript">
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

<div class="code-block csharp" id="recipientsIdSchedulesGet-code-csharp">
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

<div class="code-block php" id="recipientsIdSchedulesGet-code-php">
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

<div class="code-block perl" id="recipientsIdSchedulesGet-code-perl">
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

<div class="code-block python" id="recipientsIdSchedulesGet-code-python">
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
          ### Responses

 ### Status: 200

| Name | Type | Format | Default | Enum | Pattern |
|------|------|--------|---------|------|---------|
| id | string |  |  |  | account_[0-9a-z]+ |
| team | string |  |  |  | acct_[0-9a-z]+ |
| livemode | boolean |  |  | true, false |  |
| location | string |  |  |  |  |
| country | string |  |  |  |  |
| currency | string | currency |  |  |  |
| email | string |  |  |  |  |
| created_at | string | date-time |  |  |  |
| supported_currencies | array |  |  |  |  |
| api_version | string |  |  |  |  |
| auto_activate_recipients | boolean |  |  | true, false |  |
| chain_enabled | boolean |  |  | true, false |  |
| zero_interest_installments | boolean |  |  | true, false |  |
| chain_return_uri | string | uri |  |  |  |
| webhook_uri | string | uri |  |  |  |
| metadata_export_keys | object |  |  |  |  |
| chaining_allowed | boolean |  |  | true, false |  |
| last_updated_api_version | string |  |  |  |  |
| transfer_config | object |  |  |  |  |

### Responses

 ### Status: 200

| Name | Type | Format | Default | Enum | Pattern |
|------|------|--------|---------|------|---------|
| id | string |  |  |  | account_[0-9a-z]+ |
| team | string |  |  |  | acct_[0-9a-z]+ |
| livemode | boolean |  |  | true, false |  |
| location | string |  |  |  |  |
| country | string |  |  |  |  |
| currency | string | currency |  |  |  |
| email | string |  |  |  |  |
| created_at | string | date-time |  |  |  |
| supported_currencies | array |  |  |  |  |
| api_version | string |  |  |  |  |
| auto_activate_recipients | boolean |  |  | true, false |  |
| chain_enabled | boolean |  |  | true, false |  |
| zero_interest_installments | boolean |  |  | true, false |  |
| chain_return_uri | string | uri |  |  |  |
| webhook_uri | string | uri |  |  |  |
| metadata_export_keys | object |  |  |  |  |
| chaining_allowed | boolean |  |  | true, false |  |
| last_updated_api_version | string |  |  |  |  |
| transfer_config | object |  |  |  |  |

        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>recipientsIdVerifyPatch</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">recipientsIdVerifyPatch</div>
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
              
<div class="code-block curl active" id="recipientsIdVerifyPatch-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
"https://api.omise.co/recipients/{id}/verify"
```
</div>

<div class="code-block java" id="recipientsIdVerifyPatch-code-java">
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

<div class="code-block android" id="recipientsIdVerifyPatch-code-android">
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

<div class="code-block objc" id="recipientsIdVerifyPatch-code-objc">
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

<div class="code-block javascript" id="recipientsIdVerifyPatch-code-javascript">
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

<div class="code-block csharp" id="recipientsIdVerifyPatch-code-csharp">
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

<div class="code-block php" id="recipientsIdVerifyPatch-code-php">
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

<div class="code-block perl" id="recipientsIdVerifyPatch-code-perl">
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

<div class="code-block python" id="recipientsIdVerifyPatch-code-python">
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
          ### Responses

 ### Status: 200

| Name | Type | Format | Default | Enum | Pattern |
|------|------|--------|---------|------|---------|
| id | string |  |  |  | account_[0-9a-z]+ |
| team | string |  |  |  | acct_[0-9a-z]+ |
| livemode | boolean |  |  | true, false |  |
| location | string |  |  |  |  |
| country | string |  |  |  |  |
| currency | string | currency |  |  |  |
| email | string |  |  |  |  |
| created_at | string | date-time |  |  |  |
| supported_currencies | array |  |  |  |  |
| api_version | string |  |  |  |  |
| auto_activate_recipients | boolean |  |  | true, false |  |
| chain_enabled | boolean |  |  | true, false |  |
| zero_interest_installments | boolean |  |  | true, false |  |
| chain_return_uri | string | uri |  |  |  |
| webhook_uri | string | uri |  |  |  |
| metadata_export_keys | object |  |  |  |  |
| chaining_allowed | boolean |  |  | true, false |  |
| last_updated_api_version | string |  |  |  |  |
| transfer_config | object |  |  |  |  |

        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>recipientsPost</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">recipientsPost</div>
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
              
<div class="code-block curl active" id="recipientsPost-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/recipients"
```
</div>

<div class="code-block java" id="recipientsPost-code-java">
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

<div class="code-block android" id="recipientsPost-code-android">
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

<div class="code-block objc" id="recipientsPost-code-objc">
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

<div class="code-block javascript" id="recipientsPost-code-javascript">
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

<div class="code-block csharp" id="recipientsPost-code-csharp">
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

<div class="code-block php" id="recipientsPost-code-php">
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

<div class="code-block perl" id="recipientsPost-code-perl">
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

<div class="code-block python" id="recipientsPost-code-python">
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
          ### Responses

 ### Status: 200

| Name | Type | Format | Default | Enum | Pattern |
|------|------|--------|---------|------|---------|
| id | string |  |  |  | account_[0-9a-z]+ |
| team | string |  |  |  | acct_[0-9a-z]+ |
| livemode | boolean |  |  | true, false |  |
| location | string |  |  |  |  |
| country | string |  |  |  |  |
| currency | string | currency |  |  |  |
| email | string |  |  |  |  |
| created_at | string | date-time |  |  |  |
| supported_currencies | array |  |  |  |  |
| api_version | string |  |  |  |  |
| auto_activate_recipients | boolean |  |  | true, false |  |
| chain_enabled | boolean |  |  | true, false |  |
| zero_interest_installments | boolean |  |  | true, false |  |
| chain_return_uri | string | uri |  |  |  |
| webhook_uri | string | uri |  |  |  |
| metadata_export_keys | object |  |  |  |  |
| chaining_allowed | boolean |  |  | true, false |  |
| last_updated_api_version | string |  |  |  |  |
| transfer_config | object |  |  |  |  |

        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>recipientsSearchGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">recipientsSearchGet</div>
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
              
<div class="code-block curl active" id="recipientsSearchGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/recipients/search?scope=&query=&filters[active]=&filters[activated_at]=&filters[bank_last_digits]=&filters[created]=&filters[deleted]=&filters[failure_code]=&filters[type]=&filters[verified]=&filters[verified_at]="
```
</div>

<div class="code-block java" id="recipientsSearchGet-code-java">
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

<div class="code-block android" id="recipientsSearchGet-code-android">
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

<div class="code-block objc" id="recipientsSearchGet-code-objc">
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

<div class="code-block javascript" id="recipientsSearchGet-code-javascript">
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

<div class="code-block csharp" id="recipientsSearchGet-code-csharp">
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

<div class="code-block php" id="recipientsSearchGet-code-php">
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

<div class="code-block perl" id="recipientsSearchGet-code-perl">
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

<div class="code-block python" id="recipientsSearchGet-code-python">
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

| Name | Type | Format | Default | Enum | Pattern |
|------|------|--------|---------|------|---------|
| id | string |  |  |  | account_[0-9a-z]+ |
| team | string |  |  |  | acct_[0-9a-z]+ |
| livemode | boolean |  |  | true, false |  |
| location | string |  |  |  |  |
| country | string |  |  |  |  |
| currency | string | currency |  |  |  |
| email | string |  |  |  |  |
| created_at | string | date-time |  |  |  |
| supported_currencies | array |  |  |  |  |
| api_version | string |  |  |  |  |
| auto_activate_recipients | boolean |  |  | true, false |  |
| chain_enabled | boolean |  |  | true, false |  |
| zero_interest_installments | boolean |  |  | true, false |  |
| chain_return_uri | string | uri |  |  |  |
| webhook_uri | string | uri |  |  |  |
| metadata_export_keys | object |  |  |  |  |
| chaining_allowed | boolean |  |  | true, false |  |
| last_updated_api_version | string |  |  |  |  |
| transfer_config | object |  |  |  |  |

        </div>
      </div>

