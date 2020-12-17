import React from 'react'

export default function ProductDescriptionsContainer(props) {
    return (
        <div className="product-description d-flex flex-column justify-content-center border-bottom">
            <h5 className="product-description-header">This menu included</h5>
            {
                props.ProductDescriptions!==undefined && props.ProductDescriptions.map((product_description)=>{
                    return <p className={`product-description-text ${product_description.is_muted&&"text-muted"}`}>{product_description.english_text}</p>
                })
            }
        </div>
    )
}
