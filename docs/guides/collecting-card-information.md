---
---
# Collecting Cards
<details>
  <summary><em>Topics covered on this page</em></summary>

- [A full-fledged example](#a-full-fledged-example)


</details>


!This article will help you build a form that will let you collect cards directly from a page on your website and tokenize them.

Omise.js allows you to collect card information easily. Omise.js is a client-side JavaScript library that lets you have your own HTML form running on your customer's browser. It can send sensitive card data to the Omise server and get a card token in exchange. The token can then be forwarded to your server for processing. Your server never has to deal with sensitive card information.

:::note
Note that the only way to send card data to Omise is via JavaScript using Omise.js. Unless you have a PCI-DSS license to send server side.
:::

![small_token](/img/small_token@2x.jpg)

On a high level, this is how it works:

- Using Omise.js and your public key, send the cardholder data from your customer's browser to Omise,

- Omise tokens service responds with a single-use card token,

- Forward the token back to your server,

- Use this token to take an action on the card. You can [charge the card](/charges-api#create-a-charge), [save the card on a new customer](/customers-api#create-a-customer), or [attach the card to an existing one](/customers-api#update-a-customer).

:::note
Please note that we recommend against storing that token. Since it is for one-time use only, there is no point in saving it for later use. It's generally a good practice to use and forget about it immediately.
:::

## Omise Token Simulator

<div className="card-block">
    <form
      action="/checkout"
      method="post"
      id="checkout"
      className="card-form"
      data-gtm-form-interact-id="0"
      style={{ opacity: 1 }}
    >
      <input type="hidden" name="omise_token" />
      <div className="row">
        <label>Name</label>
        <input type="text" data-omise="holder_name" value="BUMBIN ARAUPORN" data-gtm-form-interact-field-id="0" />
      </div>
      <div className="row">
        <label>Number</label>
        <input type="text" data-omise="number" value="4242424242424242" />
      </div>
      <div className="row">
        <label>Date</label>
        <input type="text" data-omise="expiration_month" size="4" value="02" />
        <input type="text" data-omise="expiration_year" size="8" value="2022" />
      </div>
      <div className="row">
        <label>CVC</label>
        <input type="text" data-omise="security_code" size="8" value="111" />
      </div>
      <div className="row card-form-submit-row ">
        <input type="submit" id="create_token" style={{ marginTop: '16px' }} value="Generate Token" className="PrimaryButton" disabled />
      </div>
    </form>
</div>



Generated Token: ...

You can learn more about the tokens API in the [tokens reference](/tokens-api).


## A Full-Fledged Example {#a-full-fledged-example}



First, you need to insert Omise.js into your webpage. Add it before the closing `</body>` tag:

```html
<script src="https://cdn.omise.co/omise.js"></script>
```

For example, the Omise JS library doesn't need jQuery, but we'll use it as a convenient way to access the DOM. Add the jQuery library to the page with:

```html
<script src="http://code.jquery.com/jquery-1.12.1.min.js"></script>
```

Then add your public key to let Omise.js authenticate against Omise API:

```javascript
<script>
  Omise.setPublicKey("pkey_test_4xpip92iqmehclz4a4d");
</script>
```

Next, you need a form that will collect the card details.

```html

<form action="/checkout" method="post" id="checkout">
  <div id="token_errors"></div>

  <input type="hidden" name="omise_token">

  <div>
    Name<br>
    <input type="text" data-omise="holder_name">
  </div>
  <div>
    Number<br>
    <input type="text" data-omise="number">
  </div>
  <div>
    Date<br>
    <input type="text" data-omise="expiration_month" size="4"> /
    <input type="text" data-omise="expiration_year" size="8">
  </div>
  <div>
    Security Code<br>
    <input type="text" data-omise="security_code" size="8">
  </div>

  <input type="submit" id="create_token">
</form>


```

Next, we need to trigger the creation of the token when the submit button is pressed. Then, fill in the token field and clear the other fields so they are not submitted to your server.

```javascript

$("#checkout").submit(function () {

  var form = $(this);

  // Disable the submit button to avoid repeated clicks.
  form.find("input[type=submit]").prop("disabled", true);

  // Serialize the form fields into a valid card object.
  var card = {
    "name": form.find("[data-omise=holder_name]").val(),
    "number": form.find("[data-omise=number]").val(),
    "expiration_month": form.find("[data-omise=expiration_month]").val(),
    "expiration_year": form.find("[data-omise=expiration_year]").val(),
    "security_code": form.find("[data-omise=security_code]").val()
  };

  // Send a request to create a token, then trigger the callback function once
  // a response is received from Omise.
  //
  // Note that the response could be an error, and this needs to be handled within
  // the callback.
  Omise.createToken("card", card, function (statusCode, response) {
    if (response.object == "error" || !response.card.security_code_check) {
      // Display an error message.
      var message_text = "SET YOUR SECURITY CODE CHECK FAILED MESSAGE";
      if(response.object == "error") {
        message_text = response.message;
      }
      $("#token_errors").html(message_text);

      // Re-enable the submit button.
      form.find("input[type=submit]").prop("disabled", false);
    } else {
      // Then fill the omise_token.
      form.find("[name=omise_token]").val(response.id);

      // Remove card number from the form before submitting to server.
      form.find("[data-omise=number]").val("");
      form.find("[data-omise=security_code]").val("");

      //Submit the token to the server.
      form.get(0).submit();
    };
  });

  // Prevent the form from being submitted;
  return false;

});

```
That's it! Omise can start collecting credit card information, and you'll receive a token in return, which you can use to take action on the card.