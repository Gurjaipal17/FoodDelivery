import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import {useNavigate} from 'react-router-dom'

export default function Cart() {

const  {cartItems,food_list,removeFromCart,getTotalCartAmount,url}=useContext(StoreContext);

const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
           if(cartItems[item._id]>0)
            {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p> &#x20B9;{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p> &#x20B9;{item.price*cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                  </div>
                  <hr/></div>
            )
            }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p> &#x20B9;{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>Packaging Fee</p>
              <p> &#x20B9;{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <b>Total</b>
              <b> &#x20B9;{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}
