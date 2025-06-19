# Cards


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Delete Customers ID Cards Card ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Delete Customers ID Cards Card ID</div>
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
              
<div class="code-block curl active" id="Delete Customers ID Cards Card ID-code-curl">
```js
curl -X DELETE\
-H "Accept: application/json"\
"https://api.omise.co/customers/{id}/cards/{card_id}"
```
</div>

<div class="code-block java" id="Delete Customers ID Cards Card ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CardsApi;

import java.io.File;
import java.util.*;

public class CardsApiExample {

    public static void main(String[] args) {
        
        CardsApi apiInstance = new CardsApi();
        String id = id_example; // String | 
        String cardId = cardId_example; // String | 
        try {
            card result = apiInstance.customersIdCardsCardIdDelete(id, cardId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CardsApi#customersIdCardsCardIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Delete Customers ID Cards Card ID-code-android">
```js
import io.swagger.client.api.CardsApi;

public class CardsApiExample {

    public static void main(String[] args) {
        CardsApi apiInstance = new CardsApi();
        String id = id_example; // String | 
        String cardId = cardId_example; // String | 
        try {
            card result = apiInstance.customersIdCardsCardIdDelete(id, cardId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CardsApi#customersIdCardsCardIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Delete Customers ID Cards Card ID-code-objc">
```js
String *id = id_example; // 
String *cardId = cardId_example; // 

CardsApi *apiInstance = [[CardsApi alloc] init];

[apiInstance customersIdCardsCardIdDeleteWith:id
    cardId:cardId
              completionHandler: ^(card output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Delete Customers ID Cards Card ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.CardsApi()
var id = id_example; // {{String}} 
var cardId = cardId_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.customersIdCardsCardIdDelete(id, cardId, callback);
```
</div>

<div class="code-block csharp" id="Delete Customers ID Cards Card ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class customersIdCardsCardIdDeleteExample
    {
        public void main()
        {

            var apiInstance = new CardsApi();
            var id = id_example;  // String | 
            var cardId = cardId_example;  // String | 

            try
            {
                card result = apiInstance.customersIdCardsCardIdDelete(id, cardId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CardsApi.customersIdCardsCardIdDelete: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Delete Customers ID Cards Card ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiCardsApi();
$id = id_example; // String | 
$cardId = cardId_example; // String | 

try {
    $result = $api_instance->customersIdCardsCardIdDelete($id, $cardId);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardsApi->customersIdCardsCardIdDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Delete Customers ID Cards Card ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CardsApi;

my $api_instance = WWW::SwaggerClient::CardsApi->new();
my $id = id_example; # String | 
my $cardId = cardId_example; # String | 

eval { 
    my $result = $api_instance->customersIdCardsCardIdDelete(id => $id, cardId => $cardId);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CardsApi->customersIdCardsCardIdDelete: $@\n";
}
```
</div>

<div class="code-block python" id="Delete Customers ID Cards Card ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CardsApi()
id = id_example # String | 
cardId = cardId_example # String | 

try: 
    api_response = api_instance.customers_id_cards_card_id_delete(id, cardId)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CardsApi->customersIdCardsCardIdDelete: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| id* | String Required |
| card_id* | String Required |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Customers ID Cards Card ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Customers ID Cards Card ID</div>
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
              
<div class="code-block curl active" id="Retrieve Customers ID Cards Card ID-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/customers/{id}/cards/{card_id}"
```
</div>

<div class="code-block java" id="Retrieve Customers ID Cards Card ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CardsApi;

import java.io.File;
import java.util.*;

public class CardsApiExample {

    public static void main(String[] args) {
        
        CardsApi apiInstance = new CardsApi();
        String id = id_example; // String | 
        String cardId = cardId_example; // String | 
        try {
            card result = apiInstance.customersIdCardsCardIdGet(id, cardId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CardsApi#customersIdCardsCardIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Customers ID Cards Card ID-code-android">
```js
import io.swagger.client.api.CardsApi;

public class CardsApiExample {

    public static void main(String[] args) {
        CardsApi apiInstance = new CardsApi();
        String id = id_example; // String | 
        String cardId = cardId_example; // String | 
        try {
            card result = apiInstance.customersIdCardsCardIdGet(id, cardId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CardsApi#customersIdCardsCardIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Customers ID Cards Card ID-code-objc">
```js
String *id = id_example; // 
String *cardId = cardId_example; // 

CardsApi *apiInstance = [[CardsApi alloc] init];

[apiInstance customersIdCardsCardIdGetWith:id
    cardId:cardId
              completionHandler: ^(card output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Customers ID Cards Card ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.CardsApi()
var id = id_example; // {{String}} 
var cardId = cardId_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.customersIdCardsCardIdGet(id, cardId, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Customers ID Cards Card ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class customersIdCardsCardIdGetExample
    {
        public void main()
        {

            var apiInstance = new CardsApi();
            var id = id_example;  // String | 
            var cardId = cardId_example;  // String | 

            try
            {
                card result = apiInstance.customersIdCardsCardIdGet(id, cardId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CardsApi.customersIdCardsCardIdGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Customers ID Cards Card ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiCardsApi();
$id = id_example; // String | 
$cardId = cardId_example; // String | 

try {
    $result = $api_instance->customersIdCardsCardIdGet($id, $cardId);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardsApi->customersIdCardsCardIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Customers ID Cards Card ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CardsApi;

my $api_instance = WWW::SwaggerClient::CardsApi->new();
my $id = id_example; # String | 
my $cardId = cardId_example; # String | 

eval { 
    my $result = $api_instance->customersIdCardsCardIdGet(id => $id, cardId => $cardId);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CardsApi->customersIdCardsCardIdGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Customers ID Cards Card ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CardsApi()
id = id_example # String | 
cardId = cardId_example # String | 

try: 
    api_response = api_instance.customers_id_cards_card_id_get(id, cardId)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CardsApi->customersIdCardsCardIdGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| id* | String Required |
| card_id* | String Required |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Update Customers ID Cards Card ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Update Customers ID Cards Card ID</div>
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
              
<div class="code-block curl active" id="Update Customers ID Cards Card ID-code-curl">
```js
curl -X PATCH\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/customers/{id}/cards/{card_id}"
```
</div>

<div class="code-block java" id="Update Customers ID Cards Card ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CardsApi;

import java.io.File;
import java.util.*;

public class CardsApiExample {

    public static void main(String[] args) {
        
        CardsApi apiInstance = new CardsApi();
        String id = id_example; // String | 
        String cardId = cardId_example; // String | 
        String name = name_example; // String | 
        Integer expirationMonth = 56; // Integer | 
        Integer expirationYear = 56; // Integer | 
        String postalCode = postalCode_example; // String | 
        String city = city_example; // String | 
        try {
            card result = apiInstance.customersIdCardsCardIdPatch(id, cardId, name, expirationMonth, expirationYear, postalCode, city);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CardsApi#customersIdCardsCardIdPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Update Customers ID Cards Card ID-code-android">
```js
import io.swagger.client.api.CardsApi;

public class CardsApiExample {

    public static void main(String[] args) {
        CardsApi apiInstance = new CardsApi();
        String id = id_example; // String | 
        String cardId = cardId_example; // String | 
        String name = name_example; // String | 
        Integer expirationMonth = 56; // Integer | 
        Integer expirationYear = 56; // Integer | 
        String postalCode = postalCode_example; // String | 
        String city = city_example; // String | 
        try {
            card result = apiInstance.customersIdCardsCardIdPatch(id, cardId, name, expirationMonth, expirationYear, postalCode, city);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CardsApi#customersIdCardsCardIdPatch");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Update Customers ID Cards Card ID-code-objc">
```js
String *id = id_example; // 
String *cardId = cardId_example; // 
String *name = name_example; //  (optional)
Integer *expirationMonth = 56; //  (optional)
Integer *expirationYear = 56; //  (optional)
String *postalCode = postalCode_example; //  (optional)
String *city = city_example; //  (optional)

CardsApi *apiInstance = [[CardsApi alloc] init];

[apiInstance customersIdCardsCardIdPatchWith:id
    cardId:cardId
    name:name
    expirationMonth:expirationMonth
    expirationYear:expirationYear
    postalCode:postalCode
    city:city
              completionHandler: ^(card output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Update Customers ID Cards Card ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.CardsApi()
var id = id_example; // {{String}} 
var cardId = cardId_example; // {{String}} 
var opts = { 
  'name': name_example // {{String}} 
  'expirationMonth': 56 // {{Integer}} 
  'expirationYear': 56 // {{Integer}} 
  'postalCode': postalCode_example // {{String}} 
  'city': city_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.customersIdCardsCardIdPatch(idcardId, opts, callback);
```
</div>

<div class="code-block csharp" id="Update Customers ID Cards Card ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class customersIdCardsCardIdPatchExample
    {
        public void main()
        {

            var apiInstance = new CardsApi();
            var id = id_example;  // String | 
            var cardId = cardId_example;  // String | 
            var name = name_example;  // String |  (optional) 
            var expirationMonth = 56;  // Integer |  (optional) 
            var expirationYear = 56;  // Integer |  (optional) 
            var postalCode = postalCode_example;  // String |  (optional) 
            var city = city_example;  // String |  (optional) 

            try
            {
                card result = apiInstance.customersIdCardsCardIdPatch(id, cardId, name, expirationMonth, expirationYear, postalCode, city);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CardsApi.customersIdCardsCardIdPatch: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Update Customers ID Cards Card ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiCardsApi();
$id = id_example; // String | 
$cardId = cardId_example; // String | 
$name = name_example; // String | 
$expirationMonth = 56; // Integer | 
$expirationYear = 56; // Integer | 
$postalCode = postalCode_example; // String | 
$city = city_example; // String | 

try {
    $result = $api_instance->customersIdCardsCardIdPatch($id, $cardId, $name, $expirationMonth, $expirationYear, $postalCode, $city);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardsApi->customersIdCardsCardIdPatch: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Update Customers ID Cards Card ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CardsApi;

my $api_instance = WWW::SwaggerClient::CardsApi->new();
my $id = id_example; # String | 
my $cardId = cardId_example; # String | 
my $name = name_example; # String | 
my $expirationMonth = 56; # Integer | 
my $expirationYear = 56; # Integer | 
my $postalCode = postalCode_example; # String | 
my $city = city_example; # String | 

eval { 
    my $result = $api_instance->customersIdCardsCardIdPatch(id => $id, cardId => $cardId, name => $name, expirationMonth => $expirationMonth, expirationYear => $expirationYear, postalCode => $postalCode, city => $city);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CardsApi->customersIdCardsCardIdPatch: $@\n";
}
```
</div>

<div class="code-block python" id="Update Customers ID Cards Card ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CardsApi()
id = id_example # String | 
cardId = cardId_example # String | 
name = name_example # String |  (optional)
expirationMonth = 56 # Integer |  (optional)
expirationYear = 56 # Integer |  (optional)
postalCode = postalCode_example # String |  (optional)
city = city_example # String |  (optional)

try: 
    api_response = api_instance.customers_id_cards_card_id_patch(id, cardId, name=name, expirationMonth=expirationMonth, expirationYear=expirationYear, postalCode=postalCode, city=city)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CardsApi->customersIdCardsCardIdPatch: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| id* | String Required |
| card_id* | String Required |


### Parameters

| Name | Description |
|------|-------------|
| name | String |
| expiration_month | Integer |
| expiration_year | Integer |
| postal_code | String |
| city | String |

          </div>
        </div>
        <div>
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Customers ID Cards</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Customers ID Cards</div>
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
              
<div class="code-block curl active" id="Retrieve Customers ID Cards-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/customers/{id}/cards?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Customers ID Cards-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CardsApi;

import java.io.File;
import java.util.*;

public class CardsApiExample {

    public static void main(String[] args) {
        
        CardsApi apiInstance = new CardsApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.customersIdCardsGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CardsApi#customersIdCardsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Customers ID Cards-code-android">
```js
import io.swagger.client.api.CardsApi;

public class CardsApiExample {

    public static void main(String[] args) {
        CardsApi apiInstance = new CardsApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.customersIdCardsGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CardsApi#customersIdCardsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Customers ID Cards-code-objc">
```js
String *id = id_example; // 
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

CardsApi *apiInstance = [[CardsApi alloc] init];

[apiInstance customersIdCardsGetWith:id
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

<div class="code-block javascript" id="Retrieve Customers ID Cards-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.CardsApi()
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
api.customersIdCardsGet(id, opts, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Customers ID Cards-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class customersIdCardsGetExample
    {
        public void main()
        {

            var apiInstance = new CardsApi();
            var id = id_example;  // String | 
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.customersIdCardsGet(id, from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CardsApi.customersIdCardsGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Customers ID Cards-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiCardsApi();
$id = id_example; // String | 
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->customersIdCardsGet($id, $from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CardsApi->customersIdCardsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Customers ID Cards-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CardsApi;

my $api_instance = WWW::SwaggerClient::CardsApi->new();
my $id = id_example; # String | 
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->customersIdCardsGet(id => $id, from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CardsApi->customersIdCardsGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Customers ID Cards-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CardsApi()
id = id_example # String | 
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.customers_id_cards_get(id, from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CardsApi->customersIdCardsGet: %s\n" % e)
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
          ### Responses

 ### Status: 200

```json
 {
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
```

        </div>
      </div>

