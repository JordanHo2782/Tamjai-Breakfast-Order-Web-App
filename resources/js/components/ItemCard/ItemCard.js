import React from 'react'

export default function ItemCard(props) {
    const SearchItemsExistArray = props.TextDescriptions!==undefined && props.TextDescriptions.map((TextDescription)=>{
        return TextDescription.english_text.search(props.SearchBarInputChange)!==-1||TextDescription.traditional_chinese_text.search(props.SearchBarInputChange)!==-1;
    })

    const SearchItemExist = props.TextDescriptions!==undefined && SearchItemsExistArray.reduce((accumulator, currentValue)=>{
        return accumulator || currentValue
    })

    const SearchHeaderExist = props.Header.search(props.SearchBarInputChange)!==-1
    return (
        <React.Fragment>
            <div 
                className={`item-size bg-light rounded ${SearchHeaderExist||SearchItemExist?"d-flex":"d-none"} shadow-lg ${props.Avaliable?"cursor-pointer": "cursor-auto"} z-index-3`}
                onClick={()=>{
                    window.location.href=`/product-categories/${props.CategoryID}/${props.ProductID===undefined?"":props.ProductID}`
                }}>
                <div className={props.Avaliable?"d-none":"item-size m-0 bg-dark rounded position-absolute z-index-3 opacity-5"}/>
                <div className={props.Avaliable?"d-none":"item-size m-0 rounded position-absolute z-index-4 d-flex justify-content-center align-items-center"}>
                    <h1 className="text-light">Sold Out</h1>
                </div>
                <img 
                    src={`/api/get/image/${props.Photo}`}
                    alt={props.Header}
                    className="item-photo"/>
                <div 
                    className={`item-text-container-size d-flex flex-column justify-content-around`}>
                    <h5 className="item-header-size m-0 text-center">{props.Header}</h5>
                        {
                            props.TextDescriptions!==undefined && <div className="item-description-container-padding d-flex flex-column align-items-start">
                                {
                                    props.TextDescriptions.map((TextDescription)=>{
                                        return <p className={`m-0 ${TextDescription.is_muted?"item-description-size-muted text-muted":"item-description-size text-dark"}`}>- {TextDescription.english_text}</p>
                                    })
                                }
                            </div>
                        }   
                </div>
            </div> 
        </React.Fragment>

    )
}
