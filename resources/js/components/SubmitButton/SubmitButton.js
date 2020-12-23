import React from 'react'

export default function SubmitButton(props) {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <button type="button" className={!!props.BtnClasses?props.BtnClasses:"btn btn-outline-success addcart-btn"} onClick={()=>{
                props.onClickChange()
            }}>{props.Label}</button>
        </div>
    )
}
