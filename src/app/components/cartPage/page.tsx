import React from 'react'
import CartProducts from './cartProducts'
import Header from './header'
import DeliveryPolicy from '../myAccountPage/deliveryPolicy'

const CartPage = () => {
  return (
    <div>
        <Header/>
      <CartProducts/>
      <DeliveryPolicy/>
    </div>
  )
}

export default CartPage
