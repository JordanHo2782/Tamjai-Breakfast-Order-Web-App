import React from "react";
import CustomizeItemButton from "../CustomizeItemButton/CustomizeItemButton"
import ProductDescriptionsContainer from "../ProductDescriptionsContainer/ProductDescriptionsContainer"
import CustomizeItemButtonContainer from "../CustomizeItemButtonContainer/CustomizeItemButtonContainer"

export default function ProductDetailsContainer(props) {

    console.log(props.ProductDetails.product_descriptions)

    return (
        <div className="w-100 p-0">
            <div className="product-description-container">
                <div className="product-photo">
                    <img className="h-100 w-100" src={props.ProductDetails.photo_link}/>
                </div>
                <div className="product-title d-flex justify-content-between align-items-center border-bottom">
                    <h1 className="m-0">{props.ProductDetails.english_name}</h1>
                    <h1 className="m-0">${props.ProductDetails.price}</h1>
                </div>
                <ProductDescriptionsContainer ProductDescriptions={props.ProductDetails.product_descriptions}/>
            </div>
            <CustomizeItemButtonContainer
                ProductOptions={props.ProductDetails.product_options}
                CustomizeItemButtonClickedChange={props.CustomizeItemButtonClickedChange}
                onCustomizeItemButtonClickedChange={(prevState)=>{
                    props.onCustomizeItemButtonClickedChange(prevState)}}/>            
        </div>
    )
}
