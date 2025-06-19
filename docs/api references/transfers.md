# Transfers


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Transfers</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Transfers</div>
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
              
<div class="code-block curl active" id="Retrieve Transfers-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/transfers?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Transfers-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.TransfersApi;

import java.io.File;
import java.util.*;

public class TransfersApiExample {

    public static void main(String[] args) {
        
        TransfersApi apiInstance = new TransfersApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.transfersGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TransfersApi#transfersGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Transfers-code-android">
```js
import io.swagger.client.api.TransfersApi;

public class TransfersApiExample {

    public static void main(String[] args) {
        TransfersApi apiInstance = new TransfersApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.transfersGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TransfersApi#transfersGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Transfers-code-objc">
```js
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

TransfersApi *apiInstance = [[TransfersApi alloc] init];

[apiInstance transfersGetWith:from
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

<div class="code-block javascript" id="Retrieve Transfers-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.TransfersApi()
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
api.transfersGet(opts, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Transfers-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class transfersGetExample
    {
        public void main()
        {

            var apiInstance = new TransfersApi();
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.transfersGet(from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TransfersApi.transfersGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Transfers-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiTransfersApi();
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->transfersGet($from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TransfersApi->transfersGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Transfers-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::TransfersApi;

my $api_instance = WWW::SwaggerClient::TransfersApi->new();
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->transfersGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling TransfersApi->transfersGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Transfers-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TransfersApi()
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.transfers_get(from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TransfersApi->transfersGet: %s\n" % e)
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
            <h3>Delete Transfers ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Delete Transfers ID</div>
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
              
<div class="code-block curl active" id="Delete Transfers ID-code-curl">
```js
curl -X DELETE\
-H "Accept: application/json"\
"https://api.omise.co/transfers/{id}"
```
</div>

<div class="code-block java" id="Delete Transfers ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.TransfersApi;

import java.io.File;
import java.util.*;

public class TransfersApiExample {

    public static void main(String[] args) {
        
        TransfersApi apiInstance = new TransfersApi();
        String id = id_example; // String | 
        try {
            transfer result = apiInstance.transfersIdDelete(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TransfersApi#transfersIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Delete Transfers ID-code-android">
```js
import io.swagger.client.api.TransfersApi;

public class TransfersApiExample {

    public static void main(String[] args) {
        TransfersApi apiInstance = new TransfersApi();
        String id = id_example; // String | 
        try {
            transfer result = apiInstance.transfersIdDelete(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TransfersApi#transfersIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Delete Transfers ID-code-objc">
```js
String *id = id_example; // 

TransfersApi *apiInstance = [[TransfersApi alloc] init];

[apiInstance transfersIdDeleteWith:id
              completionHandler: ^(transfer output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Delete Transfers ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.TransfersApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transfersIdDelete(id, callback);
```
</div>

<div class="code-block csharp" id="Delete Transfers ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class transfersIdDeleteExample
    {
        public void main()
        {

            var apiInstance = new TransfersApi();
            var id = id_example;  // String | 

            try
            {
                transfer result = apiInstance.transfersIdDelete(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TransfersApi.transfersIdDelete: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Delete Transfers ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiTransfersApi();
$id = id_example; // String | 

try {
    $result = $api_instance->transfersIdDelete($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TransfersApi->transfersIdDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Delete Transfers ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::TransfersApi;

my $api_instance = WWW::SwaggerClient::TransfersApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->transfersIdDelete(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling TransfersApi->transfersIdDelete: $@\n";
}
```
</div>

<div class="code-block python" id="Delete Transfers ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TransfersApi()
id = id_example # String | 

try: 
    api_response = api_instance.transfers_id_delete(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TransfersApi->transfersIdDelete: %s\n" % e)
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
            <h3>Retrieve Transfers ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Transfers ID</div>
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
              
<div class="code-block curl active" id="Retrieve Transfers ID-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/transfers/{id}"
```
</div>

<div class="code-block java" id="Retrieve Transfers ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.TransfersApi;

import java.io.File;
import java.util.*;

public class TransfersApiExample {

    public static void main(String[] args) {
        
        TransfersApi apiInstance = new TransfersApi();
        String id = id_example; // String | 
        try {
            transfer result = apiInstance.transfersIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TransfersApi#transfersIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Transfers ID-code-android">
```js
import io.swagger.client.api.TransfersApi;

public class TransfersApiExample {

    public static void main(String[] args) {
        TransfersApi apiInstance = new TransfersApi();
        String id = id_example; // String | 
        try {
            transfer result = apiInstance.transfersIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TransfersApi#transfersIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Transfers ID-code-objc">
```js
String *id = id_example; // 

TransfersApi *apiInstance = [[TransfersApi alloc] init];

[apiInstance transfersIdGetWith:id
              completionHandler: ^(transfer output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Transfers ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.TransfersApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transfersIdGet(id, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Transfers ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class transfersIdGetExample
    {
        public void main()
        {

            var apiInstance = new TransfersApi();
            var id = id_example;  // String | 

            try
            {
                transfer result = apiInstance.transfersIdGet(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TransfersApi.transfersIdGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Transfers ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiTransfersApi();
$id = id_example; // String | 

try {
    $result = $api_instance->transfersIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TransfersApi->transfersIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Transfers ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::TransfersApi;

my $api_instance = WWW::SwaggerClient::TransfersApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->transfersIdGet(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling TransfersApi->transfersIdGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Transfers ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TransfersApi()
id = id_example # String | 

try: 
    api_response = api_instance.transfers_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TransfersApi->transfersIdGet: %s\n" % e)
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
            <h3>Create Transfers ID Mark As Paid</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Create Transfers ID Mark As Paid</div>
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
              
<div class="code-block curl active" id="Create Transfers ID Mark As Paid-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
"https://api.omise.co/transfers/{id}/mark_as_paid"
```
</div>

<div class="code-block java" id="Create Transfers ID Mark As Paid-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.TransfersApi;

import java.io.File;
import java.util.*;

public class TransfersApiExample {

    public static void main(String[] args) {
        
        TransfersApi apiInstance = new TransfersApi();
        String id = id_example; // String | 
        try {
            transfer result = apiInstance.transfersIdMarkAsPaidPost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TransfersApi#transfersIdMarkAsPaidPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Create Transfers ID Mark As Paid-code-android">
```js
import io.swagger.client.api.TransfersApi;

public class TransfersApiExample {

    public static void main(String[] args) {
        TransfersApi apiInstance = new TransfersApi();
        String id = id_example; // String | 
        try {
            transfer result = apiInstance.transfersIdMarkAsPaidPost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TransfersApi#transfersIdMarkAsPaidPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Create Transfers ID Mark As Paid-code-objc">
```js
String *id = id_example; // 

TransfersApi *apiInstance = [[TransfersApi alloc] init];

[apiInstance transfersIdMarkAsPaidPostWith:id
              completionHandler: ^(transfer output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Create Transfers ID Mark As Paid-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.TransfersApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transfersIdMarkAsPaidPost(id, callback);
```
</div>

<div class="code-block csharp" id="Create Transfers ID Mark As Paid-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class transfersIdMarkAsPaidPostExample
    {
        public void main()
        {

            var apiInstance = new TransfersApi();
            var id = id_example;  // String | 

            try
            {
                transfer result = apiInstance.transfersIdMarkAsPaidPost(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TransfersApi.transfersIdMarkAsPaidPost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Create Transfers ID Mark As Paid-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiTransfersApi();
$id = id_example; // String | 

try {
    $result = $api_instance->transfersIdMarkAsPaidPost($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TransfersApi->transfersIdMarkAsPaidPost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Create Transfers ID Mark As Paid-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::TransfersApi;

my $api_instance = WWW::SwaggerClient::TransfersApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->transfersIdMarkAsPaidPost(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling TransfersApi->transfersIdMarkAsPaidPost: $@\n";
}
```
</div>

<div class="code-block python" id="Create Transfers ID Mark As Paid-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TransfersApi()
id = id_example # String | 

try: 
    api_response = api_instance.transfers_id_mark_as_paid_post(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TransfersApi->transfersIdMarkAsPaidPost: %s\n" % e)
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
            <h3>Create Transfers ID Mark As Sent</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Create Transfers ID Mark As Sent</div>
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
              
<div class="code-block curl active" id="Create Transfers ID Mark As Sent-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
"https://api.omise.co/transfers/{id}/mark_as_sent"
```
</div>

<div class="code-block java" id="Create Transfers ID Mark As Sent-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.TransfersApi;

import java.io.File;
import java.util.*;

public class TransfersApiExample {

    public static void main(String[] args) {
        
        TransfersApi apiInstance = new TransfersApi();
        String id = id_example; // String | 
        try {
            transfer result = apiInstance.transfersIdMarkAsSentPost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TransfersApi#transfersIdMarkAsSentPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Create Transfers ID Mark As Sent-code-android">
```js
import io.swagger.client.api.TransfersApi;

public class TransfersApiExample {

    public static void main(String[] args) {
        TransfersApi apiInstance = new TransfersApi();
        String id = id_example; // String | 
        try {
            transfer result = apiInstance.transfersIdMarkAsSentPost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TransfersApi#transfersIdMarkAsSentPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Create Transfers ID Mark As Sent-code-objc">
```js
String *id = id_example; // 

TransfersApi *apiInstance = [[TransfersApi alloc] init];

[apiInstance transfersIdMarkAsSentPostWith:id
              completionHandler: ^(transfer output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Create Transfers ID Mark As Sent-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.TransfersApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transfersIdMarkAsSentPost(id, callback);
```
</div>

<div class="code-block csharp" id="Create Transfers ID Mark As Sent-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class transfersIdMarkAsSentPostExample
    {
        public void main()
        {

            var apiInstance = new TransfersApi();
            var id = id_example;  // String | 

            try
            {
                transfer result = apiInstance.transfersIdMarkAsSentPost(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TransfersApi.transfersIdMarkAsSentPost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Create Transfers ID Mark As Sent-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiTransfersApi();
$id = id_example; // String | 

try {
    $result = $api_instance->transfersIdMarkAsSentPost($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TransfersApi->transfersIdMarkAsSentPost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Create Transfers ID Mark As Sent-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::TransfersApi;

my $api_instance = WWW::SwaggerClient::TransfersApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->transfersIdMarkAsSentPost(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling TransfersApi->transfersIdMarkAsSentPost: $@\n";
}
```
</div>

<div class="code-block python" id="Create Transfers ID Mark As Sent-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TransfersApi()
id = id_example # String | 

try: 
    api_response = api_instance.transfers_id_mark_as_sent_post(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TransfersApi->transfersIdMarkAsSentPost: %s\n" % e)
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
            <h3>Update Transfers ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Update Transfers ID</div>
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
              
<div class="code-block curl active" id="Update Transfers ID-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/transfers/{id}"
```
</div>

<div class="code-block java" id="Update Transfers ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.TransfersApi;

import java.io.File;
import java.util.*;

public class TransfersApiExample {

    public static void main(String[] args) {
        
        TransfersApi apiInstance = new TransfersApi();
        String id = id_example; // String | 
        Boolean success = true; // Boolean | 
        String failureCode = failureCode_example; // String | 
        String failureMessage = failureMessage_example; // String | 
        try {
            transfer result = apiInstance.transfersIdPatch(id, success, failureCode, failureMessage);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TransfersApi#transfersIdPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Update Transfers ID-code-android">
```js
import io.swagger.client.api.TransfersApi;

public class TransfersApiExample {

    public static void main(String[] args) {
        TransfersApi apiInstance = new TransfersApi();
        String id = id_example; // String | 
        Boolean success = true; // Boolean | 
        String failureCode = failureCode_example; // String | 
        String failureMessage = failureMessage_example; // String | 
        try {
            transfer result = apiInstance.transfersIdPatch(id, success, failureCode, failureMessage);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TransfersApi#transfersIdPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Update Transfers ID-code-objc">
```js
String *id = id_example; // 
Boolean *success = true; //  (optional)
String *failureCode = failureCode_example; //  (optional)
String *failureMessage = failureMessage_example; //  (optional)

TransfersApi *apiInstance = [[TransfersApi alloc] init];

[apiInstance transfersIdPatchWith:id
    success:success
    failureCode:failureCode
    failureMessage:failureMessage
              completionHandler: ^(transfer output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Update Transfers ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.TransfersApi()
var id = id_example; // {{String}} 
var opts = { 
  'success': true // {{Boolean}} 
  'failureCode': failureCode_example // {{String}} 
  'failureMessage': failureMessage_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transfersIdPatch(id, opts, callback);
```
</div>

<div class="code-block csharp" id="Update Transfers ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class transfersIdPatchExample
    {
        public void main()
        {

            var apiInstance = new TransfersApi();
            var id = id_example;  // String | 
            var success = true;  // Boolean |  (optional) 
            var failureCode = failureCode_example;  // String |  (optional) 
            var failureMessage = failureMessage_example;  // String |  (optional) 

            try
            {
                transfer result = apiInstance.transfersIdPatch(id, success, failureCode, failureMessage);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TransfersApi.transfersIdPatch: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Update Transfers ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiTransfersApi();
$id = id_example; // String | 
$success = true; // Boolean | 
$failureCode = failureCode_example; // String | 
$failureMessage = failureMessage_example; // String | 

try {
    $result = $api_instance->transfersIdPatch($id, $success, $failureCode, $failureMessage);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TransfersApi->transfersIdPatch: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Update Transfers ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::TransfersApi;

my $api_instance = WWW::SwaggerClient::TransfersApi->new();
my $id = id_example; # String | 
my $success = true; # Boolean | 
my $failureCode = failureCode_example; # String | 
my $failureMessage = failureMessage_example; # String | 

eval { 
    my $result = $api_instance->transfersIdPatch(id => $id, success => $success, failureCode => $failureCode, failureMessage => $failureMessage);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling TransfersApi->transfersIdPatch: $@\n";
}
```
</div>

<div class="code-block python" id="Update Transfers ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TransfersApi()
id = id_example # String | 
success = true # Boolean |  (optional)
failureCode = failureCode_example # String |  (optional)
failureMessage = failureMessage_example # String |  (optional)

try: 
    api_response = api_instance.transfers_id_patch(id, success=success, failureCode=failureCode, failureMessage=failureMessage)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TransfersApi->transfersIdPatch: %s\n" % e)
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
| success | Boolean |
| failure_code | String |
| failure_message | String |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Create Transfers</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Create Transfers</div>
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
              
<div class="code-block curl active" id="Create Transfers-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/transfers"
```
</div>

<div class="code-block java" id="Create Transfers-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.TransfersApi;

import java.io.File;
import java.util.*;

public class TransfersApiExample {

    public static void main(String[] args) {
        
        TransfersApi apiInstance = new TransfersApi();
        Integer amount = 56; // Integer | 
        String recipient = recipient_example; // String | 
        Boolean failFast = true; // Boolean | 
        Object metadata = ; // Object | 
        Boolean splitTransfer = true; // Boolean | 
        String idempKey = idempKey_example; // String | 
        try {
            transfer result = apiInstance.transfersPost(amount, recipient, failFast, metadata, splitTransfer, idempKey);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TransfersApi#transfersPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Create Transfers-code-android">
```js
import io.swagger.client.api.TransfersApi;

public class TransfersApiExample {

    public static void main(String[] args) {
        TransfersApi apiInstance = new TransfersApi();
        Integer amount = 56; // Integer | 
        String recipient = recipient_example; // String | 
        Boolean failFast = true; // Boolean | 
        Object metadata = ; // Object | 
        Boolean splitTransfer = true; // Boolean | 
        String idempKey = idempKey_example; // String | 
        try {
            transfer result = apiInstance.transfersPost(amount, recipient, failFast, metadata, splitTransfer, idempKey);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TransfersApi#transfersPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Create Transfers-code-objc">
```js
Integer *amount = 56; //  (optional)
String *recipient = recipient_example; //  (optional)
Boolean *failFast = true; //  (optional)
Object *metadata = ; //  (optional)
Boolean *splitTransfer = true; //  (optional)
String *idempKey = idempKey_example; //  (optional)

TransfersApi *apiInstance = [[TransfersApi alloc] init];

[apiInstance transfersPostWith:amount
    recipient:recipient
    failFast:failFast
    metadata:metadata
    splitTransfer:splitTransfer
    idempKey:idempKey
              completionHandler: ^(transfer output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Create Transfers-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.TransfersApi()
var opts = { 
  'amount': 56 // {{Integer}} 
  'recipient': recipient_example // {{String}} 
  'failFast': true // {{Boolean}} 
  'metadata':  // {{Object}} 
  'splitTransfer': true // {{Boolean}} 
  'idempKey': idempKey_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transfersPost(opts, callback);
```
</div>

<div class="code-block csharp" id="Create Transfers-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class transfersPostExample
    {
        public void main()
        {

            var apiInstance = new TransfersApi();
            var amount = 56;  // Integer |  (optional) 
            var recipient = recipient_example;  // String |  (optional) 
            var failFast = true;  // Boolean |  (optional) 
            var metadata = new Object(); // Object |  (optional) 
            var splitTransfer = true;  // Boolean |  (optional) 
            var idempKey = idempKey_example;  // String |  (optional) 

            try
            {
                transfer result = apiInstance.transfersPost(amount, recipient, failFast, metadata, splitTransfer, idempKey);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TransfersApi.transfersPost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Create Transfers-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiTransfersApi();
$amount = 56; // Integer | 
$recipient = recipient_example; // String | 
$failFast = true; // Boolean | 
$metadata = ; // Object | 
$splitTransfer = true; // Boolean | 
$idempKey = idempKey_example; // String | 

try {
    $result = $api_instance->transfersPost($amount, $recipient, $failFast, $metadata, $splitTransfer, $idempKey);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TransfersApi->transfersPost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Create Transfers-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::TransfersApi;

my $api_instance = WWW::SwaggerClient::TransfersApi->new();
my $amount = 56; # Integer | 
my $recipient = recipient_example; # String | 
my $failFast = true; # Boolean | 
my $metadata = ; # Object | 
my $splitTransfer = true; # Boolean | 
my $idempKey = idempKey_example; # String | 

eval { 
    my $result = $api_instance->transfersPost(amount => $amount, recipient => $recipient, failFast => $failFast, metadata => $metadata, splitTransfer => $splitTransfer, idempKey => $idempKey);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling TransfersApi->transfersPost: $@\n";
}
```
</div>

<div class="code-block python" id="Create Transfers-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TransfersApi()
amount = 56 # Integer |  (optional)
recipient = recipient_example # String |  (optional)
failFast = true # Boolean |  (optional)
metadata =  # Object |  (optional)
splitTransfer = true # Boolean |  (optional)
idempKey = idempKey_example # String |  (optional)

try: 
    api_response = api_instance.transfers_post(amount=amount, recipient=recipient, failFast=failFast, metadata=metadata, splitTransfer=splitTransfer, idempKey=idempKey)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TransfersApi->transfersPost: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| amount | Integer |
| recipient | String |
| fail_fast | Boolean |
| metadata | Object |
| split_transfer | Boolean |
| idemp_key | String |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Transfers Search</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Transfers Search</div>
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
              
<div class="code-block curl active" id="Retrieve Transfers Search-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/transfers/search?scope=&query=&filters[amount]=&filters[created]=&filters[currency]=&filters[deleted]=&filters[fee]=&filters[paid]=&filters[paid_at]=&filters[sent]=&filters[sent_at]="
```
</div>

<div class="code-block java" id="Retrieve Transfers Search-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.TransfersApi;

import java.io.File;
import java.util.*;

public class TransfersApiExample {

    public static void main(String[] args) {
        
        TransfersApi apiInstance = new TransfersApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Integer filters[amount] = 56; // Integer | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        String filters[currency] = filters[currency]_example; // String | 
        Boolean filters[deleted] = true; // Boolean | 
        Integer filters[fee] = 56; // Integer | 
        Boolean filters[paid] = true; // Boolean | 
        Date filters[paidAt] = 2013-10-20T19:20:30+01:00; // Date | 
        Boolean filters[sent] = true; // Boolean | 
        Date filters[sentAt] = 2013-10-20T19:20:30+01:00; // Date | 
        try {
            transfer result = apiInstance.transfersSearchGet(scope, query, filters[amount], filters[created], filters[currency], filters[deleted], filters[fee], filters[paid], filters[paidAt], filters[sent], filters[sentAt]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TransfersApi#transfersSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Transfers Search-code-android">
```js
import io.swagger.client.api.TransfersApi;

public class TransfersApiExample {

    public static void main(String[] args) {
        TransfersApi apiInstance = new TransfersApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Integer filters[amount] = 56; // Integer | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        String filters[currency] = filters[currency]_example; // String | 
        Boolean filters[deleted] = true; // Boolean | 
        Integer filters[fee] = 56; // Integer | 
        Boolean filters[paid] = true; // Boolean | 
        Date filters[paidAt] = 2013-10-20T19:20:30+01:00; // Date | 
        Boolean filters[sent] = true; // Boolean | 
        Date filters[sentAt] = 2013-10-20T19:20:30+01:00; // Date | 
        try {
            transfer result = apiInstance.transfersSearchGet(scope, query, filters[amount], filters[created], filters[currency], filters[deleted], filters[fee], filters[paid], filters[paidAt], filters[sent], filters[sentAt]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TransfersApi#transfersSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Transfers Search-code-objc">
```js
String *scope = scope_example; //  (optional) (default to transfer)
String *query = query_example; //  (optional)
Integer *filters[amount] = 56; //  (optional)
Date *filters[created] = 2013-10-20T19:20:30+01:00; //  (optional)
String *filters[currency] = filters[currency]_example; //  (optional)
Boolean *filters[deleted] = true; //  (optional)
Integer *filters[fee] = 56; //  (optional)
Boolean *filters[paid] = true; //  (optional)
Date *filters[paidAt] = 2013-10-20T19:20:30+01:00; //  (optional)
Boolean *filters[sent] = true; //  (optional)
Date *filters[sentAt] = 2013-10-20T19:20:30+01:00; //  (optional)

TransfersApi *apiInstance = [[TransfersApi alloc] init];

[apiInstance transfersSearchGetWith:scope
    query:query
    filters[amount]:filters[amount]
    filters[created]:filters[created]
    filters[currency]:filters[currency]
    filters[deleted]:filters[deleted]
    filters[fee]:filters[fee]
    filters[paid]:filters[paid]
    filters[paidAt]:filters[paidAt]
    filters[sent]:filters[sent]
    filters[sentAt]:filters[sentAt]
              completionHandler: ^(transfer output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Transfers Search-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.TransfersApi()
var opts = { 
  'scope': scope_example, // {{String}} 
  'query': query_example, // {{String}} 
  'filters[amount]': 56, // {{Integer}} 
  'filters[created]': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'filters[currency]': filters[currency]_example, // {{String}} 
  'filters[deleted]': true, // {{Boolean}} 
  'filters[fee]': 56, // {{Integer}} 
  'filters[paid]': true, // {{Boolean}} 
  'filters[paidAt]': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'filters[sent]': true, // {{Boolean}} 
  'filters[sentAt]': 2013-10-20T19:20:30+01:00 // {{Date}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transfersSearchGet(opts, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Transfers Search-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class transfersSearchGetExample
    {
        public void main()
        {

            var apiInstance = new TransfersApi();
            var scope = scope_example;  // String |  (optional)  (default to transfer)
            var query = query_example;  // String |  (optional) 
            var filters[amount] = 56;  // Integer |  (optional) 
            var filters[created] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var filters[currency] = filters[currency]_example;  // String |  (optional) 
            var filters[deleted] = true;  // Boolean |  (optional) 
            var filters[fee] = 56;  // Integer |  (optional) 
            var filters[paid] = true;  // Boolean |  (optional) 
            var filters[paidAt] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var filters[sent] = true;  // Boolean |  (optional) 
            var filters[sentAt] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 

            try
            {
                transfer result = apiInstance.transfersSearchGet(scope, query, filters[amount], filters[created], filters[currency], filters[deleted], filters[fee], filters[paid], filters[paidAt], filters[sent], filters[sentAt]);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TransfersApi.transfersSearchGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Transfers Search-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiTransfersApi();
$scope = scope_example; // String | 
$query = query_example; // String | 
$filters[amount] = 56; // Integer | 
$filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
$filters[currency] = filters[currency]_example; // String | 
$filters[deleted] = true; // Boolean | 
$filters[fee] = 56; // Integer | 
$filters[paid] = true; // Boolean | 
$filters[paidAt] = 2013-10-20T19:20:30+01:00; // Date | 
$filters[sent] = true; // Boolean | 
$filters[sentAt] = 2013-10-20T19:20:30+01:00; // Date | 

try {
    $result = $api_instance->transfersSearchGet($scope, $query, $filters[amount], $filters[created], $filters[currency], $filters[deleted], $filters[fee], $filters[paid], $filters[paidAt], $filters[sent], $filters[sentAt]);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TransfersApi->transfersSearchGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Transfers Search-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::TransfersApi;

my $api_instance = WWW::SwaggerClient::TransfersApi->new();
my $scope = scope_example; # String | 
my $query = query_example; # String | 
my $filters[amount] = 56; # Integer | 
my $filters[created] = 2013-10-20T19:20:30+01:00; # Date | 
my $filters[currency] = filters[currency]_example; # String | 
my $filters[deleted] = true; # Boolean | 
my $filters[fee] = 56; # Integer | 
my $filters[paid] = true; # Boolean | 
my $filters[paidAt] = 2013-10-20T19:20:30+01:00; # Date | 
my $filters[sent] = true; # Boolean | 
my $filters[sentAt] = 2013-10-20T19:20:30+01:00; # Date | 

eval { 
    my $result = $api_instance->transfersSearchGet(scope => $scope, query => $query, filters[amount] => $filters[amount], filters[created] => $filters[created], filters[currency] => $filters[currency], filters[deleted] => $filters[deleted], filters[fee] => $filters[fee], filters[paid] => $filters[paid], filters[paidAt] => $filters[paidAt], filters[sent] => $filters[sent], filters[sentAt] => $filters[sentAt]);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling TransfersApi->transfersSearchGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Transfers Search-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TransfersApi()
scope = scope_example # String |  (optional) (default to transfer)
query = query_example # String |  (optional)
filters[amount] = 56 # Integer |  (optional)
filters[created] = 2013-10-20T19:20:30+01:00 # Date |  (optional)
filters[currency] = filters[currency]_example # String |  (optional)
filters[deleted] = true # Boolean |  (optional)
filters[fee] = 56 # Integer |  (optional)
filters[paid] = true # Boolean |  (optional)
filters[paidAt] = 2013-10-20T19:20:30+01:00 # Date |  (optional)
filters[sent] = true # Boolean |  (optional)
filters[sentAt] = 2013-10-20T19:20:30+01:00 # Date |  (optional)

try: 
    api_response = api_instance.transfers_search_get(scope=scope, query=query, filters[amount]=filters[amount], filters[created]=filters[created], filters[currency]=filters[currency], filters[deleted]=filters[deleted], filters[fee]=filters[fee], filters[paid]=filters[paid], filters[paidAt]=filters[paidAt], filters[sent]=filters[sent], filters[sentAt]=filters[sentAt])
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TransfersApi->transfersSearchGet: %s\n" % e)
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
| filters[deleted] | Boolean |
| filters[fee] | Integer |
| filters[paid] | Boolean |
| filters[paid_at] | Date (date-time) |
| filters[sent] | Boolean |
| filters[sent_at] | Date (date-time) |

          </div>
        </div>
        <div>
          ### Responses

 ### Status: 200

```json
 {
  "object": {
    "pattern": "transfer",
    "type": "string",
    "default": "transfer"
  },
  "id": {
    "pattern": "trsf_[0-9a-z]+",
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
    "type": "string",
    "nullable": true
  },
  "deleted": {
    "type": "boolean",
    "enum": [
      true,
      false
    ]
  },
  "fail_fast": {
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
  "sent": {
    "type": "boolean",
    "enum": [
      true,
      false
    ]
  },
  "sendable": {
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
  "fee": {
    "type": "integer"
  },
  "metadata": {
    "type": "object",
    "default": {}
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
                                "$ref": "#/components/schemas/bank_account"
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
                                    "$ref": "#/components/schemas/schedule"
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
      },
      {
        "type": "string"
      }
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
  "failure_code": {
    "type": "string",
    "nullable": true
  },
  "failure_message": {
    "type": "string",
    "nullable": true
  },
  "paid_at": {
    "type": "string",
    "format": "date-time",
    "nullable": true
  },
  "sent_at": {
    "type": "string",
    "format": "date-time",
    "nullable": true
  },
  "balance_hold_at": {
    "type": "string",
    "format": "date-time",
    "nullable": true
  },
  "created_at": {
    "type": "string",
    "format": "date-time"
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
  "fee_vat": {
    "type": "integer"
  },
  "net": {
    "type": "integer"
  },
  "total_fee": {
    "type": "integer"
  },
  "split_transfer_group_id": {
    "type": "string",
    "nullable": true
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

