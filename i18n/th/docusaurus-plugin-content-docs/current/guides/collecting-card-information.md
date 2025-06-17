---
---
# การเก็บข้อมูลบัตร
<details>
  <summary><em>หัวข้อในหน้านี้</em></summary>

- [ตัวอย่างเต็มรูปแบบ](#ein-vollständiges-beispiel)

</details>

!บทความนี้จะช่วยให้คุณสร้างฟอร์มเพื่อเก็บข้อมูลบัตรโดยตรงจากหน้าบนเว็บไซต์ของคุณและทำการโทเค็นข้อมูล

Omise.js ช่วยให้คุณสามารถเก็บข้อมูลบัตรได้อย่างง่ายดาย Omise.js เป็นไลบรารี JavaScript ด้านลูกค้าที่ให้คุณสามารถใช้งานฟอร์ม HTML ของคุณในเบราว์เซอร์ของลูกค้าได้ มันสามารถส่งข้อมูลบัตรที่ละเอียดอ่อนไปยังเซิร์ฟเวอร์ของ Omise และตอบกลับด้วยโทเค็นบัตร ซึ่งสามารถส่งต่อไปยังเซิร์ฟเวอร์ของคุณเพื่อทำการประมวลผล เซิร์ฟเวอร์ของคุณจะไม่ต้องจัดการกับข้อมูลบัตรที่ละเอียดอ่อน

:::note
โปรดทราบว่าการส่งข้อมูลบัตรไปยัง Omise สามารถทำได้เพียงผ่าน JavaScript ด้วย Omise.js เท่านั้น เว้นแต่คุณจะมีใบอนุญาต PCI-DSS สำหรับการส่งข้อมูลจากเซิร์ฟเวอร์
:::

![small_token](/img/small_token@2x.jpg)

หลักการทำงานในระดับสูงมีดังนี้:

- ด้วย Omise.js และคีย์สาธารณะของคุณ ส่งข้อมูลบัตรจากเบราว์เซอร์ของลูกค้าไปยัง Omise,

- เซอร์วิสโทเค็นของ Omise จะตอบกลับด้วยโทเค็นบัตรที่ใช้งานได้เพียงครั้งเดียว,

- ส่งต่อโทเค็นนี้ไปยังเซิร์ฟเวอร์ของคุณ,

- ใช้โทเค็นนี้เพื่อดำเนินการกับบัตร เช่น [การหักเงินจากบัตร](/charges-api#create-a-charge), [การบันทึกบัตรในฐานข้อมูลของลูกค้าใหม่](/customers-api#create-a-customer) หรือ [การผูกบัตรกับลูกค้าปัจจุบัน](/customers-api#update-a-customer).

:::note
โปรดทราบว่าเราไม่แนะนำให้เก็บโทเค็น เนื่องจากสามารถใช้ได้เพียงครั้งเดียว ดังนั้นจึงไม่มีเหตุผลที่จะเก็บไว้สำหรับการใช้งานในภายหลัง โดยทั่วไปแล้วควรใช้โทเค็นทันทีแล้วลืมมัน
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
        <label>ชื่อ</label>
        <input type="text" data-omise="holder_name" value="BUMBIN ARAUPORN" data-gtm-form-interact-field-id="0" />
      </div>
      <div className="row">
        <label>หมายเลข</label>
        <input type="text" data-omise="number" value="4242424242424242" />
      </div>
      <div className="row">
        <label>วันที่หมดอายุ</label>
        <input type="text" data-omise="expiration_month" size="4" value="02" />
        <input type="text" data-omise="expiration_year" size="8" value="2022" />
      </div>
      <div className="row">
        <label>CVC</label>
        <input type="text" data-omise="security_code" size="8" value="111" />
      </div>
      <div className="row card-form-submit-row">
        <input type="submit" id="create_token" style={{ marginTop: '16px' }}  value="สร้างโทเค็น" className="PrimaryButton" disabled />
      </div>
    </form>
</div>

โทเค็นที่สร้าง: ...

ข้อมูลเพิ่มเติมเกี่ยวกับ API โทเค็นสามารถดูได้ใน [เอกสารอ้างอิงโทเค็น](/tokens-api).

## ตัวอย่างเต็มรูปแบบ {#ein-vollständiges-beispiel}

ขั้นแรกคุณต้องแทรก Omise.js ลงในเว็บไซต์ของคุณ โดยแทรกก่อนแท็ก `</body>` ที่ปิด

```javascript
<script src="https://cdn.omise.co/omise.js"></script>

```
ตัวอย่างเช่น ไลบรารี Omise-JS ไม่ต้องการ jQuery แต่เราจะใช้มันที่นี่เป็นวิธีที่สะดวกในการเข้าถึง DOM ให้เพิ่มไลบรารี jQuery ลงในหน้าด้วยโค้ดนี้:

```javascript
<script src="http://code.jquery.com/jquery-1.12.1.min.js"></script>
```

จากนั้นให้เพิ่ม Public Key ของคุณเพื่อให้ Omise.js สามารถยืนยันตัวตนกับ Omise-API ได้:

```javascript
<script>
  Omise.setPublicKey("pkey_test_4xpip92iqmehclz4a4d");
</script>
```
ถัดไปคุณต้องการฟอร์มที่ใช้ในการเก็บข้อมูลบัตร

```html
<form action="/checkout" method="post" id="checkout">
  <div id="token_errors"></div>

  <input type="hidden" name="omise_token">

  <div>
    ชื่อ<br>
    <input type="text" data-omise="holder_name">
  </div>
  <div>
    หมายเลข<br>
    <input type="text" data-omise="number">
  </div>
  <div>
    วันที่หมดอายุ<br>
    <input type="text" data-omise="expiration_month" size="4"> /
    <input type="text" data-omise="expiration_year" size="8">
  </div>
  <div>
    รหัสความปลอดภัย<br>
    <input type="text" data-omise="security_code" size="8">
  </div>

  <input type="submit" id="create_token">
</form>

```
ถัดไปเราต้องเรียกใช้งานการสร้างโทเค็นเมื่อปุ่มส่งถูกกด จากนั้นเราจะกรอกฟิลด์โทเค็นและลบข้อมูลในฟิลด์อื่นๆ เพื่อป้องกันไม่ให้มันถูกส่งไปยังเซิร์ฟเวอร์ของคุณ

```javascript
$("#checkout").submit(function () {

  var form = $(this);

  // ปิดการใช้งานปุ่มส่งเพื่อหลีกเลี่ยงการคลิกซ้ำ
  form.find("input[type=submit]").prop("disabled", true);

  // ทำให้ฟิลด์ในฟอร์มเป็นออบเจ็กต์การ์ดที่ถูกต้อง
  var card = {
    "name": form.find("[data-omise=holder_name]").val(),
    "number": form.find("[data-omise=number]").val(),
    "expiration_month": form.find("[data-omise=expiration_month]").val(),
    "expiration_year": form.find("[data-omise=expiration_year]").val(),
    "security_code": form.find("[data-omise=security_code]").val()
  };
  
  // ส่งคำขอเพื่อสร้างโทเค็น และเรียกฟังก์ชัน callback เมื่อได้รับคำตอบจาก Omise
  //
  // โปรดทราบว่าอาจจะมีข้อผิดพลาดในการตอบกลับ; จะต้องจัดการกับมันใน callback

  Omise.createToken("card", card, function (statusCode, response) {
    if (response.object == "error" || !response.card.security_code_check) {
      // แสดงข้อความข้อผิดพลาด
      var message_text = "ตั้งข้อความข้อผิดพลาดการตรวจสอบรหัสความปลอดภัยของคุณ";
      if(response.object == "error") {
        message_text = response.message;
      }
      $("#token_errors").html(message_text);

      // เปิดใช้งานปุ่มส่งอีกครั้ง

      form.find("input[type=submit]").prop("disabled", false);
    } else {
       // จากนั้นกรอกฟิลด์ omise_token

      form.find("[name=omise_token]").val(response.id);

      // ลบหมายเลขการ์ดออกจากฟอร์มก่อนที่จะส่งไปยังเซิร์ฟเวอร์
      form.find("[data-omise=number]").val("");
      form.find("[data-omise=security_code]").val("");

    // ส่งโทเค็นไปยังเซิร์ฟเวอร์

      form.get(0).submit();
    };
  });

  // ป้องกันไม่ให้ฟอร์มถูกส่ง

  return false;

});


```
นี่คือทั้งหมด! ตอนนี้ Omise สามารถเก็บข้อมูลบัตรเครดิตได้ และคุณจะได้รับโทเค็นที่สามารถใช้เพื่อดำเนินการต่างๆ กับบัตรนั้นได้
