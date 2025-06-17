# Submerchants


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>subMerchantsGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">subMerchantsGet</div>
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
              
<div class="code-block curl active" id="subMerchantsGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/sub_merchants?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="subMerchantsGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SubMerchantsApi;

import java.io.File;
import java.util.*;

public class SubMerchantsApiExample {

    public static void main(String[] args) {
        
        SubMerchantsApi apiInstance = new SubMerchantsApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.subMerchantsGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubMerchantsApi#subMerchantsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="subMerchantsGet-code-android">
```js
import io.swagger.client.api.SubMerchantsApi;

public class SubMerchantsApiExample {

    public static void main(String[] args) {
        SubMerchantsApi apiInstance = new SubMerchantsApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.subMerchantsGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubMerchantsApi#subMerchantsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="subMerchantsGet-code-objc">
```js
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

SubMerchantsApi *apiInstance = [[SubMerchantsApi alloc] init];

[apiInstance subMerchantsGetWith:from
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

<div class="code-block javascript" id="subMerchantsGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.SubMerchantsApi()
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
api.subMerchantsGet(opts, callback);
```
</div>

<div class="code-block csharp" id="subMerchantsGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class subMerchantsGetExample
    {
        public void main()
        {

            var apiInstance = new SubMerchantsApi();
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.subMerchantsGet(from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SubMerchantsApi.subMerchantsGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="subMerchantsGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiSubMerchantsApi();
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->subMerchantsGet($from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubMerchantsApi->subMerchantsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="subMerchantsGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SubMerchantsApi;

my $api_instance = WWW::SwaggerClient::SubMerchantsApi->new();
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->subMerchantsGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SubMerchantsApi->subMerchantsGet: $@\n";
}
```
</div>

<div class="code-block python" id="subMerchantsGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SubMerchantsApi()
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.sub_merchants_get(from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SubMerchantsApi->subMerchantsGet: %s\n" % e)
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
            <h3>subMerchantsPost</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">subMerchantsPost</div>
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
              
<div class="code-block curl active" id="subMerchantsPost-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/sub_merchants"
```
</div>

<div class="code-block java" id="subMerchantsPost-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SubMerchantsApi;

import java.io.File;
import java.util.*;

public class SubMerchantsApiExample {

    public static void main(String[] args) {
        
        SubMerchantsApi apiInstance = new SubMerchantsApi();
        String name = name_example; // String | 
        try {
            sub_merchant result = apiInstance.subMerchantsPost(name);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubMerchantsApi#subMerchantsPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="subMerchantsPost-code-android">
```js
import io.swagger.client.api.SubMerchantsApi;

public class SubMerchantsApiExample {

    public static void main(String[] args) {
        SubMerchantsApi apiInstance = new SubMerchantsApi();
        String name = name_example; // String | 
        try {
            sub_merchant result = apiInstance.subMerchantsPost(name);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubMerchantsApi#subMerchantsPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="subMerchantsPost-code-objc">
```js
String *name = name_example; //  (optional)

SubMerchantsApi *apiInstance = [[SubMerchantsApi alloc] init];

[apiInstance subMerchantsPostWith:name
              completionHandler: ^(sub_merchant output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="subMerchantsPost-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.SubMerchantsApi()
var opts = { 
  'name': name_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.subMerchantsPost(opts, callback);
```
</div>

<div class="code-block csharp" id="subMerchantsPost-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class subMerchantsPostExample
    {
        public void main()
        {

            var apiInstance = new SubMerchantsApi();
            var name = name_example;  // String |  (optional) 

            try
            {
                sub_merchant result = apiInstance.subMerchantsPost(name);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SubMerchantsApi.subMerchantsPost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="subMerchantsPost-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiSubMerchantsApi();
$name = name_example; // String | 

try {
    $result = $api_instance->subMerchantsPost($name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubMerchantsApi->subMerchantsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="subMerchantsPost-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SubMerchantsApi;

my $api_instance = WWW::SwaggerClient::SubMerchantsApi->new();
my $name = name_example; # String | 

eval { 
    my $result = $api_instance->subMerchantsPost(name => $name);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SubMerchantsApi->subMerchantsPost: $@\n";
}
```
</div>

<div class="code-block python" id="subMerchantsPost-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SubMerchantsApi()
name = name_example # String |  (optional)

try: 
    api_response = api_instance.sub_merchants_post(name=name)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SubMerchantsApi->subMerchantsPost: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| name | String |

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
            <h3>subMerchantsSearchGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">subMerchantsSearchGet</div>
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
              
<div class="code-block curl active" id="subMerchantsSearchGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/sub_merchants/search?scope=&query=&filters[agreement_accepted]=&filters[created]=&filters[live_activated]=&filters[owner_uid]=&filters[registration_status]="
```
</div>

<div class="code-block java" id="subMerchantsSearchGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SubMerchantsApi;

import java.io.File;
import java.util.*;

public class SubMerchantsApiExample {

    public static void main(String[] args) {
        
        SubMerchantsApi apiInstance = new SubMerchantsApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Integer filters[agreementAccepted] = 56; // Integer | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        Boolean filters[liveActivated] = true; // Boolean | 
        String filters[ownerUid] = filters[ownerUid]_example; // String | 
        String filters[registrationStatus] = filters[registrationStatus]_example; // String | 
        try {
            sub_merchant result = apiInstance.subMerchantsSearchGet(scope, query, filters[agreementAccepted], filters[created], filters[liveActivated], filters[ownerUid], filters[registrationStatus]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubMerchantsApi#subMerchantsSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="subMerchantsSearchGet-code-android">
```js
import io.swagger.client.api.SubMerchantsApi;

public class SubMerchantsApiExample {

    public static void main(String[] args) {
        SubMerchantsApi apiInstance = new SubMerchantsApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Integer filters[agreementAccepted] = 56; // Integer | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        Boolean filters[liveActivated] = true; // Boolean | 
        String filters[ownerUid] = filters[ownerUid]_example; // String | 
        String filters[registrationStatus] = filters[registrationStatus]_example; // String | 
        try {
            sub_merchant result = apiInstance.subMerchantsSearchGet(scope, query, filters[agreementAccepted], filters[created], filters[liveActivated], filters[ownerUid], filters[registrationStatus]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubMerchantsApi#subMerchantsSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="subMerchantsSearchGet-code-objc">
```js
String *scope = scope_example; //  (optional) (default to sub_merchant)
String *query = query_example; //  (optional)
Integer *filters[agreementAccepted] = 56; //  (optional)
Date *filters[created] = 2013-10-20T19:20:30+01:00; //  (optional)
Boolean *filters[liveActivated] = true; //  (optional)
String *filters[ownerUid] = filters[ownerUid]_example; //  (optional)
String *filters[registrationStatus] = filters[registrationStatus]_example; //  (optional)

SubMerchantsApi *apiInstance = [[SubMerchantsApi alloc] init];

[apiInstance subMerchantsSearchGetWith:scope
    query:query
    filters[agreementAccepted]:filters[agreementAccepted]
    filters[created]:filters[created]
    filters[liveActivated]:filters[liveActivated]
    filters[ownerUid]:filters[ownerUid]
    filters[registrationStatus]:filters[registrationStatus]
              completionHandler: ^(sub_merchant output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="subMerchantsSearchGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.SubMerchantsApi()
var opts = { 
  'scope': scope_example, // {{String}} 
  'query': query_example, // {{String}} 
  'filters[agreementAccepted]': 56, // {{Integer}} 
  'filters[created]': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'filters[liveActivated]': true, // {{Boolean}} 
  'filters[ownerUid]': filters[ownerUid]_example, // {{String}} 
  'filters[registrationStatus]': filters[registrationStatus]_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.subMerchantsSearchGet(opts, callback);
```
</div>

<div class="code-block csharp" id="subMerchantsSearchGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class subMerchantsSearchGetExample
    {
        public void main()
        {

            var apiInstance = new SubMerchantsApi();
            var scope = scope_example;  // String |  (optional)  (default to sub_merchant)
            var query = query_example;  // String |  (optional) 
            var filters[agreementAccepted] = 56;  // Integer |  (optional) 
            var filters[created] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var filters[liveActivated] = true;  // Boolean |  (optional) 
            var filters[ownerUid] = filters[ownerUid]_example;  // String |  (optional) 
            var filters[registrationStatus] = filters[registrationStatus]_example;  // String |  (optional) 

            try
            {
                sub_merchant result = apiInstance.subMerchantsSearchGet(scope, query, filters[agreementAccepted], filters[created], filters[liveActivated], filters[ownerUid], filters[registrationStatus]);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SubMerchantsApi.subMerchantsSearchGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="subMerchantsSearchGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiSubMerchantsApi();
$scope = scope_example; // String | 
$query = query_example; // String | 
$filters[agreementAccepted] = 56; // Integer | 
$filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
$filters[liveActivated] = true; // Boolean | 
$filters[ownerUid] = filters[ownerUid]_example; // String | 
$filters[registrationStatus] = filters[registrationStatus]_example; // String | 

try {
    $result = $api_instance->subMerchantsSearchGet($scope, $query, $filters[agreementAccepted], $filters[created], $filters[liveActivated], $filters[ownerUid], $filters[registrationStatus]);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubMerchantsApi->subMerchantsSearchGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="subMerchantsSearchGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SubMerchantsApi;

my $api_instance = WWW::SwaggerClient::SubMerchantsApi->new();
my $scope = scope_example; # String | 
my $query = query_example; # String | 
my $filters[agreementAccepted] = 56; # Integer | 
my $filters[created] = 2013-10-20T19:20:30+01:00; # Date | 
my $filters[liveActivated] = true; # Boolean | 
my $filters[ownerUid] = filters[ownerUid]_example; # String | 
my $filters[registrationStatus] = filters[registrationStatus]_example; # String | 

eval { 
    my $result = $api_instance->subMerchantsSearchGet(scope => $scope, query => $query, filters[agreementAccepted] => $filters[agreementAccepted], filters[created] => $filters[created], filters[liveActivated] => $filters[liveActivated], filters[ownerUid] => $filters[ownerUid], filters[registrationStatus] => $filters[registrationStatus]);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SubMerchantsApi->subMerchantsSearchGet: $@\n";
}
```
</div>

<div class="code-block python" id="subMerchantsSearchGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SubMerchantsApi()
scope = scope_example # String |  (optional) (default to sub_merchant)
query = query_example # String |  (optional)
filters[agreementAccepted] = 56 # Integer |  (optional)
filters[created] = 2013-10-20T19:20:30+01:00 # Date |  (optional)
filters[liveActivated] = true # Boolean |  (optional)
filters[ownerUid] = filters[ownerUid]_example # String |  (optional)
filters[registrationStatus] = filters[registrationStatus]_example # String |  (optional)

try: 
    api_response = api_instance.sub_merchants_search_get(scope=scope, query=query, filters[agreementAccepted]=filters[agreementAccepted], filters[created]=filters[created], filters[liveActivated]=filters[liveActivated], filters[ownerUid]=filters[ownerUid], filters[registrationStatus]=filters[registrationStatus])
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SubMerchantsApi->subMerchantsSearchGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| scope | String |
| query | String |
| filters[agreement_accepted] | Integer |
| filters[created] | Date (date-time) |
| filters[live_activated] | Boolean |
| filters[owner_uid] | String |
| filters[registration_status] | String |

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

