import React from 'react'
import Navbar from "../Navbar/Navbar"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import CartItemsContainer from "../CartItemsContainer/CartItemsContainer"

export default function CartPage() {
    return (
    <div className="h-100 w-100">
        <div className="h-100 w-100 position-absolute d-flex flex-column align-items-center z-index-3">
            <Navbar DisableSearch={true} DisableCart={true}/>
            <CartItemsContainer/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn btn-outline-success addcart-btn" onClick={()=>{
                    console.log(ItemsSelected)
                }}>Place Order</button>
            </div>
        </div>
    </div>
    )
}
