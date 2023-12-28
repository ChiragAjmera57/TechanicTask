import React from 'react'
import { formatDate } from '../utils/dateFormat';
import noImg from '../img/noImg.png'
export const Row = ({props}) => {
    const {productName,orderDetails,storeName,userId,unitPrice,quantity,mode,orderDate} = props
    const newDate = formatDate(orderDate)
    const totalPrice = quantity*unitPrice
    const orderId = orderDetails.orderId
    const {city,country} = orderDetails.orderLocation

    console.log(orderDetails)
      return (
        <tr>
          <td >{productName}</td>
          <td><img src={noImg}  alt="" /></td>
          <td >{orderId}</td>
          <td >{city}</td>
          <td >{country}</td>
          <td >{storeName}</td>
          <td >{userId}</td>
          <td >{unitPrice}</td>
          <td >{quantity}</td>
          <td >{totalPrice}</td>
          <td >{mode}</td>
          <td >{newDate}</td>
          <td><button className='btn btn-primary'>Order Detail</button></td>
          <td><button className='btn btn-primary'>Track</button></td>
        </tr>
      );
}
