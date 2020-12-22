import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function CartItem(props) {
    return (
        <div className="w-100 bg-light border-bottom d-flex justify-content-between px-2 py-3">
            <div className="d-flex">
                <img src={props.PhotoSource} className="cart-item-image mr-2"/>
                <div className="d-flex flex-column justify-content-between ml-2">
                    <h3 className="text-primary cursor-pointer" onClick={()=>{
                        window.location.href=`/product-categories/1/${1}`
                    }}>{props.Title}</h3>
                    <div className="d-flex flex-column">
                        <h5 className="mb-2">This item include:</h5>
                        {
                            props.Descriptions.map((Description)=>{
                                return <p className="mb-1">{Description}</p>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-between">
                <h3 className="text-right text-danger">${props.Price}</h3>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="btn-group mr-3" role="group" aria-label="Quantity controller">
                        <button type="button" className="btn btn-outline-dark" aria-label="Increase quantity by one">+</button>
                        <input
                        style={{
                            width: "3rem",
                        }} 
                        className="cursor-text btn btn-outline-dark text-dark bg-light" pattern="^[1-9]\d*$" aria-label={`Change quantity`}/>
                        <button type="button" className="btn btn-outline-dark" aria-label="decrease quantity by one">-</button>
                    </div>
                    <FontAwesomeIcon className="mx-3 cursor-pointer" icon={faTimes} size={"2x"}/>
                </div>
            </div>
    </div>
    )
}
