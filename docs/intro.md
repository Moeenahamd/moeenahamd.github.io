---
sidebar_position: 1
---

<div class="code-container">
  <div class="code-header">Example Block 1</div>
  <div class="dropdown">
    <select onchange="handleLanguageChange(this, 0)">
      <option value="curl" selected>cURL</option>
      <option value="java">java</option>
      <option value="android">android</option>
      <option value="objc">objc</option>
      <option value="javascript">javascript</option>
      <option value="csharp">csharp</option>
      <option value="php">php</option>
      <option value="perl">perl</option>
      <option value="python">python</option>
    </select>
    <button class="copy-btn" onclick="copyActiveCode(0)">Copy</button>
  </div>
  <div class="code-block curl" id="0-code-curl">
```curl
curl -X DELETE\
 -H "Authorization: Basic [[basicHash]]"\
"https://api.omise.co/customers/{customer_id}/cards/{card_id}"
```
</div>
<div class="code-block java" id="0-code-java">
```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CardAPIApi;

import java.io.File;
import java.util.*;

public class CardAPIApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        CardAPIApi apiInstance = new CardAPIApi();
        String customerId = customerId_example; // String | 
        String cardId = cardId_example; // String | 
        try {
            apiInstance.customersCustomerIdCardsCardIdDelete(customerId, cardId);
        } catch (ApiException e) {
            System.err.println("Exception when calling CardAPIApi#customersCustomerIdCardsCardIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>
<div class="code-block android" id="0-code-android">
```android
import io.swagger.client.api.CardAPIApi;

public class CardAPIApiExample {

