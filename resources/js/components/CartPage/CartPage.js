import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar/Navbar"
import CartItemsContainer from "../CartItemsContainer/CartItemsContainer"
import SubmitButton from "../SubmitButton/SubmitButton"

export default function CartPage() {
    const [CartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("CartItemsArray"))||[])
    const [CartItemsEmptyLabel, setCartItemsEmptyLabel] = useState("Your shopping cart is empty")

    const PostData = async (url, data)=>{
        const DataBody = {
            body: JSON.stringify(data),
            credentials: "same-origin",
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            mode: 'cors',
        };
        return await fetch(url, DataBody).then((Response)=>{ return Response.json();})
    }

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

            {
                CartItems.length>0 && <SubmitButton Label={"Place Order"} onClickChange={()=>{
                    const newOrder = {...JSON.parse(localStorage.getItem('TamjaiYunnanMixianOrderInfo')), CartItems};
                    PostData("/api/post/order", newOrder).then((data)=>{
                        localStorage.setItem("OrderRecord", JSON.stringify({
                            UUID: data,
                            Date: Date(),
                        }))
                        setCartItemsEmptyLabel(`The ID for ordering is ${data.substring(0,3)}`)});
                    localStorage.setItem("CartItemsArray", JSON.stringify([]));
                    setCartItems([]);
                }}/>
            }

            {   CartItems.length<=0 && <div className="h-100 d-flex align-items-center">
                <h3 className="border-bottom mb-0 pb-2">{CartItemsEmptyLabel}</h3>
            </div>}
        </div>
    </div>
    )
}
