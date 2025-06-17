# Schema


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>schemaGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">schemaGet</div>
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
              
<div class="code-block curl active" id="schemaGet-code-curl">
```js
curl -X GET\
"https://api.omise.co/schema?version=&private="
```
</div>

<div class="code-block java" id="schemaGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SchemaApi;

import java.io.File;
import java.util.*;

public class SchemaApiExample {

    public static void main(String[] args) {
        
        SchemaApi apiInstance = new SchemaApi();
        String version = version_example; // String | 
        Boolean private = true; // Boolean | 
        try {
            apiInstance.schemaGet(version, private);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchemaApi#schemaGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="schemaGet-code-android">
```js
import io.swagger.client.api.SchemaApi;

public class SchemaApiExample {

    public static void main(String[] args) {
        SchemaApi apiInstance = new SchemaApi();
        String version = version_example; // String | 
        Boolean private = true; // Boolean | 
        try {
            apiInstance.schemaGet(version, private);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchemaApi#schemaGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="schemaGet-code-objc">
```js
String *version = version_example; //  (optional) (default to 2019-05-29)
Boolean *private = true; //  (optional) (default to false)

SchemaApi *apiInstance = [[SchemaApi alloc] init];

[apiInstance schemaGetWith:version
    private:private
              completionHandler: ^(NSError* error) {
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="schemaGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.SchemaApi()
var opts = { 
  'version': version_example, // {{String}} 
  'private': true // {{Boolean}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.schemaGet(opts, callback);
```
</div>

<div class="code-block csharp" id="schemaGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class schemaGetExample
    {
        public void main()
        {

            var apiInstance = new SchemaApi();
            var version = version_example;  // String |  (optional)  (default to 2019-05-29)
            var private = true;  // Boolean |  (optional)  (default to false)

            try
            {
                apiInstance.schemaGet(version, private);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SchemaApi.schemaGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="schemaGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiSchemaApi();
$version = version_example; // String | 
$private = true; // Boolean | 

try {
    $api_instance->schemaGet($version, $private);
} catch (Exception $e) {
    echo 'Exception when calling SchemaApi->schemaGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="schemaGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SchemaApi;

my $api_instance = WWW::SwaggerClient::SchemaApi->new();
my $version = version_example; # String | 
my $private = true; # Boolean | 

eval { 
    $api_instance->schemaGet(version => $version, private => $private);
};
if ($@) {
    warn "Exception when calling SchemaApi->schemaGet: $@\n";
}
```
</div>

<div class="code-block python" id="schemaGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SchemaApi()
version = version_example # String |  (optional) (default to 2019-05-29)
private = true # Boolean |  (optional) (default to false)

try: 
    api_instance.schema_get(version=version, private=private)
except ApiException as e:
    print("Exception when calling SchemaApi->schemaGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| version | String |
| private | Boolean |

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

