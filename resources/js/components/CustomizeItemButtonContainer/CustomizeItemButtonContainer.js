import React from 'react'
import CustomizeItemButton from "../CustomizeItemButton/CustomizeItemButton"

export default function CustomizeItemButtonContainer(props) {
    return (
    <div className="product-customization-container d-flex">
        {
            props.CustomizeItemButtonLeftPlaceholdersArray!==undefined && props.CustomizeItemButtonLeftPlaceholdersArray.map((LeftPlaceholder)=>{
                const RightPlaceholder = props.CustomizeItemButtonRightPlaceholdersArray[props.CustomizeItemButtonLeftPlaceholdersArray.indexOf(LeftPlaceholder)];
                return <CustomizeItemButton
                            key={props.CustomizeItemButtonLeftPlaceholdersArray.indexOf(LeftPlaceholder)}
                            LeftPlaceholder={LeftPlaceholder}
                            RightPlaceholder={!!RightPlaceholder?RightPlaceholder:"Please Select"}
                            onCustomizeItemButtonClickedChange={(prevState)=>{
                                props.onCustomizeItemButtonClickedChange(prevState)}}/>
            })
        }
    </div>
    )
}
