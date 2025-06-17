# Balance


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>balanceGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">balanceGet</div>
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
              
<div class="code-block curl active" id="balanceGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/balance"
```
</div>

<div class="code-block java" id="balanceGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.BalanceApi;

import java.io.File;
import java.util.*;

public class BalanceApiExample {

    public static void main(String[] args) {
        
        BalanceApi apiInstance = new BalanceApi();
        try {
            balance result = apiInstance.balanceGet();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling BalanceApi#balanceGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="balanceGet-code-android">
```js
import io.swagger.client.api.BalanceApi;

public class BalanceApiExample {

    public static void main(String[] args) {
        BalanceApi apiInstance = new BalanceApi();
        try {
            balance result = apiInstance.balanceGet();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling BalanceApi#balanceGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="balanceGet-code-objc">
```js
BalanceApi *apiInstance = [[BalanceApi alloc] init];

[apiInstance balanceGetWithCompletionHandler: 
              ^(balance output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="balanceGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.BalanceApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.balanceGet(callback);
```
</div>

<div class="code-block csharp" id="balanceGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class balanceGetExample
    {
        public void main()
        {

            var apiInstance = new BalanceApi();

            try
            {
                balance result = apiInstance.balanceGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling BalanceApi.balanceGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="balanceGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiBalanceApi();

try {
    $result = $api_instance->balanceGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BalanceApi->balanceGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="balanceGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::BalanceApi;

my $api_instance = WWW::SwaggerClient::BalanceApi->new();

eval { 
    my $result = $api_instance->balanceGet();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling BalanceApi->balanceGet: $@\n";
}
```
</div>

<div class="code-block python" id="balanceGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.BalanceApi()

try: 
    api_response = api_instance.balance_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling BalanceApi->balanceGet: %s\n" % e)
```
</div>
            
            </div>
            
          </div>
        </div>
        <div>
          
        </div>
      </div>

