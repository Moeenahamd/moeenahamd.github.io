# Refund


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Charges ID Refunds</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Charges ID Refunds</div>
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
              
<div class="code-block curl active" id="Retrieve Charges ID Refunds-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/charges/{id}/refunds?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Charges ID Refunds-code-java">
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

<div class="code-block android" id="Retrieve Charges ID Refunds-code-android">
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

<div class="code-block objc" id="Retrieve Charges ID Refunds-code-objc">
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

<div class="code-block javascript" id="Retrieve Charges ID Refunds-code-javascript">
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

<div class="code-block csharp" id="Retrieve Charges ID Refunds-code-csharp">
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

<div class="code-block php" id="Retrieve Charges ID Refunds-code-php">
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

<div class="code-block perl" id="Retrieve Charges ID Refunds-code-perl">
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

<div class="code-block python" id="Retrieve Charges ID Refunds-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Create Charges ID Refunds</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Create Charges ID Refunds</div>
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
              
<div class="code-block curl active" id="Create Charges ID Refunds-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/charges/{id}/refunds"
```
</div>

<div class="code-block java" id="Create Charges ID Refunds-code-java">
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

<div class="code-block android" id="Create Charges ID Refunds-code-android">
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

<div class="code-block objc" id="Create Charges ID Refunds-code-objc">
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

<div class="code-block javascript" id="Create Charges ID Refunds-code-javascript">
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

<div class="code-block csharp" id="Create Charges ID Refunds-code-csharp">
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

<div class="code-block php" id="Create Charges ID Refunds-code-php">
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

<div class="code-block perl" id="Create Charges ID Refunds-code-perl">
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

<div class="code-block python" id="Create Charges ID Refunds-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Charges ID Refunds Refund ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Charges ID Refunds Refund ID</div>
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
              
<div class="code-block curl active" id="Retrieve Charges ID Refunds Refund ID-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/charges/{id}/refunds/{refund_id}"
```
</div>

<div class="code-block java" id="Retrieve Charges ID Refunds Refund ID-code-java">
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

<div class="code-block android" id="Retrieve Charges ID Refunds Refund ID-code-android">
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

<div class="code-block objc" id="Retrieve Charges ID Refunds Refund ID-code-objc">
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

<div class="code-block javascript" id="Retrieve Charges ID Refunds Refund ID-code-javascript">
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

<div class="code-block csharp" id="Retrieve Charges ID Refunds Refund ID-code-csharp">
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

<div class="code-block php" id="Retrieve Charges ID Refunds Refund ID-code-php">
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

<div class="code-block perl" id="Retrieve Charges ID Refunds Refund ID-code-perl">
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

<div class="code-block python" id="Retrieve Charges ID Refunds Refund ID-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Refunds</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Refunds</div>
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
              
<div class="code-block curl active" id="Retrieve Refunds-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/refunds?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Refunds-code-java">
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

<div class="code-block android" id="Retrieve Refunds-code-android">
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

<div class="code-block objc" id="Retrieve Refunds-code-objc">
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

<div class="code-block javascript" id="Retrieve Refunds-code-javascript">
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

<div class="code-block csharp" id="Retrieve Refunds-code-csharp">
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

<div class="code-block php" id="Retrieve Refunds-code-php">
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

<div class="code-block perl" id="Retrieve Refunds-code-perl">
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

<div class="code-block python" id="Retrieve Refunds-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Refunds Search</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Refunds Search</div>
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
              
