# Dispute


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Create Charges ID Disputes</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Create Charges ID Disputes</div>
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
              
<div class="code-block curl active" id="Create Charges ID Disputes-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
"https://api.omise.co/charges/{id}/disputes"
```
</div>

<div class="code-block java" id="Create Charges ID Disputes-code-java">
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

<div class="code-block android" id="Create Charges ID Disputes-code-android">
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

<div class="code-block objc" id="Create Charges ID Disputes-code-objc">
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

<div class="code-block javascript" id="Create Charges ID Disputes-code-javascript">
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

<div class="code-block csharp" id="Create Charges ID Disputes-code-csharp">
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

<div class="code-block php" id="Create Charges ID Disputes-code-php">
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

<div class="code-block perl" id="Create Charges ID Disputes-code-perl">
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

<div class="code-block python" id="Create Charges ID Disputes-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Disputes Closed</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Disputes Closed</div>
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
              
<div class="code-block curl active" id="Retrieve Disputes Closed-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/disputes/closed?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Disputes Closed-code-java">
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

<div class="code-block android" id="Retrieve Disputes Closed-code-android">
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

<div class="code-block objc" id="Retrieve Disputes Closed-code-objc">
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

<div class="code-block javascript" id="Retrieve Disputes Closed-code-javascript">
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

<div class="code-block csharp" id="Retrieve Disputes Closed-code-csharp">
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

<div class="code-block php" id="Retrieve Disputes Closed-code-php">
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

<div class="code-block perl" id="Retrieve Disputes Closed-code-perl">
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

<div class="code-block python" id="Retrieve Disputes Closed-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Disputes</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Disputes</div>
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
              
<div class="code-block curl active" id="Retrieve Disputes-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/disputes?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Disputes-code-java">
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

<div class="code-block android" id="Retrieve Disputes-code-android">
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

<div class="code-block objc" id="Retrieve Disputes-code-objc">
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

<div class="code-block javascript" id="Retrieve Disputes-code-javascript">
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

<div class="code-block csharp" id="Retrieve Disputes-code-csharp">
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

<div class="code-block php" id="Retrieve Disputes-code-php">
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

<div class="code-block perl" id="Retrieve Disputes-code-perl">
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

<div class="code-block python" id="Retrieve Disputes-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Update Disputes ID Accept</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Update Disputes ID Accept</div>
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
              
<div class="code-block curl active" id="Update Disputes ID Accept-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
"https://api.omise.co/disputes/{id}/accept"
```
</div>

<div class="code-block java" id="Update Disputes ID Accept-code-java">
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

<div class="code-block android" id="Update Disputes ID Accept-code-android">
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

<div class="code-block objc" id="Update Disputes ID Accept-code-objc">
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

<div class="code-block javascript" id="Update Disputes ID Accept-code-javascript">
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

<div class="code-block csharp" id="Update Disputes ID Accept-code-csharp">
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

<div class="code-block php" id="Update Disputes ID Accept-code-php">
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

<div class="code-block perl" id="Update Disputes ID Accept-code-perl">
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

<div class="code-block python" id="Update Disputes ID Accept-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Update Disputes ID Close</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Update Disputes ID Close</div>
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
              
<div class="code-block curl active" id="Update Disputes ID Close-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/disputes/{id}/close"
```
</div>

<div class="code-block java" id="Update Disputes ID Close-code-java">
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

<div class="code-block android" id="Update Disputes ID Close-code-android">
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

<div class="code-block objc" id="Update Disputes ID Close-code-objc">
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

<div class="code-block javascript" id="Update Disputes ID Close-code-javascript">
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

<div class="code-block csharp" id="Update Disputes ID Close-code-csharp">
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

<div class="code-block php" id="Update Disputes ID Close-code-php">
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

<div class="code-block perl" id="Update Disputes ID Close-code-perl">
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

<div class="code-block python" id="Update Disputes ID Close-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Disputes ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Disputes ID</div>
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
              
<div class="code-block curl active" id="Retrieve Disputes ID-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/disputes/{id}"
```
</div>

