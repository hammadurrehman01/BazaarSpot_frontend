import React from 'react'
import CartItemsTable from './CartItemsTable';
import { Link } from 'react-router-dom';
import CartBottom from './CartBottom';

const Cart = () => {
  return (
    <div className='mt-10'>
        <div className='space-x-2 w-[81%] mx-auto text-[var(--mainTextGrey)]'>
            <Link to={'/'}>Home</Link>
            <span className='space-x-2'>/</span>
            <Link to={'/cart'}>Cart</Link>
        </div>
        <CartItemsTable/>
        <CartBottom/>
    </div>
  )
}

export default Cart;