<div class="code-block curl active" id="Retrieve Refunds Search-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/refunds/search?scope=&query=&filters[amount]=&filters[card_first_digits]=&filters[card_last_digits]=&filters[charge_id]=&filters[created]=&filters[status]=&filters[voided]=&filters[acquirer_reference_number]="
```
</div>

<div class="code-block java" id="Retrieve Refunds Search-code-java">
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

<div class="code-block android" id="Retrieve Refunds Search-code-android">
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

<div class="code-block objc" id="Retrieve Refunds Search-code-objc">
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

<div class="code-block javascript" id="Retrieve Refunds Search-code-javascript">
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

<div class="code-block csharp" id="Retrieve Refunds Search-code-csharp">
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

<div class="code-block php" id="Retrieve Refunds Search-code-php">
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

<div class="code-block perl" id="Retrieve Refunds Search-code-perl">
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

<div class="code-block python" id="Retrieve Refunds Search-code-python">
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

```json
 {
  "object": {
    "pattern": "refund",
    "type": "string",
    "default": "refund"
  },
  "id": {
    "type": "string"
  },
  "location": {
    "type": "string"
  },
  "livemode": {
    "type": "boolean",
    "enum": [
      true,
      false
    ]
  },
  "voided": {
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
  "metadata": {
    "type": "object",
    "default": {}
  },
  "charge": {
    "oneOf": [
      {
        "type": "object",
        "properties": {
          "object": {
            "pattern": "charge",
            "type": "string",
            "default": "charge"
          },
          "id": {
            "pattern": "chrg_[0-9a-z]+",
            "type": "string"
          },
          "location": {
            "type": "string"
          },
          "amount": {
            "type": "integer"
          },
          "authorization_type": {
            "type": "string"
          },
          "authorized_amount": {
            "type": "integer"
          },
          "captured_amount": {
            "type": "integer"
          },
          "acquirer_reference_number": {
            "type": "string",
            "nullable": true
          },
          "net": {
            "type": "integer"
          },
          "fee": {
            "type": "integer"
          },
          "fee_vat": {
            "type": "integer"
          },
          "interest": {
            "type": "integer"
          },
          "interest_vat": {
            "type": "integer"
          },
          "funding_amount": {
            "type": "integer"
          },
          "refunded_amount": {
            "type": "integer"
          },
          "transaction_fees": {
            "type": "object",
            "properties": {
              "fee_flat": {
                "type": "integer"
              },
              "fee_rate": {
                "type": "number",
                "format": "float"
              },
              "vat_rate": {
                "type": "number",
                "format": "float"
              }
            }
          },
          "platform_fee": {
            "type": "object",
            "properties": {
              "fixed": {
                "type": "integer"
              },
              "amount": {
                "type": "integer"
              },
              "percentage": {
                "type": "string"
              }
            }
          },
          "unmanaged_payment": {
            "type": "object",
            "properties": {
              "authorization_code": {
                "type": "string"
              },
              "backend_name": {
                "type": "string"
              },
              "iin": {
                "type": "string"
              },
              "merchant_reference": {
                "type": "string"
              }
            }
          },
          "three_ds_info": {
            "type": "object",
            "properties": {
              "three_ds_version": {
                "type": "string"
              },
              "authenticated_at": {
                "type": "string",
                "format": "date-time"
              },
              "eci": {
                "type": "string"
              },
              "transaction_status": {
                "type": "string"
              },
              "acs_url": {
                "type": "string"
              }
            }
          },
          "currency": {
            "type": "string",
            "format": "currency"
          },
          "funding_currency": {
            "type": "string",
            "format": "currency"
          },
          "ip": {
            "type": "string",
            "nullable": true
          },
          "refunds": {
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
          "link": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
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
          "missing_3ds_fields": {
            "type": "object"
          },
          "card": {
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
          "source": {
            "type": "object",
            "properties": {
              "object": {
                "pattern": "source",
                "type": "string",
                "default": "source"
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
              "amount": {
                "type": "integer"
              },
              "barcode": {
                "type": "string"
              },
              "bank": {
                "type": "string"
              },
              "created_at": {
                "type": "string",
                "format": "date-time"
              },
              "currency": {
                "type": "string",
                "format": "currency"
              },
              "email": {
                "type": "string"
              },
              "flow": {
                "type": "string",
                "enum": [
                  "redirect",
                  "offline",
                  "app_redirect"
                ]
              },
              "installment_term": {
                "type": "integer"
              },
              "ip": {
                "type": "string"
              },
              "absorption_type": {
                "type": "string",
                "enum": [
                  "merchant",
                  "customer"
                ]
              },
              "name": {
                "type": "string"
              },
              "mobile_number": {
                "type": "string"
              },
              "phone_number": {
                "type": "string"
              },
              "platform_type": {
                "type": "string"
              },
              "scannable_code": {
                "type": "object",
                "properties": {
                  "object": {
                    "pattern": "barcode",
                    "type": "string",
                    "default": "barcode"
                  },
                  "type": {
                    "type": "string"
                  },
                  "image": {
                    "type": "object",
                    "properties": {
                      "object": {
                        "pattern": "document",
                        "type": "string",
                        "default": "document"
                      },
                      "livemode": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "id": {
                        "type": "string"
                      },
                      "deleted": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "filename": {
                        "type": "string"
                      },
                      "location": {
                        "type": "string"
                      },
                      "kind": {
                        "type": "string"
                      },
                      "download_uri": {
                        "type": "string",
                        "format": "uri"
                      },
                      "created_at": {
                        "type": "string",
                        "format": "date-time"
                      }
                    }
                  },
                  "raw_data": {
                    "type": "string"
                  }
                }
              },
              "qr_settings": {
                "type": "object",
                "properties": {
                  "image_type": {
                    "type": "string"
                  }
                }
              },
              "billing": {
                "type": "object",
                "properties": {
                  "city": {
                    "type": "string"
                  },
                  "country": {
                    "type": "string"
                  },
                  "postal_code": {
                    "type": "string"
                  },
                  "state": {
                    "type": "string"
                  },
                  "street1": {
                    "type": "string"
                  },
                  "street2": {
                    "type": "string"
                  }
                }
              },
              "shipping": {
                "type": "object",
                "properties": {
                  "city": {
                    "type": "string"
                  },
                  "country": {
                    "type": "string"
                  },
                  "postal_code": {
                    "type": "string"
                  },
                  "state": {
                    "type": "string"
                  },
                  "street1": {
                    "type": "string"
                  },
                  "street2": {
                    "type": "string"
                  }
                }
              },
              "items": {
                "type": "array",
                "items": {}
              },
              "references": {
                "type": "object",
                "properties": {
                  "expires_at": {
                    "type": "string",
                    "format": "date-time"
                  },
                  "device_id": {
                    "type": "string"
                  },
                  "customer_amount": {
                    "type": "integer"
                  },
                  "customer_currency": {
                    "type": "string"
                  },
                  "customer_exchange_rate": {
                    "type": "number",
                    "format": "float"
                  },
                  "omise_tax_id": {
                    "type": "string"
                  },
                  "reference_number_1": {
                    "type": "string"
                  },
                  "reference_number_2": {
                    "type": "string"
                  },
                  "barcode": {
                    "type": "string"
                  },
                  "payment_code": {
                    "type": "string"
                  },
                  "va_code": {
                    "type": "string"
                  }
                }
              },
              "provider_references": {
                "type": "object",
                "properties": {
                  "reference_number_1": {
                    "type": "string"
                  },
                  "reference_number_2": {
                    "type": "string"
                  },
                  "buyer_name": {
                    "type": "string"
                  }
                }
              },
              "store_id": {
                "type": "string"
              },
              "store_name": {
                "type": "string"
              },
              "terminal_id": {
                "type": "string"
              },
              "type": {
                "type": "string"
              },
              "zero_interest_installments": {
                "type": "boolean",
                "enum": [
                  true,
                  false
                ]
              },
              "charge_status": {
                "type": "string",
                "enum": [
                  "failed",
                  "expired",
                  "pending",
                  "reversed",
                  "successful",
                  "unknown"
                ]
              },
              "receipt_amount": {
                "type": "integer"
              },
              "discounts": {
                "type": "array",
                "items": {},
                "default": []
              },
              "promotion_code": {
                "type": "string"
              },
              "supplier_id": {
                "type": "string"
              }
            }
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
          "linked_account": {
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
          "dispute": {
            "type": "object",
            "properties": {
              "object": {
                "pattern": "dispute",
                "type": "string",
                "default": "dispute"
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
              "currency": {
                "type": "string",
                "format": "currency"
              },
              "amount": {
                "type": "integer"
              },
              "funding_amount": {
                "type": "integer"
              },
              "funding_currency": {
                "type": "string",
                "format": "currency"
              },
              "metadata": {
                "type": "object",
                "default": {}
              },
              "charge": {
                "oneOf": [
                  {
                    "type": "object",
                    "properties": {
                      "object": {
                        "pattern": "charge",
                        "type": "string",
                        "default": "charge"
                      },
                      "id": {
                        "pattern": "chrg_[0-9a-z]+",
                        "type": "string"
                      },
                      "location": {
                        "type": "string"
                      },
                      "amount": {
                        "type": "integer"
                      },
                      "authorization_type": {
                        "type": "string"
                      },
                      "authorized_amount": {
                        "type": "integer"
                      },
                      "captured_amount": {
                        "type": "integer"
                      },
                      "acquirer_reference_number": {
                        "type": "string",
                        "nullable": true
                      },
                      "net": {
                        "type": "integer"
                      },
                      "fee": {
                        "type": "integer"
                      },
                      "fee_vat": {
                        "type": "integer"
                      },
                      "interest": {
                        "type": "integer"
                      },
                      "interest_vat": {
                        "type": "integer"
                      },
                      "funding_amount": {
                        "type": "integer"
                      },
                      "refunded_amount": {
                        "type": "integer"
                      },
                      "transaction_fees": {
                        "$ref": "#/components/schemas/charge_transaction_fees"
                      },
                      "platform_fee": {
                        "$ref": "#/components/schemas/charge_platform_fee"
                      },
                      "unmanaged_payment": {
                        "$ref": "#/components/schemas/charge_unmanaged_payment"
                      },
                      "three_ds_info": {
                        "$ref": "#/components/schemas/charge_three_ds_info"
                      },
                      "currency": {
                        "type": "string",
                        "format": "currency"
                      },
                      "funding_currency": {
                        "type": "string",
                        "format": "currency"
                      },
                      "ip": {
                        "type": "string",
                        "nullable": true
                      },
                      "refunds": {
                        "$ref": "#/components/schemas/list"
                      },
                      "link": {
                        "oneOf": [
                          {
                            "$ref": "#/components/schemas/link"
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
                      "missing_3ds_fields": {
                        "type": "object"
                      },
                      "card": {
                        "$ref": "#/components/schemas/card"
                      },
                      "source": {
                        "$ref": "#/components/schemas/source"
                      },
                      "schedule": {
                        "oneOf": [
                          {
                            "$ref": "#/components/schemas/schedule"
                          },
                          {
                            "type": "string"
                          }
                        ]
                      },
                      "linked_account": {
                        "$ref": "#/components/schemas/linked_account"
                      },
                      "customer": {
                        "oneOf": [
                          {
                            "$ref": "#/components/schemas/customer"
                          },
                          {
                            "type": "string"
                          }
                        ]
                      },
                      "dispute": {
                        "$ref": "#/components/schemas/dispute"
                      },
                      "transaction": {
                        "oneOf": [
                          {
                            "$ref": "#/components/schemas/transaction"
                          },
                          {
                            "type": "string"
                          }
                        ]
                      },
                      "failure_code": {
                        "type": "string",
                        "nullable": true,
                        "enum": [
                          "failed_fraud_check",
                          "failed_processing",
                          "insufficient_balance",
                          "insufficient_fund",
                          "invalid_account_number",
                          "invalid_security_code",
                          "payment_cancelled",
                          "payment_rejected",
                          "timeout",
                          "expired_card"
                        ]
                      },
                      "failure_message": {
                        "type": "string",
                        "nullable": true
                      },
                      "merchant_advice": {
                        "type": "string",
                        "nullable": true
                      },
                      "merchant_advice_code": {
                        "type": "string",
                        "nullable": true
                      },
                      "status": {
                        "type": "string",
                        "enum": [
                          "failed",
                          "expired",
                          "pending",
                          "reversed",
                          "successful"
                        ]
                      },
                      "authorize_uri": {
                        "type": "string",
                        "format": "uri",
                        "nullable": true
                      },
                      "return_uri": {
                        "type": "string",
                        "format": "uri",
                        "nullable": true
                      },
                      "created_at": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "paid_at": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "authorized_at": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "expires_at": {
                        "type": "string",
                        "format": "date-time",
                        "nullable": true
                      },
                      "expired_at": {
                        "type": "string",
                        "format": "date-time",
                        "nullable": true
                      },
                      "reversed_at": {
                        "type": "string",
                        "format": "date-time",
                        "nullable": true
                      },
                      "multi_capture": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "zero_interest_installments": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "authorized": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "capturable": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "capture": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "disputable": {
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
                      "refundable": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "partially_refundable": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "reversed": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "reversible": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "voided": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "paid": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "expired": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "can_perform_void": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "merchant_name": {
                        "type": "string"
                      },
                      "merchant_uid": {
                        "type": "string"
                      },
                      "approval_code": {
                        "type": "string",
                        "nullable": true
                      },
                      "statement_descriptor": {
                        "type": "string"
                      }
                    }
                  },
                  {
                    "type": "string"
                  }
                ]
              },
              "documents": {
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
              "transactions": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "object": {
                      "pattern": "transaction",
                      "type": "string",
                      "default": "transaction"
                    },
                    "id": {
                      "pattern": "trxn_[0-9a-z]+",
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
                    "location": {
                      "type": "string"
                    },
                    "direction": {
                      "type": "string",
                      "enum": [
                        "credit",
                        "debit"
                      ]
                    },
                    "key": {
                      "type": "string"
                    },
                    "origin": {
                      "type": "string"
                    },
                    "transferable_at": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "created_at": {
                      "type": "string",
                      "format": "date-time"
                    }
                  }
                }
              },
              "admin_message": {
                "type": "string",
                "nullable": true
              },
              "message": {
                "type": "string",
                "nullable": true
              },
              "reason_code": {
                "type": "string",
                "enum": [
                  "not_recorded",
                  "not_available",
                  "other",
                  "incorrect_transaction_amount",
                  "duplicate_processing",
                  "credit_not_processed",
                  "paid_by_other_means",
                  "unauthorized_charge",
                  "non_matching_account_number",
                  "incorrect_currency",
                  "late_presentment",
                  "cancelled_recurring_transaction",
                  "not_as_described_or_defective_merchandise",
                  "goods_or_services_not_provided",
                  "incorrect_transaction_code",
                  "invalid_data",
                  "expired_card",
                  "transaction_not_recognised"
                ]
              },
              "reason_message": {
                "type": "string"
              },
              "status": {
                "type": "string",
                "enum": [
                  "open",
                  "pending",
                  "won",
                  "lost"
                ]
              },
              "closed_at": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "created_at": {
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
          },
          "transaction": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "object": {
                    "pattern": "transaction",
                    "type": "string",
                    "default": "transaction"
                  },
                  "id": {
                    "pattern": "trxn_[0-9a-z]+",
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
                  "location": {
                    "type": "string"
                  },
                  "direction": {
                    "type": "string",
                    "enum": [
                      "credit",
                      "debit"
                    ]
                  },
                  "key": {
                    "type": "string"
                  },
                  "origin": {
                    "type": "string"
                  },
                  "transferable_at": {
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
          "failure_code": {
            "type": "string",
            "nullable": true,
            "enum": [
              "failed_fraud_check",
              "failed_processing",
              "insufficient_balance",
              "insufficient_fund",
              "invalid_account_number",
              "invalid_security_code",
              "payment_cancelled",
              "payment_rejected",
              "timeout",
              "expired_card"
            ]
          },
          "failure_message": {
            "type": "string",
            "nullable": true
          },
          "merchant_advice": {
            "type": "string",
            "nullable": true
          },
          "merchant_advice_code": {
            "type": "string",
            "nullable": true
          },
          "status": {
            "type": "string",
            "enum": [
              "failed",
              "expired",
              "pending",
              "reversed",
              "successful"
            ]
          },
          "authorize_uri": {
            "type": "string",
            "format": "uri",
            "nullable": true
          },
          "return_uri": {
            "type": "string",
            "format": "uri",
            "nullable": true
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "paid_at": {
            "type": "string",
            "format": "date-time"
          },
          "authorized_at": {
            "type": "string",
            "format": "date-time"
          },
          "expires_at": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "expired_at": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "reversed_at": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "multi_capture": {
            "type": "boolean",
            "enum": [
              true,
              false
            ]
          },
          "zero_interest_installments": {
            "type": "boolean",
            "enum": [
              true,
              false
            ]
          },
          "authorized": {
            "type": "boolean",
            "enum": [
              true,
              false
            ]
          },
          "capturable": {
            "type": "boolean",
            "enum": [
              true,
              false
            ]
          },
          "capture": {
            "type": "boolean",
            "enum": [
              true,
              false
            ]
          },
          "disputable": {
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
          "refundable": {
            "type": "boolean",
            "enum": [
              true,
              false
            ]
          },
          "partially_refundable": {
            "type": "boolean",
            "enum": [
              true,
              false
            ]
          },
          "reversed": {
            "type": "boolean",
            "enum": [
              true,
              false
            ]
          },
          "reversible": {
            "type": "boolean",
            "enum": [
              true,
              false
            ]
          },
          "voided": {
            "type": "boolean",
            "enum": [
              true,
              false
            ]
          },
          "paid": {
            "type": "boolean",
            "enum": [
              true,
              false
            ]
          },
          "expired": {
            "type": "boolean",
            "enum": [
              true,
              false
            ]
          },
          "can_perform_void": {
            "type": "boolean",
            "enum": [
              true,
              false
            ]
          },
          "merchant_name": {
            "type": "string"
          },
          "merchant_uid": {
            "type": "string"
          },
          "approval_code": {
            "type": "string",
            "nullable": true
          },
          "statement_descriptor": {
            "type": "string"
          }
        }
      },
      {
        "type": "string"
      }
    ]
  },
  "capture": {
    "type": "string",
    "nullable": true
  },
  "terminal": {
    "type": "string",
    "nullable": true
  },
  "transaction": {
    "oneOf": [
      {
        "type": "object",
        "properties": {
          "object": {
            "pattern": "transaction",
            "type": "string",
            "default": "transaction"
          },
          "id": {
            "pattern": "trxn_[0-9a-z]+",
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
          "location": {
            "type": "string"
          },
          "direction": {
            "type": "string",
            "enum": [
              "credit",
              "debit"
            ]
          },
          "key": {
            "type": "string"
          },
          "origin": {
            "type": "string"
          },
          "transferable_at": {
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
  "status": {
    "type": "string",
    "enum": [
      "closed"
    ]
  },
  "funding_amount": {
    "type": "integer"
  },
  "funding_currency": {
    "type": "string",
    "format": "currency"
  },
  "created_at": {
    "type": "string",
    "format": "date-time"
  },
  "acquirer_reference_number": {
    "type": "string",
    "nullable": true
  },
  "merchant_name": {
    "type": "string"
  },
  "merchant_uid": {
    "type": "string"
  },
  "approval_code": {
    "type": "string",
    "nullable": true
  }
} 
```

        </div>
      </div>

