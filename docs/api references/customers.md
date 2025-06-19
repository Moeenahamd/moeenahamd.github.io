# Customers


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Customers</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Customers</div>
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
              
<div class="code-block curl active" id="Retrieve Customers-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/customers?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Customers-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CustomersApi;

import java.io.File;
import java.util.*;

public class CustomersApiExample {

    public static void main(String[] args) {
        
        CustomersApi apiInstance = new CustomersApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.customersGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomersApi#customersGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Customers-code-android">
```js
import io.swagger.client.api.CustomersApi;

public class CustomersApiExample {

    public static void main(String[] args) {
        CustomersApi apiInstance = new CustomersApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.customersGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomersApi#customersGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Customers-code-objc">
```js
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

CustomersApi *apiInstance = [[CustomersApi alloc] init];

[apiInstance customersGetWith:from
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

<div class="code-block javascript" id="Retrieve Customers-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.CustomersApi()
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
api.customersGet(opts, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Customers-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class customersGetExample
    {
        public void main()
        {

            var apiInstance = new CustomersApi();
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.customersGet(from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CustomersApi.customersGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Customers-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiCustomersApi();
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->customersGet($from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CustomersApi->customersGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Customers-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CustomersApi;

my $api_instance = WWW::SwaggerClient::CustomersApi->new();
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->customersGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CustomersApi->customersGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Customers-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CustomersApi()
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.customers_get(from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CustomersApi->customersGet: %s\n" % e)
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
            <h3>Delete Customers ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Delete Customers ID</div>
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
              
<div class="code-block curl active" id="Delete Customers ID-code-curl">
```js
curl -X DELETE\
-H "Accept: application/json"\
"https://api.omise.co/customers/{id}"
```
</div>

<div class="code-block java" id="Delete Customers ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CustomersApi;

import java.io.File;
import java.util.*;

public class CustomersApiExample {

    public static void main(String[] args) {
        
        CustomersApi apiInstance = new CustomersApi();
        String id = id_example; // String | 
        try {
            customer result = apiInstance.customersIdDelete(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomersApi#customersIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Delete Customers ID-code-android">
```js
import io.swagger.client.api.CustomersApi;

public class CustomersApiExample {

    public static void main(String[] args) {
        CustomersApi apiInstance = new CustomersApi();
        String id = id_example; // String | 
        try {
            customer result = apiInstance.customersIdDelete(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomersApi#customersIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Delete Customers ID-code-objc">
```js
String *id = id_example; // 

CustomersApi *apiInstance = [[CustomersApi alloc] init];

[apiInstance customersIdDeleteWith:id
              completionHandler: ^(customer output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Delete Customers ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.CustomersApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.customersIdDelete(id, callback);
```
</div>

<div class="code-block csharp" id="Delete Customers ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class customersIdDeleteExample
    {
        public void main()
        {

            var apiInstance = new CustomersApi();
            var id = id_example;  // String | 

            try
            {
                customer result = apiInstance.customersIdDelete(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CustomersApi.customersIdDelete: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Delete Customers ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiCustomersApi();
$id = id_example; // String | 

try {
    $result = $api_instance->customersIdDelete($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CustomersApi->customersIdDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Delete Customers ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CustomersApi;

my $api_instance = WWW::SwaggerClient::CustomersApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->customersIdDelete(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CustomersApi->customersIdDelete: $@\n";
}
```
</div>

<div class="code-block python" id="Delete Customers ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CustomersApi()
id = id_example # String | 

try: 
    api_response = api_instance.customers_id_delete(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CustomersApi->customersIdDelete: %s\n" % e)
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
            <h3>Retrieve Customers ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Customers ID</div>
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
              
<div class="code-block curl active" id="Retrieve Customers ID-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/customers/{id}"
```
</div>

<div class="code-block java" id="Retrieve Customers ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CustomersApi;

import java.io.File;
import java.util.*;

public class CustomersApiExample {

    public static void main(String[] args) {
        
        CustomersApi apiInstance = new CustomersApi();
        String id = id_example; // String | 
        try {
            customer result = apiInstance.customersIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomersApi#customersIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Customers ID-code-android">
```js
import io.swagger.client.api.CustomersApi;

public class CustomersApiExample {

    public static void main(String[] args) {
        CustomersApi apiInstance = new CustomersApi();
        String id = id_example; // String | 
        try {
            customer result = apiInstance.customersIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomersApi#customersIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Customers ID-code-objc">
```js
String *id = id_example; // 

CustomersApi *apiInstance = [[CustomersApi alloc] init];

[apiInstance customersIdGetWith:id
              completionHandler: ^(customer output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Customers ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.CustomersApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.customersIdGet(id, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Customers ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class customersIdGetExample
    {
        public void main()
        {

            var apiInstance = new CustomersApi();
            var id = id_example;  // String | 

            try
            {
                customer result = apiInstance.customersIdGet(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CustomersApi.customersIdGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Customers ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiCustomersApi();
$id = id_example; // String | 

try {
    $result = $api_instance->customersIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CustomersApi->customersIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Customers ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CustomersApi;

my $api_instance = WWW::SwaggerClient::CustomersApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->customersIdGet(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CustomersApi->customersIdGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Customers ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CustomersApi()
id = id_example # String | 

try: 
    api_response = api_instance.customers_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CustomersApi->customersIdGet: %s\n" % e)
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
            <h3>Update Customers ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Update Customers ID</div>
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
              
<div class="code-block curl active" id="Update Customers ID-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/customers/{id}"
```
</div>

<div class="code-block java" id="Update Customers ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CustomersApi;

import java.io.File;
import java.util.*;

public class CustomersApiExample {

    public static void main(String[] args) {
        
        CustomersApi apiInstance = new CustomersApi();
        String id = id_example; // String | 
        Object metadata = ; // Object | 
        String card = card_example; // String | 
        String defaultCard = defaultCard_example; // String | 
        String linkedAccount = linkedAccount_example; // String | 
        String description = description_example; // String | 
        String email = email_example; // String | 
        try {
            customer result = apiInstance.customersIdPatch(id, metadata, card, defaultCard, linkedAccount, description, email);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomersApi#customersIdPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Update Customers ID-code-android">
```js
import io.swagger.client.api.CustomersApi;

public class CustomersApiExample {

    public static void main(String[] args) {
        CustomersApi apiInstance = new CustomersApi();
        String id = id_example; // String | 
        Object metadata = ; // Object | 
        String card = card_example; // String | 
        String defaultCard = defaultCard_example; // String | 
        String linkedAccount = linkedAccount_example; // String | 
        String description = description_example; // String | 
        String email = email_example; // String | 
        try {
            customer result = apiInstance.customersIdPatch(id, metadata, card, defaultCard, linkedAccount, description, email);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomersApi#customersIdPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Update Customers ID-code-objc">
```js
String *id = id_example; // 
Object *metadata = ; //  (optional)
String *card = card_example; //  (optional)
String *defaultCard = defaultCard_example; //  (optional)
String *linkedAccount = linkedAccount_example; //  (optional)
String *description = description_example; //  (optional)
String *email = email_example; //  (optional)

CustomersApi *apiInstance = [[CustomersApi alloc] init];

[apiInstance customersIdPatchWith:id
    metadata:metadata
    card:card
    defaultCard:defaultCard
    linkedAccount:linkedAccount
    description:description
    email:email
              completionHandler: ^(customer output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Update Customers ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.CustomersApi()
var id = id_example; // {{String}} 
var opts = { 
  'metadata':  // {{Object}} 
  'card': card_example // {{String}} 
  'defaultCard': defaultCard_example // {{String}} 
  'linkedAccount': linkedAccount_example // {{String}} 
  'description': description_example // {{String}} 
  'email': email_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.customersIdPatch(id, opts, callback);
```
</div>

<div class="code-block csharp" id="Update Customers ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class customersIdPatchExample
    {
        public void main()
        {

            var apiInstance = new CustomersApi();
            var id = id_example;  // String | 
            var metadata = new Object(); // Object |  (optional) 
            var card = card_example;  // String |  (optional) 
            var defaultCard = defaultCard_example;  // String |  (optional) 
            var linkedAccount = linkedAccount_example;  // String |  (optional) 
            var description = description_example;  // String |  (optional) 
            var email = email_example;  // String |  (optional) 

            try
            {
                customer result = apiInstance.customersIdPatch(id, metadata, card, defaultCard, linkedAccount, description, email);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CustomersApi.customersIdPatch: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Update Customers ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiCustomersApi();
$id = id_example; // String | 
$metadata = ; // Object | 
$card = card_example; // String | 
$defaultCard = defaultCard_example; // String | 
$linkedAccount = linkedAccount_example; // String | 
$description = description_example; // String | 
$email = email_example; // String | 

try {
    $result = $api_instance->customersIdPatch($id, $metadata, $card, $defaultCard, $linkedAccount, $description, $email);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CustomersApi->customersIdPatch: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Update Customers ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CustomersApi;

my $api_instance = WWW::SwaggerClient::CustomersApi->new();
my $id = id_example; # String | 
my $metadata = ; # Object | 
my $card = card_example; # String | 
my $defaultCard = defaultCard_example; # String | 
my $linkedAccount = linkedAccount_example; # String | 
my $description = description_example; # String | 
my $email = email_example; # String | 

eval { 
    my $result = $api_instance->customersIdPatch(id => $id, metadata => $metadata, card => $card, defaultCard => $defaultCard, linkedAccount => $linkedAccount, description => $description, email => $email);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CustomersApi->customersIdPatch: $@\n";
}
```
</div>

<div class="code-block python" id="Update Customers ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CustomersApi()
id = id_example # String | 
metadata =  # Object |  (optional)
card = card_example # String |  (optional)
defaultCard = defaultCard_example # String |  (optional)
linkedAccount = linkedAccount_example # String |  (optional)
description = description_example # String |  (optional)
email = email_example # String |  (optional)

try: 
    api_response = api_instance.customers_id_patch(id, metadata=metadata, card=card, defaultCard=defaultCard, linkedAccount=linkedAccount, description=description, email=email)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CustomersApi->customersIdPatch: %s\n" % e)
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
| metadata | Object |
| card | String |
| default_card | String |
| linked_account | String |
| description | String |
| email | String |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Customers ID Schedules</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Customers ID Schedules</div>
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
              
<div class="code-block curl active" id="Retrieve Customers ID Schedules-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/customers/{id}/schedules?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Customers ID Schedules-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CustomersApi;

import java.io.File;
import java.util.*;

public class CustomersApiExample {

    public static void main(String[] args) {
        
        CustomersApi apiInstance = new CustomersApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.customersIdSchedulesGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomersApi#customersIdSchedulesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Customers ID Schedules-code-android">
```js
import io.swagger.client.api.CustomersApi;

public class CustomersApiExample {

    public static void main(String[] args) {
        CustomersApi apiInstance = new CustomersApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.customersIdSchedulesGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomersApi#customersIdSchedulesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Customers ID Schedules-code-objc">
```js
String *id = id_example; // 
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

CustomersApi *apiInstance = [[CustomersApi alloc] init];

[apiInstance customersIdSchedulesGetWith:id
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

<div class="code-block javascript" id="Retrieve Customers ID Schedules-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.CustomersApi()
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
api.customersIdSchedulesGet(id, opts, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Customers ID Schedules-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class customersIdSchedulesGetExample
    {
        public void main()
        {

            var apiInstance = new CustomersApi();
            var id = id_example;  // String | 
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.customersIdSchedulesGet(id, from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CustomersApi.customersIdSchedulesGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Customers ID Schedules-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiCustomersApi();
$id = id_example; // String | 
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->customersIdSchedulesGet($id, $from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CustomersApi->customersIdSchedulesGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Customers ID Schedules-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CustomersApi;

my $api_instance = WWW::SwaggerClient::CustomersApi->new();
my $id = id_example; # String | 
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->customersIdSchedulesGet(id => $id, from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CustomersApi->customersIdSchedulesGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Customers ID Schedules-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CustomersApi()
id = id_example # String | 
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.customers_id_schedules_get(id, from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CustomersApi->customersIdSchedulesGet: %s\n" % e)
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
            <h3>Create Customers</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Create Customers</div>
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
              
<div class="code-block curl active" id="Create Customers-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/customers"
```
</div>

<div class="code-block java" id="Create Customers-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CustomersApi;

import java.io.File;
import java.util.*;

public class CustomersApiExample {

    public static void main(String[] args) {
        
        CustomersApi apiInstance = new CustomersApi();
        Object metadata = ; // Object | 
        String card = card_example; // String | 
        String description = description_example; // String | 
        String email = email_example; // String | 
        String linkedAccount = linkedAccount_example; // String | 
        try {
            customer result = apiInstance.customersPost(metadata, card, description, email, linkedAccount);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomersApi#customersPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Create Customers-code-android">
```js
import io.swagger.client.api.CustomersApi;

public class CustomersApiExample {

    public static void main(String[] args) {
        CustomersApi apiInstance = new CustomersApi();
        Object metadata = ; // Object | 
        String card = card_example; // String | 
        String description = description_example; // String | 
        String email = email_example; // String | 
        String linkedAccount = linkedAccount_example; // String | 
        try {
            customer result = apiInstance.customersPost(metadata, card, description, email, linkedAccount);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomersApi#customersPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Create Customers-code-objc">
```js
Object *metadata = ; //  (optional)
String *card = card_example; //  (optional)
String *description = description_example; //  (optional)
String *email = email_example; //  (optional)
String *linkedAccount = linkedAccount_example; //  (optional)

CustomersApi *apiInstance = [[CustomersApi alloc] init];

[apiInstance customersPostWith:metadata
    card:card
    description:description
    email:email
    linkedAccount:linkedAccount
              completionHandler: ^(customer output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Create Customers-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.CustomersApi()
var opts = { 
  'metadata':  // {{Object}} 
  'card': card_example // {{String}} 
  'description': description_example // {{String}} 
  'email': email_example // {{String}} 
  'linkedAccount': linkedAccount_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.customersPost(opts, callback);
```
</div>

<div class="code-block csharp" id="Create Customers-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class customersPostExample
    {
        public void main()
        {

            var apiInstance = new CustomersApi();
            var metadata = new Object(); // Object |  (optional) 
            var card = card_example;  // String |  (optional) 
            var description = description_example;  // String |  (optional) 
            var email = email_example;  // String |  (optional) 
            var linkedAccount = linkedAccount_example;  // String |  (optional) 

            try
            {
                customer result = apiInstance.customersPost(metadata, card, description, email, linkedAccount);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CustomersApi.customersPost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Create Customers-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiCustomersApi();
$metadata = ; // Object | 
$card = card_example; // String | 
$description = description_example; // String | 
$email = email_example; // String | 
$linkedAccount = linkedAccount_example; // String | 

try {
    $result = $api_instance->customersPost($metadata, $card, $description, $email, $linkedAccount);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CustomersApi->customersPost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Create Customers-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CustomersApi;

my $api_instance = WWW::SwaggerClient::CustomersApi->new();
my $metadata = ; # Object | 
my $card = card_example; # String | 
my $description = description_example; # String | 
my $email = email_example; # String | 
my $linkedAccount = linkedAccount_example; # String | 

eval { 
    my $result = $api_instance->customersPost(metadata => $metadata, card => $card, description => $description, email => $email, linkedAccount => $linkedAccount);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CustomersApi->customersPost: $@\n";
}
```
</div>

<div class="code-block python" id="Create Customers-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CustomersApi()
metadata =  # Object |  (optional)
card = card_example # String |  (optional)
description = description_example # String |  (optional)
email = email_example # String |  (optional)
linkedAccount = linkedAccount_example # String |  (optional)

try: 
    api_response = api_instance.customers_post(metadata=metadata, card=card, description=description, email=email, linkedAccount=linkedAccount)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CustomersApi->customersPost: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| metadata | Object |
| card | String |
| description | String |
| email | String |
| linked_account | String |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Customers Search</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Customers Search</div>
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
              
<div class="code-block curl active" id="Retrieve Customers Search-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/customers/search?scope=&query=&filters[created]="
```
</div>

<div class="code-block java" id="Retrieve Customers Search-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CustomersApi;

import java.io.File;
import java.util.*;

public class CustomersApiExample {

    public static void main(String[] args) {
        
        CustomersApi apiInstance = new CustomersApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        try {
            customer result = apiInstance.customersSearchGet(scope, query, filters[created]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomersApi#customersSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Customers Search-code-android">
```js
import io.swagger.client.api.CustomersApi;

public class CustomersApiExample {

    public static void main(String[] args) {
        CustomersApi apiInstance = new CustomersApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        try {
            customer result = apiInstance.customersSearchGet(scope, query, filters[created]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomersApi#customersSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Customers Search-code-objc">
```js
String *scope = scope_example; //  (optional) (default to customer)
String *query = query_example; //  (optional)
Date *filters[created] = 2013-10-20T19:20:30+01:00; //  (optional)

CustomersApi *apiInstance = [[CustomersApi alloc] init];

[apiInstance customersSearchGetWith:scope
    query:query
    filters[created]:filters[created]
              completionHandler: ^(customer output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Customers Search-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.CustomersApi()
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
api.customersSearchGet(opts, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Customers Search-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class customersSearchGetExample
    {
        public void main()
        {

            var apiInstance = new CustomersApi();
            var scope = scope_example;  // String |  (optional)  (default to customer)
            var query = query_example;  // String |  (optional) 
            var filters[created] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 

            try
            {
                customer result = apiInstance.customersSearchGet(scope, query, filters[created]);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CustomersApi.customersSearchGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Customers Search-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiCustomersApi();
$scope = scope_example; // String | 
$query = query_example; // String | 
$filters[created] = 2013-10-20T19:20:30+01:00; // Date | 

try {
    $result = $api_instance->customersSearchGet($scope, $query, $filters[created]);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CustomersApi->customersSearchGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Customers Search-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CustomersApi;

my $api_instance = WWW::SwaggerClient::CustomersApi->new();
my $scope = scope_example; # String | 
my $query = query_example; # String | 
my $filters[created] = 2013-10-20T19:20:30+01:00; # Date | 

eval { 
    my $result = $api_instance->customersSearchGet(scope => $scope, query => $query, filters[created] => $filters[created]);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CustomersApi->customersSearchGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Customers Search-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CustomersApi()
scope = scope_example # String |  (optional) (default to customer)
query = query_example # String |  (optional)
filters[created] = 2013-10-20T19:20:30+01:00 # Date |  (optional)

try: 
    api_response = api_instance.customers_search_get(scope=scope, query=query, filters[created]=filters[created])
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CustomersApi->customersSearchGet: %s\n" % e)
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

```json
 {
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
```

        </div>
      </div>

