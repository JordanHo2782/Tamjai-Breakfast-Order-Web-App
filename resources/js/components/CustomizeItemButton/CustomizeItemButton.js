import React, { useState } from 'react'

export default function CustomizeItemButton(props) {
    const [CustomizeItemButtonLeftPlaceholder, setCustomizeItemButtonLeftPlaceholder] = useState("");
    const [CustomizeItemButtonRightPlaceholder, setCustomizeItemButtonRightPlaceholder] = useState("Please Select");

    return (
        <div 
            className="customize-item-button d-flex justify-content-between align-items-center cursor-pointer border-bottom"
            onClick={()=>{
                props.onCustomizeItemButtonClickedChange(!props.CustomizeItemButtonClickedChange)
            }}>
            <div className="customize-item-button-text m-0">{CustomizeItemButtonLeftPlaceholder}</div>
            <div className="customize-item-button-text m-0">{CustomizeItemButtonRightPlaceholder}</div>
        </div>
    )
}
