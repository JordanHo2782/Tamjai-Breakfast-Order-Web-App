import React from 'react'
import CustomizeItemButton from "../CustomizeItemButton/CustomizeItemButton"

export default function CustomizeItemButtonContainer(props) {
    return (
    <div className="product-customization-container">

        {
            props.ProductOptions!==undefined && props.ProductOptions.map((Option)=>{
                return <CustomizeItemButton 
                CustomizeItemButtonClickedChange={props.CustomizeItemButtonClickedChange}
                onCustomizeItemButtonClickedChange={(prevState)=>{
                    props.onCustomizeItemButtonClickedChange(prevState)}}/>
            })
        }
    </div>
    )
}
