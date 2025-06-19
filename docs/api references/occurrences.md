# Occurrences


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>Retrieve Occurrences ID</h3>
            <p>Welcome to the Omise Docs! These pages should contain everything you need to know to get paid using the Omise API. This is developer-oriented documentation.If you are not a developer, you can check our comprehensive support articles for non-technical explanations of various concepts or go straight to the plugin overview.</p>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">Retrieve Occurrences ID</div>
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
              
<div class="code-block curl active" id="Retrieve Occurrences ID-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/occurrences/{id}"
```
</div>

<div class="code-block java" id="Retrieve Occurrences ID-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.OccurrencesApi;

import java.io.File;
import java.util.*;

public class OccurrencesApiExample {

    public static void main(String[] args) {
        
        OccurrencesApi apiInstance = new OccurrencesApi();
        String id = id_example; // String | 
        try {
            occurrence result = apiInstance.occurrencesIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OccurrencesApi#occurrencesIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="Retrieve Occurrences ID-code-android">
```js
import io.swagger.client.api.OccurrencesApi;

public class OccurrencesApiExample {

    public static void main(String[] args) {
        OccurrencesApi apiInstance = new OccurrencesApi();
        String id = id_example; // String | 
        try {
            occurrence result = apiInstance.occurrencesIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OccurrencesApi#occurrencesIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="Retrieve Occurrences ID-code-objc">
```js
String *id = id_example; // 

OccurrencesApi *apiInstance = [[OccurrencesApi alloc] init];

[apiInstance occurrencesIdGetWith:id
              completionHandler: ^(occurrence output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="Retrieve Occurrences ID-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.OccurrencesApi()
var id = id_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.occurrencesIdGet(id, callback);
```
</div>

<div class="code-block csharp" id="Retrieve Occurrences ID-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class occurrencesIdGetExample
    {
        public void main()
        {

            var apiInstance = new OccurrencesApi();
            var id = id_example;  // String | 

            try
            {
                occurrence result = apiInstance.occurrencesIdGet(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling OccurrencesApi.occurrencesIdGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="Retrieve Occurrences ID-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiOccurrencesApi();
$id = id_example; // String | 

try {
    $result = $api_instance->occurrencesIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OccurrencesApi->occurrencesIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="Retrieve Occurrences ID-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::OccurrencesApi;

my $api_instance = WWW::SwaggerClient::OccurrencesApi->new();
my $id = id_example; # String | 

eval { 
    my $result = $api_instance->occurrencesIdGet(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling OccurrencesApi->occurrencesIdGet: $@\n";
}
```
</div>

<div class="code-block python" id="Retrieve Occurrences ID-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.OccurrencesApi()
id = id_example # String | 

try: 
    api_response = api_instance.occurrences_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling OccurrencesApi->occurrencesIdGet: %s\n" % e)
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

```json
 {
  "object": {
    "pattern": "occurrence",
    "type": "string",
    "default": "occurrence"
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
  "id": {
    "type": "string"
  },
  "result": {
    "type": "string",
    "nullable": true
  },
  "schedule": {
    "oneOf": [
      {
        "type": "object",
        "properties": {
          "object": {
            "pattern": "schedule",
            "type": "string",
            "default": "schedule"
          },
          "id": {
            "pattern": "schd_[0-9a-z]+",
            "type": "string"
          },
          "deleted": {
            "type": "boolean",
            "enum": [
              true,
              false
            ]
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
          "every": {
            "type": "integer"
          },
          "occurrences": {
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
          "on": {
            "type": "object",
            "properties": {
              "days_of_month": {
                "type": "array",
                "items": {}
              },
              "weekday_of_month": {
                "type": "string"
              },
              "weekdays": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "enum": [
                  "sunday",
                  "monday",
                  "tuesday",
                  "wednesday",
                  "thursday",
                  "friday",
                  "saturday"
                ]
              }
            }
          },
          "in_words": {
            "type": "string"
          },
          "period": {
            "type": "string",
            "enum": [
              "day",
              "week",
              "month"
            ]
          },
          "status": {
            "type": "string",
            "enum": [
              "running",
              "active",
              "expiring",
              "expired",
              "deleted",
              "suspended"
            ]
          },
          "active": {
            "type": "boolean",
            "enum": [
              true,
              false
            ]
          },
          "state": {
            "type": "string",
            "enum": [
              "Active",
              "Pause"
            ]
          },
          "charge": {
            "type": "object",
            "properties": {
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
          },
          "transfer": {
            "type": "object",
            "properties": {
              "object": {
                "pattern": "transfer_schedule",
                "type": "string",
                "default": "transfer_schedule"
              },
              "id": {
                "pattern": "rtrf_[0-9a-z]+",
                "type": "string"
              },
              "livemode": {
                "type": "boolean",
                "enum": [
                  true,
                  false
                ]
              },
              "amount": {
                "type": "integer",
                "nullable": true
              },
              "currency": {
                "type": "string",
                "format": "currency"
              },
              "percentage_of_balance": {
                "type": "number",
                "format": "float",
                "nullable": true
              },
              "recipient": {
                "oneOf": [
                  {
                    "type": "object",
                    "properties": {
                      "object": {
                        "pattern": "recipient",
                        "type": "string",
                        "default": "recipient"
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
                      "bank_account": {
                        "type": "object",
                        "properties": {
                          "object": {
                            "pattern": "bank_account",
                            "type": "string",
                            "default": "bank_account"
                          },
                          "livemode": {
                            "type": "boolean",
                            "enum": [
                              true,
                              false
                            ]
                          },
                          "last_digits": {
                            "pattern": "^[0-9]{4}$",
                            "type": "string"
                          },
                          "account_number": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          },
                          "type": {
                            "type": "string",
                            "enum": [
                              "normal",
                              "current"
                            ]
                          },
                          "created_at": {
                            "type": "string",
                            "format": "date-time"
                          },
                          "brand": {
                            "type": "string"
                          },
                          "bank_code": {
                            "type": "string"
                          },
                          "branch_code": {
                            "type": "string"
                          }
                        }
                      },
                      "active": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "default": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "verified": {
                        "type": "boolean",
                        "enum": [
                          true,
                          false
                        ]
                      },
                      "description": {
                        "type": "string",
                        "nullable": true
                      },
                      "email": {
                        "type": "string"
                      },
                      "failure_code": {
                        "type": "string",
                        "nullable": true,
                        "enum": [
                          "name_mismatch",
                          "account_not_found",
                          "bank_not_found"
                        ]
                      },
                      "name": {
                        "type": "string"
                      },
                      "tax_id": {
                        "type": "string",
                        "nullable": true
                      },
                      "type": {
                        "type": "string",
                        "enum": [
                          "individual",
                          "corporation"
                        ]
                      },
                      "created_at": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "schedule": {
                        "oneOf": [
                          {
                            "type": "object",
                            "properties": {
                              "object": {
                                "pattern": "schedule",
                                "type": "string",
                                "default": "schedule"
                              },
                              "id": {
                                "pattern": "schd_[0-9a-z]+",
                                "type": "string"
                              },
                              "deleted": {
                                "type": "boolean",
                                "enum": [
                                  true,
                                  false
                                ]
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
                              "every": {
                                "type": "integer"
                              },
                              "occurrences": {
                                "$ref": "#/components/schemas/list"
                              },
                              "on": {
                                "$ref": "#/components/schemas/schedule_on"
                              },
                              "in_words": {
                                "type": "string"
                              },
                              "period": {
                                "type": "string",
                                "enum": [
                                  "day",
                                  "week",
                                  "month"
                                ]
                              },
                              "status": {
                                "type": "string",
                                "enum": [
                                  "running",
                                  "active",
                                  "expiring",
                                  "expired",
                                  "deleted",
                                  "suspended"
                                ]
                              },
                              "active": {
                                "type": "boolean",
                                "enum": [
                                  true,
                                  false
                                ]
                              },
                              "state": {
                                "type": "string",
                                "enum": [
                                  "Active",
                                  "Pause"
                                ]
                              },
                              "charge": {
                                "$ref": "#/components/schemas/charge_schedule"
                              },
                              "transfer": {
                                "$ref": "#/components/schemas/transfer_schedule"
                              },
                              "next_occurrences_on": {
                                "type": "array",
                                "items": {
                                  "type": "string",
                                  "format": "date"
                                }
                              },
                              "ended_at": {
                                "type": "string",
                                "format": "date-time"
                              },
                              "start_on": {
                                "type": "string",
                                "format": "date"
                              },
                              "end_on": {
                                "type": "string",
                                "format": "date"
                              },
                              "created_at": {
                                "type": "string",
                                "format": "date-time"
                              },
                              "execute_time": {
                                "type": "string",
                                "nullable": true
                              },
                              "deleted_by": {
                                "type": "string",
                                "nullable": true
                              },
                              "merchant_name": {
                                "type": "string"
                              }
                            }
                          },
                          {
                            "type": "string"
                          }
                        ]
                      },
                      "metadata": {
                        "type": "object",
                        "default": {}
                      },
                      "verified_at": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "activated_at": {
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
              "created_at": {
                "type": "string",
                "format": "date-time"
              },
              "is_realtime_payout": {
                "type": "boolean",
                "nullable": true,
                "enum": [
                  true,
                  false
                ]
              }
            }
          },
          "next_occurrences_on": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "date"
            }
          },
          "ended_at": {
            "type": "string",
            "format": "date-time"
          },
          "start_on": {
            "type": "string",
            "format": "date"
          },
          "end_on": {
            "type": "string",
            "format": "date"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "execute_time": {
            "type": "string",
            "nullable": true
          },
          "deleted_by": {
            "type": "string",
            "nullable": true
          },
          "merchant_name": {
            "type": "string"
          }
        }
      },
      {
        "type": "string"
      }
    ]
  },
  "message": {
    "type": "string",
    "nullable": true
  },
  "status": {
    "type": "string",
    "enum": [
      "successful",
      "failed",
      "skipped",
      "scheduled"
    ]
  },
  "processed_at": {
    "type": "string",
    "format": "date-time",
    "nullable": true
  },
  "created_at": {
    "type": "string",
    "format": "date-time"
  },
  "scheduled_on": {
    "type": "string",
    "format": "date"
  },
  "retry_on": {
    "type": "string",
    "format": "date"
  },
  "execute_time": {
    "type": "string",
    "nullable": true
  },
  "split_metadata": {
    "type": "object",
    "nullable": true
  },
  "transfer_amount": {
    "type": "integer"
  }
} 
```

        </div>
      </div>

