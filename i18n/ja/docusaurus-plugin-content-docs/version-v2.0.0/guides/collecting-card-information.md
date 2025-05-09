---
---
# カード情報の収集
<details>
  <summary><em>このページで扱うトピック</em></summary>

- [完全な例](#a-full-fledged-example)

</details>

!この記事では、ウェブサイト上のページから直接カード情報を収集し、トークン化するフォームを作成する方法を説明します。

Omise.jsを使えば、簡単にカード情報を収集できます。Omise.jsはクライアントサイドのJavaScriptライブラリで、お客様のブラウザ上で自分自身のHTMLフォームを実行できます。これにより、カード情報をOmiseサーバーに送信し、代わりにカードトークンを取得します。このトークンをサーバーに送信して処理できます。サーバーは機密性の高いカード情報を扱う必要はありません。

:::note
カードデータをOmiseに送る唯一の方法は、JavaScriptを使ったOmise.js経由です。サーバー側から送る場合は、PCI-DSSライセンスが必要です。
:::

![small_token](/img/small_token@2x.jpg)

全体の流れは以下の通りです：

- Omise.jsと公開鍵を使って、お客様のブラウザからOmiseにカード情報を送信します。

- Omiseのトークンサービスがワンタイム使用のカードトークンを返します。

- トークンをサーバーに転送します。

- このトークンを使ってカードに対してアクションを実行します。例：[カードに課金する](/charges-api#create-a-charge)、[新規カスタマーとして保存する](/customers-api#create-a-customer)、[既存カスタマーに紐付ける](/customers-api#update-a-customer)。

:::note
このトークンはワンタイム使用のため、保存することは推奨していません。取得したらすぐに使用し、忘れるのがベストプラクティスです。
:::

## Omiseトークンシミュレーター

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
        <label>名前</label>
        <input type="text" data-omise="holder_name" value="BUMBIN ARAUPORN" data-gtm-form-interact-field-id="0" />
      </div>
      <div className="row">
        <label>カード番号</label>
        <input type="text" data-omise="number" value="4242424242424242" />
      </div>
      <div className="row">
        <label>有効期限</label>
        <input type="text" data-omise="expiration_month" size="4" value="02" />
        <input type="text" data-omise="expiration_year" size="8" value="2022" />
      </div>
      <div className="row">
        <label>CVC</label>
        <input type="text" data-omise="security_code" size="8" value="111" />
      </div>
      <div className="row card-form-submit-row">
        <input type="submit" id="create_token" style={{ marginTop: '16px' }}  value="トークンを生成" className="PrimaryButton" disabled />
      </div>
    </form>
</div>

生成されたトークン: ...

トークンAPIの詳細は[トークンリファレンス](/tokens-api)をご覧ください。

## 完全な例 {#a-full-fledged-example}

まず、Omise.jsをウェブページに挿入します。`</body>`タグの直前に追加してください：

```javascript
<script src="https://cdn.omise.co/omise.js"></script>
```
例えば、Omise JSライブラリはjQueryを必要としませんが、DOMにアクセスする便利な方法として使用します。ページにjQueryライブラリを追加するには:

```javascript
<script src="http://code.jquery.com/jquery-1.12.1.min.js"></script>
```
次に、Omise.jsがOmise APIに対して認証できるように、公開鍵を追加します：

```javascript
<script>
  Omise.setPublicKey("pkey_test_4xpip92iqmehclz4a4d");
</script>
```

次に、カードの詳細を収集するフォームが必要です。

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

次に、送信ボタンが押されたときにトークンの作成をトリガーする必要があります。その後、トークンフィールドに値を入力し、他のフィールドをクリアして、それらがサーバーに送信されないようにします。

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
これで完了です！Omiseはクレジットカード情報の収集を開始し、その後、カードに対してアクションを実行するために使用できるトークンを受け取ります。
