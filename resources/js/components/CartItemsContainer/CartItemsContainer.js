import React from 'react'
import CartItem from "../CartItem/CartItem"

export default function CartItemsContainer() {
    const Items = [
        {
            PhotoSource: "/api/get/image/bundle_a.jpg",
            Title: "Bundle A",
            Price: 42,
            Descriptions: [
                "Lorem",
                "Nam",
                "Vivamu",
                "Maecen.",
                "Maurisuada dolor",
            ]
        },
        {
            PhotoSource: "/api/get/image/bundle_a.jpg",
            Title: "Bundle A",
            Price: 42,
            Descriptions: [
                "Lorem",
                "Nam",
                "Vivamu",
                "Maecen.",
                "Maurisuada dolor",
            ]
        },
        {
            PhotoSource: "/api/get/image/bundle_a.jpg",
            Title: "Bundle A",
            Price: 42,
            Descriptions: [
                "Lorem",
                "Nam",
                "Vivamu",
                "Maecen.",
                "Maurisuada dolor",
            ]
        },
    ]
    return (
        <div className="container-md">
            {   
                Items.map((Item)=>{
                    return <CartItem PhotoSource={Item.PhotoSource} Title={Item.Title} Price={Item.Price} Descriptions={Item.Descriptions} />
                })
            }
        </div>
    )
}