<div class="code-block java" id="Retrieve Disputes ID-code-java">
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

<div class="code-block android" id="Retrieve Disputes ID-code-android">
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

<div class="code-block objc" id="Retrieve Disputes ID-code-objc">
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

<div class="code-block javascript" id="Retrieve Disputes ID-code-javascript">
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

<div class="code-block csharp" id="Retrieve Disputes ID-code-csharp">
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

<div class="code-block php" id="Retrieve Disputes ID-code-php">
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

<div class="code-block perl" id="Retrieve Disputes ID-code-perl">
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

<div class="code-block python" id="Retrieve Disputes ID-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Update Disputes ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Update Disputes ID</div>
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
              
<div class="code-block curl active" id="Update Disputes ID-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/disputes/{id}"
```
</div>

<div class="code-block java" id="Update Disputes ID-code-java">
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

<div class="code-block android" id="Update Disputes ID-code-android">
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

<div class="code-block objc" id="Update Disputes ID-code-objc">
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

<div class="code-block javascript" id="Update Disputes ID-code-javascript">
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

<div class="code-block csharp" id="Update Disputes ID-code-csharp">
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

<div class="code-block php" id="Update Disputes ID-code-php">
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

<div class="code-block perl" id="Update Disputes ID-code-perl">
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

<div class="code-block python" id="Update Disputes ID-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Disputes Open</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Disputes Open</div>
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
              
<div class="code-block curl active" id="Retrieve Disputes Open-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/disputes/open?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Disputes Open-code-java">
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

<div class="code-block android" id="Retrieve Disputes Open-code-android">
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

<div class="code-block objc" id="Retrieve Disputes Open-code-objc">
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

<div class="code-block javascript" id="Retrieve Disputes Open-code-javascript">
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

<div class="code-block csharp" id="Retrieve Disputes Open-code-csharp">
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

<div class="code-block php" id="Retrieve Disputes Open-code-php">
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

<div class="code-block perl" id="Retrieve Disputes Open-code-perl">
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

<div class="code-block python" id="Retrieve Disputes Open-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Disputes Pending</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Disputes Pending</div>
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
              
<div class="code-block curl active" id="Retrieve Disputes Pending-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/disputes/pending?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Disputes Pending-code-java">
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

<div class="code-block android" id="Retrieve Disputes Pending-code-android">
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

<div class="code-block objc" id="Retrieve Disputes Pending-code-objc">
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

<div class="code-block javascript" id="Retrieve Disputes Pending-code-javascript">
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

<div class="code-block csharp" id="Retrieve Disputes Pending-code-csharp">
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

<div class="code-block php" id="Retrieve Disputes Pending-code-php">
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

<div class="code-block perl" id="Retrieve Disputes Pending-code-perl">
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

<div class="code-block python" id="Retrieve Disputes Pending-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Disputes Search</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Disputes Search</div>
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
              
<div class="code-block curl active" id="Retrieve Disputes Search-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/disputes/search?scope=&query=&filters[amount]=&filters[card_first_digits]=&filters[card_last_digits]=&filters[charge_id]=&filters[closed_at]=&filters[created]=&filters[currency]=&filters[delayed]=&filters[status]="
```
</div>

<div class="code-block java" id="Retrieve Disputes Search-code-java">
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

<div class="code-block android" id="Retrieve Disputes Search-code-android">
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

<div class="code-block objc" id="Retrieve Disputes Search-code-objc">
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

<div class="code-block javascript" id="Retrieve Disputes Search-code-javascript">
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

<div class="code-block csharp" id="Retrieve Disputes Search-code-csharp">
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

<div class="code-block php" id="Retrieve Disputes Search-code-php">
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

<div class="code-block perl" id="Retrieve Disputes Search-code-perl">
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

<div class="code-block python" id="Retrieve Disputes Search-code-python">
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

```json
 {
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
```

        </div>
      </div>

