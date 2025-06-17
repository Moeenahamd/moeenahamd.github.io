# Transfers


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>transfersGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">transfersGet</div>
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
              
<div class="code-block curl active" id="transfersGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/transfers?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="transfersGet-code-java">
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

<div class="code-block android" id="transfersGet-code-android">
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

<div class="code-block objc" id="transfersGet-code-objc">
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

<div class="code-block javascript" id="transfersGet-code-javascript">
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

<div class="code-block csharp" id="transfersGet-code-csharp">
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

<div class="code-block php" id="transfersGet-code-php">
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

<div class="code-block perl" id="transfersGet-code-perl">
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

<div class="code-block python" id="transfersGet-code-python">
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
            <h3>transfersIdDelete</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">transfersIdDelete</div>
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
              
<div class="code-block curl active" id="transfersIdDelete-code-curl">
```js
curl -X DELETE\
-H "Accept: application/json"\
"https://api.omise.co/transfers/{id}"
```
</div>

<div class="code-block java" id="transfersIdDelete-code-java">
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

<div class="code-block android" id="transfersIdDelete-code-android">
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

<div class="code-block objc" id="transfersIdDelete-code-objc">
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

<div class="code-block javascript" id="transfersIdDelete-code-javascript">
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

<div class="code-block csharp" id="transfersIdDelete-code-csharp">
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

<div class="code-block php" id="transfersIdDelete-code-php">
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

<div class="code-block perl" id="transfersIdDelete-code-perl">
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

<div class="code-block python" id="transfersIdDelete-code-python">
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
            <h3>transfersIdGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">transfersIdGet</div>
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
              
<div class="code-block curl active" id="transfersIdGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/transfers/{id}"
```
</div>

<div class="code-block java" id="transfersIdGet-code-java">
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

<div class="code-block android" id="transfersIdGet-code-android">
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

<div class="code-block objc" id="transfersIdGet-code-objc">
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

<div class="code-block javascript" id="transfersIdGet-code-javascript">
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

<div class="code-block csharp" id="transfersIdGet-code-csharp">
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

<div class="code-block php" id="transfersIdGet-code-php">
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

<div class="code-block perl" id="transfersIdGet-code-perl">
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

<div class="code-block python" id="transfersIdGet-code-python">
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
            <h3>transfersIdMarkAsPaidPost</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">transfersIdMarkAsPaidPost</div>
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
              
<div class="code-block curl active" id="transfersIdMarkAsPaidPost-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
"https://api.omise.co/transfers/{id}/mark_as_paid"
```
</div>

<div class="code-block java" id="transfersIdMarkAsPaidPost-code-java">
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

<div class="code-block android" id="transfersIdMarkAsPaidPost-code-android">
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

<div class="code-block objc" id="transfersIdMarkAsPaidPost-code-objc">
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

<div class="code-block javascript" id="transfersIdMarkAsPaidPost-code-javascript">
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

<div class="code-block csharp" id="transfersIdMarkAsPaidPost-code-csharp">
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

<div class="code-block php" id="transfersIdMarkAsPaidPost-code-php">
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

<div class="code-block perl" id="transfersIdMarkAsPaidPost-code-perl">
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

<div class="code-block python" id="transfersIdMarkAsPaidPost-code-python">
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
            <h3>transfersIdMarkAsSentPost</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">transfersIdMarkAsSentPost</div>
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
              
<div class="code-block curl active" id="transfersIdMarkAsSentPost-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
"https://api.omise.co/transfers/{id}/mark_as_sent"
```
</div>

<div class="code-block java" id="transfersIdMarkAsSentPost-code-java">
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

<div class="code-block android" id="transfersIdMarkAsSentPost-code-android">
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

<div class="code-block objc" id="transfersIdMarkAsSentPost-code-objc">
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

<div class="code-block javascript" id="transfersIdMarkAsSentPost-code-javascript">
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

<div class="code-block csharp" id="transfersIdMarkAsSentPost-code-csharp">
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

<div class="code-block php" id="transfersIdMarkAsSentPost-code-php">
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

<div class="code-block perl" id="transfersIdMarkAsSentPost-code-perl">
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

<div class="code-block python" id="transfersIdMarkAsSentPost-code-python">
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
            <h3>transfersIdPatch</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">transfersIdPatch</div>
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
              
<div class="code-block curl active" id="transfersIdPatch-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/transfers/{id}"
```
</div>

<div class="code-block java" id="transfersIdPatch-code-java">
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

<div class="code-block android" id="transfersIdPatch-code-android">
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

<div class="code-block objc" id="transfersIdPatch-code-objc">
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

<div class="code-block javascript" id="transfersIdPatch-code-javascript">
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

<div class="code-block csharp" id="transfersIdPatch-code-csharp">
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

<div class="code-block php" id="transfersIdPatch-code-php">
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

<div class="code-block perl" id="transfersIdPatch-code-perl">
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

<div class="code-block python" id="transfersIdPatch-code-python">
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
            <h3>transfersPost</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">transfersPost</div>
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
              
<div class="code-block curl active" id="transfersPost-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/transfers"
```
</div>

<div class="code-block java" id="transfersPost-code-java">
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

<div class="code-block android" id="transfersPost-code-android">
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

<div class="code-block objc" id="transfersPost-code-objc">
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

<div class="code-block javascript" id="transfersPost-code-javascript">
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

<div class="code-block csharp" id="transfersPost-code-csharp">
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

<div class="code-block php" id="transfersPost-code-php">
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

<div class="code-block perl" id="transfersPost-code-perl">
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

<div class="code-block python" id="transfersPost-code-python">
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
            <h3>transfersSearchGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">transfersSearchGet</div>
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
              
<div class="code-block curl active" id="transfersSearchGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/transfers/search?scope=&query=&filters[amount]=&filters[created]=&filters[currency]=&filters[deleted]=&filters[fee]=&filters[paid]=&filters[paid_at]=&filters[sent]=&filters[sent_at]="
```
</div>

<div class="code-block java" id="transfersSearchGet-code-java">
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

<div class="code-block android" id="transfersSearchGet-code-android">
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

<div class="code-block objc" id="transfersSearchGet-code-objc">
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

<div class="code-block javascript" id="transfersSearchGet-code-javascript">
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

<div class="code-block csharp" id="transfersSearchGet-code-csharp">
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

<div class="code-block php" id="transfersSearchGet-code-php">
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

<div class="code-block perl" id="transfersSearchGet-code-perl">
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

<div class="code-block python" id="transfersSearchGet-code-python">
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

