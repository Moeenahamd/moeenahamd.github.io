# Charges


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>chargesGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">chargesGet</div>
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
              
<div class="code-block curl active" id="chargesGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/charges?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="chargesGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ChargesApi;

import java.io.File;
import java.util.*;

public class ChargesApiExample {

    public static void main(String[] args) {
        
        ChargesApi apiInstance = new ChargesApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.chargesGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="chargesGet-code-android">
```js
import io.swagger.client.api.ChargesApi;

public class ChargesApiExample {

    public static void main(String[] args) {
        ChargesApi apiInstance = new ChargesApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.chargesGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="chargesGet-code-objc">
```js
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

ChargesApi *apiInstance = [[ChargesApi alloc] init];

[apiInstance chargesGetWith:from
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

<div class="code-block javascript" id="chargesGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ChargesApi()
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
api.chargesGet(opts, callback);
```
</div>

<div class="code-block csharp" id="chargesGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chargesGetExample
    {
        public void main()
        {

            var apiInstance = new ChargesApi();
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.chargesGet(from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ChargesApi.chargesGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="chargesGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiChargesApi();
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->chargesGet($from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChargesApi->chargesGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="chargesGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ChargesApi;

my $api_instance = WWW::SwaggerClient::ChargesApi->new();
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->chargesGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ChargesApi->chargesGet: $@\n";
}
```
</div>

<div class="code-block python" id="chargesGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ChargesApi()
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.charges_get(from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ChargesApi->chargesGet: %s\n" % e)
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
            <h3>chargesIdCapturePost</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">chargesIdCapturePost</div>
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
              
<div class="code-block curl active" id="chargesIdCapturePost-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/charges/{id}/capture"
```
</div>

<div class="code-block java" id="chargesIdCapturePost-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ChargesApi;

import java.io.File;
import java.util.*;

public class ChargesApiExample {

    public static void main(String[] args) {
        
        ChargesApi apiInstance = new ChargesApi();
        String id = id_example; // String | 
        Integer captureAmount = 56; // Integer | 
        try {
            charge result = apiInstance.chargesIdCapturePost(id, captureAmount);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesIdCapturePost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="chargesIdCapturePost-code-android">
```js
import io.swagger.client.api.ChargesApi;

public class ChargesApiExample {

    public static void main(String[] args) {
        ChargesApi apiInstance = new ChargesApi();
        String id = id_example; // String | 
        Integer captureAmount = 56; // Integer | 
        try {
            charge result = apiInstance.chargesIdCapturePost(id, captureAmount);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesIdCapturePost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="chargesIdCapturePost-code-objc">
```js
String *id = id_example; // 
Integer *captureAmount = 56; //  (optional)

ChargesApi *apiInstance = [[ChargesApi alloc] init];

[apiInstance chargesIdCapturePostWith:id
    captureAmount:captureAmount
              completionHandler: ^(charge output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="chargesIdCapturePost-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ChargesApi()
var id = id_example; // {{String}} 
var opts = { 
  'captureAmount': 56 // {{Integer}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.chargesIdCapturePost(id, opts, callback);
```
</div>

<div class="code-block csharp" id="chargesIdCapturePost-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chargesIdCapturePostExample
    {
        public void main()
        {

            var apiInstance = new ChargesApi();
            var id = id_example;  // String | 
            var captureAmount = 56;  // Integer |  (optional) 

            try
            {
                charge result = apiInstance.chargesIdCapturePost(id, captureAmount);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ChargesApi.chargesIdCapturePost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="chargesIdCapturePost-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiChargesApi();
$id = id_example; // String | 
$captureAmount = 56; // Integer | 

try {
    $result = $api_instance->chargesIdCapturePost($id, $captureAmount);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChargesApi->chargesIdCapturePost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="chargesIdCapturePost-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ChargesApi;

my $api_instance = WWW::SwaggerClient::ChargesApi->new();
my $id = id_example; # String | 
my $captureAmount = 56; # Integer | 

eval { 
    my $result = $api_instance->chargesIdCapturePost(id => $id, captureAmount => $captureAmount);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ChargesApi->chargesIdCapturePost: $@\n";
}
```
</div>

<div class="code-block python" id="chargesIdCapturePost-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ChargesApi()
id = id_example # String | 
captureAmount = 56 # Integer |  (optional)

try: 
    api_response = api_instance.charges_id_capture_post(id, captureAmount=captureAmount)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ChargesApi->chargesIdCapturePost: %s\n" % e)
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
| capture_amount | Integer |

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
            <h3>chargesIdEventsGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">chargesIdEventsGet</div>
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
              
<div class="code-block curl active" id="chargesIdEventsGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/charges/{id}/events?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="chargesIdEventsGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ChargesApi;

import java.io.File;
import java.util.*;

public class ChargesApiExample {

    public static void main(String[] args) {
        
        ChargesApi apiInstance = new ChargesApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.chargesIdEventsGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesIdEventsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="chargesIdEventsGet-code-android">
```js
import io.swagger.client.api.ChargesApi;

public class ChargesApiExample {

    public static void main(String[] args) {
        ChargesApi apiInstance = new ChargesApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.chargesIdEventsGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesIdEventsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="chargesIdEventsGet-code-objc">
```js
String *id = id_example; // 
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

ChargesApi *apiInstance = [[ChargesApi alloc] init];

[apiInstance chargesIdEventsGetWith:id
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

<div class="code-block javascript" id="chargesIdEventsGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ChargesApi()
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
api.chargesIdEventsGet(id, opts, callback);
```
</div>

<div class="code-block csharp" id="chargesIdEventsGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chargesIdEventsGetExample
    {
        public void main()
        {

            var apiInstance = new ChargesApi();
            var id = id_example;  // String | 
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.chargesIdEventsGet(id, from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ChargesApi.chargesIdEventsGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="chargesIdEventsGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiChargesApi();
$id = id_example; // String | 
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->chargesIdEventsGet($id, $from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChargesApi->chargesIdEventsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="chargesIdEventsGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ChargesApi;

my $api_instance = WWW::SwaggerClient::ChargesApi->new();
my $id = id_example; # String | 
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->chargesIdEventsGet(id => $id, from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ChargesApi->chargesIdEventsGet: $@\n";
}
```
</div>

<div class="code-block python" id="chargesIdEventsGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ChargesApi()
id = id_example # String | 
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.charges_id_events_get(id, from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ChargesApi->chargesIdEventsGet: %s\n" % e)
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
            <h3>chargesIdExpirePost</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">chargesIdExpirePost</div>
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
              
<div class="code-block curl active" id="chargesIdExpirePost-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
"https://api.omise.co/charges/{id}/expire"
```
</div>

<div class="code-block java" id="chargesIdExpirePost-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ChargesApi;

import java.io.File;
import java.util.*;

public class ChargesApiExample {

    public static void main(String[] args) {
        
        ChargesApi apiInstance = new ChargesApi();
        String id = id_example; // String | 
        try {
            charge result = apiInstance.chargesIdExpirePost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesIdExpirePost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="chargesIdExpirePost-code-android">
```js
import io.swagger.client.api.ChargesApi;

public class ChargesApiExample {

    public static void main(String[] args) {
        ChargesApi apiInstance = new ChargesApi();
        String id = id_example; // String | 
        try {
            charge result = apiInstance.chargesIdExpirePost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesIdExpirePost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="chargesIdExpirePost-code-objc">
```js
String *id = id_example; // 

ChargesApi *apiInstance = [[ChargesApi alloc] init];

[apiInstance chargesIdExpirePostWith:id
              completionHandler: ^(charge output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="chargesIdExpirePost-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ChargesApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.chargesIdExpirePost(id, callback);
```
</div>

<div class="code-block csharp" id="chargesIdExpirePost-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chargesIdExpirePostExample
    {
        public void main()
        {

            var apiInstance = new ChargesApi();
            var id = id_example;  // String | 

            try
            {
                charge result = apiInstance.chargesIdExpirePost(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ChargesApi.chargesIdExpirePost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="chargesIdExpirePost-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiChargesApi();
$id = id_example; // String | 

try {
    $result = $api_instance->chargesIdExpirePost($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChargesApi->chargesIdExpirePost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="chargesIdExpirePost-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ChargesApi;

my $api_instance = WWW::SwaggerClient::ChargesApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->chargesIdExpirePost(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ChargesApi->chargesIdExpirePost: $@\n";
}
```
</div>

<div class="code-block python" id="chargesIdExpirePost-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ChargesApi()
id = id_example # String | 

try: 
    api_response = api_instance.charges_id_expire_post(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ChargesApi->chargesIdExpirePost: %s\n" % e)
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
            <h3>chargesIdGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">chargesIdGet</div>
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
              
<div class="code-block curl active" id="chargesIdGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/charges/{id}"
```
</div>

<div class="code-block java" id="chargesIdGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ChargesApi;

import java.io.File;
import java.util.*;

public class ChargesApiExample {

    public static void main(String[] args) {
        
        ChargesApi apiInstance = new ChargesApi();
        String id = id_example; // String | 
        try {
            charge result = apiInstance.chargesIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="chargesIdGet-code-android">
```js
import io.swagger.client.api.ChargesApi;

public class ChargesApiExample {

    public static void main(String[] args) {
        ChargesApi apiInstance = new ChargesApi();
        String id = id_example; // String | 
        try {
            charge result = apiInstance.chargesIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="chargesIdGet-code-objc">
```js
String *id = id_example; // 

ChargesApi *apiInstance = [[ChargesApi alloc] init];

[apiInstance chargesIdGetWith:id
              completionHandler: ^(charge output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="chargesIdGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ChargesApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.chargesIdGet(id, callback);
```
</div>

<div class="code-block csharp" id="chargesIdGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chargesIdGetExample
    {
        public void main()
        {

            var apiInstance = new ChargesApi();
            var id = id_example;  // String | 

            try
            {
                charge result = apiInstance.chargesIdGet(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ChargesApi.chargesIdGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="chargesIdGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiChargesApi();
$id = id_example; // String | 

try {
    $result = $api_instance->chargesIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChargesApi->chargesIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="chargesIdGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ChargesApi;

my $api_instance = WWW::SwaggerClient::ChargesApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->chargesIdGet(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ChargesApi->chargesIdGet: $@\n";
}
```
</div>

<div class="code-block python" id="chargesIdGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ChargesApi()
id = id_example # String | 

try: 
    api_response = api_instance.charges_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ChargesApi->chargesIdGet: %s\n" % e)
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
            <h3>chargesIdMarkAsFailedPost</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">chargesIdMarkAsFailedPost</div>
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
              
<div class="code-block curl active" id="chargesIdMarkAsFailedPost-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
"https://api.omise.co/charges/{id}/mark_as_failed"
```
</div>

<div class="code-block java" id="chargesIdMarkAsFailedPost-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ChargesApi;

import java.io.File;
import java.util.*;

public class ChargesApiExample {

    public static void main(String[] args) {
        
        ChargesApi apiInstance = new ChargesApi();
        String id = id_example; // String | 
        try {
            charge result = apiInstance.chargesIdMarkAsFailedPost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesIdMarkAsFailedPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="chargesIdMarkAsFailedPost-code-android">
```js
import io.swagger.client.api.ChargesApi;

public class ChargesApiExample {

    public static void main(String[] args) {
        ChargesApi apiInstance = new ChargesApi();
        String id = id_example; // String | 
        try {
            charge result = apiInstance.chargesIdMarkAsFailedPost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesIdMarkAsFailedPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="chargesIdMarkAsFailedPost-code-objc">
```js
String *id = id_example; // 

ChargesApi *apiInstance = [[ChargesApi alloc] init];

[apiInstance chargesIdMarkAsFailedPostWith:id
              completionHandler: ^(charge output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="chargesIdMarkAsFailedPost-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ChargesApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.chargesIdMarkAsFailedPost(id, callback);
```
</div>

<div class="code-block csharp" id="chargesIdMarkAsFailedPost-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chargesIdMarkAsFailedPostExample
    {
        public void main()
        {

            var apiInstance = new ChargesApi();
            var id = id_example;  // String | 

            try
            {
                charge result = apiInstance.chargesIdMarkAsFailedPost(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ChargesApi.chargesIdMarkAsFailedPost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="chargesIdMarkAsFailedPost-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiChargesApi();
$id = id_example; // String | 

try {
    $result = $api_instance->chargesIdMarkAsFailedPost($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChargesApi->chargesIdMarkAsFailedPost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="chargesIdMarkAsFailedPost-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ChargesApi;

my $api_instance = WWW::SwaggerClient::ChargesApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->chargesIdMarkAsFailedPost(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ChargesApi->chargesIdMarkAsFailedPost: $@\n";
}
```
</div>

<div class="code-block python" id="chargesIdMarkAsFailedPost-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ChargesApi()
id = id_example # String | 

try: 
    api_response = api_instance.charges_id_mark_as_failed_post(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ChargesApi->chargesIdMarkAsFailedPost: %s\n" % e)
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
            <h3>chargesIdMarkAsPaidPost</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">chargesIdMarkAsPaidPost</div>
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
              
<div class="code-block curl active" id="chargesIdMarkAsPaidPost-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
"https://api.omise.co/charges/{id}/mark_as_paid"
```
</div>

<div class="code-block java" id="chargesIdMarkAsPaidPost-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ChargesApi;

import java.io.File;
import java.util.*;

public class ChargesApiExample {

    public static void main(String[] args) {
        
        ChargesApi apiInstance = new ChargesApi();
        String id = id_example; // String | 
        try {
            charge result = apiInstance.chargesIdMarkAsPaidPost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesIdMarkAsPaidPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="chargesIdMarkAsPaidPost-code-android">
```js
import io.swagger.client.api.ChargesApi;

public class ChargesApiExample {

    public static void main(String[] args) {
        ChargesApi apiInstance = new ChargesApi();
        String id = id_example; // String | 
        try {
            charge result = apiInstance.chargesIdMarkAsPaidPost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesIdMarkAsPaidPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="chargesIdMarkAsPaidPost-code-objc">
```js
String *id = id_example; // 

ChargesApi *apiInstance = [[ChargesApi alloc] init];

[apiInstance chargesIdMarkAsPaidPostWith:id
              completionHandler: ^(charge output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="chargesIdMarkAsPaidPost-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ChargesApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.chargesIdMarkAsPaidPost(id, callback);
```
</div>

<div class="code-block csharp" id="chargesIdMarkAsPaidPost-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chargesIdMarkAsPaidPostExample
    {
        public void main()
        {

            var apiInstance = new ChargesApi();
            var id = id_example;  // String | 

            try
            {
                charge result = apiInstance.chargesIdMarkAsPaidPost(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ChargesApi.chargesIdMarkAsPaidPost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="chargesIdMarkAsPaidPost-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiChargesApi();
$id = id_example; // String | 

try {
    $result = $api_instance->chargesIdMarkAsPaidPost($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChargesApi->chargesIdMarkAsPaidPost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="chargesIdMarkAsPaidPost-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ChargesApi;

my $api_instance = WWW::SwaggerClient::ChargesApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->chargesIdMarkAsPaidPost(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ChargesApi->chargesIdMarkAsPaidPost: $@\n";
}
```
</div>

<div class="code-block python" id="chargesIdMarkAsPaidPost-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ChargesApi()
id = id_example # String | 

try: 
    api_response = api_instance.charges_id_mark_as_paid_post(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ChargesApi->chargesIdMarkAsPaidPost: %s\n" % e)
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
            <h3>chargesIdPatch</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">chargesIdPatch</div>
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
              
<div class="code-block curl active" id="chargesIdPatch-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/charges/{id}"
```
</div>

<div class="code-block java" id="chargesIdPatch-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ChargesApi;

import java.io.File;
import java.util.*;

public class ChargesApiExample {

    public static void main(String[] args) {
        
        ChargesApi apiInstance = new ChargesApi();
        String id = id_example; // String | 
        String description = description_example; // String | 
        Object metadata = ; // Object | 
        try {
            charge result = apiInstance.chargesIdPatch(id, description, metadata);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesIdPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="chargesIdPatch-code-android">
```js
import io.swagger.client.api.ChargesApi;

public class ChargesApiExample {

    public static void main(String[] args) {
        ChargesApi apiInstance = new ChargesApi();
        String id = id_example; // String | 
        String description = description_example; // String | 
        Object metadata = ; // Object | 
        try {
            charge result = apiInstance.chargesIdPatch(id, description, metadata);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesIdPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="chargesIdPatch-code-objc">
```js
String *id = id_example; // 
String *description = description_example; //  (optional)
Object *metadata = ; //  (optional)

ChargesApi *apiInstance = [[ChargesApi alloc] init];

[apiInstance chargesIdPatchWith:id
    description:description
    metadata:metadata
              completionHandler: ^(charge output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="chargesIdPatch-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ChargesApi()
var id = id_example; // {{String}} 
var opts = { 
  'description': description_example // {{String}} 
  'metadata':  // {{Object}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.chargesIdPatch(id, opts, callback);
```
</div>

<div class="code-block csharp" id="chargesIdPatch-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chargesIdPatchExample
    {
        public void main()
        {

            var apiInstance = new ChargesApi();
            var id = id_example;  // String | 
            var description = description_example;  // String |  (optional) 
            var metadata = new Object(); // Object |  (optional) 

            try
            {
                charge result = apiInstance.chargesIdPatch(id, description, metadata);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ChargesApi.chargesIdPatch: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="chargesIdPatch-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiChargesApi();
$id = id_example; // String | 
$description = description_example; // String | 
$metadata = ; // Object | 

try {
    $result = $api_instance->chargesIdPatch($id, $description, $metadata);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChargesApi->chargesIdPatch: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="chargesIdPatch-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ChargesApi;

my $api_instance = WWW::SwaggerClient::ChargesApi->new();
my $id = id_example; # String | 
my $description = description_example; # String | 
my $metadata = ; # Object | 

eval { 
    my $result = $api_instance->chargesIdPatch(id => $id, description => $description, metadata => $metadata);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ChargesApi->chargesIdPatch: $@\n";
}
```
</div>

<div class="code-block python" id="chargesIdPatch-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ChargesApi()
id = id_example # String | 
description = description_example # String |  (optional)
metadata =  # Object |  (optional)

try: 
    api_response = api_instance.charges_id_patch(id, description=description, metadata=metadata)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ChargesApi->chargesIdPatch: %s\n" % e)
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
| description | String |
| metadata | Object |

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
            <h3>chargesIdReversePost</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">chargesIdReversePost</div>
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
              
<div class="code-block curl active" id="chargesIdReversePost-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
"https://api.omise.co/charges/{id}/reverse"
```
</div>

<div class="code-block java" id="chargesIdReversePost-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ChargesApi;

import java.io.File;
import java.util.*;

public class ChargesApiExample {

    public static void main(String[] args) {
        
        ChargesApi apiInstance = new ChargesApi();
        String id = id_example; // String | 
        try {
            charge result = apiInstance.chargesIdReversePost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesIdReversePost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="chargesIdReversePost-code-android">
```js
import io.swagger.client.api.ChargesApi;

public class ChargesApiExample {

    public static void main(String[] args) {
        ChargesApi apiInstance = new ChargesApi();
        String id = id_example; // String | 
        try {
            charge result = apiInstance.chargesIdReversePost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesIdReversePost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="chargesIdReversePost-code-objc">
```js
String *id = id_example; // 

ChargesApi *apiInstance = [[ChargesApi alloc] init];

[apiInstance chargesIdReversePostWith:id
              completionHandler: ^(charge output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="chargesIdReversePost-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ChargesApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.chargesIdReversePost(id, callback);
```
</div>

<div class="code-block csharp" id="chargesIdReversePost-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chargesIdReversePostExample
    {
        public void main()
        {

            var apiInstance = new ChargesApi();
            var id = id_example;  // String | 

            try
            {
                charge result = apiInstance.chargesIdReversePost(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ChargesApi.chargesIdReversePost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="chargesIdReversePost-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiChargesApi();
$id = id_example; // String | 

try {
    $result = $api_instance->chargesIdReversePost($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChargesApi->chargesIdReversePost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="chargesIdReversePost-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ChargesApi;

my $api_instance = WWW::SwaggerClient::ChargesApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->chargesIdReversePost(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ChargesApi->chargesIdReversePost: $@\n";
}
```
</div>

<div class="code-block python" id="chargesIdReversePost-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ChargesApi()
id = id_example # String | 

try: 
    api_response = api_instance.charges_id_reverse_post(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ChargesApi->chargesIdReversePost: %s\n" % e)
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
            <h3>chargesPost</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">chargesPost</div>
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
              
<div class="code-block curl active" id="chargesPost-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/charges"
```
</div>

<div class="code-block java" id="chargesPost-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ChargesApi;

import java.io.File;
import java.util.*;

public class ChargesApiExample {

    public static void main(String[] args) {
        
        ChargesApi apiInstance = new ChargesApi();
        Boolean capture = true; // Boolean | 
        String currency = currency_example; // String | 
        Integer amount = 56; // Integer | 
        String ip = ip_example; // String | 
        Object metadata = ; // Object | 
        String card = card_example; // String | 
        String customer = customer_example; // String | 
        String source = source_example; // String | 
        String linkedAccount = linkedAccount_example; // String | 
        String description = description_example; // String | 
        String returnUri = returnUri_example; // String | 
        Date expiresAt = 2013-10-20T19:20:30+01:00; // Date | 
        charges_platform_fee platformFee = ; // charges_platform_fee | 
        Boolean zeroInterestInstallments = true; // Boolean | 
        String authorizationType = authorizationType_example; // String | 
        String firstCharge = firstCharge_example; // String | 
        String transactionIndicator = transactionIndicator_example; // String | 
        String recurringReason = recurringReason_example; // String | 
        array[String] webhookEndpoints = ; // array[String] | 
        String statementDescriptor = statementDescriptor_example; // String | 
        try {
            charge result = apiInstance.chargesPost(capture, currency, amount, ip, metadata, card, customer, source, linkedAccount, description, returnUri, expiresAt, platformFee, zeroInterestInstallments, authorizationType, firstCharge, transactionIndicator, recurringReason, webhookEndpoints, statementDescriptor);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="chargesPost-code-android">
```js
import io.swagger.client.api.ChargesApi;

public class ChargesApiExample {

    public static void main(String[] args) {
        ChargesApi apiInstance = new ChargesApi();
        Boolean capture = true; // Boolean | 
        String currency = currency_example; // String | 
        Integer amount = 56; // Integer | 
        String ip = ip_example; // String | 
        Object metadata = ; // Object | 
        String card = card_example; // String | 
        String customer = customer_example; // String | 
        String source = source_example; // String | 
        String linkedAccount = linkedAccount_example; // String | 
        String description = description_example; // String | 
        String returnUri = returnUri_example; // String | 
        Date expiresAt = 2013-10-20T19:20:30+01:00; // Date | 
        charges_platform_fee platformFee = ; // charges_platform_fee | 
        Boolean zeroInterestInstallments = true; // Boolean | 
        String authorizationType = authorizationType_example; // String | 
        String firstCharge = firstCharge_example; // String | 
        String transactionIndicator = transactionIndicator_example; // String | 
        String recurringReason = recurringReason_example; // String | 
        array[String] webhookEndpoints = ; // array[String] | 
        String statementDescriptor = statementDescriptor_example; // String | 
        try {
            charge result = apiInstance.chargesPost(capture, currency, amount, ip, metadata, card, customer, source, linkedAccount, description, returnUri, expiresAt, platformFee, zeroInterestInstallments, authorizationType, firstCharge, transactionIndicator, recurringReason, webhookEndpoints, statementDescriptor);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="chargesPost-code-objc">
```js
Boolean *capture = true; //  (optional)
String *currency = currency_example; //  (optional)
Integer *amount = 56; //  (optional)
String *ip = ip_example; //  (optional)
Object *metadata = ; //  (optional)
String *card = card_example; //  (optional)
String *customer = customer_example; //  (optional)
String *source = source_example; //  (optional)
String *linkedAccount = linkedAccount_example; //  (optional)
String *description = description_example; //  (optional)
String *returnUri = returnUri_example; //  (optional)
Date *expiresAt = 2013-10-20T19:20:30+01:00; //  (optional)
charges_platform_fee *platformFee = ; //  (optional)
Boolean *zeroInterestInstallments = true; //  (optional)
String *authorizationType = authorizationType_example; //  (optional)
String *firstCharge = firstCharge_example; //  (optional)
String *transactionIndicator = transactionIndicator_example; //  (optional)
String *recurringReason = recurringReason_example; //  (optional)
array[String] *webhookEndpoints = ; //  (optional)
String *statementDescriptor = statementDescriptor_example; //  (optional)

ChargesApi *apiInstance = [[ChargesApi alloc] init];

[apiInstance chargesPostWith:capture
    currency:currency
    amount:amount
    ip:ip
    metadata:metadata
    card:card
    customer:customer
    source:source
    linkedAccount:linkedAccount
    description:description
    returnUri:returnUri
    expiresAt:expiresAt
    platformFee:platformFee
    zeroInterestInstallments:zeroInterestInstallments
    authorizationType:authorizationType
    firstCharge:firstCharge
    transactionIndicator:transactionIndicator
    recurringReason:recurringReason
    webhookEndpoints:webhookEndpoints
    statementDescriptor:statementDescriptor
              completionHandler: ^(charge output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="chargesPost-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ChargesApi()
var opts = { 
  'capture': true // {{Boolean}} 
  'currency': currency_example // {{String}} 
  'amount': 56 // {{Integer}} 
  'ip': ip_example // {{String}} 
  'metadata':  // {{Object}} 
  'card': card_example // {{String}} 
  'customer': customer_example // {{String}} 
  'source': source_example // {{String}} 
  'linkedAccount': linkedAccount_example // {{String}} 
  'description': description_example // {{String}} 
  'returnUri': returnUri_example // {{String}} 
  'expiresAt': 2013-10-20T19:20:30+01:00 // {{Date}} 
  'platformFee':  // {{charges_platform_fee}} 
  'zeroInterestInstallments': true // {{Boolean}} 
  'authorizationType': authorizationType_example // {{String}} 
  'firstCharge': firstCharge_example // {{String}} 
  'transactionIndicator': transactionIndicator_example // {{String}} 
  'recurringReason': recurringReason_example // {{String}} 
  'webhookEndpoints':  // {{array[String]}} 
  'statementDescriptor': statementDescriptor_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.chargesPost(opts, callback);
```
</div>

<div class="code-block csharp" id="chargesPost-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chargesPostExample
    {
        public void main()
        {

            var apiInstance = new ChargesApi();
            var capture = true;  // Boolean |  (optional) 
            var currency = currency_example;  // String |  (optional) 
            var amount = 56;  // Integer |  (optional) 
            var ip = ip_example;  // String |  (optional) 
            var metadata = new Object(); // Object |  (optional) 
            var card = card_example;  // String |  (optional) 
            var customer = customer_example;  // String |  (optional) 
            var source = source_example;  // String |  (optional) 
            var linkedAccount = linkedAccount_example;  // String |  (optional) 
            var description = description_example;  // String |  (optional) 
            var returnUri = returnUri_example;  // String |  (optional) 
            var expiresAt = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var platformFee = new charges_platform_fee(); // charges_platform_fee |  (optional) 
            var zeroInterestInstallments = true;  // Boolean |  (optional) 
            var authorizationType = authorizationType_example;  // String |  (optional) 
            var firstCharge = firstCharge_example;  // String |  (optional) 
            var transactionIndicator = transactionIndicator_example;  // String |  (optional) 
            var recurringReason = recurringReason_example;  // String |  (optional) 
            var webhookEndpoints = new array[String](); // array[String] |  (optional) 
            var statementDescriptor = statementDescriptor_example;  // String |  (optional) 

            try
            {
                charge result = apiInstance.chargesPost(capture, currency, amount, ip, metadata, card, customer, source, linkedAccount, description, returnUri, expiresAt, platformFee, zeroInterestInstallments, authorizationType, firstCharge, transactionIndicator, recurringReason, webhookEndpoints, statementDescriptor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ChargesApi.chargesPost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="chargesPost-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiChargesApi();
$capture = true; // Boolean | 
$currency = currency_example; // String | 
$amount = 56; // Integer | 
$ip = ip_example; // String | 
$metadata = ; // Object | 
$card = card_example; // String | 
$customer = customer_example; // String | 
$source = source_example; // String | 
$linkedAccount = linkedAccount_example; // String | 
$description = description_example; // String | 
$returnUri = returnUri_example; // String | 
$expiresAt = 2013-10-20T19:20:30+01:00; // Date | 
$platformFee = ; // charges_platform_fee | 
$zeroInterestInstallments = true; // Boolean | 
$authorizationType = authorizationType_example; // String | 
$firstCharge = firstCharge_example; // String | 
$transactionIndicator = transactionIndicator_example; // String | 
$recurringReason = recurringReason_example; // String | 
$webhookEndpoints = ; // array[String] | 
$statementDescriptor = statementDescriptor_example; // String | 

try {
    $result = $api_instance->chargesPost($capture, $currency, $amount, $ip, $metadata, $card, $customer, $source, $linkedAccount, $description, $returnUri, $expiresAt, $platformFee, $zeroInterestInstallments, $authorizationType, $firstCharge, $transactionIndicator, $recurringReason, $webhookEndpoints, $statementDescriptor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChargesApi->chargesPost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="chargesPost-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ChargesApi;

my $api_instance = WWW::SwaggerClient::ChargesApi->new();
my $capture = true; # Boolean | 
my $currency = currency_example; # String | 
my $amount = 56; # Integer | 
my $ip = ip_example; # String | 
my $metadata = ; # Object | 
my $card = card_example; # String | 
my $customer = customer_example; # String | 
my $source = source_example; # String | 
my $linkedAccount = linkedAccount_example; # String | 
my $description = description_example; # String | 
my $returnUri = returnUri_example; # String | 
my $expiresAt = 2013-10-20T19:20:30+01:00; # Date | 
my $platformFee = ; # charges_platform_fee | 
my $zeroInterestInstallments = true; # Boolean | 
my $authorizationType = authorizationType_example; # String | 
my $firstCharge = firstCharge_example; # String | 
my $transactionIndicator = transactionIndicator_example; # String | 
my $recurringReason = recurringReason_example; # String | 
my $webhookEndpoints = []; # array[String] | 
my $statementDescriptor = statementDescriptor_example; # String | 

eval { 
    my $result = $api_instance->chargesPost(capture => $capture, currency => $currency, amount => $amount, ip => $ip, metadata => $metadata, card => $card, customer => $customer, source => $source, linkedAccount => $linkedAccount, description => $description, returnUri => $returnUri, expiresAt => $expiresAt, platformFee => $platformFee, zeroInterestInstallments => $zeroInterestInstallments, authorizationType => $authorizationType, firstCharge => $firstCharge, transactionIndicator => $transactionIndicator, recurringReason => $recurringReason, webhookEndpoints => $webhookEndpoints, statementDescriptor => $statementDescriptor);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ChargesApi->chargesPost: $@\n";
}
```
</div>

<div class="code-block python" id="chargesPost-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ChargesApi()
capture = true # Boolean |  (optional)
currency = currency_example # String |  (optional)
amount = 56 # Integer |  (optional)
ip = ip_example # String |  (optional)
metadata =  # Object |  (optional)
card = card_example # String |  (optional)
customer = customer_example # String |  (optional)
source = source_example # String |  (optional)
linkedAccount = linkedAccount_example # String |  (optional)
description = description_example # String |  (optional)
returnUri = returnUri_example # String |  (optional)
expiresAt = 2013-10-20T19:20:30+01:00 # Date |  (optional)
platformFee =  # charges_platform_fee |  (optional)
zeroInterestInstallments = true # Boolean |  (optional)
authorizationType = authorizationType_example # String |  (optional)
firstCharge = firstCharge_example # String |  (optional)
transactionIndicator = transactionIndicator_example # String |  (optional)
recurringReason = recurringReason_example # String |  (optional)
webhookEndpoints =  # array[String] |  (optional)
statementDescriptor = statementDescriptor_example # String |  (optional)

try: 
    api_response = api_instance.charges_post(capture=capture, currency=currency, amount=amount, ip=ip, metadata=metadata, card=card, customer=customer, source=source, linkedAccount=linkedAccount, description=description, returnUri=returnUri, expiresAt=expiresAt, platformFee=platformFee, zeroInterestInstallments=zeroInterestInstallments, authorizationType=authorizationType, firstCharge=firstCharge, transactionIndicator=transactionIndicator, recurringReason=recurringReason, webhookEndpoints=webhookEndpoints, statementDescriptor=statementDescriptor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ChargesApi->chargesPost: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| capture | Boolean |
| currency | String (currency) |
| amount | Integer |
| ip | String |
| metadata | Object |
| card | String |
| customer | String |
| source | String |
| linked_account | String |
| description | String |
| return_uri | String |
| expires_at | Date (date-time) |
| platform_fee | charges_platform_fee |
| zero_interest_installments | Boolean |
| authorization_type | String |
| first_charge | String |
| transaction_indicator | String |
| recurring_reason | String |
| webhook_endpoints | array[String] |
| statement_descriptor | String |

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
            <h3>chargesSearchGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">chargesSearchGet</div>
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
              
<div class="code-block curl active" id="chargesSearchGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/charges/search?scope=&query=&filters[amount]=&filters[authorized]=&filters[capture]=&filters[capture_id]=&filters[captured]=&filters[card_last_digits]=&filters[created]=&filters[currency]=&filters[customer_present]=&filters[disputed]=&filters[failure_code]=&filters[is_installment]=&filters[refunded]=&filters[refund_amount]=&filters[reversed]=&filters[safe]=&filters[scheduled]=&filters[source_of_fund]=&filters[source_type]=&filters[status]=&filters[voided]=&filters[installment_terms]=&filters[acquirer_reference_number]="
```
</div>

<div class="code-block java" id="chargesSearchGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ChargesApi;

import java.io.File;
import java.util.*;

public class ChargesApiExample {

    public static void main(String[] args) {
        
        ChargesApi apiInstance = new ChargesApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Integer filters[amount] = 56; // Integer | 
        Boolean filters[authorized] = true; // Boolean | 
        Boolean filters[capture] = true; // Boolean | 
        String filters[captureId] = filters[captureId]_example; // String | 
        Boolean filters[captured] = true; // Boolean | 
        String filters[cardLastDigits] = filters[cardLastDigits]_example; // String | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        String filters[currency] = filters[currency]_example; // String | 
        Boolean filters[customerPresent] = true; // Boolean | 
        Boolean filters[disputed] = true; // Boolean | 
        String filters[failureCode] = filters[failureCode]_example; // String | 
        Boolean filters[isInstallment] = true; // Boolean | 
        Integer filters[refunded] = 56; // Integer | 
        Integer filters[refundAmount] = 56; // Integer | 
        Boolean filters[reversed] = true; // Boolean | 
        Boolean filters[safe] = true; // Boolean | 
        Boolean filters[scheduled] = true; // Boolean | 
        String filters[sourceOfFund] = filters[sourceOfFund]_example; // String | 
        String filters[sourceType] = filters[sourceType]_example; // String | 
        String filters[status] = filters[status]_example; // String | 
        Boolean filters[voided] = true; // Boolean | 
        Integer filters[installmentTerms] = 56; // Integer | 
        String filters[acquirerReferenceNumber] = filters[acquirerReferenceNumber]_example; // String | 
        try {
            charge result = apiInstance.chargesSearchGet(scope, query, filters[amount], filters[authorized], filters[capture], filters[captureId], filters[captured], filters[cardLastDigits], filters[created], filters[currency], filters[customerPresent], filters[disputed], filters[failureCode], filters[isInstallment], filters[refunded], filters[refundAmount], filters[reversed], filters[safe], filters[scheduled], filters[sourceOfFund], filters[sourceType], filters[status], filters[voided], filters[installmentTerms], filters[acquirerReferenceNumber]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="chargesSearchGet-code-android">
```js
import io.swagger.client.api.ChargesApi;

public class ChargesApiExample {

    public static void main(String[] args) {
        ChargesApi apiInstance = new ChargesApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Integer filters[amount] = 56; // Integer | 
        Boolean filters[authorized] = true; // Boolean | 
        Boolean filters[capture] = true; // Boolean | 
        String filters[captureId] = filters[captureId]_example; // String | 
        Boolean filters[captured] = true; // Boolean | 
        String filters[cardLastDigits] = filters[cardLastDigits]_example; // String | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        String filters[currency] = filters[currency]_example; // String | 
        Boolean filters[customerPresent] = true; // Boolean | 
        Boolean filters[disputed] = true; // Boolean | 
        String filters[failureCode] = filters[failureCode]_example; // String | 
        Boolean filters[isInstallment] = true; // Boolean | 
        Integer filters[refunded] = 56; // Integer | 
        Integer filters[refundAmount] = 56; // Integer | 
        Boolean filters[reversed] = true; // Boolean | 
        Boolean filters[safe] = true; // Boolean | 
        Boolean filters[scheduled] = true; // Boolean | 
        String filters[sourceOfFund] = filters[sourceOfFund]_example; // String | 
        String filters[sourceType] = filters[sourceType]_example; // String | 
        String filters[status] = filters[status]_example; // String | 
        Boolean filters[voided] = true; // Boolean | 
        Integer filters[installmentTerms] = 56; // Integer | 
        String filters[acquirerReferenceNumber] = filters[acquirerReferenceNumber]_example; // String | 
        try {
            charge result = apiInstance.chargesSearchGet(scope, query, filters[amount], filters[authorized], filters[capture], filters[captureId], filters[captured], filters[cardLastDigits], filters[created], filters[currency], filters[customerPresent], filters[disputed], filters[failureCode], filters[isInstallment], filters[refunded], filters[refundAmount], filters[reversed], filters[safe], filters[scheduled], filters[sourceOfFund], filters[sourceType], filters[status], filters[voided], filters[installmentTerms], filters[acquirerReferenceNumber]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChargesApi#chargesSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="chargesSearchGet-code-objc">
```js
String *scope = scope_example; //  (optional) (default to charge)
String *query = query_example; //  (optional)
Integer *filters[amount] = 56; //  (optional)
Boolean *filters[authorized] = true; //  (optional)
Boolean *filters[capture] = true; //  (optional)
String *filters[captureId] = filters[captureId]_example; //  (optional)
Boolean *filters[captured] = true; //  (optional)
String *filters[cardLastDigits] = filters[cardLastDigits]_example; //  (optional)
Date *filters[created] = 2013-10-20T19:20:30+01:00; //  (optional)
String *filters[currency] = filters[currency]_example; //  (optional)
Boolean *filters[customerPresent] = true; //  (optional)
Boolean *filters[disputed] = true; //  (optional)
String *filters[failureCode] = filters[failureCode]_example; //  (optional)
Boolean *filters[isInstallment] = true; //  (optional)
Integer *filters[refunded] = 56; //  (optional)
Integer *filters[refundAmount] = 56; //  (optional)
Boolean *filters[reversed] = true; //  (optional)
Boolean *filters[safe] = true; //  (optional)
Boolean *filters[scheduled] = true; //  (optional)
String *filters[sourceOfFund] = filters[sourceOfFund]_example; //  (optional)
String *filters[sourceType] = filters[sourceType]_example; //  (optional)
String *filters[status] = filters[status]_example; //  (optional)
Boolean *filters[voided] = true; //  (optional)
Integer *filters[installmentTerms] = 56; //  (optional)
String *filters[acquirerReferenceNumber] = filters[acquirerReferenceNumber]_example; //  (optional)

ChargesApi *apiInstance = [[ChargesApi alloc] init];

[apiInstance chargesSearchGetWith:scope
    query:query
    filters[amount]:filters[amount]
    filters[authorized]:filters[authorized]
    filters[capture]:filters[capture]
    filters[captureId]:filters[captureId]
    filters[captured]:filters[captured]
    filters[cardLastDigits]:filters[cardLastDigits]
    filters[created]:filters[created]
    filters[currency]:filters[currency]
    filters[customerPresent]:filters[customerPresent]
    filters[disputed]:filters[disputed]
    filters[failureCode]:filters[failureCode]
    filters[isInstallment]:filters[isInstallment]
    filters[refunded]:filters[refunded]
    filters[refundAmount]:filters[refundAmount]
    filters[reversed]:filters[reversed]
    filters[safe]:filters[safe]
    filters[scheduled]:filters[scheduled]
    filters[sourceOfFund]:filters[sourceOfFund]
    filters[sourceType]:filters[sourceType]
    filters[status]:filters[status]
    filters[voided]:filters[voided]
    filters[installmentTerms]:filters[installmentTerms]
    filters[acquirerReferenceNumber]:filters[acquirerReferenceNumber]
              completionHandler: ^(charge output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="chargesSearchGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ChargesApi()
var opts = { 
  'scope': scope_example, // {{String}} 
  'query': query_example, // {{String}} 
  'filters[amount]': 56, // {{Integer}} 
  'filters[authorized]': true, // {{Boolean}} 
  'filters[capture]': true, // {{Boolean}} 
  'filters[captureId]': filters[captureId]_example, // {{String}} 
  'filters[captured]': true, // {{Boolean}} 
  'filters[cardLastDigits]': filters[cardLastDigits]_example, // {{String}} 
  'filters[created]': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'filters[currency]': filters[currency]_example, // {{String}} 
  'filters[customerPresent]': true, // {{Boolean}} 
  'filters[disputed]': true, // {{Boolean}} 
  'filters[failureCode]': filters[failureCode]_example, // {{String}} 
  'filters[isInstallment]': true, // {{Boolean}} 
  'filters[refunded]': 56, // {{Integer}} 
  'filters[refundAmount]': 56, // {{Integer}} 
  'filters[reversed]': true, // {{Boolean}} 
  'filters[safe]': true, // {{Boolean}} 
  'filters[scheduled]': true, // {{Boolean}} 
  'filters[sourceOfFund]': filters[sourceOfFund]_example, // {{String}} 
  'filters[sourceType]': filters[sourceType]_example, // {{String}} 
  'filters[status]': filters[status]_example, // {{String}} 
  'filters[voided]': true, // {{Boolean}} 
  'filters[installmentTerms]': 56, // {{Integer}} 
  'filters[acquirerReferenceNumber]': filters[acquirerReferenceNumber]_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.chargesSearchGet(opts, callback);
```
</div>

<div class="code-block csharp" id="chargesSearchGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chargesSearchGetExample
    {
        public void main()
        {

            var apiInstance = new ChargesApi();
            var scope = scope_example;  // String |  (optional)  (default to charge)
            var query = query_example;  // String |  (optional) 
            var filters[amount] = 56;  // Integer |  (optional) 
            var filters[authorized] = true;  // Boolean |  (optional) 
            var filters[capture] = true;  // Boolean |  (optional) 
            var filters[captureId] = filters[captureId]_example;  // String |  (optional) 
            var filters[captured] = true;  // Boolean |  (optional) 
            var filters[cardLastDigits] = filters[cardLastDigits]_example;  // String |  (optional) 
            var filters[created] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var filters[currency] = filters[currency]_example;  // String |  (optional) 
            var filters[customerPresent] = true;  // Boolean |  (optional) 
            var filters[disputed] = true;  // Boolean |  (optional) 
            var filters[failureCode] = filters[failureCode]_example;  // String |  (optional) 
            var filters[isInstallment] = true;  // Boolean |  (optional) 
            var filters[refunded] = 56;  // Integer |  (optional) 
            var filters[refundAmount] = 56;  // Integer |  (optional) 
            var filters[reversed] = true;  // Boolean |  (optional) 
            var filters[safe] = true;  // Boolean |  (optional) 
            var filters[scheduled] = true;  // Boolean |  (optional) 
            var filters[sourceOfFund] = filters[sourceOfFund]_example;  // String |  (optional) 
            var filters[sourceType] = filters[sourceType]_example;  // String |  (optional) 
            var filters[status] = filters[status]_example;  // String |  (optional) 
            var filters[voided] = true;  // Boolean |  (optional) 
            var filters[installmentTerms] = 56;  // Integer |  (optional) 
            var filters[acquirerReferenceNumber] = filters[acquirerReferenceNumber]_example;  // String |  (optional) 

            try
            {
                charge result = apiInstance.chargesSearchGet(scope, query, filters[amount], filters[authorized], filters[capture], filters[captureId], filters[captured], filters[cardLastDigits], filters[created], filters[currency], filters[customerPresent], filters[disputed], filters[failureCode], filters[isInstallment], filters[refunded], filters[refundAmount], filters[reversed], filters[safe], filters[scheduled], filters[sourceOfFund], filters[sourceType], filters[status], filters[voided], filters[installmentTerms], filters[acquirerReferenceNumber]);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ChargesApi.chargesSearchGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="chargesSearchGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiChargesApi();
$scope = scope_example; // String | 
$query = query_example; // String | 
$filters[amount] = 56; // Integer | 
$filters[authorized] = true; // Boolean | 
$filters[capture] = true; // Boolean | 
$filters[captureId] = filters[captureId]_example; // String | 
$filters[captured] = true; // Boolean | 
$filters[cardLastDigits] = filters[cardLastDigits]_example; // String | 
$filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
$filters[currency] = filters[currency]_example; // String | 
$filters[customerPresent] = true; // Boolean | 
$filters[disputed] = true; // Boolean | 
$filters[failureCode] = filters[failureCode]_example; // String | 
$filters[isInstallment] = true; // Boolean | 
$filters[refunded] = 56; // Integer | 
$filters[refundAmount] = 56; // Integer | 
$filters[reversed] = true; // Boolean | 
$filters[safe] = true; // Boolean | 
$filters[scheduled] = true; // Boolean | 
$filters[sourceOfFund] = filters[sourceOfFund]_example; // String | 
$filters[sourceType] = filters[sourceType]_example; // String | 
$filters[status] = filters[status]_example; // String | 
$filters[voided] = true; // Boolean | 
$filters[installmentTerms] = 56; // Integer | 
$filters[acquirerReferenceNumber] = filters[acquirerReferenceNumber]_example; // String | 

try {
    $result = $api_instance->chargesSearchGet($scope, $query, $filters[amount], $filters[authorized], $filters[capture], $filters[captureId], $filters[captured], $filters[cardLastDigits], $filters[created], $filters[currency], $filters[customerPresent], $filters[disputed], $filters[failureCode], $filters[isInstallment], $filters[refunded], $filters[refundAmount], $filters[reversed], $filters[safe], $filters[scheduled], $filters[sourceOfFund], $filters[sourceType], $filters[status], $filters[voided], $filters[installmentTerms], $filters[acquirerReferenceNumber]);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChargesApi->chargesSearchGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="chargesSearchGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ChargesApi;

my $api_instance = WWW::SwaggerClient::ChargesApi->new();
my $scope = scope_example; # String | 
my $query = query_example; # String | 
my $filters[amount] = 56; # Integer | 
my $filters[authorized] = true; # Boolean | 
my $filters[capture] = true; # Boolean | 
my $filters[captureId] = filters[captureId]_example; # String | 
my $filters[captured] = true; # Boolean | 
my $filters[cardLastDigits] = filters[cardLastDigits]_example; # String | 
my $filters[created] = 2013-10-20T19:20:30+01:00; # Date | 
my $filters[currency] = filters[currency]_example; # String | 
my $filters[customerPresent] = true; # Boolean | 
my $filters[disputed] = true; # Boolean | 
my $filters[failureCode] = filters[failureCode]_example; # String | 
my $filters[isInstallment] = true; # Boolean | 
my $filters[refunded] = 56; # Integer | 
my $filters[refundAmount] = 56; # Integer | 
my $filters[reversed] = true; # Boolean | 
my $filters[safe] = true; # Boolean | 
my $filters[scheduled] = true; # Boolean | 
my $filters[sourceOfFund] = filters[sourceOfFund]_example; # String | 
my $filters[sourceType] = filters[sourceType]_example; # String | 
my $filters[status] = filters[status]_example; # String | 
my $filters[voided] = true; # Boolean | 
my $filters[installmentTerms] = 56; # Integer | 
my $filters[acquirerReferenceNumber] = filters[acquirerReferenceNumber]_example; # String | 

eval { 
    my $result = $api_instance->chargesSearchGet(scope => $scope, query => $query, filters[amount] => $filters[amount], filters[authorized] => $filters[authorized], filters[capture] => $filters[capture], filters[captureId] => $filters[captureId], filters[captured] => $filters[captured], filters[cardLastDigits] => $filters[cardLastDigits], filters[created] => $filters[created], filters[currency] => $filters[currency], filters[customerPresent] => $filters[customerPresent], filters[disputed] => $filters[disputed], filters[failureCode] => $filters[failureCode], filters[isInstallment] => $filters[isInstallment], filters[refunded] => $filters[refunded], filters[refundAmount] => $filters[refundAmount], filters[reversed] => $filters[reversed], filters[safe] => $filters[safe], filters[scheduled] => $filters[scheduled], filters[sourceOfFund] => $filters[sourceOfFund], filters[sourceType] => $filters[sourceType], filters[status] => $filters[status], filters[voided] => $filters[voided], filters[installmentTerms] => $filters[installmentTerms], filters[acquirerReferenceNumber] => $filters[acquirerReferenceNumber]);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ChargesApi->chargesSearchGet: $@\n";
}
```
</div>

<div class="code-block python" id="chargesSearchGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ChargesApi()
scope = scope_example # String |  (optional) (default to charge)
query = query_example # String |  (optional)
filters[amount] = 56 # Integer |  (optional)
filters[authorized] = true # Boolean |  (optional)
filters[capture] = true # Boolean |  (optional)
filters[captureId] = filters[captureId]_example # String |  (optional)
filters[captured] = true # Boolean |  (optional)
filters[cardLastDigits] = filters[cardLastDigits]_example # String |  (optional)
filters[created] = 2013-10-20T19:20:30+01:00 # Date |  (optional)
filters[currency] = filters[currency]_example # String |  (optional)
filters[customerPresent] = true # Boolean |  (optional)
filters[disputed] = true # Boolean |  (optional)
filters[failureCode] = filters[failureCode]_example # String |  (optional)
filters[isInstallment] = true # Boolean |  (optional)
filters[refunded] = 56 # Integer |  (optional)
filters[refundAmount] = 56 # Integer |  (optional)
filters[reversed] = true # Boolean |  (optional)
filters[safe] = true # Boolean |  (optional)
filters[scheduled] = true # Boolean |  (optional)
filters[sourceOfFund] = filters[sourceOfFund]_example # String |  (optional)
filters[sourceType] = filters[sourceType]_example # String |  (optional)
filters[status] = filters[status]_example # String |  (optional)
filters[voided] = true # Boolean |  (optional)
filters[installmentTerms] = 56 # Integer |  (optional)
filters[acquirerReferenceNumber] = filters[acquirerReferenceNumber]_example # String |  (optional)

try: 
    api_response = api_instance.charges_search_get(scope=scope, query=query, filters[amount]=filters[amount], filters[authorized]=filters[authorized], filters[capture]=filters[capture], filters[captureId]=filters[captureId], filters[captured]=filters[captured], filters[cardLastDigits]=filters[cardLastDigits], filters[created]=filters[created], filters[currency]=filters[currency], filters[customerPresent]=filters[customerPresent], filters[disputed]=filters[disputed], filters[failureCode]=filters[failureCode], filters[isInstallment]=filters[isInstallment], filters[refunded]=filters[refunded], filters[refundAmount]=filters[refundAmount], filters[reversed]=filters[reversed], filters[safe]=filters[safe], filters[scheduled]=filters[scheduled], filters[sourceOfFund]=filters[sourceOfFund], filters[sourceType]=filters[sourceType], filters[status]=filters[status], filters[voided]=filters[voided], filters[installmentTerms]=filters[installmentTerms], filters[acquirerReferenceNumber]=filters[acquirerReferenceNumber])
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ChargesApi->chargesSearchGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| scope | String |
| query | String |
| filters[amount] | Integer |
| filters[authorized] | Boolean |
| filters[capture] | Boolean |
| filters[capture_id] | String |
| filters[captured] | Boolean |
| filters[card_last_digits] | String |
| filters[created] | Date (date-time) |
| filters[currency] | String |
| filters[customer_present] | Boolean |
| filters[disputed] | Boolean |
| filters[failure_code] | String |
| filters[is_installment] | Boolean |
| filters[refunded] | Integer |
| filters[refund_amount] | Integer |
| filters[reversed] | Boolean |
| filters[safe] | Boolean |
| filters[scheduled] | Boolean |
| filters[source_of_fund] | String |
| filters[source_type] | String |
| filters[status] | String |
| filters[voided] | Boolean |
| filters[installment_terms] | Integer |
| filters[acquirer_reference_number] | String |

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

