# Dispute


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>chargesIdDisputesPost</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">chargesIdDisputesPost</div>
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
              
<div class="code-block curl active" id="chargesIdDisputesPost-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
"https://api.omise.co/charges/{id}/disputes"
```
</div>

<div class="code-block java" id="chargesIdDisputesPost-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.DisputeApi;

import java.io.File;
import java.util.*;

public class DisputeApiExample {

    public static void main(String[] args) {
        
        DisputeApi apiInstance = new DisputeApi();
        String id = id_example; // String | 
        try {
            dispute result = apiInstance.chargesIdDisputesPost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#chargesIdDisputesPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="chargesIdDisputesPost-code-android">
```js
import io.swagger.client.api.DisputeApi;

public class DisputeApiExample {

    public static void main(String[] args) {
        DisputeApi apiInstance = new DisputeApi();
        String id = id_example; // String | 
        try {
            dispute result = apiInstance.chargesIdDisputesPost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#chargesIdDisputesPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="chargesIdDisputesPost-code-objc">
```js
String *id = id_example; // 

DisputeApi *apiInstance = [[DisputeApi alloc] init];

[apiInstance chargesIdDisputesPostWith:id
              completionHandler: ^(dispute output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="chargesIdDisputesPost-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.DisputeApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.chargesIdDisputesPost(id, callback);
```
</div>

<div class="code-block csharp" id="chargesIdDisputesPost-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chargesIdDisputesPostExample
    {
        public void main()
        {

            var apiInstance = new DisputeApi();
            var id = id_example;  // String | 

            try
            {
                dispute result = apiInstance.chargesIdDisputesPost(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DisputeApi.chargesIdDisputesPost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="chargesIdDisputesPost-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiDisputeApi();
$id = id_example; // String | 

try {
    $result = $api_instance->chargesIdDisputesPost($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DisputeApi->chargesIdDisputesPost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="chargesIdDisputesPost-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::DisputeApi;

my $api_instance = WWW::SwaggerClient::DisputeApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->chargesIdDisputesPost(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DisputeApi->chargesIdDisputesPost: $@\n";
}
```
</div>

<div class="code-block python" id="chargesIdDisputesPost-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DisputeApi()
id = id_example # String | 

try: 
    api_response = api_instance.charges_id_disputes_post(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DisputeApi->chargesIdDisputesPost: %s\n" % e)
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
            <h3>disputesClosedGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">disputesClosedGet</div>
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
              
<div class="code-block curl active" id="disputesClosedGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/disputes/closed?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="disputesClosedGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.DisputeApi;

import java.io.File;
import java.util.*;

public class DisputeApiExample {

    public static void main(String[] args) {
        
        DisputeApi apiInstance = new DisputeApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.disputesClosedGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesClosedGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="disputesClosedGet-code-android">
```js
import io.swagger.client.api.DisputeApi;

public class DisputeApiExample {

    public static void main(String[] args) {
        DisputeApi apiInstance = new DisputeApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.disputesClosedGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesClosedGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="disputesClosedGet-code-objc">
```js
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

DisputeApi *apiInstance = [[DisputeApi alloc] init];

[apiInstance disputesClosedGetWith:from
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

<div class="code-block javascript" id="disputesClosedGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.DisputeApi()
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
api.disputesClosedGet(opts, callback);
```
</div>

<div class="code-block csharp" id="disputesClosedGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class disputesClosedGetExample
    {
        public void main()
        {

            var apiInstance = new DisputeApi();
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.disputesClosedGet(from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DisputeApi.disputesClosedGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="disputesClosedGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiDisputeApi();
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->disputesClosedGet($from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DisputeApi->disputesClosedGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="disputesClosedGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::DisputeApi;

my $api_instance = WWW::SwaggerClient::DisputeApi->new();
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->disputesClosedGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DisputeApi->disputesClosedGet: $@\n";
}
```
</div>

<div class="code-block python" id="disputesClosedGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DisputeApi()
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.disputes_closed_get(from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DisputeApi->disputesClosedGet: %s\n" % e)
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
            <h3>disputesGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">disputesGet</div>
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
              
<div class="code-block curl active" id="disputesGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/disputes?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="disputesGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.DisputeApi;

import java.io.File;
import java.util.*;

public class DisputeApiExample {

    public static void main(String[] args) {
        
        DisputeApi apiInstance = new DisputeApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.disputesGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="disputesGet-code-android">
```js
import io.swagger.client.api.DisputeApi;

public class DisputeApiExample {

    public static void main(String[] args) {
        DisputeApi apiInstance = new DisputeApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.disputesGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="disputesGet-code-objc">
```js
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

DisputeApi *apiInstance = [[DisputeApi alloc] init];

[apiInstance disputesGetWith:from
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

<div class="code-block javascript" id="disputesGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.DisputeApi()
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
api.disputesGet(opts, callback);
```
</div>

<div class="code-block csharp" id="disputesGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class disputesGetExample
    {
        public void main()
        {

            var apiInstance = new DisputeApi();
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.disputesGet(from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DisputeApi.disputesGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="disputesGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiDisputeApi();
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->disputesGet($from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DisputeApi->disputesGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="disputesGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::DisputeApi;

my $api_instance = WWW::SwaggerClient::DisputeApi->new();
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->disputesGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DisputeApi->disputesGet: $@\n";
}
```
</div>

<div class="code-block python" id="disputesGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DisputeApi()
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.disputes_get(from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DisputeApi->disputesGet: %s\n" % e)
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
            <h3>disputesIdAcceptPatch</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">disputesIdAcceptPatch</div>
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
              
<div class="code-block curl active" id="disputesIdAcceptPatch-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
"https://api.omise.co/disputes/{id}/accept"
```
</div>

<div class="code-block java" id="disputesIdAcceptPatch-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.DisputeApi;

import java.io.File;
import java.util.*;

public class DisputeApiExample {

    public static void main(String[] args) {
        
        DisputeApi apiInstance = new DisputeApi();
        String id = id_example; // String | 
        try {
            dispute result = apiInstance.disputesIdAcceptPatch(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesIdAcceptPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="disputesIdAcceptPatch-code-android">
```js
import io.swagger.client.api.DisputeApi;

public class DisputeApiExample {

    public static void main(String[] args) {
        DisputeApi apiInstance = new DisputeApi();
        String id = id_example; // String | 
        try {
            dispute result = apiInstance.disputesIdAcceptPatch(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesIdAcceptPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="disputesIdAcceptPatch-code-objc">
```js
String *id = id_example; // 

DisputeApi *apiInstance = [[DisputeApi alloc] init];

[apiInstance disputesIdAcceptPatchWith:id
              completionHandler: ^(dispute output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="disputesIdAcceptPatch-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.DisputeApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.disputesIdAcceptPatch(id, callback);
```
</div>

<div class="code-block csharp" id="disputesIdAcceptPatch-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class disputesIdAcceptPatchExample
    {
        public void main()
        {

            var apiInstance = new DisputeApi();
            var id = id_example;  // String | 

            try
            {
                dispute result = apiInstance.disputesIdAcceptPatch(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DisputeApi.disputesIdAcceptPatch: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="disputesIdAcceptPatch-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiDisputeApi();
$id = id_example; // String | 

try {
    $result = $api_instance->disputesIdAcceptPatch($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DisputeApi->disputesIdAcceptPatch: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="disputesIdAcceptPatch-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::DisputeApi;

my $api_instance = WWW::SwaggerClient::DisputeApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->disputesIdAcceptPatch(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DisputeApi->disputesIdAcceptPatch: $@\n";
}
```
</div>

<div class="code-block python" id="disputesIdAcceptPatch-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DisputeApi()
id = id_example # String | 

try: 
    api_response = api_instance.disputes_id_accept_patch(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DisputeApi->disputesIdAcceptPatch: %s\n" % e)
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
            <h3>disputesIdClosePatch</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">disputesIdClosePatch</div>
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
              
<div class="code-block curl active" id="disputesIdClosePatch-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/disputes/{id}/close"
```
</div>

<div class="code-block java" id="disputesIdClosePatch-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.DisputeApi;

import java.io.File;
import java.util.*;

public class DisputeApiExample {

    public static void main(String[] args) {
        
        DisputeApi apiInstance = new DisputeApi();
        String id = id_example; // String | 
        String status = status_example; // String | 
        try {
            dispute result = apiInstance.disputesIdClosePatch(id, status);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesIdClosePatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="disputesIdClosePatch-code-android">
```js
import io.swagger.client.api.DisputeApi;

public class DisputeApiExample {

    public static void main(String[] args) {
        DisputeApi apiInstance = new DisputeApi();
        String id = id_example; // String | 
        String status = status_example; // String | 
        try {
            dispute result = apiInstance.disputesIdClosePatch(id, status);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesIdClosePatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="disputesIdClosePatch-code-objc">
```js
String *id = id_example; // 
String *status = status_example; //  (optional)

DisputeApi *apiInstance = [[DisputeApi alloc] init];

[apiInstance disputesIdClosePatchWith:id
    status:status
              completionHandler: ^(dispute output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="disputesIdClosePatch-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.DisputeApi()
var id = id_example; // {{String}} 
var opts = { 
  'status': status_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.disputesIdClosePatch(id, opts, callback);
```
</div>

<div class="code-block csharp" id="disputesIdClosePatch-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class disputesIdClosePatchExample
    {
        public void main()
        {

            var apiInstance = new DisputeApi();
            var id = id_example;  // String | 
            var status = status_example;  // String |  (optional) 

            try
            {
                dispute result = apiInstance.disputesIdClosePatch(id, status);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DisputeApi.disputesIdClosePatch: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="disputesIdClosePatch-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiDisputeApi();
$id = id_example; // String | 
$status = status_example; // String | 

try {
    $result = $api_instance->disputesIdClosePatch($id, $status);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DisputeApi->disputesIdClosePatch: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="disputesIdClosePatch-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::DisputeApi;

my $api_instance = WWW::SwaggerClient::DisputeApi->new();
my $id = id_example; # String | 
my $status = status_example; # String | 

eval { 
    my $result = $api_instance->disputesIdClosePatch(id => $id, status => $status);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DisputeApi->disputesIdClosePatch: $@\n";
}
```
</div>

<div class="code-block python" id="disputesIdClosePatch-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DisputeApi()
id = id_example # String | 
status = status_example # String |  (optional)

try: 
    api_response = api_instance.disputes_id_close_patch(id, status=status)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DisputeApi->disputesIdClosePatch: %s\n" % e)
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
| status | String |

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
            <h3>disputesIdGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">disputesIdGet</div>
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
              
<div class="code-block curl active" id="disputesIdGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/disputes/{id}"
```
</div>

<div class="code-block java" id="disputesIdGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.DisputeApi;

import java.io.File;
import java.util.*;

public class DisputeApiExample {

    public static void main(String[] args) {
        
        DisputeApi apiInstance = new DisputeApi();
        String id = id_example; // String | 
        try {
            dispute result = apiInstance.disputesIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="disputesIdGet-code-android">
```js
import io.swagger.client.api.DisputeApi;

public class DisputeApiExample {

    public static void main(String[] args) {
        DisputeApi apiInstance = new DisputeApi();
        String id = id_example; // String | 
        try {
            dispute result = apiInstance.disputesIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="disputesIdGet-code-objc">
```js
String *id = id_example; // 

DisputeApi *apiInstance = [[DisputeApi alloc] init];

[apiInstance disputesIdGetWith:id
              completionHandler: ^(dispute output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="disputesIdGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.DisputeApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.disputesIdGet(id, callback);
```
</div>

<div class="code-block csharp" id="disputesIdGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class disputesIdGetExample
    {
        public void main()
        {

            var apiInstance = new DisputeApi();
            var id = id_example;  // String | 

            try
            {
                dispute result = apiInstance.disputesIdGet(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DisputeApi.disputesIdGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="disputesIdGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiDisputeApi();
$id = id_example; // String | 

try {
    $result = $api_instance->disputesIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DisputeApi->disputesIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="disputesIdGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::DisputeApi;

my $api_instance = WWW::SwaggerClient::DisputeApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->disputesIdGet(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DisputeApi->disputesIdGet: $@\n";
}
```
</div>

<div class="code-block python" id="disputesIdGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DisputeApi()
id = id_example # String | 

try: 
    api_response = api_instance.disputes_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DisputeApi->disputesIdGet: %s\n" % e)
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
            <h3>disputesIdPatch</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">disputesIdPatch</div>
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
              
<div class="code-block curl active" id="disputesIdPatch-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/disputes/{id}"
```
</div>

<div class="code-block java" id="disputesIdPatch-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.DisputeApi;

import java.io.File;
import java.util.*;

public class DisputeApiExample {

    public static void main(String[] args) {
        
        DisputeApi apiInstance = new DisputeApi();
        String id = id_example; // String | 
        String message = message_example; // String | 
        Object metadata = ; // Object | 
        try {
            dispute result = apiInstance.disputesIdPatch(id, message, metadata);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesIdPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="disputesIdPatch-code-android">
```js
import io.swagger.client.api.DisputeApi;

public class DisputeApiExample {

    public static void main(String[] args) {
        DisputeApi apiInstance = new DisputeApi();
        String id = id_example; // String | 
        String message = message_example; // String | 
        Object metadata = ; // Object | 
        try {
            dispute result = apiInstance.disputesIdPatch(id, message, metadata);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesIdPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="disputesIdPatch-code-objc">
```js
String *id = id_example; // 
String *message = message_example; //  (optional)
Object *metadata = ; //  (optional)

DisputeApi *apiInstance = [[DisputeApi alloc] init];

[apiInstance disputesIdPatchWith:id
    message:message
    metadata:metadata
              completionHandler: ^(dispute output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="disputesIdPatch-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.DisputeApi()
var id = id_example; // {{String}} 
var opts = { 
  'message': message_example // {{String}} 
  'metadata':  // {{Object}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.disputesIdPatch(id, opts, callback);
```
</div>

<div class="code-block csharp" id="disputesIdPatch-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class disputesIdPatchExample
    {
        public void main()
        {

            var apiInstance = new DisputeApi();
            var id = id_example;  // String | 
            var message = message_example;  // String |  (optional) 
            var metadata = new Object(); // Object |  (optional) 

            try
            {
                dispute result = apiInstance.disputesIdPatch(id, message, metadata);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DisputeApi.disputesIdPatch: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="disputesIdPatch-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiDisputeApi();
$id = id_example; // String | 
$message = message_example; // String | 
$metadata = ; // Object | 

try {
    $result = $api_instance->disputesIdPatch($id, $message, $metadata);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DisputeApi->disputesIdPatch: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="disputesIdPatch-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::DisputeApi;

my $api_instance = WWW::SwaggerClient::DisputeApi->new();
my $id = id_example; # String | 
my $message = message_example; # String | 
my $metadata = ; # Object | 

eval { 
    my $result = $api_instance->disputesIdPatch(id => $id, message => $message, metadata => $metadata);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DisputeApi->disputesIdPatch: $@\n";
}
```
</div>

<div class="code-block python" id="disputesIdPatch-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DisputeApi()
id = id_example # String | 
message = message_example # String |  (optional)
metadata =  # Object |  (optional)

try: 
    api_response = api_instance.disputes_id_patch(id, message=message, metadata=metadata)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DisputeApi->disputesIdPatch: %s\n" % e)
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
| message | String |
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
            <h3>disputesOpenGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">disputesOpenGet</div>
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
              
<div class="code-block curl active" id="disputesOpenGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/disputes/open?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="disputesOpenGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.DisputeApi;

import java.io.File;
import java.util.*;

public class DisputeApiExample {

    public static void main(String[] args) {
        
        DisputeApi apiInstance = new DisputeApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.disputesOpenGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesOpenGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="disputesOpenGet-code-android">
```js
import io.swagger.client.api.DisputeApi;

public class DisputeApiExample {

    public static void main(String[] args) {
        DisputeApi apiInstance = new DisputeApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.disputesOpenGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesOpenGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="disputesOpenGet-code-objc">
```js
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

DisputeApi *apiInstance = [[DisputeApi alloc] init];

[apiInstance disputesOpenGetWith:from
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

<div class="code-block javascript" id="disputesOpenGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.DisputeApi()
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
api.disputesOpenGet(opts, callback);
```
</div>

<div class="code-block csharp" id="disputesOpenGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class disputesOpenGetExample
    {
        public void main()
        {

            var apiInstance = new DisputeApi();
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.disputesOpenGet(from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DisputeApi.disputesOpenGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="disputesOpenGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiDisputeApi();
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->disputesOpenGet($from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DisputeApi->disputesOpenGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="disputesOpenGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::DisputeApi;

my $api_instance = WWW::SwaggerClient::DisputeApi->new();
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->disputesOpenGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DisputeApi->disputesOpenGet: $@\n";
}
```
</div>

<div class="code-block python" id="disputesOpenGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DisputeApi()
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.disputes_open_get(from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DisputeApi->disputesOpenGet: %s\n" % e)
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
            <h3>disputesPendingGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">disputesPendingGet</div>
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
              
<div class="code-block curl active" id="disputesPendingGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/disputes/pending?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="disputesPendingGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.DisputeApi;

import java.io.File;
import java.util.*;

public class DisputeApiExample {

    public static void main(String[] args) {
        
        DisputeApi apiInstance = new DisputeApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.disputesPendingGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesPendingGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="disputesPendingGet-code-android">
```js
import io.swagger.client.api.DisputeApi;

public class DisputeApiExample {

    public static void main(String[] args) {
        DisputeApi apiInstance = new DisputeApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.disputesPendingGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesPendingGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="disputesPendingGet-code-objc">
```js
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

DisputeApi *apiInstance = [[DisputeApi alloc] init];

[apiInstance disputesPendingGetWith:from
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

<div class="code-block javascript" id="disputesPendingGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.DisputeApi()
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
api.disputesPendingGet(opts, callback);
```
</div>

<div class="code-block csharp" id="disputesPendingGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class disputesPendingGetExample
    {
        public void main()
        {

            var apiInstance = new DisputeApi();
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.disputesPendingGet(from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DisputeApi.disputesPendingGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="disputesPendingGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiDisputeApi();
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->disputesPendingGet($from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DisputeApi->disputesPendingGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="disputesPendingGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::DisputeApi;

my $api_instance = WWW::SwaggerClient::DisputeApi->new();
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->disputesPendingGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DisputeApi->disputesPendingGet: $@\n";
}
```
</div>

<div class="code-block python" id="disputesPendingGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DisputeApi()
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.disputes_pending_get(from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DisputeApi->disputesPendingGet: %s\n" % e)
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
            <h3>disputesSearchGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">disputesSearchGet</div>
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
              
<div class="code-block curl active" id="disputesSearchGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/disputes/search?scope=&query=&filters[amount]=&filters[card_first_digits]=&filters[card_last_digits]=&filters[charge_id]=&filters[closed_at]=&filters[created]=&filters[currency]=&filters[delayed]=&filters[status]="
```
</div>

<div class="code-block java" id="disputesSearchGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.DisputeApi;

import java.io.File;
import java.util.*;

public class DisputeApiExample {

    public static void main(String[] args) {
        
        DisputeApi apiInstance = new DisputeApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Integer filters[amount] = 56; // Integer | 
        String filters[cardFirstDigits] = filters[cardFirstDigits]_example; // String | 
        String filters[cardLastDigits] = filters[cardLastDigits]_example; // String | 
        String filters[chargeId] = filters[chargeId]_example; // String | 
        Date filters[closedAt] = 2013-10-20T19:20:30+01:00; // Date | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        String filters[currency] = filters[currency]_example; // String | 
        Boolean filters[delayed] = true; // Boolean | 
        String filters[status] = filters[status]_example; // String | 
        try {
            dispute result = apiInstance.disputesSearchGet(scope, query, filters[amount], filters[cardFirstDigits], filters[cardLastDigits], filters[chargeId], filters[closedAt], filters[created], filters[currency], filters[delayed], filters[status]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="disputesSearchGet-code-android">
```js
import io.swagger.client.api.DisputeApi;

public class DisputeApiExample {

    public static void main(String[] args) {
        DisputeApi apiInstance = new DisputeApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Integer filters[amount] = 56; // Integer | 
        String filters[cardFirstDigits] = filters[cardFirstDigits]_example; // String | 
        String filters[cardLastDigits] = filters[cardLastDigits]_example; // String | 
        String filters[chargeId] = filters[chargeId]_example; // String | 
        Date filters[closedAt] = 2013-10-20T19:20:30+01:00; // Date | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        String filters[currency] = filters[currency]_example; // String | 
        Boolean filters[delayed] = true; // Boolean | 
        String filters[status] = filters[status]_example; // String | 
        try {
            dispute result = apiInstance.disputesSearchGet(scope, query, filters[amount], filters[cardFirstDigits], filters[cardLastDigits], filters[chargeId], filters[closedAt], filters[created], filters[currency], filters[delayed], filters[status]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisputeApi#disputesSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="disputesSearchGet-code-objc">
```js
String *scope = scope_example; //  (optional) (default to dispute)
String *query = query_example; //  (optional)
Integer *filters[amount] = 56; //  (optional)
String *filters[cardFirstDigits] = filters[cardFirstDigits]_example; //  (optional)
String *filters[cardLastDigits] = filters[cardLastDigits]_example; //  (optional)
String *filters[chargeId] = filters[chargeId]_example; //  (optional)
Date *filters[closedAt] = 2013-10-20T19:20:30+01:00; //  (optional)
Date *filters[created] = 2013-10-20T19:20:30+01:00; //  (optional)
String *filters[currency] = filters[currency]_example; //  (optional)
Boolean *filters[delayed] = true; //  (optional)
String *filters[status] = filters[status]_example; //  (optional)

DisputeApi *apiInstance = [[DisputeApi alloc] init];

[apiInstance disputesSearchGetWith:scope
    query:query
    filters[amount]:filters[amount]
    filters[cardFirstDigits]:filters[cardFirstDigits]
    filters[cardLastDigits]:filters[cardLastDigits]
    filters[chargeId]:filters[chargeId]
    filters[closedAt]:filters[closedAt]
    filters[created]:filters[created]
    filters[currency]:filters[currency]
    filters[delayed]:filters[delayed]
    filters[status]:filters[status]
              completionHandler: ^(dispute output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="disputesSearchGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.DisputeApi()
var opts = { 
  'scope': scope_example, // {{String}} 
  'query': query_example, // {{String}} 
  'filters[amount]': 56, // {{Integer}} 
  'filters[cardFirstDigits]': filters[cardFirstDigits]_example, // {{String}} 
  'filters[cardLastDigits]': filters[cardLastDigits]_example, // {{String}} 
  'filters[chargeId]': filters[chargeId]_example, // {{String}} 
  'filters[closedAt]': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'filters[created]': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'filters[currency]': filters[currency]_example, // {{String}} 
  'filters[delayed]': true, // {{Boolean}} 
  'filters[status]': filters[status]_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.disputesSearchGet(opts, callback);
```
</div>

<div class="code-block csharp" id="disputesSearchGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class disputesSearchGetExample
    {
        public void main()
        {

            var apiInstance = new DisputeApi();
            var scope = scope_example;  // String |  (optional)  (default to dispute)
            var query = query_example;  // String |  (optional) 
            var filters[amount] = 56;  // Integer |  (optional) 
            var filters[cardFirstDigits] = filters[cardFirstDigits]_example;  // String |  (optional) 
            var filters[cardLastDigits] = filters[cardLastDigits]_example;  // String |  (optional) 
            var filters[chargeId] = filters[chargeId]_example;  // String |  (optional) 
            var filters[closedAt] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var filters[created] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var filters[currency] = filters[currency]_example;  // String |  (optional) 
            var filters[delayed] = true;  // Boolean |  (optional) 
            var filters[status] = filters[status]_example;  // String |  (optional) 

            try
            {
                dispute result = apiInstance.disputesSearchGet(scope, query, filters[amount], filters[cardFirstDigits], filters[cardLastDigits], filters[chargeId], filters[closedAt], filters[created], filters[currency], filters[delayed], filters[status]);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DisputeApi.disputesSearchGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="disputesSearchGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiDisputeApi();
$scope = scope_example; // String | 
$query = query_example; // String | 
$filters[amount] = 56; // Integer | 
$filters[cardFirstDigits] = filters[cardFirstDigits]_example; // String | 
$filters[cardLastDigits] = filters[cardLastDigits]_example; // String | 
$filters[chargeId] = filters[chargeId]_example; // String | 
$filters[closedAt] = 2013-10-20T19:20:30+01:00; // Date | 
$filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
$filters[currency] = filters[currency]_example; // String | 
$filters[delayed] = true; // Boolean | 
$filters[status] = filters[status]_example; // String | 

try {
    $result = $api_instance->disputesSearchGet($scope, $query, $filters[amount], $filters[cardFirstDigits], $filters[cardLastDigits], $filters[chargeId], $filters[closedAt], $filters[created], $filters[currency], $filters[delayed], $filters[status]);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DisputeApi->disputesSearchGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="disputesSearchGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::DisputeApi;

my $api_instance = WWW::SwaggerClient::DisputeApi->new();
my $scope = scope_example; # String | 
my $query = query_example; # String | 
my $filters[amount] = 56; # Integer | 
my $filters[cardFirstDigits] = filters[cardFirstDigits]_example; # String | 
my $filters[cardLastDigits] = filters[cardLastDigits]_example; # String | 
my $filters[chargeId] = filters[chargeId]_example; # String | 
my $filters[closedAt] = 2013-10-20T19:20:30+01:00; # Date | 
my $filters[created] = 2013-10-20T19:20:30+01:00; # Date | 
my $filters[currency] = filters[currency]_example; # String | 
my $filters[delayed] = true; # Boolean | 
my $filters[status] = filters[status]_example; # String | 

eval { 
    my $result = $api_instance->disputesSearchGet(scope => $scope, query => $query, filters[amount] => $filters[amount], filters[cardFirstDigits] => $filters[cardFirstDigits], filters[cardLastDigits] => $filters[cardLastDigits], filters[chargeId] => $filters[chargeId], filters[closedAt] => $filters[closedAt], filters[created] => $filters[created], filters[currency] => $filters[currency], filters[delayed] => $filters[delayed], filters[status] => $filters[status]);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DisputeApi->disputesSearchGet: $@\n";
}
```
</div>

<div class="code-block python" id="disputesSearchGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DisputeApi()
scope = scope_example # String |  (optional) (default to dispute)
query = query_example # String |  (optional)
filters[amount] = 56 # Integer |  (optional)
filters[cardFirstDigits] = filters[cardFirstDigits]_example # String |  (optional)
filters[cardLastDigits] = filters[cardLastDigits]_example # String |  (optional)
filters[chargeId] = filters[chargeId]_example # String |  (optional)
filters[closedAt] = 2013-10-20T19:20:30+01:00 # Date |  (optional)
filters[created] = 2013-10-20T19:20:30+01:00 # Date |  (optional)
filters[currency] = filters[currency]_example # String |  (optional)
filters[delayed] = true # Boolean |  (optional)
filters[status] = filters[status]_example # String |  (optional)

try: 
    api_response = api_instance.disputes_search_get(scope=scope, query=query, filters[amount]=filters[amount], filters[cardFirstDigits]=filters[cardFirstDigits], filters[cardLastDigits]=filters[cardLastDigits], filters[chargeId]=filters[chargeId], filters[closedAt]=filters[closedAt], filters[created]=filters[created], filters[currency]=filters[currency], filters[delayed]=filters[delayed], filters[status]=filters[status])
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DisputeApi->disputesSearchGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| scope | String |
| query | String |
| filters[amount] | Integer |
| filters[card_first_digits] | String |
| filters[card_last_digits] | String |
| filters[charge_id] | String |
| filters[closed_at] | Date (date-time) |
| filters[created] | Date (date-time) |
| filters[currency] | String |
| filters[delayed] | Boolean |
| filters[status] | String |

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

