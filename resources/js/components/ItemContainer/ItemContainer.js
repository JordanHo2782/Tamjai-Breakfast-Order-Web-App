import React from "react";
import ItemCard from "../ItemCard/ItemCard";

export default function ItemContainer(props) {
    return (
        <div className="item-container">
            {
                props.Items.map((Item)=>{
                    return <ItemCard 
                        SearchBarInputChange={props.SearchBarInputChange} 
                        CategoryID={Item.category_id} 
                        Avaliable={true} 
                        Header={Item.english_name} 
                        Photo={Item.photo_link}
                        TextDescriptions={Item.product_descriptions}
                        ProductID={Item.product_id}
                        />
                })
            }
        </div>
    )
}
