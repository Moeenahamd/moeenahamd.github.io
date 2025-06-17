# Schedules


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>chargesSchedulesGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">chargesSchedulesGet</div>
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
              
<div class="code-block curl active" id="chargesSchedulesGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/charges/schedules?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="chargesSchedulesGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SchedulesApi;

import java.io.File;
import java.util.*;

public class SchedulesApiExample {

    public static void main(String[] args) {
        
        SchedulesApi apiInstance = new SchedulesApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.chargesSchedulesGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#chargesSchedulesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="chargesSchedulesGet-code-android">
```js
import io.swagger.client.api.SchedulesApi;

public class SchedulesApiExample {

    public static void main(String[] args) {
        SchedulesApi apiInstance = new SchedulesApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.chargesSchedulesGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#chargesSchedulesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="chargesSchedulesGet-code-objc">
```js
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

SchedulesApi *apiInstance = [[SchedulesApi alloc] init];

[apiInstance chargesSchedulesGetWith:from
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

<div class="code-block javascript" id="chargesSchedulesGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.SchedulesApi()
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
api.chargesSchedulesGet(opts, callback);
```
</div>

<div class="code-block csharp" id="chargesSchedulesGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chargesSchedulesGetExample
    {
        public void main()
        {

            var apiInstance = new SchedulesApi();
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.chargesSchedulesGet(from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SchedulesApi.chargesSchedulesGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="chargesSchedulesGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiSchedulesApi();
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->chargesSchedulesGet($from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SchedulesApi->chargesSchedulesGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="chargesSchedulesGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SchedulesApi;

my $api_instance = WWW::SwaggerClient::SchedulesApi->new();
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->chargesSchedulesGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SchedulesApi->chargesSchedulesGet: $@\n";
}
```
</div>

<div class="code-block python" id="chargesSchedulesGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SchedulesApi()
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.charges_schedules_get(from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SchedulesApi->chargesSchedulesGet: %s\n" % e)
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
            <h3>chargesSchedulesSearchGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">chargesSchedulesSearchGet</div>
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
              
<div class="code-block curl active" id="chargesSchedulesSearchGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/charges/schedules/search?scope=&query=&filters[status]=&filters[active]=&filters[amount]=&filters[created]=&filters[card_last_digits]="
```
</div>

<div class="code-block java" id="chargesSchedulesSearchGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SchedulesApi;

import java.io.File;
import java.util.*;

public class SchedulesApiExample {

    public static void main(String[] args) {
        
        SchedulesApi apiInstance = new SchedulesApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        String filters[status] = filters[status]_example; // String | 
        Boolean filters[active] = true; // Boolean | 
        Integer filters[amount] = 56; // Integer | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        String filters[cardLastDigits] = filters[cardLastDigits]_example; // String | 
        try {
            charge_schedule result = apiInstance.chargesSchedulesSearchGet(scope, query, filters[status], filters[active], filters[amount], filters[created], filters[cardLastDigits]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#chargesSchedulesSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="chargesSchedulesSearchGet-code-android">
```js
import io.swagger.client.api.SchedulesApi;

public class SchedulesApiExample {

    public static void main(String[] args) {
        SchedulesApi apiInstance = new SchedulesApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        String filters[status] = filters[status]_example; // String | 
        Boolean filters[active] = true; // Boolean | 
        Integer filters[amount] = 56; // Integer | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        String filters[cardLastDigits] = filters[cardLastDigits]_example; // String | 
        try {
            charge_schedule result = apiInstance.chargesSchedulesSearchGet(scope, query, filters[status], filters[active], filters[amount], filters[created], filters[cardLastDigits]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#chargesSchedulesSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="chargesSchedulesSearchGet-code-objc">
```js
String *scope = scope_example; //  (optional) (default to charge_schedule)
String *query = query_example; //  (optional)
String *filters[status] = filters[status]_example; //  (optional)
Boolean *filters[active] = true; //  (optional)
Integer *filters[amount] = 56; //  (optional)
Date *filters[created] = 2013-10-20T19:20:30+01:00; //  (optional)
String *filters[cardLastDigits] = filters[cardLastDigits]_example; //  (optional)

SchedulesApi *apiInstance = [[SchedulesApi alloc] init];

[apiInstance chargesSchedulesSearchGetWith:scope
    query:query
    filters[status]:filters[status]
    filters[active]:filters[active]
    filters[amount]:filters[amount]
    filters[created]:filters[created]
    filters[cardLastDigits]:filters[cardLastDigits]
              completionHandler: ^(charge_schedule output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="chargesSchedulesSearchGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.SchedulesApi()
var opts = { 
  'scope': scope_example, // {{String}} 
  'query': query_example, // {{String}} 
  'filters[status]': filters[status]_example, // {{String}} 
  'filters[active]': true, // {{Boolean}} 
  'filters[amount]': 56, // {{Integer}} 
  'filters[created]': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'filters[cardLastDigits]': filters[cardLastDigits]_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.chargesSchedulesSearchGet(opts, callback);
```
</div>

<div class="code-block csharp" id="chargesSchedulesSearchGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class chargesSchedulesSearchGetExample
    {
        public void main()
        {

            var apiInstance = new SchedulesApi();
            var scope = scope_example;  // String |  (optional)  (default to charge_schedule)
            var query = query_example;  // String |  (optional) 
            var filters[status] = filters[status]_example;  // String |  (optional) 
            var filters[active] = true;  // Boolean |  (optional) 
            var filters[amount] = 56;  // Integer |  (optional) 
            var filters[created] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var filters[cardLastDigits] = filters[cardLastDigits]_example;  // String |  (optional) 

            try
            {
                charge_schedule result = apiInstance.chargesSchedulesSearchGet(scope, query, filters[status], filters[active], filters[amount], filters[created], filters[cardLastDigits]);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SchedulesApi.chargesSchedulesSearchGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="chargesSchedulesSearchGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiSchedulesApi();
$scope = scope_example; // String | 
$query = query_example; // String | 
$filters[status] = filters[status]_example; // String | 
$filters[active] = true; // Boolean | 
$filters[amount] = 56; // Integer | 
$filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
$filters[cardLastDigits] = filters[cardLastDigits]_example; // String | 

try {
    $result = $api_instance->chargesSchedulesSearchGet($scope, $query, $filters[status], $filters[active], $filters[amount], $filters[created], $filters[cardLastDigits]);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SchedulesApi->chargesSchedulesSearchGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="chargesSchedulesSearchGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SchedulesApi;

my $api_instance = WWW::SwaggerClient::SchedulesApi->new();
my $scope = scope_example; # String | 
my $query = query_example; # String | 
my $filters[status] = filters[status]_example; # String | 
my $filters[active] = true; # Boolean | 
my $filters[amount] = 56; # Integer | 
my $filters[created] = 2013-10-20T19:20:30+01:00; # Date | 
my $filters[cardLastDigits] = filters[cardLastDigits]_example; # String | 

eval { 
    my $result = $api_instance->chargesSchedulesSearchGet(scope => $scope, query => $query, filters[status] => $filters[status], filters[active] => $filters[active], filters[amount] => $filters[amount], filters[created] => $filters[created], filters[cardLastDigits] => $filters[cardLastDigits]);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SchedulesApi->chargesSchedulesSearchGet: $@\n";
}
```
</div>

<div class="code-block python" id="chargesSchedulesSearchGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SchedulesApi()
scope = scope_example # String |  (optional) (default to charge_schedule)
query = query_example # String |  (optional)
filters[status] = filters[status]_example # String |  (optional)
filters[active] = true # Boolean |  (optional)
filters[amount] = 56 # Integer |  (optional)
filters[created] = 2013-10-20T19:20:30+01:00 # Date |  (optional)
filters[cardLastDigits] = filters[cardLastDigits]_example # String |  (optional)

try: 
    api_response = api_instance.charges_schedules_search_get(scope=scope, query=query, filters[status]=filters[status], filters[active]=filters[active], filters[amount]=filters[amount], filters[created]=filters[created], filters[cardLastDigits]=filters[cardLastDigits])
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SchedulesApi->chargesSchedulesSearchGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| scope | String |
| query | String |
| filters[status] | String |
| filters[active] | Boolean |
| filters[amount] | Integer |
| filters[created] | Date (date-time) |
| filters[card_last_digits] | String |

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
            <h3>schedulesGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">schedulesGet</div>
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
              
<div class="code-block curl active" id="schedulesGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/schedules?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="schedulesGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SchedulesApi;

import java.io.File;
import java.util.*;

public class SchedulesApiExample {

    public static void main(String[] args) {
        
        SchedulesApi apiInstance = new SchedulesApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.schedulesGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#schedulesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="schedulesGet-code-android">
```js
import io.swagger.client.api.SchedulesApi;

public class SchedulesApiExample {

    public static void main(String[] args) {
        SchedulesApi apiInstance = new SchedulesApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.schedulesGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#schedulesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="schedulesGet-code-objc">
```js
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

SchedulesApi *apiInstance = [[SchedulesApi alloc] init];

[apiInstance schedulesGetWith:from
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

<div class="code-block javascript" id="schedulesGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.SchedulesApi()
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
api.schedulesGet(opts, callback);
```
</div>

<div class="code-block csharp" id="schedulesGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class schedulesGetExample
    {
        public void main()
        {

            var apiInstance = new SchedulesApi();
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.schedulesGet(from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SchedulesApi.schedulesGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="schedulesGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiSchedulesApi();
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->schedulesGet($from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SchedulesApi->schedulesGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="schedulesGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SchedulesApi;

my $api_instance = WWW::SwaggerClient::SchedulesApi->new();
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->schedulesGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SchedulesApi->schedulesGet: $@\n";
}
```
</div>

<div class="code-block python" id="schedulesGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SchedulesApi()
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.schedules_get(from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SchedulesApi->schedulesGet: %s\n" % e)
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
            <h3>schedulesIdDelete</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">schedulesIdDelete</div>
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
              
<div class="code-block curl active" id="schedulesIdDelete-code-curl">
```js
curl -X DELETE\
-H "Accept: application/json"\
"https://api.omise.co/schedules/{id}"
```
</div>

<div class="code-block java" id="schedulesIdDelete-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SchedulesApi;

import java.io.File;
import java.util.*;

public class SchedulesApiExample {

    public static void main(String[] args) {
        
        SchedulesApi apiInstance = new SchedulesApi();
        String id = id_example; // String | 
        try {
            schedule result = apiInstance.schedulesIdDelete(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#schedulesIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="schedulesIdDelete-code-android">
```js
import io.swagger.client.api.SchedulesApi;

public class SchedulesApiExample {

    public static void main(String[] args) {
        SchedulesApi apiInstance = new SchedulesApi();
        String id = id_example; // String | 
        try {
            schedule result = apiInstance.schedulesIdDelete(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#schedulesIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="schedulesIdDelete-code-objc">
```js
String *id = id_example; // 

SchedulesApi *apiInstance = [[SchedulesApi alloc] init];

[apiInstance schedulesIdDeleteWith:id
              completionHandler: ^(schedule output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="schedulesIdDelete-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.SchedulesApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.schedulesIdDelete(id, callback);
```
</div>

<div class="code-block csharp" id="schedulesIdDelete-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class schedulesIdDeleteExample
    {
        public void main()
        {

            var apiInstance = new SchedulesApi();
            var id = id_example;  // String | 

            try
            {
                schedule result = apiInstance.schedulesIdDelete(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SchedulesApi.schedulesIdDelete: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="schedulesIdDelete-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiSchedulesApi();
$id = id_example; // String | 

try {
    $result = $api_instance->schedulesIdDelete($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SchedulesApi->schedulesIdDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="schedulesIdDelete-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SchedulesApi;

my $api_instance = WWW::SwaggerClient::SchedulesApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->schedulesIdDelete(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SchedulesApi->schedulesIdDelete: $@\n";
}
```
</div>

<div class="code-block python" id="schedulesIdDelete-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SchedulesApi()
id = id_example # String | 

try: 
    api_response = api_instance.schedules_id_delete(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SchedulesApi->schedulesIdDelete: %s\n" % e)
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
            <h3>schedulesIdGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">schedulesIdGet</div>
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
              
<div class="code-block curl active" id="schedulesIdGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/schedules/{id}"
```
</div>

<div class="code-block java" id="schedulesIdGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SchedulesApi;

import java.io.File;
import java.util.*;

public class SchedulesApiExample {

    public static void main(String[] args) {
        
        SchedulesApi apiInstance = new SchedulesApi();
        String id = id_example; // String | 
        try {
            schedule result = apiInstance.schedulesIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#schedulesIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="schedulesIdGet-code-android">
```js
import io.swagger.client.api.SchedulesApi;

public class SchedulesApiExample {

    public static void main(String[] args) {
        SchedulesApi apiInstance = new SchedulesApi();
        String id = id_example; // String | 
        try {
            schedule result = apiInstance.schedulesIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#schedulesIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="schedulesIdGet-code-objc">
```js
String *id = id_example; // 

SchedulesApi *apiInstance = [[SchedulesApi alloc] init];

[apiInstance schedulesIdGetWith:id
              completionHandler: ^(schedule output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="schedulesIdGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.SchedulesApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.schedulesIdGet(id, callback);
```
</div>

<div class="code-block csharp" id="schedulesIdGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class schedulesIdGetExample
    {
        public void main()
        {

            var apiInstance = new SchedulesApi();
            var id = id_example;  // String | 

            try
            {
                schedule result = apiInstance.schedulesIdGet(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SchedulesApi.schedulesIdGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="schedulesIdGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiSchedulesApi();
$id = id_example; // String | 

try {
    $result = $api_instance->schedulesIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SchedulesApi->schedulesIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="schedulesIdGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SchedulesApi;

my $api_instance = WWW::SwaggerClient::SchedulesApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->schedulesIdGet(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SchedulesApi->schedulesIdGet: $@\n";
}
```
</div>

<div class="code-block python" id="schedulesIdGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SchedulesApi()
id = id_example # String | 

try: 
    api_response = api_instance.schedules_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SchedulesApi->schedulesIdGet: %s\n" % e)
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
            <h3>schedulesIdOccurrencesGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">schedulesIdOccurrencesGet</div>
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
              
<div class="code-block curl active" id="schedulesIdOccurrencesGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/schedules/{id}/occurrences?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="schedulesIdOccurrencesGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SchedulesApi;

import java.io.File;
import java.util.*;

public class SchedulesApiExample {

    public static void main(String[] args) {
        
        SchedulesApi apiInstance = new SchedulesApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.schedulesIdOccurrencesGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#schedulesIdOccurrencesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="schedulesIdOccurrencesGet-code-android">
```js
import io.swagger.client.api.SchedulesApi;

public class SchedulesApiExample {

    public static void main(String[] args) {
        SchedulesApi apiInstance = new SchedulesApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.schedulesIdOccurrencesGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#schedulesIdOccurrencesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="schedulesIdOccurrencesGet-code-objc">
```js
String *id = id_example; // 
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

SchedulesApi *apiInstance = [[SchedulesApi alloc] init];

[apiInstance schedulesIdOccurrencesGetWith:id
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

<div class="code-block javascript" id="schedulesIdOccurrencesGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.SchedulesApi()
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
api.schedulesIdOccurrencesGet(id, opts, callback);
```
</div>

<div class="code-block csharp" id="schedulesIdOccurrencesGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class schedulesIdOccurrencesGetExample
    {
        public void main()
        {

            var apiInstance = new SchedulesApi();
            var id = id_example;  // String | 
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.schedulesIdOccurrencesGet(id, from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SchedulesApi.schedulesIdOccurrencesGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="schedulesIdOccurrencesGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiSchedulesApi();
$id = id_example; // String | 
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->schedulesIdOccurrencesGet($id, $from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SchedulesApi->schedulesIdOccurrencesGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="schedulesIdOccurrencesGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SchedulesApi;

my $api_instance = WWW::SwaggerClient::SchedulesApi->new();
my $id = id_example; # String | 
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->schedulesIdOccurrencesGet(id => $id, from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SchedulesApi->schedulesIdOccurrencesGet: $@\n";
}
```
</div>

<div class="code-block python" id="schedulesIdOccurrencesGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SchedulesApi()
id = id_example # String | 
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.schedules_id_occurrences_get(id, from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SchedulesApi->schedulesIdOccurrencesGet: %s\n" % e)
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
            <h3>schedulesPost</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">schedulesPost</div>
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
              
<div class="code-block curl active" id="schedulesPost-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/schedules"
```
</div>

<div class="code-block java" id="schedulesPost-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SchedulesApi;

import java.io.File;
import java.util.*;

public class SchedulesApiExample {

    public static void main(String[] args) {
        
        SchedulesApi apiInstance = new SchedulesApi();
        date endDate = 2013-10-20; // date | 
        date startDate = 2013-10-20; // date | 
        Integer every = 56; // Integer | 
        schedules_charge charge = ; // schedules_charge | 
        schedules_transfer transfer = ; // schedules_transfer | 
        schedules_on on = ; // schedules_on | 
        String period = period_example; // String | 
        try {
            schedule result = apiInstance.schedulesPost(endDate, startDate, every, charge, transfer, on, period);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#schedulesPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="schedulesPost-code-android">
```js
import io.swagger.client.api.SchedulesApi;

public class SchedulesApiExample {

    public static void main(String[] args) {
        SchedulesApi apiInstance = new SchedulesApi();
        date endDate = 2013-10-20; // date | 
        date startDate = 2013-10-20; // date | 
        Integer every = 56; // Integer | 
        schedules_charge charge = ; // schedules_charge | 
        schedules_transfer transfer = ; // schedules_transfer | 
        schedules_on on = ; // schedules_on | 
        String period = period_example; // String | 
        try {
            schedule result = apiInstance.schedulesPost(endDate, startDate, every, charge, transfer, on, period);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#schedulesPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="schedulesPost-code-objc">
```js
date *endDate = 2013-10-20; //  (optional)
date *startDate = 2013-10-20; //  (optional)
Integer *every = 56; //  (optional)
schedules_charge *charge = ; //  (optional)
schedules_transfer *transfer = ; //  (optional)
schedules_on *on = ; //  (optional)
String *period = period_example; //  (optional)

SchedulesApi *apiInstance = [[SchedulesApi alloc] init];

[apiInstance schedulesPostWith:endDate
    startDate:startDate
    every:every
    charge:charge
    transfer:transfer
    on:on
    period:period
              completionHandler: ^(schedule output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="schedulesPost-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.SchedulesApi()
var opts = { 
  'endDate': 2013-10-20 // {{date}} 
  'startDate': 2013-10-20 // {{date}} 
  'every': 56 // {{Integer}} 
  'charge':  // {{schedules_charge}} 
  'transfer':  // {{schedules_transfer}} 
  'on':  // {{schedules_on}} 
  'period': period_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.schedulesPost(opts, callback);
```
</div>

<div class="code-block csharp" id="schedulesPost-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class schedulesPostExample
    {
        public void main()
        {

            var apiInstance = new SchedulesApi();
            var endDate = 2013-10-20;  // date |  (optional) 
            var startDate = 2013-10-20;  // date |  (optional) 
            var every = 56;  // Integer |  (optional) 
            var charge = new schedules_charge(); // schedules_charge |  (optional) 
            var transfer = new schedules_transfer(); // schedules_transfer |  (optional) 
            var on = new schedules_on(); // schedules_on |  (optional) 
            var period = period_example;  // String |  (optional) 

            try
            {
                schedule result = apiInstance.schedulesPost(endDate, startDate, every, charge, transfer, on, period);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SchedulesApi.schedulesPost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="schedulesPost-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiSchedulesApi();
$endDate = 2013-10-20; // date | 
$startDate = 2013-10-20; // date | 
$every = 56; // Integer | 
$charge = ; // schedules_charge | 
$transfer = ; // schedules_transfer | 
$on = ; // schedules_on | 
$period = period_example; // String | 

try {
    $result = $api_instance->schedulesPost($endDate, $startDate, $every, $charge, $transfer, $on, $period);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SchedulesApi->schedulesPost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="schedulesPost-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SchedulesApi;

my $api_instance = WWW::SwaggerClient::SchedulesApi->new();
my $endDate = 2013-10-20; # date | 
my $startDate = 2013-10-20; # date | 
my $every = 56; # Integer | 
my $charge = ; # schedules_charge | 
my $transfer = ; # schedules_transfer | 
my $on = ; # schedules_on | 
my $period = period_example; # String | 

eval { 
    my $result = $api_instance->schedulesPost(endDate => $endDate, startDate => $startDate, every => $every, charge => $charge, transfer => $transfer, on => $on, period => $period);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SchedulesApi->schedulesPost: $@\n";
}
```
</div>

<div class="code-block python" id="schedulesPost-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SchedulesApi()
endDate = 2013-10-20 # date |  (optional)
startDate = 2013-10-20 # date |  (optional)
every = 56 # Integer |  (optional)
charge =  # schedules_charge |  (optional)
transfer =  # schedules_transfer |  (optional)
on =  # schedules_on |  (optional)
period = period_example # String |  (optional)

try: 
    api_response = api_instance.schedules_post(endDate=endDate, startDate=startDate, every=every, charge=charge, transfer=transfer, on=on, period=period)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SchedulesApi->schedulesPost: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| end_date | date (date) |
| start_date | date (date) |
| every | Integer |
| charge | schedules_charge |
| transfer | schedules_transfer |
| on | schedules_on |
| period | String |

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
            <h3>transfersSchedulesGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">transfersSchedulesGet</div>
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
              
<div class="code-block curl active" id="transfersSchedulesGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/transfers/schedules?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="transfersSchedulesGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SchedulesApi;

import java.io.File;
import java.util.*;

public class SchedulesApiExample {

    public static void main(String[] args) {
        
        SchedulesApi apiInstance = new SchedulesApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.transfersSchedulesGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#transfersSchedulesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="transfersSchedulesGet-code-android">
```js
import io.swagger.client.api.SchedulesApi;

public class SchedulesApiExample {

    public static void main(String[] args) {
        SchedulesApi apiInstance = new SchedulesApi();
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.transfersSchedulesGet(from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#transfersSchedulesGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="transfersSchedulesGet-code-objc">
```js
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

SchedulesApi *apiInstance = [[SchedulesApi alloc] init];

[apiInstance transfersSchedulesGetWith:from
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

<div class="code-block javascript" id="transfersSchedulesGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.SchedulesApi()
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
api.transfersSchedulesGet(opts, callback);
```
</div>

<div class="code-block csharp" id="transfersSchedulesGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class transfersSchedulesGetExample
    {
        public void main()
        {

            var apiInstance = new SchedulesApi();
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.transfersSchedulesGet(from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SchedulesApi.transfersSchedulesGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="transfersSchedulesGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiSchedulesApi();
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->transfersSchedulesGet($from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SchedulesApi->transfersSchedulesGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="transfersSchedulesGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SchedulesApi;

my $api_instance = WWW::SwaggerClient::SchedulesApi->new();
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->transfersSchedulesGet(from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SchedulesApi->transfersSchedulesGet: $@\n";
}
```
</div>

<div class="code-block python" id="transfersSchedulesGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SchedulesApi()
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.transfers_schedules_get(from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SchedulesApi->transfersSchedulesGet: %s\n" % e)
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
            <h3>transfersSchedulesSearchGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">transfersSchedulesSearchGet</div>
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
              
<div class="code-block curl active" id="transfersSchedulesSearchGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/transfers/schedules/search?scope=&query=&filters[status]=&filters[active]=&filters[created]="
```
</div>

<div class="code-block java" id="transfersSchedulesSearchGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SchedulesApi;

import java.io.File;
import java.util.*;

public class SchedulesApiExample {

    public static void main(String[] args) {
        
        SchedulesApi apiInstance = new SchedulesApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        String filters[status] = filters[status]_example; // String | 
        Boolean filters[active] = true; // Boolean | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        try {
            transfer_schedule result = apiInstance.transfersSchedulesSearchGet(scope, query, filters[status], filters[active], filters[created]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#transfersSchedulesSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="transfersSchedulesSearchGet-code-android">
```js
import io.swagger.client.api.SchedulesApi;

public class SchedulesApiExample {

    public static void main(String[] args) {
        SchedulesApi apiInstance = new SchedulesApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        String filters[status] = filters[status]_example; // String | 
        Boolean filters[active] = true; // Boolean | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        try {
            transfer_schedule result = apiInstance.transfersSchedulesSearchGet(scope, query, filters[status], filters[active], filters[created]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SchedulesApi#transfersSchedulesSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="transfersSchedulesSearchGet-code-objc">
```js
String *scope = scope_example; //  (optional) (default to transfer_schedule)
String *query = query_example; //  (optional)
String *filters[status] = filters[status]_example; //  (optional)
Boolean *filters[active] = true; //  (optional)
Date *filters[created] = 2013-10-20T19:20:30+01:00; //  (optional)

SchedulesApi *apiInstance = [[SchedulesApi alloc] init];

[apiInstance transfersSchedulesSearchGetWith:scope
    query:query
    filters[status]:filters[status]
    filters[active]:filters[active]
    filters[created]:filters[created]
              completionHandler: ^(transfer_schedule output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="transfersSchedulesSearchGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.SchedulesApi()
var opts = { 
  'scope': scope_example, // {{String}} 
  'query': query_example, // {{String}} 
  'filters[status]': filters[status]_example, // {{String}} 
  'filters[active]': true, // {{Boolean}} 
  'filters[created]': 2013-10-20T19:20:30+01:00 // {{Date}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transfersSchedulesSearchGet(opts, callback);
```
</div>

<div class="code-block csharp" id="transfersSchedulesSearchGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class transfersSchedulesSearchGetExample
    {
        public void main()
        {

            var apiInstance = new SchedulesApi();
            var scope = scope_example;  // String |  (optional)  (default to transfer_schedule)
            var query = query_example;  // String |  (optional) 
            var filters[status] = filters[status]_example;  // String |  (optional) 
            var filters[active] = true;  // Boolean |  (optional) 
            var filters[created] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 

            try
            {
                transfer_schedule result = apiInstance.transfersSchedulesSearchGet(scope, query, filters[status], filters[active], filters[created]);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SchedulesApi.transfersSchedulesSearchGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="transfersSchedulesSearchGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiSchedulesApi();
$scope = scope_example; // String | 
$query = query_example; // String | 
$filters[status] = filters[status]_example; // String | 
$filters[active] = true; // Boolean | 
$filters[created] = 2013-10-20T19:20:30+01:00; // Date | 

try {
    $result = $api_instance->transfersSchedulesSearchGet($scope, $query, $filters[status], $filters[active], $filters[created]);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SchedulesApi->transfersSchedulesSearchGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="transfersSchedulesSearchGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SchedulesApi;

my $api_instance = WWW::SwaggerClient::SchedulesApi->new();
my $scope = scope_example; # String | 
my $query = query_example; # String | 
my $filters[status] = filters[status]_example; # String | 
my $filters[active] = true; # Boolean | 
my $filters[created] = 2013-10-20T19:20:30+01:00; # Date | 

eval { 
    my $result = $api_instance->transfersSchedulesSearchGet(scope => $scope, query => $query, filters[status] => $filters[status], filters[active] => $filters[active], filters[created] => $filters[created]);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SchedulesApi->transfersSchedulesSearchGet: $@\n";
}
```
</div>

<div class="code-block python" id="transfersSchedulesSearchGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SchedulesApi()
scope = scope_example # String |  (optional) (default to transfer_schedule)
query = query_example # String |  (optional)
filters[status] = filters[status]_example # String |  (optional)
filters[active] = true # Boolean |  (optional)
filters[created] = 2013-10-20T19:20:30+01:00 # Date |  (optional)

try: 
    api_response = api_instance.transfers_schedules_search_get(scope=scope, query=query, filters[status]=filters[status], filters[active]=filters[active], filters[created]=filters[created])
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SchedulesApi->transfersSchedulesSearchGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| scope | String |
| query | String |
| filters[status] | String |
| filters[active] | Boolean |
| filters[created] | Date (date-time) |

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