    public static void main(String[] args) {
        CardAPIApi apiInstance = new CardAPIApi();
        String customerId = customerId_example; // String | 
        String cardId = cardId_example; // String | 
        try {
            apiInstance.customersCustomerIdCardsCardIdDelete(customerId, cardId);
        } catch (ApiException e) {
            System.err.println("Exception when calling CardAPIApi#customersCustomerIdCardsCardIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>
<div class="code-block objc" id="0-code-objc">
```objc
Configuration *apiConfig = [Configuration sharedConfig];
// Configure HTTP basic authorization (authentication scheme: basicAuth)
[apiConfig setUsername:@"YOUR_USERNAME"];
[apiConfig setPassword:@"YOUR_PASSWORD"];
String *customerId = customerId_example; // 
String *cardId = cardId_example; // 

CardAPIApi *apiInstance = [[CardAPIApi alloc] init];

// Delete a card from a customer
[apiInstance customersCustomerIdCardsCardIdDeleteWith:customerId
    cardId:cardId
              completionHandler: ^(NSError* error) {
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>
<div class="code-block javascript" id="0-code-javascript">
```javascript
var OmiseApi = require('omise_api');
var defaultClient = OmiseApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new OmiseApi.CardAPIApi()
var customerId = customerId_example; // {{String}} 
var cardId = cardId_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.customersCustomerIdCardsCardIdDelete(customerId, cardId, callback);
```
</div>
<div class="code-block csharp" id="0-code-csharp">
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class customersCustomerIdCardsCardIdDeleteExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: basicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new CardAPIApi();
            var customerId = customerId_example;  // String | 
            var cardId = cardId_example;  // String | 

            try
            {
                // Delete a card from a customer
                apiInstance.customersCustomerIdCardsCardIdDelete(customerId, cardId);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CardAPIApi.customersCustomerIdCardsCardIdDelete: " + e.Message );
            }
        }
    }
}
```
</div>
<div class="code-block php" id="0-code-php">
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure HTTP basic authorization: basicAuth
Swagger\Client\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Swagger\Client\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Swagger\Client\ApiCardAPIApi();
$customerId = customerId_example; // String | 
$cardId = cardId_example; // String | 

try {
    $api_instance->customersCustomerIdCardsCardIdDelete($customerId, $cardId);
} catch (Exception $e) {
    echo 'Exception when calling CardAPIApi->customersCustomerIdCardsCardIdDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>
<div class="code-block perl" id="0-code-perl">
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CardAPIApi;
# Configure HTTP basic authorization: basicAuth
$WWW::SwaggerClient::Configuration::username = 'YOUR_USERNAME';
$WWW::SwaggerClient::Configuration::password = 'YOUR_PASSWORD';

my $api_instance = WWW::SwaggerClient::CardAPIApi->new();
my $customerId = customerId_example; # String | 
my $cardId = cardId_example; # String | 

eval { 
    $api_instance->customersCustomerIdCardsCardIdDelete(customerId => $customerId, cardId => $cardId);
};
if ($@) {
    warn "Exception when calling CardAPIApi->customersCustomerIdCardsCardIdDelete: $@\n";
}
```
</div>
<div class="code-block python" id="0-code-python">
```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# Configure HTTP basic authorization: basicAuth
swagger_client.configuration.username = 'YOUR_USERNAME'
swagger_client.configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = swagger_client.CardAPIApi()
customerId = customerId_example # String | 
cardId = cardId_example # String | 

try: 
    # Delete a card from a customer
    api_instance.customers_customer_id_cards_card_id_delete(customerId, cardId)
except ApiException as e:
    print("Exception when calling CardAPIApi->customersCustomerIdCardsCardIdDelete: %s\n" % e)
```
</div>
</div>


<div class="code-container">
  <div class="code-header">Example Block 2</div>
  <div class="dropdown">
    <select onchange="handleLanguageChange(this, 1)">
      <option value="curl" selected>cURL</option>
      <option value="java">java</option>
      <option value="android">android</option>
      <option value="objc">objc</option>
      <option value="javascript">javascript</option>
      <option value="csharp">csharp</option>
      <option value="php">php</option>
      <option value="perl">perl</option>
      <option value="python">python</option>
    </select>
    <button class="copy-btn" onclick="copyActiveCode(1)">Copy</button>
  </div>
  <div class="code-block curl" id="1-code-curl">
```curl
curl -X GET\
 -H "Authorization: Basic [[basicHash]]"\
-H "Accept: application/json"\
"https://api.omise.co/customers/{customer_id}/cards/{card_id}"
```
</div>
<div class="code-block java" id="1-code-java">
```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CardAPIApi;

import java.io.File;
import java.util.*;

public class CardAPIApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        CardAPIApi apiInstance = new CardAPIApi();
        String customerId = customerId_example; // String | 
        String cardId = cardId_example; // String | 
        try {
            Card result = apiInstance.customersCustomerIdCardsCardIdGet(customerId, cardId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CardAPIApi#customersCustomerIdCardsCardIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>
<div class="code-block android" id="1-code-android">
```android
import io.swagger.client.api.CardAPIApi;

public class CardAPIApiExample {

    public static void main(String[] args) {
        CardAPIApi apiInstance = new CardAPIApi();
        String customerId = customerId_example; // String | 
        String cardId = cardId_example; // String | 
        try {
            Card result = apiInstance.customersCustomerIdCardsCardIdGet(customerId, cardId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CardAPIApi#customersCustomerIdCardsCardIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>
<div class="code-block objc" id="1-code-objc">
```objc
Configuration *apiConfig = [Configuration sharedConfig];
// Configure HTTP basic authorization (authentication scheme: basicAuth)
[apiConfig setUsername:@"YOUR_USERNAME"];
[apiConfig setPassword:@"YOUR_PASSWORD"];
String *customerId = customerId_example; // 
String *cardId = cardId_example; // 

CardAPIApi *apiInstance = [[CardAPIApi alloc] init];

// Retrieve a specific card of a customer
[apiInstance customersCustomerIdCardsCardIdGetWith:customerId
    cardId:cardId
              completionHandler: ^(Card output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>
<div class="code-block javascript" id="1-code-javascript">
```javascript
var OmiseApi = require('omise_api');
var defaultClient = OmiseApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new OmiseApi.CardAPIApi()
var customerId = customerId_example; // {{String}} 
var cardId = cardId_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.customersCustomerIdCardsCardIdGet(customerId, cardId, callback);
```
</div>
<div class="code-block csharp" id="1-code-csharp">
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class customersCustomerIdCardsCardIdGetExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: basicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new CardAPIApi();
            var customerId = customerId_example;  // String | 
            var cardId = cardId_example;  // String | 

            try
            {
                // Retrieve a specific card of a customer
                Card result = apiInstance.customersCustomerIdCardsCardIdGet(customerId, cardId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CardAPIApi.customersCustomerIdCardsCardIdGet: " + e.Message );
            }
        }
    }
}
```
</div>
<div class="code-block php" id="1-code-php">
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure HTTP basic authorization: basicAuth
Swagger\Client\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Swagger\Client\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Swagger\Client\ApiCardAPIApi();
$customerId = customerId_example; // String | 
$cardId = cardId_example; // String | 

try {
    $result = $api_instance->customersCustomerIdCardsCardIdGet($customerId, $cardId);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardAPIApi->customersCustomerIdCardsCardIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>
<div class="code-block perl" id="1-code-perl">
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CardAPIApi;
# Configure HTTP basic authorization: basicAuth
$WWW::SwaggerClient::Configuration::username = 'YOUR_USERNAME';
$WWW::SwaggerClient::Configuration::password = 'YOUR_PASSWORD';

my $api_instance = WWW::SwaggerClient::CardAPIApi->new();
my $customerId = customerId_example; # String | 
my $cardId = cardId_example; # String | 

eval { 
    my $result = $api_instance->customersCustomerIdCardsCardIdGet(customerId => $customerId, cardId => $cardId);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CardAPIApi->customersCustomerIdCardsCardIdGet: $@\n";
}
```
</div>
<div class="code-block python" id="1-code-python">
```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# Configure HTTP basic authorization: basicAuth
swagger_client.configuration.username = 'YOUR_USERNAME'
swagger_client.configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = swagger_client.CardAPIApi()
customerId = customerId_example # String | 
cardId = cardId_example # String | 

try: 
    # Retrieve a specific card of a customer
    api_response = api_instance.customers_customer_id_cards_card_id_get(customerId, cardId)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CardAPIApi->customersCustomerIdCardsCardIdGet: %s\n" % e)
```
</div>
</div>


<div class="code-container">
  <div class="code-header">Example Block 3</div>
  <div class="dropdown">
    <select onchange="handleLanguageChange(this, 2)">
      <option value="curl" selected>cURL</option>
      <option value="java">java</option>
      <option value="android">android</option>
      <option value="objc">objc</option>
      <option value="javascript">javascript</option>
      <option value="csharp">csharp</option>
      <option value="php">php</option>
      <option value="perl">perl</option>
      <option value="python">python</option>
    </select>
    <button class="copy-btn" onclick="copyActiveCode(2)">Copy</button>
  </div>
  <div class="code-block curl" id="2-code-curl">
```curl
curl -X PATCH\
 -H "Authorization: Basic [[basicHash]]"\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/customers/{customer_id}/cards/{card_id}"
```
</div>
<div class="code-block java" id="2-code-java">
```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CardAPIApi;

import java.io.File;
import java.util.*;

public class CardAPIApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        CardAPIApi apiInstance = new CardAPIApi();
        Integer expirationMonth = 56; // Integer | 
        Integer expirationYear = 56; // Integer | 
        String name = name_example; // String | 
        String postalCode = postalCode_example; // String | 
        String customerId = customerId_example; // String | 
        String cardId = cardId_example; // String | 
        try {
            Card result = apiInstance.customersCustomerIdCardsCardIdPatch(expirationMonth, expirationYear, name, postalCode, customerId, cardId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CardAPIApi#customersCustomerIdCardsCardIdPatch");
            e.printStackTrace();
        }
    }
}
```
</div>
<div class="code-block android" id="2-code-android">
```android
import io.swagger.client.api.CardAPIApi;

public class CardAPIApiExample {

    public static void main(String[] args) {
        CardAPIApi apiInstance = new CardAPIApi();
        Integer expirationMonth = 56; // Integer | 
        Integer expirationYear = 56; // Integer | 
        String name = name_example; // String | 
        String postalCode = postalCode_example; // String | 
        String customerId = customerId_example; // String | 
        String cardId = cardId_example; // String | 
        try {
            Card result = apiInstance.customersCustomerIdCardsCardIdPatch(expirationMonth, expirationYear, name, postalCode, customerId, cardId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CardAPIApi#customersCustomerIdCardsCardIdPatch");
            e.printStackTrace();
        }
    }
}
```
</div>
<div class="code-block objc" id="2-code-objc">
```objc
Configuration *apiConfig = [Configuration sharedConfig];
// Configure HTTP basic authorization (authentication scheme: basicAuth)
[apiConfig setUsername:@"YOUR_USERNAME"];
[apiConfig setPassword:@"YOUR_PASSWORD"];
Integer *expirationMonth = 56; // 
Integer *expirationYear = 56; // 
String *name = name_example; // 
String *postalCode = postalCode_example; // 
String *customerId = customerId_example; // 
String *cardId = cardId_example; // 

CardAPIApi *apiInstance = [[CardAPIApi alloc] init];

// Update a specific card of a customer
[apiInstance customersCustomerIdCardsCardIdPatchWith:expirationMonth
    expirationYear:expirationYear
    name:name
    postalCode:postalCode
    customerId:customerId
    cardId:cardId
              completionHandler: ^(Card output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>
<div class="code-block javascript" id="2-code-javascript">
```javascript
var OmiseApi = require('omise_api');
var defaultClient = OmiseApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new OmiseApi.CardAPIApi()
var expirationMonth = 56; // {{Integer}} 
var expirationYear = 56; // {{Integer}} 
var name = name_example; // {{String}} 
var postalCode = postalCode_example; // {{String}} 
var customerId = customerId_example; // {{String}} 
var cardId = cardId_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.customersCustomerIdCardsCardIdPatch(expirationMonthexpirationYearnamepostalCodecustomerIdcardId, callback);
```
</div>
<div class="code-block csharp" id="2-code-csharp">
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class customersCustomerIdCardsCardIdPatchExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: basicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new CardAPIApi();
            var expirationMonth = 56;  // Integer | 
            var expirationYear = 56;  // Integer | 
            var name = name_example;  // String | 
            var postalCode = postalCode_example;  // String | 
            var customerId = customerId_example;  // String | 
            var cardId = cardId_example;  // String | 

            try
            {
                // Update a specific card of a customer
                Card result = apiInstance.customersCustomerIdCardsCardIdPatch(expirationMonth, expirationYear, name, postalCode, customerId, cardId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CardAPIApi.customersCustomerIdCardsCardIdPatch: " + e.Message );
            }
        }
    }
}
```
</div>
<div class="code-block php" id="2-code-php">
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure HTTP basic authorization: basicAuth
Swagger\Client\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Swagger\Client\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Swagger\Client\ApiCardAPIApi();
$expirationMonth = 56; // Integer | 
$expirationYear = 56; // Integer | 
$name = name_example; // String | 
$postalCode = postalCode_example; // String | 
$customerId = customerId_example; // String | 
$cardId = cardId_example; // String | 

try {
    $result = $api_instance->customersCustomerIdCardsCardIdPatch($expirationMonth, $expirationYear, $name, $postalCode, $customerId, $cardId);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardAPIApi->customersCustomerIdCardsCardIdPatch: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>
<div class="code-block perl" id="2-code-perl">
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CardAPIApi;
# Configure HTTP basic authorization: basicAuth
$WWW::SwaggerClient::Configuration::username = 'YOUR_USERNAME';
$WWW::SwaggerClient::Configuration::password = 'YOUR_PASSWORD';

my $api_instance = WWW::SwaggerClient::CardAPIApi->new();
my $expirationMonth = 56; # Integer | 
my $expirationYear = 56; # Integer | 
my $name = name_example; # String | 
my $postalCode = postalCode_example; # String | 
my $customerId = customerId_example; # String | 
my $cardId = cardId_example; # String | 

eval { 
    my $result = $api_instance->customersCustomerIdCardsCardIdPatch(expirationMonth => $expirationMonth, expirationYear => $expirationYear, name => $name, postalCode => $postalCode, customerId => $customerId, cardId => $cardId);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CardAPIApi->customersCustomerIdCardsCardIdPatch: $@\n";
}
```
</div>
<div class="code-block python" id="2-code-python">
```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# Configure HTTP basic authorization: basicAuth
swagger_client.configuration.username = 'YOUR_USERNAME'
swagger_client.configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = swagger_client.CardAPIApi()
expirationMonth = 56 # Integer | 
expirationYear = 56 # Integer | 
name = name_example # String | 
postalCode = postalCode_example # String | 
customerId = customerId_example # String | 
cardId = cardId_example # String | 

try: 
    # Update a specific card of a customer
    api_response = api_instance.customers_customer_id_cards_card_id_patch(expirationMonth, expirationYear, name, postalCode, customerId, cardId)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CardAPIApi->customersCustomerIdCardsCardIdPatch: %s\n" % e)
```
</div>
</div>


<div class="code-container">
  <div class="code-header">Example Block 4</div>
  <div class="dropdown">
    <select onchange="handleLanguageChange(this, 3)">
      <option value="curl" selected>cURL</option>
      <option value="java">java</option>
      <option value="android">android</option>
      <option value="objc">objc</option>
      <option value="javascript">javascript</option>
      <option value="csharp">csharp</option>
      <option value="php">php</option>
      <option value="perl">perl</option>
      <option value="python">python</option>
    </select>
    <button class="copy-btn" onclick="copyActiveCode(3)">Copy</button>
  </div>
  <div class="code-block curl" id="3-code-curl">
```curl
curl -X GET\
 -H "Authorization: Basic [[basicHash]]"\
-H "Accept: application/json"\
"https://api.omise.co/customers/{customer_id}/cards"
```
</div>
<div class="code-block java" id="3-code-java">
```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CardAPIApi;

import java.io.File;
import java.util.*;

public class CardAPIApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        CardAPIApi apiInstance = new CardAPIApi();
        String customerId = customerId_example; // String | 
        try {
            inline_response_200 result = apiInstance.customersCustomerIdCardsGet(customerId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CardAPIApi#customersCustomerIdCardsGet");
            e.printStackTrace();
        }
    }
}
```
</div>
<div class="code-block android" id="3-code-android">
```android
import io.swagger.client.api.CardAPIApi;

public class CardAPIApiExample {

    public static void main(String[] args) {
        CardAPIApi apiInstance = new CardAPIApi();
        String customerId = customerId_example; // String | 
        try {
            inline_response_200 result = apiInstance.customersCustomerIdCardsGet(customerId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CardAPIApi#customersCustomerIdCardsGet");
            e.printStackTrace();
        }
    }
}
```
</div>
<div class="code-block objc" id="3-code-objc">
```objc
Configuration *apiConfig = [Configuration sharedConfig];
// Configure HTTP basic authorization (authentication scheme: basicAuth)
[apiConfig setUsername:@"YOUR_USERNAME"];
[apiConfig setPassword:@"YOUR_PASSWORD"];
String *customerId = customerId_example; // 

CardAPIApi *apiInstance = [[CardAPIApi alloc] init];

// List cards for a customer
[apiInstance customersCustomerIdCardsGetWith:customerId
              completionHandler: ^(inline_response_200 output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>
<div class="code-block javascript" id="3-code-javascript">
```javascript
var OmiseApi = require('omise_api');
var defaultClient = OmiseApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new OmiseApi.CardAPIApi()
var customerId = customerId_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.customersCustomerIdCardsGet(customerId, callback);
```
</div>
<div class="code-block csharp" id="3-code-csharp">
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class customersCustomerIdCardsGetExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: basicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new CardAPIApi();
            var customerId = customerId_example;  // String | 

            try
            {
                // List cards for a customer
                inline_response_200 result = apiInstance.customersCustomerIdCardsGet(customerId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CardAPIApi.customersCustomerIdCardsGet: " + e.Message );
            }
        }
    }
}
```
</div>
<div class="code-block php" id="3-code-php">
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure HTTP basic authorization: basicAuth
Swagger\Client\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Swagger\Client\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Swagger\Client\ApiCardAPIApi();
$customerId = customerId_example; // String | 

try {
    $result = $api_instance->customersCustomerIdCardsGet($customerId);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardAPIApi->customersCustomerIdCardsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>
<div class="code-block perl" id="3-code-perl">
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CardAPIApi;
# Configure HTTP basic authorization: basicAuth
$WWW::SwaggerClient::Configuration::username = 'YOUR_USERNAME';
$WWW::SwaggerClient::Configuration::password = 'YOUR_PASSWORD';

my $api_instance = WWW::SwaggerClient::CardAPIApi->new();
my $customerId = customerId_example; # String | 

eval { 
    my $result = $api_instance->customersCustomerIdCardsGet(customerId => $customerId);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CardAPIApi->customersCustomerIdCardsGet: $@\n";
}
```
</div>
<div class="code-block python" id="3-code-python">
```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# Configure HTTP basic authorization: basicAuth
swagger_client.configuration.username = 'YOUR_USERNAME'
swagger_client.configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = swagger_client.CardAPIApi()
customerId = customerId_example # String | 

try: 
    # List cards for a customer
    api_response = api_instance.customers_customer_id_cards_get(customerId)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CardAPIApi->customersCustomerIdCardsGet: %s\n" % e)
```
</div>
</div>