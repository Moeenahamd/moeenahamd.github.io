# Audits


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>auditsSearchGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">auditsSearchGet</div>
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
              
<div class="code-block curl active" id="auditsSearchGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/audits/search?scope=&query=&filters[created]=&filters[actor_email][]=&filters[actor_type]=&filters[auditable_type]=&filters[auditable_uid]=&filters[verb]="
```
</div>

<div class="code-block java" id="auditsSearchGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.AuditsApi;

import java.io.File;
import java.util.*;

public class AuditsApiExample {

    public static void main(String[] args) {
        
        AuditsApi apiInstance = new AuditsApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        array[String] filters[actorEmail][] = ; // array[String] | 
        String filters[actorType] = filters[actorType]_example; // String | 
        String filters[auditableType] = filters[auditableType]_example; // String | 
        String filters[auditableUid] = filters[auditableUid]_example; // String | 
        String filters[verb] = filters[verb]_example; // String | 
        try {
            audit result = apiInstance.auditsSearchGet(scope, query, filters[created], filters[actorEmail][], filters[actorType], filters[auditableType], filters[auditableUid], filters[verb]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AuditsApi#auditsSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="auditsSearchGet-code-android">
```js
import io.swagger.client.api.AuditsApi;

public class AuditsApiExample {

    public static void main(String[] args) {
        AuditsApi apiInstance = new AuditsApi();
        String scope = scope_example; // String | 
        String query = query_example; // String | 
        Date filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
        array[String] filters[actorEmail][] = ; // array[String] | 
        String filters[actorType] = filters[actorType]_example; // String | 
        String filters[auditableType] = filters[auditableType]_example; // String | 
        String filters[auditableUid] = filters[auditableUid]_example; // String | 
        String filters[verb] = filters[verb]_example; // String | 
        try {
            audit result = apiInstance.auditsSearchGet(scope, query, filters[created], filters[actorEmail][], filters[actorType], filters[auditableType], filters[auditableUid], filters[verb]);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AuditsApi#auditsSearchGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="auditsSearchGet-code-objc">
```js
String *scope = scope_example; //  (optional) (default to audit)
String *query = query_example; //  (optional)
Date *filters[created] = 2013-10-20T19:20:30+01:00; //  (optional)
array[String] *filters[actorEmail][] = ; //  (optional)
String *filters[actorType] = filters[actorType]_example; //  (optional)
String *filters[auditableType] = filters[auditableType]_example; //  (optional)
String *filters[auditableUid] = filters[auditableUid]_example; //  (optional)
String *filters[verb] = filters[verb]_example; //  (optional)

AuditsApi *apiInstance = [[AuditsApi alloc] init];

[apiInstance auditsSearchGetWith:scope
    query:query
    filters[created]:filters[created]
    filters[actorEmail][]:filters[actorEmail][]
    filters[actorType]:filters[actorType]
    filters[auditableType]:filters[auditableType]
    filters[auditableUid]:filters[auditableUid]
    filters[verb]:filters[verb]
              completionHandler: ^(audit output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="auditsSearchGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.AuditsApi()
var opts = { 
  'scope': scope_example, // {{String}} 
  'query': query_example, // {{String}} 
  'filters[created]': 2013-10-20T19:20:30+01:00, // {{Date}} 
  'filters[actorEmail][]': , // {{array[String]}} 
  'filters[actorType]': filters[actorType]_example, // {{String}} 
  'filters[auditableType]': filters[auditableType]_example, // {{String}} 
  'filters[auditableUid]': filters[auditableUid]_example, // {{String}} 
  'filters[verb]': filters[verb]_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.auditsSearchGet(opts, callback);
```
</div>

<div class="code-block csharp" id="auditsSearchGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class auditsSearchGetExample
    {
        public void main()
        {

            var apiInstance = new AuditsApi();
            var scope = scope_example;  // String |  (optional)  (default to audit)
            var query = query_example;  // String |  (optional) 
            var filters[created] = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var filters[actorEmail][] = new array[String](); // array[String] |  (optional) 
            var filters[actorType] = filters[actorType]_example;  // String |  (optional) 
            var filters[auditableType] = filters[auditableType]_example;  // String |  (optional) 
            var filters[auditableUid] = filters[auditableUid]_example;  // String |  (optional) 
            var filters[verb] = filters[verb]_example;  // String |  (optional) 

            try
            {
                audit result = apiInstance.auditsSearchGet(scope, query, filters[created], filters[actorEmail][], filters[actorType], filters[auditableType], filters[auditableUid], filters[verb]);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AuditsApi.auditsSearchGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="auditsSearchGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiAuditsApi();
$scope = scope_example; // String | 
$query = query_example; // String | 
$filters[created] = 2013-10-20T19:20:30+01:00; // Date | 
$filters[actorEmail][] = ; // array[String] | 
$filters[actorType] = filters[actorType]_example; // String | 
$filters[auditableType] = filters[auditableType]_example; // String | 
$filters[auditableUid] = filters[auditableUid]_example; // String | 
$filters[verb] = filters[verb]_example; // String | 

try {
    $result = $api_instance->auditsSearchGet($scope, $query, $filters[created], $filters[actorEmail][], $filters[actorType], $filters[auditableType], $filters[auditableUid], $filters[verb]);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuditsApi->auditsSearchGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="auditsSearchGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::AuditsApi;

my $api_instance = WWW::SwaggerClient::AuditsApi->new();
my $scope = scope_example; # String | 
my $query = query_example; # String | 
my $filters[created] = 2013-10-20T19:20:30+01:00; # Date | 
my $filters[actorEmail][] = []; # array[String] | 
my $filters[actorType] = filters[actorType]_example; # String | 
my $filters[auditableType] = filters[auditableType]_example; # String | 
my $filters[auditableUid] = filters[auditableUid]_example; # String | 
my $filters[verb] = filters[verb]_example; # String | 

eval { 
    my $result = $api_instance->auditsSearchGet(scope => $scope, query => $query, filters[created] => $filters[created], filters[actorEmail][] => $filters[actorEmail][], filters[actorType] => $filters[actorType], filters[auditableType] => $filters[auditableType], filters[auditableUid] => $filters[auditableUid], filters[verb] => $filters[verb]);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling AuditsApi->auditsSearchGet: $@\n";
}
```
</div>

<div class="code-block python" id="auditsSearchGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AuditsApi()
scope = scope_example # String |  (optional) (default to audit)
query = query_example # String |  (optional)
filters[created] = 2013-10-20T19:20:30+01:00 # Date |  (optional)
filters[actorEmail][] =  # array[String] |  (optional)
filters[actorType] = filters[actorType]_example # String |  (optional)
filters[auditableType] = filters[auditableType]_example # String |  (optional)
filters[auditableUid] = filters[auditableUid]_example # String |  (optional)
filters[verb] = filters[verb]_example # String |  (optional)

try: 
    api_response = api_instance.audits_search_get(scope=scope, query=query, filters[created]=filters[created], filters[actorEmail][]=filters[actorEmail][], filters[actorType]=filters[actorType], filters[auditableType]=filters[auditableType], filters[auditableUid]=filters[auditableUid], filters[verb]=filters[verb])
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AuditsApi->auditsSearchGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| scope | String |
| query | String |
| filters[created] | Date (date-time) |
| filters[actor_email][] | array[String] |
| filters[actor_type] | String |
| filters[auditable_type] | String |
| filters[auditable_uid] | String |
| filters[verb] | String |

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

