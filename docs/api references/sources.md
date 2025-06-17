# Sources


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>sourcesIdGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">sourcesIdGet</div>
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
              
<div class="code-block curl active" id="sourcesIdGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/sources/{id}"
```
</div>

<div class="code-block java" id="sourcesIdGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SourcesApi;

import java.io.File;
import java.util.*;

public class SourcesApiExample {

    public static void main(String[] args) {
        
        SourcesApi apiInstance = new SourcesApi();
        String id = id_example; // String | 
        try {
            source result = apiInstance.sourcesIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SourcesApi#sourcesIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="sourcesIdGet-code-android">
```js
import io.swagger.client.api.SourcesApi;

public class SourcesApiExample {

    public static void main(String[] args) {
        SourcesApi apiInstance = new SourcesApi();
        String id = id_example; // String | 
        try {
            source result = apiInstance.sourcesIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SourcesApi#sourcesIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="sourcesIdGet-code-objc">
```js
String *id = id_example; // 

SourcesApi *apiInstance = [[SourcesApi alloc] init];

[apiInstance sourcesIdGetWith:id
              completionHandler: ^(source output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="sourcesIdGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.SourcesApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.sourcesIdGet(id, callback);
```
</div>

<div class="code-block csharp" id="sourcesIdGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class sourcesIdGetExample
    {
        public void main()
        {

            var apiInstance = new SourcesApi();
            var id = id_example;  // String | 

            try
            {
                source result = apiInstance.sourcesIdGet(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SourcesApi.sourcesIdGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="sourcesIdGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiSourcesApi();
$id = id_example; // String | 

try {
    $result = $api_instance->sourcesIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SourcesApi->sourcesIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="sourcesIdGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SourcesApi;

my $api_instance = WWW::SwaggerClient::SourcesApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->sourcesIdGet(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SourcesApi->sourcesIdGet: $@\n";
}
```
</div>

<div class="code-block python" id="sourcesIdGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SourcesApi()
id = id_example # String | 

try: 
    api_response = api_instance.sources_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SourcesApi->sourcesIdGet: %s\n" % e)
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
            <h3>sourcesPost</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">sourcesPost</div>
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
              
<div class="code-block curl active" id="sourcesPost-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/sources"
```
</div>

<div class="code-block java" id="sourcesPost-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SourcesApi;

import java.io.File;
import java.util.*;

public class SourcesApiExample {

    public static void main(String[] args) {
        
        SourcesApi apiInstance = new SourcesApi();
        Integer amount = 56; // Integer | 
        String currency = currency_example; // String | 
        Boolean zeroInterestInstallments = true; // Boolean | 
        String type = type_example; // String | 
        String barcode = barcode_example; // String | 
        String email = email_example; // String | 
        String bank = bank_example; // String | 
        Integer installmentTerm = 56; // Integer | 
        String ip = ip_example; // String | 
        String name = name_example; // String | 
        String mobileNumber = mobileNumber_example; // String | 
        String platformType = platformType_example; // String | 
        String storeId = storeId_example; // String | 
        String storeName = storeName_example; // String | 
        String terminalId = terminalId_example; // String | 
        String promotionCode = promotionCode_example; // String | 
        String supplierId = supplierId_example; // String | 
        sources_billing billing = ; // sources_billing | 
        sources_billing shipping = ; // sources_billing | 
        sources_qr_settings qrSettings = ; // sources_qr_settings | 
        array[null] items = ; // array[null] | 
        try {
            source result = apiInstance.sourcesPost(amount, currency, zeroInterestInstallments, type, barcode, email, bank, installmentTerm, ip, name, mobileNumber, platformType, storeId, storeName, terminalId, promotionCode, supplierId, billing, shipping, qrSettings, items);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SourcesApi#sourcesPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="sourcesPost-code-android">
```js
import io.swagger.client.api.SourcesApi;

public class SourcesApiExample {

    public static void main(String[] args) {
        SourcesApi apiInstance = new SourcesApi();
        Integer amount = 56; // Integer | 
        String currency = currency_example; // String | 
        Boolean zeroInterestInstallments = true; // Boolean | 
        String type = type_example; // String | 
        String barcode = barcode_example; // String | 
        String email = email_example; // String | 
        String bank = bank_example; // String | 
        Integer installmentTerm = 56; // Integer | 
        String ip = ip_example; // String | 
        String name = name_example; // String | 
        String mobileNumber = mobileNumber_example; // String | 
        String platformType = platformType_example; // String | 
        String storeId = storeId_example; // String | 
        String storeName = storeName_example; // String | 
        String terminalId = terminalId_example; // String | 
        String promotionCode = promotionCode_example; // String | 
        String supplierId = supplierId_example; // String | 
        sources_billing billing = ; // sources_billing | 
        sources_billing shipping = ; // sources_billing | 
        sources_qr_settings qrSettings = ; // sources_qr_settings | 
        array[null] items = ; // array[null] | 
        try {
            source result = apiInstance.sourcesPost(amount, currency, zeroInterestInstallments, type, barcode, email, bank, installmentTerm, ip, name, mobileNumber, platformType, storeId, storeName, terminalId, promotionCode, supplierId, billing, shipping, qrSettings, items);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SourcesApi#sourcesPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="sourcesPost-code-objc">
```js
Integer *amount = 56; //  (optional)
String *currency = currency_example; //  (optional)
Boolean *zeroInterestInstallments = true; //  (optional)
String *type = type_example; //  (optional)
String *barcode = barcode_example; //  (optional)
String *email = email_example; //  (optional)
String *bank = bank_example; //  (optional)
Integer *installmentTerm = 56; //  (optional)
String *ip = ip_example; //  (optional)
String *name = name_example; //  (optional)
String *mobileNumber = mobileNumber_example; //  (optional)
String *platformType = platformType_example; //  (optional)
String *storeId = storeId_example; //  (optional)
String *storeName = storeName_example; //  (optional)
String *terminalId = terminalId_example; //  (optional)
String *promotionCode = promotionCode_example; //  (optional)
String *supplierId = supplierId_example; //  (optional)
sources_billing *billing = ; //  (optional)
sources_billing *shipping = ; //  (optional)
sources_qr_settings *qrSettings = ; //  (optional)
array[null] *items = ; //  (optional)

SourcesApi *apiInstance = [[SourcesApi alloc] init];

[apiInstance sourcesPostWith:amount
    currency:currency
    zeroInterestInstallments:zeroInterestInstallments
    type:type
    barcode:barcode
    email:email
    bank:bank
    installmentTerm:installmentTerm
    ip:ip
    name:name
    mobileNumber:mobileNumber
    platformType:platformType
    storeId:storeId
    storeName:storeName
    terminalId:terminalId
    promotionCode:promotionCode
    supplierId:supplierId
    billing:billing
    shipping:shipping
    qrSettings:qrSettings
    items:items
              completionHandler: ^(source output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="sourcesPost-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.SourcesApi()
var opts = { 
  'amount': 56 // {{Integer}} 
  'currency': currency_example // {{String}} 
  'zeroInterestInstallments': true // {{Boolean}} 
  'type': type_example // {{String}} 
  'barcode': barcode_example // {{String}} 
  'email': email_example // {{String}} 
  'bank': bank_example // {{String}} 
  'installmentTerm': 56 // {{Integer}} 
  'ip': ip_example // {{String}} 
  'name': name_example // {{String}} 
  'mobileNumber': mobileNumber_example // {{String}} 
  'platformType': platformType_example // {{String}} 
  'storeId': storeId_example // {{String}} 
  'storeName': storeName_example // {{String}} 
  'terminalId': terminalId_example // {{String}} 
  'promotionCode': promotionCode_example // {{String}} 
  'supplierId': supplierId_example // {{String}} 
  'billing':  // {{sources_billing}} 
  'shipping':  // {{sources_billing}} 
  'qrSettings':  // {{sources_qr_settings}} 
  'items':  // {{array[null]}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.sourcesPost(opts, callback);
```
</div>

<div class="code-block csharp" id="sourcesPost-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class sourcesPostExample
    {
        public void main()
        {

            var apiInstance = new SourcesApi();
            var amount = 56;  // Integer |  (optional) 
            var currency = currency_example;  // String |  (optional) 
            var zeroInterestInstallments = true;  // Boolean |  (optional) 
            var type = type_example;  // String |  (optional) 
            var barcode = barcode_example;  // String |  (optional) 
            var email = email_example;  // String |  (optional) 
            var bank = bank_example;  // String |  (optional) 
            var installmentTerm = 56;  // Integer |  (optional) 
            var ip = ip_example;  // String |  (optional) 
            var name = name_example;  // String |  (optional) 
            var mobileNumber = mobileNumber_example;  // String |  (optional) 
            var platformType = platformType_example;  // String |  (optional) 
            var storeId = storeId_example;  // String |  (optional) 
            var storeName = storeName_example;  // String |  (optional) 
            var terminalId = terminalId_example;  // String |  (optional) 
            var promotionCode = promotionCode_example;  // String |  (optional) 
            var supplierId = supplierId_example;  // String |  (optional) 
            var billing = new sources_billing(); // sources_billing |  (optional) 
            var shipping = new sources_billing(); // sources_billing |  (optional) 
            var qrSettings = new sources_qr_settings(); // sources_qr_settings |  (optional) 
            var items = new array[null](); // array[null] |  (optional) 

            try
            {
                source result = apiInstance.sourcesPost(amount, currency, zeroInterestInstallments, type, barcode, email, bank, installmentTerm, ip, name, mobileNumber, platformType, storeId, storeName, terminalId, promotionCode, supplierId, billing, shipping, qrSettings, items);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SourcesApi.sourcesPost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="sourcesPost-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiSourcesApi();
$amount = 56; // Integer | 
$currency = currency_example; // String | 
$zeroInterestInstallments = true; // Boolean | 
$type = type_example; // String | 
$barcode = barcode_example; // String | 
$email = email_example; // String | 
$bank = bank_example; // String | 
$installmentTerm = 56; // Integer | 
$ip = ip_example; // String | 
$name = name_example; // String | 
$mobileNumber = mobileNumber_example; // String | 
$platformType = platformType_example; // String | 
$storeId = storeId_example; // String | 
$storeName = storeName_example; // String | 
$terminalId = terminalId_example; // String | 
$promotionCode = promotionCode_example; // String | 
$supplierId = supplierId_example; // String | 
$billing = ; // sources_billing | 
$shipping = ; // sources_billing | 
$qrSettings = ; // sources_qr_settings | 
$items = ; // array[null] | 

try {
    $result = $api_instance->sourcesPost($amount, $currency, $zeroInterestInstallments, $type, $barcode, $email, $bank, $installmentTerm, $ip, $name, $mobileNumber, $platformType, $storeId, $storeName, $terminalId, $promotionCode, $supplierId, $billing, $shipping, $qrSettings, $items);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SourcesApi->sourcesPost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="sourcesPost-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SourcesApi;

my $api_instance = WWW::SwaggerClient::SourcesApi->new();
my $amount = 56; # Integer | 
my $currency = currency_example; # String | 
my $zeroInterestInstallments = true; # Boolean | 
my $type = type_example; # String | 
my $barcode = barcode_example; # String | 
my $email = email_example; # String | 
my $bank = bank_example; # String | 
my $installmentTerm = 56; # Integer | 
my $ip = ip_example; # String | 
my $name = name_example; # String | 
my $mobileNumber = mobileNumber_example; # String | 
my $platformType = platformType_example; # String | 
my $storeId = storeId_example; # String | 
my $storeName = storeName_example; # String | 
my $terminalId = terminalId_example; # String | 
my $promotionCode = promotionCode_example; # String | 
my $supplierId = supplierId_example; # String | 
my $billing = ; # sources_billing | 
my $shipping = ; # sources_billing | 
my $qrSettings = ; # sources_qr_settings | 
my $items = []; # array[null] | 

eval { 
    my $result = $api_instance->sourcesPost(amount => $amount, currency => $currency, zeroInterestInstallments => $zeroInterestInstallments, type => $type, barcode => $barcode, email => $email, bank => $bank, installmentTerm => $installmentTerm, ip => $ip, name => $name, mobileNumber => $mobileNumber, platformType => $platformType, storeId => $storeId, storeName => $storeName, terminalId => $terminalId, promotionCode => $promotionCode, supplierId => $supplierId, billing => $billing, shipping => $shipping, qrSettings => $qrSettings, items => $items);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SourcesApi->sourcesPost: $@\n";
}
```
</div>

<div class="code-block python" id="sourcesPost-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SourcesApi()
amount = 56 # Integer |  (optional)
currency = currency_example # String |  (optional)
zeroInterestInstallments = true # Boolean |  (optional)
type = type_example # String |  (optional)
barcode = barcode_example # String |  (optional)
email = email_example # String |  (optional)
bank = bank_example # String |  (optional)
installmentTerm = 56 # Integer |  (optional)
ip = ip_example # String |  (optional)
name = name_example # String |  (optional)
mobileNumber = mobileNumber_example # String |  (optional)
platformType = platformType_example # String |  (optional)
storeId = storeId_example # String |  (optional)
storeName = storeName_example # String |  (optional)
terminalId = terminalId_example # String |  (optional)
promotionCode = promotionCode_example # String |  (optional)
supplierId = supplierId_example # String |  (optional)
billing =  # sources_billing |  (optional)
shipping =  # sources_billing |  (optional)
qrSettings =  # sources_qr_settings |  (optional)
items =  # array[null] |  (optional)

try: 
    api_response = api_instance.sources_post(amount=amount, currency=currency, zeroInterestInstallments=zeroInterestInstallments, type=type, barcode=barcode, email=email, bank=bank, installmentTerm=installmentTerm, ip=ip, name=name, mobileNumber=mobileNumber, platformType=platformType, storeId=storeId, storeName=storeName, terminalId=terminalId, promotionCode=promotionCode, supplierId=supplierId, billing=billing, shipping=shipping, qrSettings=qrSettings, items=items)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SourcesApi->sourcesPost: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| amount | Integer |
| currency | String (currency) |
| zero_interest_installments | Boolean |
| type | String |
| barcode | String |
| email | String |
| bank | String |
| installment_term | Integer |
| ip | String |
| name | String |
| mobile_number | String |
| platform_type | String |
| store_id | String |
| store_name | String |
| terminal_id | String |
| promotion_code | String |
| supplier_id | String |
| billing | sources_billing |
| shipping | sources_billing |
| qr_settings | sources_qr_settings |
| items | array[null] |

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

