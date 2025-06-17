# Consent


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>consentPatch</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">consentPatch</div>
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
              
<div class="code-block curl active" id="consentPatch-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/consent"
```
</div>

<div class="code-block java" id="consentPatch-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ConsentApi;

import java.io.File;
import java.util.*;

public class ConsentApiExample {

    public static void main(String[] args) {
        
        ConsentApi apiInstance = new ConsentApi();
        String principal = principal_example; // String | 
        Object policies = ; // Object | 
        try {
            consent result = apiInstance.consentPatch(principal, policies);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ConsentApi#consentPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="consentPatch-code-android">
```js
import io.swagger.client.api.ConsentApi;

public class ConsentApiExample {

    public static void main(String[] args) {
        ConsentApi apiInstance = new ConsentApi();
        String principal = principal_example; // String | 
        Object policies = ; // Object | 
        try {
            consent result = apiInstance.consentPatch(principal, policies);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ConsentApi#consentPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="consentPatch-code-objc">
```js
String *principal = principal_example; //  (optional)
Object *policies = ; //  (optional)

ConsentApi *apiInstance = [[ConsentApi alloc] init];

[apiInstance consentPatchWith:principal
    policies:policies
              completionHandler: ^(consent output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="consentPatch-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.ConsentApi()
var opts = { 
  'principal': principal_example // {{String}} 
  'policies':  // {{Object}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consentPatch(opts, callback);
```
</div>

<div class="code-block csharp" id="consentPatch-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class consentPatchExample
    {
        public void main()
        {

            var apiInstance = new ConsentApi();
            var principal = principal_example;  // String |  (optional) 
            var policies = new Object(); // Object |  (optional) 

            try
            {
                consent result = apiInstance.consentPatch(principal, policies);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ConsentApi.consentPatch: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="consentPatch-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiConsentApi();
$principal = principal_example; // String | 
$policies = ; // Object | 

try {
    $result = $api_instance->consentPatch($principal, $policies);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ConsentApi->consentPatch: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="consentPatch-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ConsentApi;

my $api_instance = WWW::SwaggerClient::ConsentApi->new();
my $principal = principal_example; # String | 
my $policies = ; # Object | 

eval { 
    my $result = $api_instance->consentPatch(principal => $principal, policies => $policies);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ConsentApi->consentPatch: $@\n";
}
```
</div>

<div class="code-block python" id="consentPatch-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ConsentApi()
principal = principal_example # String |  (optional)
policies =  # Object |  (optional)

try: 
    api_response = api_instance.consent_patch(principal=principal, policies=policies)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ConsentApi->consentPatch: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| principal | String |
| policies | Object |

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

