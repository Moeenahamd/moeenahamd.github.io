# Refund


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>chargesIdRefundsGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">chargesIdRefundsGet</div>
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
              
<div class="code-block curl active" id="chargesIdRefundsGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/charges/{id}/refunds?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="chargesIdRefundsGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.RefundApi;

import java.io.File;
import java.util.*;

public class RefundApiExample {

    public static void main(String[] args) {
        
        RefundApi apiInstance = new RefundApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.chargesIdRefundsGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RefundApi#chargesIdRefundsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="chargesIdRefundsGet-code-android">
```js
import io.swagger.client.api.RefundApi;

public class RefundApiExample {

    public static void main(String[] args) {
        RefundApi apiInstance = new RefundApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.chargesIdRefundsGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RefundApi#chargesIdRefundsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="chargesIdRefundsGet-code-objc">
```js
String *id = id_example; // 
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

RefundApi *apiInstance = [[RefundApi alloc] init];

[apiInstance chargesIdRefundsGetWith:id
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

<div class="code-block javascript" id="chargesIdRefundsGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.RefundApi()
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
api.chargesIdRefundsGet(id, opts, callback);
```
</div>

<div class="code-block csharp" id="chargesIdRefundsGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chargesIdRefundsGetExample
    {
        public void main()
        {

            var apiInstance = new RefundApi();
            var id = id_example;  // String | 
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.chargesIdRefundsGet(id, from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RefundApi.chargesIdRefundsGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="chargesIdRefundsGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiRefundApi();
$id = id_example; // String | 
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->chargesIdRefundsGet($id, $from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RefundApi->chargesIdRefundsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="chargesIdRefundsGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::RefundApi;

my $api_instance = WWW::SwaggerClient::RefundApi->new();
my $id = id_example; # String | 
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->chargesIdRefundsGet(id => $id, from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling RefundApi->chargesIdRefundsGet: $@\n";
}
```
</div>

<div class="code-block python" id="chargesIdRefundsGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RefundApi()
id = id_example # String | 
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.charges_id_refunds_get(id, from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RefundApi->chargesIdRefundsGet: %s\n" % e)
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
            <h3>chargesIdRefundsPost</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">chargesIdRefundsPost</div>
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
              
<div class="code-block curl active" id="chargesIdRefundsPost-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/charges/{id}/refunds"
```
</div>

<div class="code-block java" id="chargesIdRefundsPost-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.RefundApi;

import java.io.File;
import java.util.*;

public class RefundApiExample {

    public static void main(String[] args) {
        
        RefundApi apiInstance = new RefundApi();
        String id = id_example; // String | 
        Boolean void = true; // Boolean | 
        Integer amount = 56; // Integer | 
        Object metadata = ; // Object | 
        try {
            refund result = apiInstance.chargesIdRefundsPost(id, void, amount, metadata);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RefundApi#chargesIdRefundsPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="chargesIdRefundsPost-code-android">
```js
import io.swagger.client.api.RefundApi;

public class RefundApiExample {

    public static void main(String[] args) {
        RefundApi apiInstance = new RefundApi();
        String id = id_example; // String | 
        Boolean void = true; // Boolean | 
        Integer amount = 56; // Integer | 
        Object metadata = ; // Object | 
        try {
            refund result = apiInstance.chargesIdRefundsPost(id, void, amount, metadata);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RefundApi#chargesIdRefundsPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="chargesIdRefundsPost-code-objc">
```js
String *id = id_example; // 
Boolean *void = true; //  (optional)
Integer *amount = 56; //  (optional)
Object *metadata = ; //  (optional)

RefundApi *apiInstance = [[RefundApi alloc] init];

[apiInstance chargesIdRefundsPostWith:id
    void:void
    amount:amount
    metadata:metadata
              completionHandler: ^(refund output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="chargesIdRefundsPost-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.RefundApi()
var id = id_example; // {{String}} 
var opts = { 
  'void': true // {{Boolean}} 
  'amount': 56 // {{Integer}} 
  'metadata':  // {{Object}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.chargesIdRefundsPost(id, opts, callback);
```
</div>

<div class="code-block csharp" id="chargesIdRefundsPost-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chargesIdRefundsPostExample
    {
        public void main()
        {

            var apiInstance = new RefundApi();
            var id = id_example;  // String | 
            var void = true;  // Boolean |  (optional) 
            var amount = 56;  // Integer |  (optional) 
            var metadata = new Object(); // Object |  (optional) 

            try
            {
                refund result = apiInstance.chargesIdRefundsPost(id, void, amount, metadata);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RefundApi.chargesIdRefundsPost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="chargesIdRefundsPost-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiRefundApi();
$id = id_example; // String | 
$void = true; // Boolean | 
$amount = 56; // Integer | 
$metadata = ; // Object | 

try {
    $result = $api_instance->chargesIdRefundsPost($id, $void, $amount, $metadata);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RefundApi->chargesIdRefundsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="chargesIdRefundsPost-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::RefundApi;

my $api_instance = WWW::SwaggerClient::RefundApi->new();
my $id = id_example; # String | 
my $void = true; # Boolean | 
my $amount = 56; # Integer | 
my $metadata = ; # Object | 

eval { 
    my $result = $api_instance->chargesIdRefundsPost(id => $id, void => $void, amount => $amount, metadata => $metadata);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling RefundApi->chargesIdRefundsPost: $@\n";
}
```
</div>

<div class="code-block python" id="chargesIdRefundsPost-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RefundApi()
id = id_example # String | 
void = true # Boolean |  (optional)
amount = 56 # Integer |  (optional)
metadata =  # Object |  (optional)

try: 
    api_response = api_instance.charges_id_refunds_post(id, void=void, amount=amount, metadata=metadata)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RefundApi->chargesIdRefundsPost: %s\n" % e)
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
| void | Boolean |
| amount | Integer |
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
            <h3>chargesIdRefundsRefundIdGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">chargesIdRefundsRefundIdGet</div>
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
              
<div class="code-block curl active" id="chargesIdRefundsRefundIdGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/charges/{id}/refunds/{refund_id}"
```
</div>

<div class="code-block java" id="chargesIdRefundsRefundIdGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.RefundApi;

import java.io.File;
import java.util.*;

public class RefundApiExample {

    public static void main(String[] args) {
        
        RefundApi apiInstance = new RefundApi();
        String id = id_example; // String | 
        String refundId = refundId_example; // String | 
        try {
            refund result = apiInstance.chargesIdRefundsRefundIdGet(id, refundId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RefundApi#chargesIdRefundsRefundIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="chargesIdRefundsRefundIdGet-code-android">
```js
import io.swagger.client.api.RefundApi;

public class RefundApiExample {

    public static void main(String[] args) {
        RefundApi apiInstance = new RefundApi();
        String id = id_example; // String | 
        String refundId = refundId_example; // String | 
        try {
            refund result = apiInstance.chargesIdRefundsRefundIdGet(id, refundId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RefundApi#chargesIdRefundsRefundIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="chargesIdRefundsRefundIdGet-code-objc">
```js
String *id = id_example; // 
String *refundId = refundId_example; // 

RefundApi *apiInstance = [[RefundApi alloc] init];

[apiInstance chargesIdRefundsRefundIdGetWith:id
    refundId:refundId
              completionHandler: ^(refund output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="chargesIdRefundsRefundIdGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.RefundApi()
var id = id_example; // {{String}} 
var refundId = refundId_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.chargesIdRefundsRefundIdGet(id, refundId, callback);
```
</div>

<div class="code-block csharp" id="chargesIdRefundsRefundIdGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chargesIdRefundsRefundIdGetExample
    {
        public void main()
        {

            var apiInstance = new RefundApi();
            var id = id_example;  // String | 
            var refundId = refundId_example;  // String | 

            try
            {
                refund result = apiInstance.chargesIdRefundsRefundIdGet(id, refundId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RefundApi.chargesIdRefundsRefundIdGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="chargesIdRefundsRefundIdGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiRefundApi();
$id = id_example; // String | 
$refundId = refundId_example; // String | 

try {
    $result = $api_instance->chargesIdRefundsRefundIdGet($id, $refundId);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RefundApi->chargesIdRefundsRefundIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="chargesIdRefundsRefundIdGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::RefundApi;

my $api_instance = WWW::SwaggerClient::RefundApi->new();
my $id = id_example; # String | 
my $refundId = refundId_example; # String | 

eval { 
    my $result = $api_instance->chargesIdRefundsRefundIdGet(id => $id, refundId => $refundId);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling RefundApi->chargesIdRefundsRefundIdGet: $@\n";
}
```
</div>

<div class="code-block python" id="chargesIdRefundsRefundIdGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RefundApi()
id = id_example # String | 
refundId = refundId_example # String | 

try: 
    api_response = api_instance.charges_id_refunds_refund_id_get(id, refundId)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RefundApi->chargesIdRefundsRefundIdGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| id* | String Required |
| refund_id* | String Required |

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
            <h3>refundsGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">refundsGet</div>
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
              
<div class="code-block curl active" id="refundsGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/refunds?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="refundsGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.RefundApi;

import java.io.File;
import java.util.*;

public class RefundApiExample {

    public static void main(String[] args) {
        
        RefundApi apiInstance = new RefundApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.refundsGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RefundApi#refundsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="refundsGet-code-android">
```js
import io.swagger.client.api.RefundApi;

public class RefundApiExample {

    public static void main(String[] args) {
        RefundApi apiInstance = new RefundApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.refundsGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RefundApi#refundsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="refundsGet-code-objc">
```js
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

RefundApi *apiInstance = [[RefundApi alloc] init];

[apiInstance refundsGetWith:from
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

<div class="code-block javascript" id="refundsGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.RefundApi()
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
api.refundsGet(opts, callback);
```
</div>

<div class="code-block csharp" id="refundsGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class refundsGetExample
    {
        public void main()
        {

            var apiInstance = new RefundApi();
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.refundsGet(from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RefundApi.refundsGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="refundsGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiRefundApi();
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->refundsGet($from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RefundApi->refundsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="refundsGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::RefundApi;

my $api_instance = WWW::SwaggerClient::RefundApi->new();
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->refundsGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling RefundApi->refundsGet: $@\n";
}
```
</div>

<div class="code-block python" id="refundsGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RefundApi()
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.refunds_get(from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RefundApi->refundsGet: %s\n" % e)
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
            <h3>refundsSearchGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">refundsSearchGet</div>
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
              
<div class="code-block curl active" id="refundsSearchGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/refunds/search?scope=&query=&filters[amount]=&filters[card_first_digits]=&filters[card_last_digits]=&filters[charge_id]=&filters[created]=&filters[status]=&filters[voided]=&filters[acquirer_reference_number]="
```
</div>

<div class="code-block java" id="refundsSearchGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.RefundApi;

import java.io.File;
import java.util.*;

public class RefundApiExample {

    public static void main(String[] args) {
        
        RefundApi apiInstance = new RefundApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Integer filters[amount] = 56; // Integer | 
        String filters[cardFirstDigits] = filters[cardFirstDigits]_example; // String | 
        String filters[cardLastDigits] = filters[cardLastDigits]_example; // String | 
        String filters[chargeId] = filters[chargeId]_example; // String | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        String filters[status] = filters[status]_example; // String | 
        Boolean filters[voided] = true; // Boolean | 
        String filters[acquirerReferenceNumber] = filters[acquirerReferenceNumber]_example; // String | 
        try {
            refund result = apiInstance.refundsSearchGet(scope, query, filters[amount], filters[cardFirstDigits], filters[cardLastDigits], filters[chargeId], filters[created], filters[status], filters[voided], filters[acquirerReferenceNumber]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RefundApi#refundsSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="refundsSearchGet-code-android">
```js
import io.swagger.client.api.RefundApi;

public class RefundApiExample {

    public static void main(String[] args) {
        RefundApi apiInstance = new RefundApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Integer filters[amount] = 56; // Integer | 
        String filters[cardFirstDigits] = filters[cardFirstDigits]_example; // String | 
        String filters[cardLastDigits] = filters[cardLastDigits]_example; // String | 
        String filters[chargeId] = filters[chargeId]_example; // String | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        String filters[status] = filters[status]_example; // String | 
        Boolean filters[voided] = true; // Boolean | 
        String filters[acquirerReferenceNumber] = filters[acquirerReferenceNumber]_example; // String | 
        try {
            refund result = apiInstance.refundsSearchGet(scope, query, filters[amount], filters[cardFirstDigits], filters[cardLastDigits], filters[chargeId], filters[created], filters[status], filters[voided], filters[acquirerReferenceNumber]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RefundApi#refundsSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="refundsSearchGet-code-objc">
```js
String *scope = scope_example; //  (optional) (default to refund)
String *query = query_example; //  (optional)
Integer *filters[amount] = 56; //  (optional)
String *filters[cardFirstDigits] = filters[cardFirstDigits]_example; //  (optional)
String *filters[cardLastDigits] = filters[cardLastDigits]_example; //  (optional)
String *filters[chargeId] = filters[chargeId]_example; //  (optional)
Date *filters[created] = 2013-10-20T19:20:30+01:00; //  (optional)
String *filters[status] = filters[status]_example; //  (optional)
Boolean *filters[voided] = true; //  (optional)
String *filters[acquirerReferenceNumber] = filters[acquirerReferenceNumber]_example; //  (optional)

RefundApi *apiInstance = [[RefundApi alloc] init];

[apiInstance refundsSearchGetWith:scope
    query:query
    filters[amount]:filters[amount]
    filters[cardFirstDigits]:filters[cardFirstDigits]
    filters[cardLastDigits]:filters[cardLastDigits]
    filters[chargeId]:filters[chargeId]
    filters[created]:filters[created]
    filters[status]:filters[status]
    filters[voided]:filters[voided]
    filters[acquirerReferenceNumber]:filters[acquirerReferenceNumber]
              completionHandler: ^(refund output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="refundsSearchGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.RefundApi()
var opts = { 
  'scope': scope_example, // {{String}} 
  'query': query_example, // {{String}} 
  'filters[amount]': 56, // {{Integer}} 
  'filters[cardFirstDigits]': filters[cardFirstDigits]_example, // {{String}} 
  'filters[cardLastDigits]': filters[cardLastDigits]_example, // {{String}} 
  'filters[chargeId]': filters[chargeId]_example, // {{String}} 
  'filters[created]': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'filters[status]': filters[status]_example, // {{String}} 
  'filters[voided]': true, // {{Boolean}} 
  'filters[acquirerReferenceNumber]': filters[acquirerReferenceNumber]_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.refundsSearchGet(opts, callback);
```
</div>

<div class="code-block csharp" id="refundsSearchGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class refundsSearchGetExample
    {
        public void main()
        {

            var apiInstance = new RefundApi();
            var scope = scope_example;  // String |  (optional)  (default to refund)
            var query = query_example;  // String |  (optional) 
            var filters[amount] = 56;  // Integer |  (optional) 
            var filters[cardFirstDigits] = filters[cardFirstDigits]_example;  // String |  (optional) 
            var filters[cardLastDigits] = filters[cardLastDigits]_example;  // String |  (optional) 
            var filters[chargeId] = filters[chargeId]_example;  // String |  (optional) 
            var filters[created] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var filters[status] = filters[status]_example;  // String |  (optional) 
            var filters[voided] = true;  // Boolean |  (optional) 
            var filters[acquirerReferenceNumber] = filters[acquirerReferenceNumber]_example;  // String |  (optional) 

            try
            {
                refund result = apiInstance.refundsSearchGet(scope, query, filters[amount], filters[cardFirstDigits], filters[cardLastDigits], filters[chargeId], filters[created], filters[status], filters[voided], filters[acquirerReferenceNumber]);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RefundApi.refundsSearchGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="refundsSearchGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiRefundApi();
$scope = scope_example; // String | 
$query = query_example; // String | 
$filters[amount] = 56; // Integer | 
$filters[cardFirstDigits] = filters[cardFirstDigits]_example; // String | 
$filters[cardLastDigits] = filters[cardLastDigits]_example; // String | 
$filters[chargeId] = filters[chargeId]_example; // String | 
$filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
$filters[status] = filters[status]_example; // String | 
$filters[voided] = true; // Boolean | 
$filters[acquirerReferenceNumber] = filters[acquirerReferenceNumber]_example; // String | 

try {
    $result = $api_instance->refundsSearchGet($scope, $query, $filters[amount], $filters[cardFirstDigits], $filters[cardLastDigits], $filters[chargeId], $filters[created], $filters[status], $filters[voided], $filters[acquirerReferenceNumber]);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RefundApi->refundsSearchGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="refundsSearchGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::RefundApi;

my $api_instance = WWW::SwaggerClient::RefundApi->new();
my $scope = scope_example; # String | 
my $query = query_example; # String | 
my $filters[amount] = 56; # Integer | 
my $filters[cardFirstDigits] = filters[cardFirstDigits]_example; # String | 
my $filters[cardLastDigits] = filters[cardLastDigits]_example; # String | 
my $filters[chargeId] = filters[chargeId]_example; # String | 
my $filters[created] = 2013-10-20T19:20:30+01:00; # Date | 
my $filters[status] = filters[status]_example; # String | 
my $filters[voided] = true; # Boolean | 
my $filters[acquirerReferenceNumber] = filters[acquirerReferenceNumber]_example; # String | 

eval { 
    my $result = $api_instance->refundsSearchGet(scope => $scope, query => $query, filters[amount] => $filters[amount], filters[cardFirstDigits] => $filters[cardFirstDigits], filters[cardLastDigits] => $filters[cardLastDigits], filters[chargeId] => $filters[chargeId], filters[created] => $filters[created], filters[status] => $filters[status], filters[voided] => $filters[voided], filters[acquirerReferenceNumber] => $filters[acquirerReferenceNumber]);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling RefundApi->refundsSearchGet: $@\n";
}
```
</div>

<div class="code-block python" id="refundsSearchGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RefundApi()
scope = scope_example # String |  (optional) (default to refund)
query = query_example # String |  (optional)
filters[amount] = 56 # Integer |  (optional)
filters[cardFirstDigits] = filters[cardFirstDigits]_example # String |  (optional)
filters[cardLastDigits] = filters[cardLastDigits]_example # String |  (optional)
filters[chargeId] = filters[chargeId]_example # String |  (optional)
filters[created] = 2013-10-20T19:20:30+01:00 # Date |  (optional)
filters[status] = filters[status]_example # String |  (optional)
filters[voided] = true # Boolean |  (optional)
filters[acquirerReferenceNumber] = filters[acquirerReferenceNumber]_example # String |  (optional)

try: 
    api_response = api_instance.refunds_search_get(scope=scope, query=query, filters[amount]=filters[amount], filters[cardFirstDigits]=filters[cardFirstDigits], filters[cardLastDigits]=filters[cardLastDigits], filters[chargeId]=filters[chargeId], filters[created]=filters[created], filters[status]=filters[status], filters[voided]=filters[voided], filters[acquirerReferenceNumber]=filters[acquirerReferenceNumber])
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RefundApi->refundsSearchGet: %s\n" % e)
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
| filters[created] | Date (date-time) |
| filters[status] | String |
| filters[voided] | Boolean |
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

