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
      <h1><strong>Delivery and Conditions</strong></h1>
      <div class="col-sm-12">
        <p>We want to deliver your products on time every time as early as possible but operationally it is not viable to deliver each order individually so based on the ordering trend and feasibility we have categorized delivery into:</p>
        <ul class="webpage">
          <li><strong>Express delivery:</strong> is when you require your delivery on priority and one of our delivery vans would just deliver your basket.</li>
        </ul>
        <ul class="webpage">
          <li><strong>Slotted delivery:</strong> is when you have scheduled your delivery time as per the slots available</li>
        </ul>
        <table border="1">
          <tbody>
            <tr>
              <td>
                <p><strong>City</strong></p>
              </td>
              <td>
                <p><strong>Order type</strong></p>
              </td>
              <td>
                <p><strong>Order value</strong></p>
              </td>
              <td>
                <p><strong>Delivery Charge</strong></p>
              </td>
              <td>
                <p><strong><span>Express </span>Delivery Charge(If Selected)</strong></p>
              </td>
            </tr>
            <tr>
              <td rowspan="2">
                <p>&nbsp; Surat</p>
              </td>
              <td rowspan="2">
                <p>All</p>
              </td>
              <td>
                <p>&lt; No Minimum Value</p>
              </td>
              <td>
                <p>Rs 30/-</p>
              </td>
              <td rowspan="2">
                <p>Rs 50/-</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Rs 250 and Above</p>
              </td>
              <td>
                <p>Free</p>
              </td>
            </tr>
          </tbody>
        </table>
        <br /><br />
        <table border="1" id="slotted">
          <tbody>
            <tr>
              <td colspan="2">
                <strong>Slotted</strong></td>
            </tr>
            <tr>
              <td>
                <span>&nbsp; Monday to Saturday</span></td>
              <td>
                &nbsp;8 AM - 6 AM</td>
            </tr>
            <tr>
              <td>
                &nbsp; Sunday</td>
              <td>
                &nbsp;8 AM - 2 PM</td>
            </tr>
          </tbody >
        </table >
        <p><u><br /></u></p>
        <p><u>You missed your delivery</u>: Delivery Boy will only attempt to deliver your basket once as per your pre-selected delivery date and time, if in case you for any reason you missed your arrival slot and want to get that delivered again you need to get in touch with our customer care contact number 7984271896 and ask for the best available delivery date and time available.</p>
      </div >


    </MyContainer >
  )
}