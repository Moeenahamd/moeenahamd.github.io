# Schedules


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Charges Schedules</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Charges Schedules</div>
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
              
<div class="code-block curl active" id="Retrieve Charges Schedules-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/charges/schedules?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Charges Schedules-code-java">
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

<div class="code-block android" id="Retrieve Charges Schedules-code-android">
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

<div class="code-block objc" id="Retrieve Charges Schedules-code-objc">
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

<div class="code-block javascript" id="Retrieve Charges Schedules-code-javascript">
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

<div class="code-block csharp" id="Retrieve Charges Schedules-code-csharp">
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

<div class="code-block php" id="Retrieve Charges Schedules-code-php">
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

<div class="code-block perl" id="Retrieve Charges Schedules-code-perl">
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

<div class="code-block python" id="Retrieve Charges Schedules-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Charges Schedules Search</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Charges Schedules Search</div>
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
              
<div class="code-block curl active" id="Retrieve Charges Schedules Search-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/charges/schedules/search?scope=&query=&filters[status]=&filters[active]=&filters[amount]=&filters[created]=&filters[card_last_digits]="
```
</div>

<div class="code-block java" id="Retrieve Charges Schedules Search-code-java">
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

<div class="code-block android" id="Retrieve Charges Schedules Search-code-android">
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

<div class="code-block objc" id="Retrieve Charges Schedules Search-code-objc">
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

<div class="code-block javascript" id="Retrieve Charges Schedules Search-code-javascript">
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

<div class="code-block csharp" id="Retrieve Charges Schedules Search-code-csharp">
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

<div class="code-block php" id="Retrieve Charges Schedules Search-code-php">
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

<div class="code-block perl" id="Retrieve Charges Schedules Search-code-perl">
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

<div class="code-block python" id="Retrieve Charges Schedules Search-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Schedules</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Schedules</div>
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
              
<div class="code-block curl active" id="Retrieve Schedules-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/schedules?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Schedules-code-java">
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

<div class="code-block android" id="Retrieve Schedules-code-android">
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

<div class="code-block objc" id="Retrieve Schedules-code-objc">
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

<div class="code-block javascript" id="Retrieve Schedules-code-javascript">
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

<div class="code-block csharp" id="Retrieve Schedules-code-csharp">
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

<div class="code-block php" id="Retrieve Schedules-code-php">
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

<div class="code-block perl" id="Retrieve Schedules-code-perl">
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

<div class="code-block python" id="Retrieve Schedules-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Delete Schedules ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Delete Schedules ID</div>
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
              
<div class="code-block curl active" id="Delete Schedules ID-code-curl">
```js
curl -X DELETE\
-H "Accept: application/json"\
"https://api.omise.co/schedules/{id}"
```
</div>

<div class="code-block java" id="Delete Schedules ID-code-java">
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

<div class="code-block android" id="Delete Schedules ID-code-android">
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

<div class="code-block objc" id="Delete Schedules ID-code-objc">
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

<div class="code-block javascript" id="Delete Schedules ID-code-javascript">
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

<div class="code-block csharp" id="Delete Schedules ID-code-csharp">
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

<div class="code-block php" id="Delete Schedules ID-code-php">
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

<div class="code-block perl" id="Delete Schedules ID-code-perl">
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

<div class="code-block python" id="Delete Schedules ID-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Schedules ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Schedules ID</div>
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
              
<div class="code-block curl active" id="Retrieve Schedules ID-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/schedules/{id}"
```
</div>

<div class="code-block java" id="Retrieve Schedules ID-code-java">
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

<div class="code-block android" id="Retrieve Schedules ID-code-android">
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

<div class="code-block objc" id="Retrieve Schedules ID-code-objc">
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

<div class="code-block javascript" id="Retrieve Schedules ID-code-javascript">
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

<div class="code-block csharp" id="Retrieve Schedules ID-code-csharp">
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

<div class="code-block php" id="Retrieve Schedules ID-code-php">
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

<div class="code-block perl" id="Retrieve Schedules ID-code-perl">
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

<div class="code-block python" id="Retrieve Schedules ID-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Schedules ID Occurrences</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Schedules ID Occurrences</div>
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
              
<div class="code-block curl active" id="Retrieve Schedules ID Occurrences-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/schedules/{id}/occurrences?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Schedules ID Occurrences-code-java">
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

<div class="code-block android" id="Retrieve Schedules ID Occurrences-code-android">
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

<div class="code-block objc" id="Retrieve Schedules ID Occurrences-code-objc">
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

<div class="code-block javascript" id="Retrieve Schedules ID Occurrences-code-javascript">
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

<div class="code-block csharp" id="Retrieve Schedules ID Occurrences-code-csharp">
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

<div class="code-block php" id="Retrieve Schedules ID Occurrences-code-php">
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

<div class="code-block perl" id="Retrieve Schedules ID Occurrences-code-perl">
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

<div class="code-block python" id="Retrieve Schedules ID Occurrences-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Create Schedules</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Create Schedules</div>
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
              
