# Account


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>accountApiVersionPatch</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">accountApiVersionPatch</div>
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
              
<div class="code-block curl active" id="accountApiVersionPatch-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
"https://api.omise.co/account/api_version"
```
</div>

<div class="code-block java" id="accountApiVersionPatch-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.AccountApi;

import java.io.File;
import java.util.*;

public class AccountApiExample {

    public static void main(String[] args) {
        
        AccountApi apiInstance = new AccountApi();
        try {
            account result = apiInstance.accountApiVersionPatch();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AccountApi#accountApiVersionPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="accountApiVersionPatch-code-android">
```js
import io.swagger.client.api.AccountApi;

public class AccountApiExample {

    public static void main(String[] args) {
        AccountApi apiInstance = new AccountApi();
        try {
            account result = apiInstance.accountApiVersionPatch();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AccountApi#accountApiVersionPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="accountApiVersionPatch-code-objc">
```js
AccountApi *apiInstance = [[AccountApi alloc] init];

[apiInstance accountApiVersionPatchWithCompletionHandler: 
              ^(account output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="accountApiVersionPatch-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.AccountApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountApiVersionPatch(callback);
```
</div>

<div class="code-block csharp" id="accountApiVersionPatch-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class accountApiVersionPatchExample
    {
        public void main()
        {

            var apiInstance = new AccountApi();

            try
            {
                account result = apiInstance.accountApiVersionPatch();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AccountApi.accountApiVersionPatch: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="accountApiVersionPatch-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiAccountApi();

try {
    $result = $api_instance->accountApiVersionPatch();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccountApi->accountApiVersionPatch: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="accountApiVersionPatch-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::AccountApi;

my $api_instance = WWW::SwaggerClient::AccountApi->new();

eval { 
    my $result = $api_instance->accountApiVersionPatch();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling AccountApi->accountApiVersionPatch: $@\n";
}
```
</div>

<div class="code-block python" id="accountApiVersionPatch-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AccountApi()

try: 
    api_response = api_instance.account_api_version_patch()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AccountApi->accountApiVersionPatch: %s\n" % e)
```
</div>
            
            </div>
            
          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>accountApiVersionsGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">accountApiVersionsGet</div>
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
              
<div class="code-block curl active" id="accountApiVersionsGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/account/api_versions"
```
</div>

<div class="code-block java" id="accountApiVersionsGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.AccountApi;

import java.io.File;
import java.util.*;

public class AccountApiExample {

    public static void main(String[] args) {
        
        AccountApi apiInstance = new AccountApi();
        try {
            account result = apiInstance.accountApiVersionsGet();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AccountApi#accountApiVersionsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="accountApiVersionsGet-code-android">
```js
import io.swagger.client.api.AccountApi;

public class AccountApiExample {

    public static void main(String[] args) {
        AccountApi apiInstance = new AccountApi();
        try {
            account result = apiInstance.accountApiVersionsGet();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AccountApi#accountApiVersionsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="accountApiVersionsGet-code-objc">
```js
AccountApi *apiInstance = [[AccountApi alloc] init];

[apiInstance accountApiVersionsGetWithCompletionHandler: 
              ^(account output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="accountApiVersionsGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.AccountApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountApiVersionsGet(callback);
```
</div>

<div class="code-block csharp" id="accountApiVersionsGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class accountApiVersionsGetExample
    {
        public void main()
        {

            var apiInstance = new AccountApi();

            try
            {
                account result = apiInstance.accountApiVersionsGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AccountApi.accountApiVersionsGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="accountApiVersionsGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiAccountApi();

try {
    $result = $api_instance->accountApiVersionsGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccountApi->accountApiVersionsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="accountApiVersionsGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::AccountApi;

my $api_instance = WWW::SwaggerClient::AccountApi->new();

eval { 
    my $result = $api_instance->accountApiVersionsGet();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling AccountApi->accountApiVersionsGet: $@\n";
}
```
</div>

<div class="code-block python" id="accountApiVersionsGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AccountApi()

try: 
    api_response = api_instance.account_api_versions_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AccountApi->accountApiVersionsGet: %s\n" % e)
```
</div>
            
            </div>
            
          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>accountPatch</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">accountPatch</div>
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
              
<div class="code-block curl active" id="accountPatch-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/account"
```
</div>

<div class="code-block java" id="accountPatch-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.AccountApi;

import java.io.File;
import java.util.*;

public class AccountApiExample {

    public static void main(String[] args) {
        
        AccountApi apiInstance = new AccountApi();
        Boolean chainEnabled = true; // Boolean | 
        Boolean zeroInterestInstallments = true; // Boolean | 
        String chainReturnUri = chainReturnUri_example; // String | 
        String webhookUri = webhookUri_example; // String | 
        account_metadata_export_keys metadataExportKeys = ; // account_metadata_export_keys | 
        try {
            account result = apiInstance.accountPatch(chainEnabled, zeroInterestInstallments, chainReturnUri, webhookUri, metadataExportKeys);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AccountApi#accountPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="accountPatch-code-android">
```js
import io.swagger.client.api.AccountApi;

public class AccountApiExample {

    public static void main(String[] args) {
        AccountApi apiInstance = new AccountApi();
        Boolean chainEnabled = true; // Boolean | 
        Boolean zeroInterestInstallments = true; // Boolean | 
        String chainReturnUri = chainReturnUri_example; // String | 
        String webhookUri = webhookUri_example; // String | 
        account_metadata_export_keys metadataExportKeys = ; // account_metadata_export_keys | 
        try {
            account result = apiInstance.accountPatch(chainEnabled, zeroInterestInstallments, chainReturnUri, webhookUri, metadataExportKeys);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AccountApi#accountPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="accountPatch-code-objc">
```js
Boolean *chainEnabled = true; //  (optional)
Boolean *zeroInterestInstallments = true; //  (optional)
String *chainReturnUri = chainReturnUri_example; //  (optional)
String *webhookUri = webhookUri_example; //  (optional)
account_metadata_export_keys *metadataExportKeys = ; //  (optional)

AccountApi *apiInstance = [[AccountApi alloc] init];

[apiInstance accountPatchWith:chainEnabled
    zeroInterestInstallments:zeroInterestInstallments
    chainReturnUri:chainReturnUri
    webhookUri:webhookUri
    metadataExportKeys:metadataExportKeys
              completionHandler: ^(account output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="accountPatch-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.AccountApi()
var opts = { 
  'chainEnabled': true // {{Boolean}} 
  'zeroInterestInstallments': true // {{Boolean}} 
  'chainReturnUri': chainReturnUri_example // {{String}} 
  'webhookUri': webhookUri_example // {{String}} 
  'metadataExportKeys':  // {{account_metadata_export_keys}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountPatch(opts, callback);
```
</div>

<div class="code-block csharp" id="accountPatch-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class accountPatchExample
    {
        public void main()
        {

            var apiInstance = new AccountApi();
            var chainEnabled = true;  // Boolean |  (optional) 
            var zeroInterestInstallments = true;  // Boolean |  (optional) 
            var chainReturnUri = chainReturnUri_example;  // String |  (optional) 
            var webhookUri = webhookUri_example;  // String |  (optional) 
            var metadataExportKeys = new account_metadata_export_keys(); // account_metadata_export_keys |  (optional) 

            try
            {
                account result = apiInstance.accountPatch(chainEnabled, zeroInterestInstallments, chainReturnUri, webhookUri, metadataExportKeys);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AccountApi.accountPatch: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="accountPatch-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiAccountApi();
$chainEnabled = true; // Boolean | 
$zeroInterestInstallments = true; // Boolean | 
$chainReturnUri = chainReturnUri_example; // String | 
$webhookUri = webhookUri_example; // String | 
$metadataExportKeys = ; // account_metadata_export_keys | 

try {
    $result = $api_instance->accountPatch($chainEnabled, $zeroInterestInstallments, $chainReturnUri, $webhookUri, $metadataExportKeys);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccountApi->accountPatch: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="accountPatch-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::AccountApi;

my $api_instance = WWW::SwaggerClient::AccountApi->new();
my $chainEnabled = true; # Boolean | 
my $zeroInterestInstallments = true; # Boolean | 
my $chainReturnUri = chainReturnUri_example; # String | 
my $webhookUri = webhookUri_example; # String | 
my $metadataExportKeys = ; # account_metadata_export_keys | 

eval { 
    my $result = $api_instance->accountPatch(chainEnabled => $chainEnabled, zeroInterestInstallments => $zeroInterestInstallments, chainReturnUri => $chainReturnUri, webhookUri => $webhookUri, metadataExportKeys => $metadataExportKeys);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling AccountApi->accountPatch: $@\n";
}
```
</div>

<div class="code-block python" id="accountPatch-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AccountApi()
chainEnabled = true # Boolean |  (optional)
zeroInterestInstallments = true # Boolean |  (optional)
chainReturnUri = chainReturnUri_example # String |  (optional)
webhookUri = webhookUri_example # String |  (optional)
metadataExportKeys =  # account_metadata_export_keys |  (optional)

try: 
    api_response = api_instance.account_patch(chainEnabled=chainEnabled, zeroInterestInstallments=zeroInterestInstallments, chainReturnUri=chainReturnUri, webhookUri=webhookUri, metadataExportKeys=metadataExportKeys)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AccountApi->accountPatch: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| chain_enabled | Boolean |
| zero_interest_installments | Boolean |
| chain_return_uri | String (uri) |
| webhook_uri | String (uri) |
| metadata_export_keys | account_metadata_export_keys |

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

