# Documents


      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>

          <div class="sub-heading" style={{flex: 2}}>
            <h3>disputesIdDocumentsDocumentIdDelete</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">disputesIdDocumentsDocumentIdDelete</div>
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
              
<div class="code-block curl active" id="disputesIdDocumentsDocumentIdDelete-code-curl">
```js
curl -X DELETE\
-H "Accept: application/json"\
"https://api.omise.co/disputes/{id}/documents/{document_id}"
```
</div>

<div class="code-block java" id="disputesIdDocumentsDocumentIdDelete-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.DocumentsApi;

import java.io.File;
import java.util.*;

public class DocumentsApiExample {

    public static void main(String[] args) {
        
        DocumentsApi apiInstance = new DocumentsApi();
        String id = id_example; // String | 
        String documentId = documentId_example; // String | 
        try {
            document result = apiInstance.disputesIdDocumentsDocumentIdDelete(id, documentId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DocumentsApi#disputesIdDocumentsDocumentIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="disputesIdDocumentsDocumentIdDelete-code-android">
```js
import io.swagger.client.api.DocumentsApi;

public class DocumentsApiExample {

    public static void main(String[] args) {
        DocumentsApi apiInstance = new DocumentsApi();
        String id = id_example; // String | 
        String documentId = documentId_example; // String | 
        try {
            document result = apiInstance.disputesIdDocumentsDocumentIdDelete(id, documentId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DocumentsApi#disputesIdDocumentsDocumentIdDelete");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="disputesIdDocumentsDocumentIdDelete-code-objc">
```js
String *id = id_example; // 
String *documentId = documentId_example; // 

DocumentsApi *apiInstance = [[DocumentsApi alloc] init];

[apiInstance disputesIdDocumentsDocumentIdDeleteWith:id
    documentId:documentId
              completionHandler: ^(document output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="disputesIdDocumentsDocumentIdDelete-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.DocumentsApi()
var id = id_example; // {{String}} 
var documentId = documentId_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.disputesIdDocumentsDocumentIdDelete(id, documentId, callback);
```
</div>

<div class="code-block csharp" id="disputesIdDocumentsDocumentIdDelete-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class disputesIdDocumentsDocumentIdDeleteExample
    {
        public void main()
        {

            var apiInstance = new DocumentsApi();
            var id = id_example;  // String | 
            var documentId = documentId_example;  // String | 

            try
            {
                document result = apiInstance.disputesIdDocumentsDocumentIdDelete(id, documentId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DocumentsApi.disputesIdDocumentsDocumentIdDelete: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="disputesIdDocumentsDocumentIdDelete-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiDocumentsApi();
$id = id_example; // String | 
$documentId = documentId_example; // String | 

try {
    $result = $api_instance->disputesIdDocumentsDocumentIdDelete($id, $documentId);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DocumentsApi->disputesIdDocumentsDocumentIdDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="disputesIdDocumentsDocumentIdDelete-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::DocumentsApi;

my $api_instance = WWW::SwaggerClient::DocumentsApi->new();
my $id = id_example; # String | 
my $documentId = documentId_example; # String | 

eval { 
    my $result = $api_instance->disputesIdDocumentsDocumentIdDelete(id => $id, documentId => $documentId);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DocumentsApi->disputesIdDocumentsDocumentIdDelete: $@\n";
}
```
</div>

<div class="code-block python" id="disputesIdDocumentsDocumentIdDelete-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DocumentsApi()
id = id_example # String | 
documentId = documentId_example # String | 

try: 
    api_response = api_instance.disputes_id_documents_document_id_delete(id, documentId)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DocumentsApi->disputesIdDocumentsDocumentIdDelete: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| id* | String Required |
| document_id* | String Required |

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
            <h3>disputesIdDocumentsDocumentIdGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">disputesIdDocumentsDocumentIdGet</div>
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
              
<div class="code-block curl active" id="disputesIdDocumentsDocumentIdGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/disputes/{id}/documents/{document_id}"
```
</div>

<div class="code-block java" id="disputesIdDocumentsDocumentIdGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.DocumentsApi;

import java.io.File;
import java.util.*;

public class DocumentsApiExample {

    public static void main(String[] args) {
        
        DocumentsApi apiInstance = new DocumentsApi();
        String id = id_example; // String | 
        String documentId = documentId_example; // String | 
        try {
            document result = apiInstance.disputesIdDocumentsDocumentIdGet(id, documentId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DocumentsApi#disputesIdDocumentsDocumentIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="disputesIdDocumentsDocumentIdGet-code-android">
```js
import io.swagger.client.api.DocumentsApi;

public class DocumentsApiExample {

    public static void main(String[] args) {
        DocumentsApi apiInstance = new DocumentsApi();
        String id = id_example; // String | 
        String documentId = documentId_example; // String | 
        try {
            document result = apiInstance.disputesIdDocumentsDocumentIdGet(id, documentId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DocumentsApi#disputesIdDocumentsDocumentIdGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="disputesIdDocumentsDocumentIdGet-code-objc">
```js
String *id = id_example; // 
String *documentId = documentId_example; // 

DocumentsApi *apiInstance = [[DocumentsApi alloc] init];

[apiInstance disputesIdDocumentsDocumentIdGetWith:id
    documentId:documentId
              completionHandler: ^(document output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="disputesIdDocumentsDocumentIdGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.DocumentsApi()
var id = id_example; // {{String}} 
var documentId = documentId_example; // {{String}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.disputesIdDocumentsDocumentIdGet(id, documentId, callback);
```
</div>

<div class="code-block csharp" id="disputesIdDocumentsDocumentIdGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class disputesIdDocumentsDocumentIdGetExample
    {
        public void main()
        {

            var apiInstance = new DocumentsApi();
            var id = id_example;  // String | 
            var documentId = documentId_example;  // String | 

            try
            {
                document result = apiInstance.disputesIdDocumentsDocumentIdGet(id, documentId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DocumentsApi.disputesIdDocumentsDocumentIdGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="disputesIdDocumentsDocumentIdGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiDocumentsApi();
$id = id_example; // String | 
$documentId = documentId_example; // String | 

try {
    $result = $api_instance->disputesIdDocumentsDocumentIdGet($id, $documentId);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DocumentsApi->disputesIdDocumentsDocumentIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="disputesIdDocumentsDocumentIdGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::DocumentsApi;

my $api_instance = WWW::SwaggerClient::DocumentsApi->new();
my $id = id_example; # String | 
my $documentId = documentId_example; # String | 

eval { 
    my $result = $api_instance->disputesIdDocumentsDocumentIdGet(id => $id, documentId => $documentId);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DocumentsApi->disputesIdDocumentsDocumentIdGet: $@\n";
}
```
</div>

<div class="code-block python" id="disputesIdDocumentsDocumentIdGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DocumentsApi()
id = id_example # String | 
documentId = documentId_example # String | 

try: 
    api_response = api_instance.disputes_id_documents_document_id_get(id, documentId)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DocumentsApi->disputesIdDocumentsDocumentIdGet: %s\n" % e)
```
</div>
            
            </div>
            
### Parameters

| Name | Description |
|------|-------------|
| id* | String Required |
| document_id* | String Required |

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
            <h3>disputesIdDocumentsGet</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">disputesIdDocumentsGet</div>
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
              
<div class="code-block curl active" id="disputesIdDocumentsGet-code-curl">
```js
curl -X GET\
-H "Accept: application/json"\
"https://api.omise.co/disputes/{id}/documents?from=&to=&offset=&limit=&order="
```
</div>

<div class="code-block java" id="disputesIdDocumentsGet-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.DocumentsApi;

import java.io.File;
import java.util.*;

public class DocumentsApiExample {

    public static void main(String[] args) {
        
        DocumentsApi apiInstance = new DocumentsApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.disputesIdDocumentsGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DocumentsApi#disputesIdDocumentsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="disputesIdDocumentsGet-code-android">
```js
import io.swagger.client.api.DocumentsApi;

public class DocumentsApiExample {

    public static void main(String[] args) {
        DocumentsApi apiInstance = new DocumentsApi();
        String id = id_example; // String | 
        Date from = 2013-10-20T19:20:30+01:00; // Date | 
        Date to = 2013-10-20T19:20:30+01:00; // Date | 
        Integer offset = 56; // Integer | 
        Integer limit = 56; // Integer | 
        String order = order_example; // String | 
        try {
            list result = apiInstance.disputesIdDocumentsGet(id, from, to, offset, limit, order);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DocumentsApi#disputesIdDocumentsGet");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="disputesIdDocumentsGet-code-objc">
```js
String *id = id_example; // 
Date *from = 2013-10-20T19:20:30+01:00; //  (optional) (default to 1970-01-01T00:00Z)
Date *to = 2013-10-20T19:20:30+01:00; //  (optional)
Integer *offset = 56; //  (optional) (default to 0)
Integer *limit = 56; //  (optional) (default to 20)
String *order = order_example; //  (optional) (default to chronological)

DocumentsApi *apiInstance = [[DocumentsApi alloc] init];

[apiInstance disputesIdDocumentsGetWith:id
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

<div class="code-block javascript" id="disputesIdDocumentsGet-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.DocumentsApi()
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
api.disputesIdDocumentsGet(id, opts, callback);
```
</div>

<div class="code-block csharp" id="disputesIdDocumentsGet-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class disputesIdDocumentsGetExample
    {
        public void main()
        {

            var apiInstance = new DocumentsApi();
            var id = id_example;  // String | 
            var from = 2013-10-20T19:20:30+01:00;  // Date |  (optional)  (default to 1970-01-01T00:00Z)
            var to = 2013-10-20T19:20:30+01:00;  // Date |  (optional) 
            var offset = 56;  // Integer |  (optional)  (default to 0)
            var limit = 56;  // Integer |  (optional)  (default to 20)
            var order = order_example;  // String |  (optional)  (default to chronological)

            try
            {
                list result = apiInstance.disputesIdDocumentsGet(id, from, to, offset, limit, order);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DocumentsApi.disputesIdDocumentsGet: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="disputesIdDocumentsGet-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiDocumentsApi();
$id = id_example; // String | 
$from = 2013-10-20T19:20:30+01:00; // Date | 
$to = 2013-10-20T19:20:30+01:00; // Date | 
$offset = 56; // Integer | 
$limit = 56; // Integer | 
$order = order_example; // String | 

try {
    $result = $api_instance->disputesIdDocumentsGet($id, $from, $to, $offset, $limit, $order);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DocumentsApi->disputesIdDocumentsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="disputesIdDocumentsGet-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::DocumentsApi;

my $api_instance = WWW::SwaggerClient::DocumentsApi->new();
my $id = id_example; # String | 
my $from = 2013-10-20T19:20:30+01:00; # Date | 
my $to = 2013-10-20T19:20:30+01:00; # Date | 
my $offset = 56; # Integer | 
my $limit = 56; # Integer | 
my $order = order_example; # String | 

eval { 
    my $result = $api_instance->disputesIdDocumentsGet(id => $id, from => $from, to => $to, offset => $offset, limit => $limit, order => $order);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DocumentsApi->disputesIdDocumentsGet: $@\n";
}
```
</div>

<div class="code-block python" id="disputesIdDocumentsGet-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DocumentsApi()
id = id_example # String | 
from = 2013-10-20T19:20:30+01:00 # Date |  (optional) (default to 1970-01-01T00:00Z)
to = 2013-10-20T19:20:30+01:00 # Date |  (optional)
offset = 56 # Integer |  (optional) (default to 0)
limit = 56 # Integer |  (optional) (default to 20)
order = order_example # String |  (optional) (default to chronological)

try: 
    api_response = api_instance.disputes_id_documents_get(id, from=from, to=to, offset=offset, limit=limit, order=order)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DocumentsApi->disputesIdDocumentsGet: %s\n" % e)
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
            <h3>disputesIdDocumentsPost</h3>
          </div>
          <div class="code" style={{flex: 2}}>
            <div class="code-container">
              <div class="code-header">disputesIdDocumentsPost</div>
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
              
<div class="code-block curl active" id="disputesIdDocumentsPost-code-curl">
```js
curl -X POST\
-H "Accept: application/json"\
-H "Content-Type: application/x-www-form-urlencoded"\
"https://api.omise.co/disputes/{id}/documents"
```
</div>

<div class="code-block java" id="disputesIdDocumentsPost-code-java">
```js
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.DocumentsApi;

import java.io.File;
import java.util.*;

public class DocumentsApiExample {

    public static void main(String[] args) {
        
        DocumentsApi apiInstance = new DocumentsApi();
        String id = id_example; // String | 
        String file = file_example; // String | 
        String kind = kind_example; // String | 
        try {
            document result = apiInstance.disputesIdDocumentsPost(id, file, kind);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DocumentsApi#disputesIdDocumentsPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block android" id="disputesIdDocumentsPost-code-android">
```js
import io.swagger.client.api.DocumentsApi;

public class DocumentsApiExample {

    public static void main(String[] args) {
        DocumentsApi apiInstance = new DocumentsApi();
        String id = id_example; // String | 
        String file = file_example; // String | 
        String kind = kind_example; // String | 
        try {
            document result = apiInstance.disputesIdDocumentsPost(id, file, kind);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DocumentsApi#disputesIdDocumentsPost");
            e.printStackTrace();
        }
    }
}
```
</div>

<div class="code-block objc" id="disputesIdDocumentsPost-code-objc">
```js
String *id = id_example; // 
String *file = file_example; //  (optional)
String *kind = kind_example; //  (optional)

DocumentsApi *apiInstance = [[DocumentsApi alloc] init];

[apiInstance disputesIdDocumentsPostWith:id
    file:file
    kind:kind
              completionHandler: ^(document output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```
</div>

<div class="code-block javascript" id="disputesIdDocumentsPost-code-javascript">
```js
var OmiseApi = require('omise_api');

var api = new OmiseApi.DocumentsApi()
var id = id_example; // {{String}} 
var opts = { 
  'file': file_example // {{String}} 
  'kind': kind_example // {{String}} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.disputesIdDocumentsPost(id, opts, callback);
```
</div>

<div class="code-block csharp" id="disputesIdDocumentsPost-code-csharp">
```js
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class disputesIdDocumentsPostExample
    {
        public void main()
        {

            var apiInstance = new DocumentsApi();
            var id = id_example;  // String | 
            var file = file_example;  // String |  (optional) 
            var kind = kind_example;  // String |  (optional) 

            try
            {
                document result = apiInstance.disputesIdDocumentsPost(id, file, kind);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DocumentsApi.disputesIdDocumentsPost: " + e.Message );
            }
        }
    }
}
```
</div>

<div class="code-block php" id="disputesIdDocumentsPost-code-php">
```js
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\ApiDocumentsApi();
$id = id_example; // String | 
$file = file_example; // String | 
$kind = kind_example; // String | 

try {
    $result = $api_instance->disputesIdDocumentsPost($id, $file, $kind);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DocumentsApi->disputesIdDocumentsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```
</div>

<div class="code-block perl" id="disputesIdDocumentsPost-code-perl">
```js
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::DocumentsApi;

my $api_instance = WWW::SwaggerClient::DocumentsApi->new();
my $id = id_example; # String | 
my $file = file_example; # String | 
my $kind = kind_example; # String | 

eval { 
    my $result = $api_instance->disputesIdDocumentsPost(id => $id, file => $file, kind => $kind);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DocumentsApi->disputesIdDocumentsPost: $@\n";
}
```
</div>

<div class="code-block python" id="disputesIdDocumentsPost-code-python">
```js
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DocumentsApi()
id = id_example # String | 
file = file_example # String |  (optional)
kind = kind_example # String |  (optional)

try: 
    api_response = api_instance.disputes_id_documents_post(id, file=file, kind=kind)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DocumentsApi->disputesIdDocumentsPost: %s\n" % e)
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
| file | String |
| kind | String |

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

