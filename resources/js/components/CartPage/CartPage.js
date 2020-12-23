import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar/Navbar"
import CartItemsContainer from "../CartItemsContainer/CartItemsContainer"

export default function CartPage() {
    const [CartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("CartItemsArray"))||[])

    return (
    <div className="h-100 w-100">
        <div className="h-100 w-100 position-absolute d-flex flex-column align-items-center z-index-3">
            <Navbar DisableSearch={true} DisableCart={true}/> 
            { CartItems.length>0 && <CartItemsContainer CartItems={CartItems} DeleteCartItem={(IndexOfItemToBeDeleted)=>{
                    const CartItemsCopy = JSON.parse(JSON.stringify(CartItems));
                    CartItemsCopy.splice(IndexOfItemToBeDeleted,1);
                    localStorage.setItem("CartItemsArray", JSON.stringify(CartItemsCopy));
                    setCartItems(CartItemsCopy);
                }}/>  }  
            { CartItems.length>0 && <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn btn-outline-success addcart-btn" onClick={()=>{
                    }}>Place Order</button>
            </div>}
            {   CartItems.length<=0 && <div className="h-100 d-flex align-items-center">
                <h3 className="border-bottom mb-0 pb-2">Your shopping cart is empty</h3>
            </div>}
        </div>
    </div>
    )
}