<div class="code-block curl active" id="Create Schedules-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/schedules"
```
</div>

<div class="code-block java" id="Create Schedules-code-java">
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

<div class="code-block android" id="Create Schedules-code-android">
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

<div class="code-block objc" id="Create Schedules-code-objc">
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

<div class="code-block javascript" id="Create Schedules-code-javascript">
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

<div class="code-block csharp" id="Create Schedules-code-csharp">
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

<div class="code-block php" id="Create Schedules-code-php">
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

<div class="code-block perl" id="Create Schedules-code-perl">
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

<div class="code-block python" id="Create Schedules-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Transfers Schedules</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Transfers Schedules</div>
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
              
<div class="code-block curl active" id="Retrieve Transfers Schedules-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/transfers/schedules?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="Retrieve Transfers Schedules-code-java">
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

<div class="code-block android" id="Retrieve Transfers Schedules-code-android">
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

<div class="code-block objc" id="Retrieve Transfers Schedules-code-objc">
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

<div class="code-block javascript" id="Retrieve Transfers Schedules-code-javascript">
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

<div class="code-block csharp" id="Retrieve Transfers Schedules-code-csharp">
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

<div class="code-block php" id="Retrieve Transfers Schedules-code-php">
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

<div class="code-block perl" id="Retrieve Transfers Schedules-code-perl">
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

<div class="code-block python" id="Retrieve Transfers Schedules-code-python">
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
          
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Transfers Schedules Search</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Transfers Schedules Search</div>
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
              
<div class="code-block curl active" id="Retrieve Transfers Schedules Search-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/transfers/schedules/search?scope=&query=&filters[status]=&filters[active]=&filters[created]="
```
</div>

<div class="code-block java" id="Retrieve Transfers Schedules Search-code-java">
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

<div class="code-block android" id="Retrieve Transfers Schedules Search-code-android">
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

<div class="code-block objc" id="Retrieve Transfers Schedules Search-code-objc">
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

<div class="code-block javascript" id="Retrieve Transfers Schedules Search-code-javascript">
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

<div class="code-block csharp" id="Retrieve Transfers Schedules Search-code-csharp">
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

<div class="code-block php" id="Retrieve Transfers Schedules Search-code-php">
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

<div class="code-block perl" id="Retrieve Transfers Schedules Search-code-perl">
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

<div class="code-block python" id="Retrieve Transfers Schedules Search-code-python">
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

```json
 {
  "object": {
    "pattern": "charge_schedule",
    "type": "string",
    "default": "charge_schedule"
  },
  "id": {
    "pattern": "rchg_[0-9a-z]+",
    "type": "string"
  },
  "livemode": {
    "type": "boolean",
    "enum": [
      true,
      false
    ]
  },
  "currency": {
    "type": "string",
    "format": "currency"
  },
  "amount": {
    "type": "integer"
  },
  "default_card": {
    "type": "boolean",
    "enum": [
      true,
      false
    ]
  },
  "card": {
    "oneOf": [
      {
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
      {
        "type": "string"
      }
    ]
  },
  "customer": {
    "oneOf": [
      {
        "type": "object",
        "properties": {
          "object": {
            "pattern": "customer",
            "type": "string",
            "default": "customer"
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
          "metadata": {
            "type": "object",
            "default": {}
          },
          "cards": {
            "type": "object",
            "properties": {
              "object": {
                "pattern": "list",
                "type": "string",
                "default": "list"
              },
              "data": {
                "type": "array",
                "items": {}
              },
              "limit": {
                "type": "integer"
              },
              "offset": {
                "type": "integer"
              },
              "total": {
                "type": "integer"
              },
              "location": {
                "type": "string"
              },
              "order": {
                "type": "string",
                "enum": [
                  "chronological",
                  "reverse_chronological"
                ]
              },
              "from": {
                "type": "string",
                "format": "date-time"
              },
              "to": {
                "type": "string",
                "format": "date-time"
              }
            }
          },
          "default_card": {
            "oneOf": [
              {
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
              {
                "type": "string"
              }
            ]
          },
          "linked_accounts": {
            "type": "object",
            "properties": {
              "object": {
                "pattern": "list",
                "type": "string",
                "default": "list"
              },
              "data": {
                "type": "array",
                "items": {}
              },
              "limit": {
                "type": "integer"
              },
              "offset": {
                "type": "integer"
              },
              "total": {
                "type": "integer"
              },
              "location": {
                "type": "string"
              },
              "order": {
                "type": "string",
                "enum": [
                  "chronological",
                  "reverse_chronological"
                ]
              },
              "from": {
                "type": "string",
                "format": "date-time"
              },
              "to": {
                "type": "string",
                "format": "date-time"
              }
            }
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "email": {
            "type": "string",
            "nullable": true
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          }
        }
      },
      {
        "type": "string"
      }
    ]
  },
  "linked_account": {
    "oneOf": [
      {
        "type": "object",
        "properties": {
          "object": {
            "pattern": "linked_account",
            "type": "string",
            "default": "linked_account"
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
          "registration_uri": {
            "type": "string",
            "format": "uri"
          },
          "return_uri": {
            "type": "string",
            "format": "uri"
          },
          "type": {
            "type": "string"
          },
          "status": {
            "type": "string",
            "enum": [
              "failed",
              "expired",
              "deleted",
              "pending",
              "successful"
            ]
          },
          "last_digits": {
            "type": "string",
            "nullable": true
          },
          "metadata": {
            "type": "object",
            "default": {}
          },
          "failure_code": {
            "type": "string",
            "nullable": true
          },
          "failure_message": {
            "type": "string",
            "nullable": true
          },
          "registered_at": {
            "type": "string",
            "format": "date-time"
          },
          "expires_at": {
            "type": "string",
            "format": "date-time"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          }
        }
      },
      {
        "type": "string"
      }
    ]
  },
  "description": {
    "type": "string",
    "nullable": true
  },
  "metadata": {
    "type": "object",
    "default": {}
  },
  "created_at": {
    "type": "string",
    "format": "date-time"
  }
} 
```

        </div>
      </div>

