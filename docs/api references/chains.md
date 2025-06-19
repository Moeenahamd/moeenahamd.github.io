# Chains


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Chains</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Chains</div>
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
              
<div class="code-block curl active" id="Retrieve Chains-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/chains?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Chains-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ChainsApi;

import java.io.File;
import java.util.*;

public class ChainsApiExample {

    public static void main(String[] args) {
        
        ChainsApi apiInstance = new ChainsApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.chainsGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChainsApi#chainsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Chains-code-android">
```js
import io.swagger.client.api.ChainsApi;

public class ChainsApiExample {

    public static void main(String[] args) {
        ChainsApi apiInstance = new ChainsApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.chainsGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChainsApi#chainsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Chains-code-objc">
```js
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

ChainsApi *apiInstance = [[ChainsApi alloc] init];

[apiInstance chainsGetWith:from
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

<div class="code-block javascript" id="Retrieve Chains-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ChainsApi()
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
api.chainsGet(opts, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Chains-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chainsGetExample
    {
        public void main()
        {

            var apiInstance = new ChainsApi();
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.chainsGet(from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ChainsApi.chainsGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Chains-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiChainsApi();
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->chainsGet($from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChainsApi->chainsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Chains-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ChainsApi;

my $api_instance = WWW::SwaggerClient::ChainsApi->new();
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->chainsGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ChainsApi->chainsGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Chains-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ChainsApi()
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.chains_get(from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ChainsApi->chainsGet: %s\n" % e)
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
            <h3>Retrieve Chains ID Account</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Chains ID Account</div>
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
              
<div class="code-block curl active" id="Retrieve Chains ID Account-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/chains/{id}/account"
```
</div>

<div class="code-block java" id="Retrieve Chains ID Account-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ChainsApi;

import java.io.File;
import java.util.*;

public class ChainsApiExample {

    public static void main(String[] args) {
        
        ChainsApi apiInstance = new ChainsApi();
        String id = id_example; // String | 
        try {
            chain result = apiInstance.chainsIdAccountGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChainsApi#chainsIdAccountGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Chains ID Account-code-android">
```js
import io.swagger.client.api.ChainsApi;

public class ChainsApiExample {

    public static void main(String[] args) {
        ChainsApi apiInstance = new ChainsApi();
        String id = id_example; // String | 
        try {
            chain result = apiInstance.chainsIdAccountGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChainsApi#chainsIdAccountGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Chains ID Account-code-objc">
```js
String *id = id_example; // 

ChainsApi *apiInstance = [[ChainsApi alloc] init];

[apiInstance chainsIdAccountGetWith:id
              completionHandler: ^(chain output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Chains ID Account-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ChainsApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.chainsIdAccountGet(id, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Chains ID Account-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chainsIdAccountGetExample
    {
        public void main()
        {

            var apiInstance = new ChainsApi();
            var id = id_example;  // String | 

            try
            {
                chain result = apiInstance.chainsIdAccountGet(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ChainsApi.chainsIdAccountGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Chains ID Account-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiChainsApi();
$id = id_example; // String | 

try {
    $result = $api_instance->chainsIdAccountGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChainsApi->chainsIdAccountGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Chains ID Account-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ChainsApi;

my $api_instance = WWW::SwaggerClient::ChainsApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->chainsIdAccountGet(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ChainsApi->chainsIdAccountGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Chains ID Account-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ChainsApi()
id = id_example # String | 

try: 
    api_response = api_instance.chains_id_account_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ChainsApi->chainsIdAccountGet: %s\n" % e)
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
            <h3>Create Chains ID Authorize</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Create Chains ID Authorize</div>
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
              
<div class="code-block curl active" id="Create Chains ID Authorize-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
"https://api.omise.co/chains/{id}/authorize"
```
</div>

<div class="code-block java" id="Create Chains ID Authorize-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ChainsApi;

import java.io.File;
import java.util.*;

public class ChainsApiExample {

    public static void main(String[] args) {
        
        ChainsApi apiInstance = new ChainsApi();
        String id = id_example; // String | 
        try {
            chain result = apiInstance.chainsIdAuthorizePost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChainsApi#chainsIdAuthorizePost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Create Chains ID Authorize-code-android">
```js
import io.swagger.client.api.ChainsApi;

public class ChainsApiExample {

    public static void main(String[] args) {
        ChainsApi apiInstance = new ChainsApi();
        String id = id_example; // String | 
        try {
            chain result = apiInstance.chainsIdAuthorizePost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChainsApi#chainsIdAuthorizePost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Create Chains ID Authorize-code-objc">
```js
String *id = id_example; // 

ChainsApi *apiInstance = [[ChainsApi alloc] init];

[apiInstance chainsIdAuthorizePostWith:id
              completionHandler: ^(chain output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Create Chains ID Authorize-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ChainsApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.chainsIdAuthorizePost(id, callback);
```
</div>

<div class="code-block csharp" id="Create Chains ID Authorize-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chainsIdAuthorizePostExample
    {
        public void main()
        {

            var apiInstance = new ChainsApi();
            var id = id_example;  // String | 

            try
            {
                chain result = apiInstance.chainsIdAuthorizePost(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ChainsApi.chainsIdAuthorizePost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Create Chains ID Authorize-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiChainsApi();
$id = id_example; // String | 

try {
    $result = $api_instance->chainsIdAuthorizePost($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChainsApi->chainsIdAuthorizePost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Create Chains ID Authorize-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ChainsApi;

my $api_instance = WWW::SwaggerClient::ChainsApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->chainsIdAuthorizePost(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ChainsApi->chainsIdAuthorizePost: $@\n";
}
```
</div>

<div class="code-block python" id="Create Chains ID Authorize-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ChainsApi()
id = id_example # String | 

try: 
    api_response = api_instance.chains_id_authorize_post(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ChainsApi->chainsIdAuthorizePost: %s\n" % e)
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
            <h3>Retrieve Chains ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Chains ID</div>
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
              
<div class="code-block curl active" id="Retrieve Chains ID-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/chains/{id}"
```
</div>

<div class="code-block java" id="Retrieve Chains ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ChainsApi;

import java.io.File;
import java.util.*;

public class ChainsApiExample {

    public static void main(String[] args) {
        
        ChainsApi apiInstance = new ChainsApi();
        String id = id_example; // String | 
        try {
            chain result = apiInstance.chainsIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChainsApi#chainsIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Chains ID-code-android">
```js
import io.swagger.client.api.ChainsApi;

public class ChainsApiExample {

    public static void main(String[] args) {
        ChainsApi apiInstance = new ChainsApi();
        String id = id_example; // String | 
        try {
            chain result = apiInstance.chainsIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChainsApi#chainsIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Chains ID-code-objc">
```js
String *id = id_example; // 

ChainsApi *apiInstance = [[ChainsApi alloc] init];

[apiInstance chainsIdGetWith:id
              completionHandler: ^(chain output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Chains ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ChainsApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.chainsIdGet(id, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Chains ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chainsIdGetExample
    {
        public void main()
        {

            var apiInstance = new ChainsApi();
            var id = id_example;  // String | 

            try
            {
                chain result = apiInstance.chainsIdGet(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ChainsApi.chainsIdGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Chains ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiChainsApi();
$id = id_example; // String | 

try {
    $result = $api_instance->chainsIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChainsApi->chainsIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Chains ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ChainsApi;

my $api_instance = WWW::SwaggerClient::ChainsApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->chainsIdGet(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ChainsApi->chainsIdGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Chains ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ChainsApi()
id = id_example # String | 

try: 
    api_response = api_instance.chains_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ChainsApi->chainsIdGet: %s\n" % e)
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
            <h3>Retrieve Chains ID Keys</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Chains ID Keys</div>
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
              
<div class="code-block curl active" id="Retrieve Chains ID Keys-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/chains/{id}/keys?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Chains ID Keys-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ChainsApi;

import java.io.File;
import java.util.*;

public class ChainsApiExample {

    public static void main(String[] args) {
        
        ChainsApi apiInstance = new ChainsApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.chainsIdKeysGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChainsApi#chainsIdKeysGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Chains ID Keys-code-android">
```js
import io.swagger.client.api.ChainsApi;

public class ChainsApiExample {

    public static void main(String[] args) {
        ChainsApi apiInstance = new ChainsApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.chainsIdKeysGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChainsApi#chainsIdKeysGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Chains ID Keys-code-objc">
```js
String *id = id_example; // 
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

ChainsApi *apiInstance = [[ChainsApi alloc] init];

[apiInstance chainsIdKeysGetWith:id
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

<div class="code-block javascript" id="Retrieve Chains ID Keys-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ChainsApi()
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
api.chainsIdKeysGet(id, opts, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Chains ID Keys-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chainsIdKeysGetExample
    {
        public void main()
        {

            var apiInstance = new ChainsApi();
            var id = id_example;  // String | 
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.chainsIdKeysGet(id, from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ChainsApi.chainsIdKeysGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Chains ID Keys-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiChainsApi();
$id = id_example; // String | 
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->chainsIdKeysGet($id, $from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChainsApi->chainsIdKeysGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Chains ID Keys-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ChainsApi;

my $api_instance = WWW::SwaggerClient::ChainsApi->new();
my $id = id_example; # String | 
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->chainsIdKeysGet(id => $id, from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ChainsApi->chainsIdKeysGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Chains ID Keys-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ChainsApi()
id = id_example # String | 
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.chains_id_keys_get(id, from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ChainsApi->chainsIdKeysGet: %s\n" % e)
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
            <h3>Create Chains ID Revoke</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Create Chains ID Revoke</div>
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
              
<div class="code-block curl active" id="Create Chains ID Revoke-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
"https://api.omise.co/chains/{id}/revoke"
```
</div>

<div class="code-block java" id="Create Chains ID Revoke-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ChainsApi;

import java.io.File;
import java.util.*;

public class ChainsApiExample {

    public static void main(String[] args) {
        
        ChainsApi apiInstance = new ChainsApi();
        String id = id_example; // String | 
        try {
            chain result = apiInstance.chainsIdRevokePost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChainsApi#chainsIdRevokePost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Create Chains ID Revoke-code-android">
```js
import io.swagger.client.api.ChainsApi;

public class ChainsApiExample {

    public static void main(String[] args) {
        ChainsApi apiInstance = new ChainsApi();
        String id = id_example; // String | 
        try {
            chain result = apiInstance.chainsIdRevokePost(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChainsApi#chainsIdRevokePost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Create Chains ID Revoke-code-objc">
```js
String *id = id_example; // 

ChainsApi *apiInstance = [[ChainsApi alloc] init];

[apiInstance chainsIdRevokePostWith:id
              completionHandler: ^(chain output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Create Chains ID Revoke-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ChainsApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.chainsIdRevokePost(id, callback);
```
</div>

<div class="code-block csharp" id="Create Chains ID Revoke-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chainsIdRevokePostExample
    {
        public void main()
        {

            var apiInstance = new ChainsApi();
            var id = id_example;  // String | 

            try
            {
                chain result = apiInstance.chainsIdRevokePost(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ChainsApi.chainsIdRevokePost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Create Chains ID Revoke-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiChainsApi();
$id = id_example; // String | 

try {
    $result = $api_instance->chainsIdRevokePost($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChainsApi->chainsIdRevokePost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Create Chains ID Revoke-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ChainsApi;

my $api_instance = WWW::SwaggerClient::ChainsApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->chainsIdRevokePost(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ChainsApi->chainsIdRevokePost: $@\n";
}
```
</div>

<div class="code-block python" id="Create Chains ID Revoke-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ChainsApi()
id = id_example # String | 

try: 
    api_response = api_instance.chains_id_revoke_post(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ChainsApi->chainsIdRevokePost: %s\n" % e)
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

```json
 {
  "object": {
    "pattern": "chain",
    "type": "string",
    "default": "chain"
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
  "revoked": {
    "type": "boolean",
    "enum": [
      true,
      false
    ]
  },
  "email": {
    "type": "string"
  },
  "master_team": {
    "type": "string"
  },
  "key": {
    "type": "string"
  },
  "created_at": {
    "type": "string",
    "format": "date-time"
  }
} 
```

        </div>
      </div>

