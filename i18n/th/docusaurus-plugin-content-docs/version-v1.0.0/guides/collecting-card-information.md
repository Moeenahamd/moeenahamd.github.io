---
---
# Kartendaten erfassen
<details>
  <summary><em>Themen auf dieser Seite</em></summary>

- [Ein vollständiges Beispiel](#ein-vollständiges-beispiel)

</details>

!Dieser Artikel hilft Ihnen dabei, ein Formular zu erstellen, mit dem Sie Kartendaten direkt von einer Seite auf Ihrer Website erfassen und tokenisieren können.

Omise.js ermöglicht es Ihnen, Kartendaten ganz einfach zu erfassen. Omise.js ist eine clientseitige JavaScript-Bibliothek, mit der Sie Ihr eigenes HTML-Formular im Browser Ihrer Kunden betreiben können. Sie kann sensible Kartendaten an den Omise-Server senden und im Gegenzug ein Kartentoken erhalten. Das Token kann dann an Ihren Server weitergeleitet werden, um es zu verarbeiten. Ihr Server muss niemals mit sensiblen Kartendaten umgehen.

:::note
Bitte beachten Sie, dass der einzige Weg, Kartendaten an Omise zu senden, über JavaScript mit Omise.js erfolgt. Es sei denn, Sie verfügen über eine PCI-DSS-Lizenz für die serverseitige Übertragung.
:::

![small_token](/img/small_token@2x.jpg)

Auf hoher Ebene funktioniert es wie folgt:

- Mit Omise.js und Ihrem öffentlichen Schlüssel senden Sie die Kartendaten vom Browser Ihres Kunden an Omise,

- Der Omise-Token-Service antwortet mit einem einmalig verwendbaren Kartentoken,

- Leiten Sie das Token an Ihren Server weiter,

- Verwenden Sie dieses Token, um eine Aktion mit der Karte auszuführen. Sie können [die Karte belasten](/charges-api#create-a-charge), [die Karte bei einem neuen Kunden speichern](/customers-api#create-a-customer) oder [die Karte einem bestehenden Kunden zuordnen](/customers-api#update-a-customer).

:::note
Bitte beachten Sie, dass wir davon abraten, das Token zu speichern. Da es nur einmal verwendet werden kann, gibt es keinen Grund, es für später zu speichern. Es ist generell gute Praxis, es sofort zu verwenden und zu vergessen.
:::

## Omise-Token-Simulator

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
        <label>Nummer</label>
        <input type="text" data-omise="number" value="4242424242424242" />
      </div>
      <div className="row">
        <label>Datum</label>
        <input type="text" data-omise="expiration_month" size="4" value="02" />
        <input type="text" data-omise="expiration_year" size="8" value="2022" />
      </div>
      <div className="row">
        <label>CVC</label>
        <input type="text" data-omise="security_code" size="8" value="111" />
      </div>
      <div className="row card-form-submit-row">
        <input type="submit" id="create_token" value="Token generieren" className="PrimaryButton" disabled />
      </div>
    </form>
</div>

Generiertes Token: ...

Mehr Informationen zur Tokens-API finden Sie in der [Token-Referenz](/tokens-api).

## Ein vollständiges Beispiel {#ein-vollständiges-beispiel}

Zuerst müssen Sie Omise.js in Ihre Webseite einfügen. Fügen Sie es vor dem schließenden `</body>`-Tag ein:

```html
<script src="https://cdn.omise.co/omise.js"></script>

```
Zum Beispiel benötigt die Omise-JS-Bibliothek kein jQuery, aber wir verwenden es hier als bequemen Weg, um auf das DOM zuzugreifen. Fügen Sie die jQuery-Bibliothek mit folgendem Code in die Seite ein:


```html
<script src="http://code.jquery.com/jquery-1.12.1.min.js"></script>
```

Fügen Sie anschließend Ihren Public Key hinzu, damit Omise.js sich gegenüber der Omise-API authentifizieren kann:


```html
<script>
  Omise.setPublicKey("pkey_test_4xpip92iqmehclz4a4d");
</script>
```
Als Nächstes benötigen Sie ein Formular, das die Kartendaten erfasst.

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

Als Nächstes müssen wir die Erstellung des Tokens auslösen, wenn die Schaltfläche zum Absenden gedrückt wird. Danach füllen wir das Token-Feld aus und leeren die anderen Felder, damit sie nicht an Ihren Server gesendet werden.

```html

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
  
  // Senden Sie eine Anfrage zur Erstellung eines Tokens und lösen Sie dann die Callback-Funktion aus,
  // sobald eine Antwort von Omise empfangen wird.
  //
  // Beachten Sie, dass die Antwort ein Fehler sein könnte; dies muss innerhalb
  // des Callbacks behandelt werden.

  Omise.createToken("card", card, function (statusCode, response) {
    if (response.object == "error" || !response.card.security_code_check) {
      // Zeigen Sie eine Fehlermeldung an.
      var message_text = "SET YOUR SECURITY CODE CHECK FAILED MESSAGE";
      if(response.object == "error") {
        message_text = response.message;
      }
      $("#token_errors").html(message_text);

      // Aktivieren Sie den Absende-Button erneut.

      form.find("input[type=submit]").prop("disabled", false);
    } else {
       // Dann das omise_token-Feld ausfüllen.

      form.find("[name=omise_token]").val(response.id);

      // Kartennummer aus dem Formular entfernen, bevor es an den Server gesendet wird.
  form.find("[data-omise=number]").val("");
      form.find("[data-omise=security_code]").val("");

    //Sende das Token an den Server.

      form.get(0).submit();
    };
  });

//Verhindere, dass das Formular abgeschickt wird;

  return false;

});

```
Das ist es! Omise kann nun Kreditkarteninformationen sammeln, und du erhältst ein Token, das du verwenden kannst, um Maßnahmen auf der Karte zu ergreifen.