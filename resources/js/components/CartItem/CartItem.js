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
                        window.location.href=`/product-categories/1/${props.ProductID}`
                    }}>{props.Title}</h3>

                    { props.Descriptions.length>0 && 
                        <div className="d-flex flex-column">
                            <h5 className="mb-2">This item include:</h5>
                            {
                                props.Descriptions.map((Description)=>{
                                    return <p className="mb-1">{Description}</p>
                                })
                            }
                        </div>
                    }
                </div>
            </div>
            <div className="d-flex flex-column justify-content-between">
                <h3 className="text-right text-danger">${props.Price}</h3>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <FontAwesomeIcon 
                        className="mx-3 cursor-pointer text-danger" 
                        icon={faTimes} 
                        size={"3x"}
                        onClick={()=>{
                            props.DeleteCartItem()
                        }}
                        />
                </div>
            </div>
    </div>
    )
}
