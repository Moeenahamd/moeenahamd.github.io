# Receipts


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>receiptsGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">receiptsGet</div>
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
              
<div class="code-block curl active" id="receiptsGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/receipts?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="receiptsGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ReceiptsApi;

import java.io.File;
import java.util.*;

public class ReceiptsApiExample {

    public static void main(String[] args) {
        
        ReceiptsApi apiInstance = new ReceiptsApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.receiptsGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#receiptsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="receiptsGet-code-android">
```js
import io.swagger.client.api.ReceiptsApi;

public class ReceiptsApiExample {

    public static void main(String[] args) {
        ReceiptsApi apiInstance = new ReceiptsApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.receiptsGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#receiptsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="receiptsGet-code-objc">
```js
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

ReceiptsApi *apiInstance = [[ReceiptsApi alloc] init];

[apiInstance receiptsGetWith:from
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

<div class="code-block javascript" id="receiptsGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ReceiptsApi()
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
api.receiptsGet(opts, callback);
```
</div>

<div class="code-block csharp" id="receiptsGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class receiptsGetExample
    {
        public void main()
        {

            var apiInstance = new ReceiptsApi();
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.receiptsGet(from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ReceiptsApi.receiptsGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="receiptsGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiReceiptsApi();
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->receiptsGet($from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReceiptsApi->receiptsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="receiptsGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ReceiptsApi;

my $api_instance = WWW::SwaggerClient::ReceiptsApi->new();
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->receiptsGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ReceiptsApi->receiptsGet: $@\n";
}
```
</div>

<div class="code-block python" id="receiptsGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ReceiptsApi()
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.receipts_get(from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ReceiptsApi->receiptsGet: %s\n" % e)
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
            <h3>receiptsIdGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">receiptsIdGet</div>
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
              
<div class="code-block curl active" id="receiptsIdGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/receipts/{id}"
```
</div>

<div class="code-block java" id="receiptsIdGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ReceiptsApi;

import java.io.File;
import java.util.*;

public class ReceiptsApiExample {

    public static void main(String[] args) {
        
        ReceiptsApi apiInstance = new ReceiptsApi();
        String id = id_example; // String | 
        try {
            receipt result = apiInstance.receiptsIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#receiptsIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="receiptsIdGet-code-android">
```js
import io.swagger.client.api.ReceiptsApi;

public class ReceiptsApiExample {

    public static void main(String[] args) {
        ReceiptsApi apiInstance = new ReceiptsApi();
        String id = id_example; // String | 
        try {
            receipt result = apiInstance.receiptsIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#receiptsIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="receiptsIdGet-code-objc">
```js
String *id = id_example; // 

ReceiptsApi *apiInstance = [[ReceiptsApi alloc] init];

[apiInstance receiptsIdGetWith:id
              completionHandler: ^(receipt output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="receiptsIdGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ReceiptsApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.receiptsIdGet(id, callback);
```
</div>

<div class="code-block csharp" id="receiptsIdGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class receiptsIdGetExample
    {
        public void main()
        {

            var apiInstance = new ReceiptsApi();
            var id = id_example;  // String | 

            try
            {
                receipt result = apiInstance.receiptsIdGet(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ReceiptsApi.receiptsIdGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="receiptsIdGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiReceiptsApi();
$id = id_example; // String | 

try {
    $result = $api_instance->receiptsIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReceiptsApi->receiptsIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="receiptsIdGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ReceiptsApi;

my $api_instance = WWW::SwaggerClient::ReceiptsApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->receiptsIdGet(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ReceiptsApi->receiptsIdGet: $@\n";
}
```
</div>

<div class="code-block python" id="receiptsIdGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ReceiptsApi()
id = id_example # String | 

try: 
    api_response = api_instance.receipts_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ReceiptsApi->receiptsIdGet: %s\n" % e)
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
            <h3>receiptsReceiptsSearchGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">receiptsReceiptsSearchGet</div>
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
              
<div class="code-block curl active" id="receiptsReceiptsSearchGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/receipts/receipts/search?scope=&query=&filters[created]="
```
</div>

<div class="code-block java" id="receiptsReceiptsSearchGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ReceiptsApi;

import java.io.File;
import java.util.*;

public class ReceiptsApiExample {

    public static void main(String[] args) {
        
        ReceiptsApi apiInstance = new ReceiptsApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        try {
            receipt result = apiInstance.receiptsReceiptsSearchGet(scope, query, filters[created]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#receiptsReceiptsSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="receiptsReceiptsSearchGet-code-android">
```js
import io.swagger.client.api.ReceiptsApi;

public class ReceiptsApiExample {

    public static void main(String[] args) {
        ReceiptsApi apiInstance = new ReceiptsApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        try {
            receipt result = apiInstance.receiptsReceiptsSearchGet(scope, query, filters[created]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReceiptsApi#receiptsReceiptsSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="receiptsReceiptsSearchGet-code-objc">
```js
String *scope = scope_example; //  (optional) (default to receipt)
String *query = query_example; //  (optional)
Date *filters[created] = 2013-10-20T19:20:30+01:00; //  (optional)

ReceiptsApi *apiInstance = [[ReceiptsApi alloc] init];

[apiInstance receiptsReceiptsSearchGetWith:scope
    query:query
    filters[created]:filters[created]
              completionHandler: ^(receipt output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="receiptsReceiptsSearchGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ReceiptsApi()
var opts = { 
  'scope': scope_example, // {{String}} 
  'query': query_example, // {{String}} 
  'filters[created]': 2013-10-20T19:20:30+01:00 // {{Date}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.receiptsReceiptsSearchGet(opts, callback);
```
</div>

<div class="code-block csharp" id="receiptsReceiptsSearchGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class receiptsReceiptsSearchGetExample
    {
        public void main()
        {

            var apiInstance = new ReceiptsApi();
            var scope = scope_example;  // String |  (optional)  (default to receipt)
            var query = query_example;  // String |  (optional) 
            var filters[created] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 

            try
            {
                receipt result = apiInstance.receiptsReceiptsSearchGet(scope, query, filters[created]);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ReceiptsApi.receiptsReceiptsSearchGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="receiptsReceiptsSearchGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiReceiptsApi();
$scope = scope_example; // String | 
$query = query_example; // String | 
$filters[created] = 2013-10-20T19:20:30+01:00; // Date | 

try {
    $result = $api_instance->receiptsReceiptsSearchGet($scope, $query, $filters[created]);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReceiptsApi->receiptsReceiptsSearchGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="receiptsReceiptsSearchGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ReceiptsApi;

my $api_instance = WWW::SwaggerClient::ReceiptsApi->new();
my $scope = scope_example; # String | 
my $query = query_example; # String | 
my $filters[created] = 2013-10-20T19:20:30+01:00; # Date | 

eval { 
    my $result = $api_instance->receiptsReceiptsSearchGet(scope => $scope, query => $query, filters[created] => $filters[created]);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ReceiptsApi->receiptsReceiptsSearchGet: $@\n";
}
```
</div>

<div class="code-block python" id="receiptsReceiptsSearchGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ReceiptsApi()
scope = scope_example # String |  (optional) (default to receipt)
query = query_example # String |  (optional)
filters[created] = 2013-10-20T19:20:30+01:00 # Date |  (optional)

try: 
    api_response = api_instance.receipts_receipts_search_get(scope=scope, query=query, filters[created]=filters[created])
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ReceiptsApi->receiptsReceiptsSearchGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| scope | String |
| query | String |
| filters[created] | Date (date-time) |

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

