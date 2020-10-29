import { Container, styled } from '@material-ui/core';
import React from 'react'

const MyContainer = styled(Container)({
  paddingBottom: "0px",
  marginTop: "20px",
  minHeight: "calc(100vh - 200px)"
});


export default function Refund() {
  return (
    <MyContainer>
      <div>

        <p><h1>Refund Policy</h1><span></span></p>
        <p><span>Our policy lasts 2 days. If 2 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.</span></p>
        <p><span></span></p>
        <p><span>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
</span></p>
        <p><span></span></p>
        <p><span>Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.
</span></p>


        <p><span></span></p>
        <p><span>To complete your return, we require a receipt or proof of purchase.</span></p>
        <p><span></span></p>
        <p><span>Please do not send your purchase back to the manufacturer.
</span></p>
        <p><span></span></p>
        <p><span>There are certain situations where only partial refunds are granted: (if applicable)
</span></p>
        <p><span>Book with obvious signs of use</span></p>
        <p><span>Any item not in its original condition, is damaged or missing parts for reasons not due to our error.</span></p>
        <p><span>Any item that is returned more than 30 days after delivery</span></p>
        <p><span></span></p>
        <p><span>Refunds (if applicable)</span></p>
        <p><span>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</span></p>
        <p><span>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days. </span></p>
        <p><span></span></p>
        <p><span>Late or missing refunds (if applicable)</span></p>
        <p><span>If you haven’t received a refund yet, first check your bank account again.</span></p>
        <p><span>Then contact your credit card company, it may take some time before your refund is officially posted.</span></p>
        <p><span>Next contact your bank. There is often some processing time before a refund is posted.</span></p>
        <p><span>If you’ve done all of this and you still have not received your refund yet, please contact us at </span><span> <a href="mailto:info.thehoop@gmail.com">info.thehoop@gmail.com</a></span><span>.</span></p>
        <p><span></span></p>
        <p><span>Sale items (if applicable)</span></p>
        <p><span>Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</span></p>
        <p><span></span></p>
        <p><span>Exchanges (if applicable)</span></p>
        <p><span>We only replace items if they are defective or damaged. &nbsp;If you need to exchange it for the same item, send us an email at </span><span><a href="mailto:info.thehoop@gmail.com">info.thehoop@gmail.com</a> </span><span> send your item to: 222, Exult Shoppers, Vesumain Road, Surat - 395007.</span></p>
        <p><span></span></p>
        <p><span>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</span></p>
        <p><span></span></p>
        <p><span>Depending on where you live, the time it may take for your exchanged product to reach you, may vary.</span></p>
        <p><span></span></p>
      </div>
    </MyContainer>
  )
}