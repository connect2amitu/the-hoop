import React from 'react'
import { Container, styled } from '@material-ui/core';

const MyContainer = styled(Container)({
  paddingBottom: "0px",
  marginTop: "20px",
  minHeight: "calc(100vh - 200px)"
});


export default function TnC() {
  return (
    <MyContainer>
      <h1><strong>Payment</strong></h1>

      <div className="col-sm-12">
        <p style={{ textAlign: "center" }}><strong><u>Payment Policy</u></strong></p>

        <p>Hoop offers you multiple options both online and offline. However, Hoop reserves its rights to add or delete any mode of payment without any prior notice.</p>
        <p>This is very easy and as simple as you shop on any other website, so here is the payment policy:</p>

        <ol>
          <li>A) Offline Payment Mode:</li>
        </ol>

        <ul className="webpage">
          <li>Cash on Delivery (CoD) – Buyer needs to make payment in cash to the delivery person at the time of receipt of delivery of the Products at its delivery location. For CoD payment option, maximum order value is Rs. __________/-. However, Hoop can change this limit without further notice.</li>
        </ul>

        <ol>
          <li>B) Online Payment Mode:</li>
        </ol>

        <ul className="webpage">
          <li>Credit Cards</li>
          <li>Debit Cards</li>
          <li>Net banking/Direct Debit payments from select banks in India. A full list is available at the time of Check-Out and before making payments for purchases</li>
          <li>e-Wallets</li>
        </ul>

        <p>As prescribed by the financial institutions issuing the credit or debit cards affiliated with Visa and MasterCard you will require to submit your 16-digit credit card number, card expiry date and 3-digit CVV number (usually on the reverse of the card) when you make your online transaction using your Credit or Debit card. You should also have enrolled your Credit Card with VBV (Verified by Visa) or MSC (MasterCard Secure Code) to complete the transaction. Your credit card or debit card statements will reflect x<u>___________________x. </u>You represent and confirm that the credit/debit card that is being used is yours or that you have been specifically authorized by the owner of the credit/debit card to use it. You further agree and undertake to provide the correct and valid credit card details to carry out a transaction on the Website. All credit/debit card holders are subject to validation checks and authorization by the card issuer. If the issuer of your payment card refuses to authorize payment to us, Hoop will not be liable for any delay or non-delivery. In case of third-party statements including bank and credit card statements the merchant name may appear in an abbreviated format. To place an order, you will need to complete the transaction on the website. This may or may not be assisted with a phone call with the customer service representative. By placing an order on the site or on phone, you are agreeing to the terms and conditions and payment policy published in the appropriate section of the website or affiliated websites where specifically referred to such affiliated websites. After you have made your selection and added products to your shopping cart, you will need to proceed to the checkout section. In this section, you will be asked for address and other contact information as well as payment-related information. Once the payment transaction has been completed, your order will be processed on receipt of the funds from the bank or Credit Card Company. Thereafter your products will be shipped based on product availability and completion of logistics operations related to the same.</p>

        <p>While availing any of the payment method/s available on the Website, Hoop will not be responsible or assume any liability, whatsoever in respect of any loss or damage arising directly or indirectly to you due to:</p>

        <ul className="webpage">
          <li>Lack of authorization for any transaction/s, or</li>
          <li>Exceeding the present limit mutually agreed by you and your issuing bank, or</li>
        </ul>
        <p>iii. Any payment issues arising out of the transaction, or</p>
        <ul className="webpage">
          <li>Decline of transaction for any other reason/s</li>
        </ul>

        <p>Hoop reserves its right to change the price of any product in the Website any time without any notice. Prices stated at the time of an order is placed shall apply in respect to that order.</p>

        <p>In cases where the payment of an online order does not get successfully communicated to our system due to any network or technical issue between intermediary, bank or payment gateway, the order shall not be processed and a refund will be initiated for the same. However, in an unsuccessful attempt if the customer’s account gets debited, such amounts generally gets auto reversed in the same account. However, Hoop shall not be held responsible for such amounts debited in unsuccessful attempts and customer can raise reversal request with their bank should there be any unreasonable delay in refund. You acknowledge that Hoop will not be liable for any damages, interests, claims etc. resulting from not processing a transaction or any delay in processing a transaction which is beyond control of Hoop.</p>

      </div>
    </MyContainer>
  )
}