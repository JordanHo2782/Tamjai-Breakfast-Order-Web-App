import React from 'react'
import CartItem from "../CartItem/CartItem"

export default function CartItemsContainer(props) {
    // const Items = [
    //     {
    //         PhotoSource: "/api/get/image/bundle_a.jpg",
    //         Title: "Bundle A",
    //         Price: 42,
    //         Descriptions: [
    //             "Lorem",
    //             "Nam",
    //             "Vivamu",
    //             "Maecen.",
    //             "Maurisuada dolor",
    //         ]
    //     },
    //     {
    //         PhotoSource: "/api/get/image/bundle_a.jpg",
    //         Title: "Bundle A",
    //         Price: 42,
    //         Descriptions: [
    //             "Lorem",
    //             "Nam",
    //             "Vivamu",
    //             "Maecen.",
    //             "Maurisuada dolor",
    //         ]
    //     },
    //     {
    //         PhotoSource: "/api/get/image/bundle_a.jpg",
    //         Title: "Bundle A",
    //         Price: 42,
    //         Descriptions: [
    //             "Lorem",
    //             "Nam",
    //             "Vivamu",
    //             "Maecen.",
    //             "Maurisuada dolor",
    //         ]
    //     },
    // ]
    return (
        <div className="container-md">
            {   
                props.CartItems.map((Item)=>{
                    var Descriptions = Object.values(Item.OptionsSelected).map((object)=>{return object.english_name})
                    return <CartItem key={props.CartItems.indexOf(Item)} PhotoSource={`/api/get/image/${Item.ProductPhotoLink}`} Title={Item.ProductTitle} Price={Item.ProductPrice} ProductID={Item.ProductID} Descriptions={Descriptions} DeleteCartItem={()=>{props.DeleteCartItem(props.CartItems.indexOf(Item))}}/>
                })
            }
            <h3 className="d-flex justify-content-end my-3">Total Price: ${props.CartItems.map((Item)=>{return Item.ProductPrice;}).reduce((accumulator, currentValue)=>{return accumulator + currentValue;})}</h3>
        </div>
    )
}
