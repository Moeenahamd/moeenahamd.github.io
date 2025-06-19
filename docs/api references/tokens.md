# Tokens


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Tokens ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Tokens ID</div>
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
              
<div class="code-block curl active" id="Retrieve Tokens ID-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/tokens/{id}"
```
</div>

<div class="code-block java" id="Retrieve Tokens ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.TokensApi;

import java.io.File;
import java.util.*;

public class TokensApiExample {

    public static void main(String[] args) {
        
        TokensApi apiInstance = new TokensApi();
        String id = id_example; // String | 
        try {
            token result = apiInstance.tokensIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TokensApi#tokensIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Tokens ID-code-android">
```js
import io.swagger.client.api.TokensApi;

public class TokensApiExample {

    public static void main(String[] args) {
        TokensApi apiInstance = new TokensApi();
        String id = id_example; // String | 
        try {
            token result = apiInstance.tokensIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TokensApi#tokensIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Tokens ID-code-objc">
```js
String *id = id_example; // 

TokensApi *apiInstance = [[TokensApi alloc] init];

[apiInstance tokensIdGetWith:id
              completionHandler: ^(token output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Tokens ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.TokensApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.tokensIdGet(id, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Tokens ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class tokensIdGetExample
    {
        public void main()
        {

            var apiInstance = new TokensApi();
            var id = id_example;  // String | 

            try
            {
                token result = apiInstance.tokensIdGet(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TokensApi.tokensIdGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Tokens ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiTokensApi();
$id = id_example; // String | 

try {
    $result = $api_instance->tokensIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TokensApi->tokensIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Tokens ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::TokensApi;

my $api_instance = WWW::SwaggerClient::TokensApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->tokensIdGet(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling TokensApi->tokensIdGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Tokens ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TokensApi()
id = id_example # String | 

try: 
    api_response = api_instance.tokens_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TokensApi->tokensIdGet: %s\n" % e)
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
            <h3>Create Tokens</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Create Tokens</div>
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
              
<div class="code-block curl active" id="Create Tokens-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/tokens"
```
</div>

<div class="code-block java" id="Create Tokens-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.TokensApi;

import java.io.File;
import java.util.*;

public class TokensApiExample {

    public static void main(String[] args) {
        
        TokensApi apiInstance = new TokensApi();
        tokens_card card = ; // tokens_card | 
        try {
            token result = apiInstance.tokensPost(card);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TokensApi#tokensPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Create Tokens-code-android">
```js
import io.swagger.client.api.TokensApi;

public class TokensApiExample {

    public static void main(String[] args) {
        TokensApi apiInstance = new TokensApi();
        tokens_card card = ; // tokens_card | 
        try {
            token result = apiInstance.tokensPost(card);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TokensApi#tokensPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Create Tokens-code-objc">
```js
tokens_card *card = ; //  (optional)

TokensApi *apiInstance = [[TokensApi alloc] init];

[apiInstance tokensPostWith:card
              completionHandler: ^(token output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Create Tokens-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.TokensApi()
var opts = { 
  'card':  // {{tokens_card}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.tokensPost(opts, callback);
```
</div>

<div class="code-block csharp" id="Create Tokens-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class tokensPostExample
    {
        public void main()
        {

            var apiInstance = new TokensApi();
            var card = new tokens_card(); // tokens_card |  (optional) 

            try
            {
                token result = apiInstance.tokensPost(card);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TokensApi.tokensPost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Create Tokens-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiTokensApi();
$card = ; // tokens_card | 

try {
    $result = $api_instance->tokensPost($card);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TokensApi->tokensPost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Create Tokens-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::TokensApi;

my $api_instance = WWW::SwaggerClient::TokensApi->new();
my $card = ; # tokens_card | 

eval { 
    my $result = $api_instance->tokensPost(card => $card);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling TokensApi->tokensPost: $@\n";
}
```
</div>

<div class="code-block python" id="Create Tokens-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TokensApi()
card =  # tokens_card |  (optional)

try: 
    api_response = api_instance.tokens_post(card=card)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TokensApi->tokensPost: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| card | tokens_card |

          </div>
        </div>
        <div>
          ### Responses

 ### Status: 200

```json
 {
  "object": {
    "pattern": "token",
    "type": "string",
    "default": "token"
  },
  "id": {
    "pattern": "tokn_[0-9a-z]+",
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
  "used": {
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
  "created_at": {
    "type": "string",
    "format": "date-time"
  }
} 
```

        </div>
      </div>

