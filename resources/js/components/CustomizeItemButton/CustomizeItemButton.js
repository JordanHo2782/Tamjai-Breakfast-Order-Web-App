import React from 'react'

export default function CustomizeItemButton(props) {
    return (
        <div 
            className="customize-item-button d-flex justify-content-between align-items-center cursor-pointer border-bottom"
            onClick={()=>{
                props.onCustomizeItemButtonClickedChange(!props.CustomizeItemButtonClickedChange)
            }}>
            <div className="customize-item-button-text m-0">Choose Noodle</div>
            <div className="customize-item-button-text m-0">Please Select</div>
        </div>
    )
}
