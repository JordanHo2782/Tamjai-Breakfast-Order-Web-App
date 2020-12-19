import React, { useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function CustomizeMenu(props) {
    const OptionNames = props.ProductOptions.map((Option)=>{
        return Option.english_name;
    })
    const OptionArrays = props.ProductOptions.map((Option)=>{
        return Option.product_options;
    })

    const [OptionsSelected, setOptionsSelected] = useState("Mini Noodle Options")
    //For Each Items create state, which determine the Option selected
    
    const [ItemsSelected, setItemsSelected] = useState({});

    return (
        <React.Fragment>
            <div className={`${props.CustomizeItemButtonClickedChange?"product-menu-opened":"product-menu-closed"} w-100 position-absolute z-index-4 bg-dark opacity-5 menu-transition`}>
            </div>
            <div className={`${props.CustomizeItemButtonClickedChange?"change-setting-manual-opened":"change-setting-manual-closed"} menu-transition change-setting-manual overflow-scroll position-absolute bg-white z-index-5 d-flex flex-column align-items-center rounded rounded-lg`}>
                <div className="w-100 d-flex justify-content-between align-items-center product-menu-navbar">
                    <p className="m-0">Step {OptionNames.indexOf(OptionsSelected)+1}/{OptionNames.length}</p>
                    <FontAwesomeIcon
                        className="cursor-pointer customize-item-button-text"
                        icon={faTimes} 
                        onClick={()=>{
                            props.onCustomizeItemButtonClickedChangeChange(false)}}/>
                </div>
                <div className="w-100 d-flex align-items-center product-menu-navbar border-bottom">
                    {
                        OptionNames.map((Name)=>{
                            return (
                                <div 
                                    className={`product-menu-navbar-customize-btn bg-color-transition-1 color-transition-1 pt-0 rounded-lg cursor-pointer d-flex justify-content-center align-items-center text-center ${Name===OptionsSelected?"bg-success text-light":"bg-light text-dark"}`}
                                    onClick={()=>{
                                        setOptionsSelected(Name)
                                    }}>
                                    {Name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-100 d-flex align-items-center product-menu-navbar text-success border-bottom">
                    <FontAwesomeIcon className="ml-2 mr-2" icon={faCheck}/>
                    <h5 className="mb-0 ml-2">Please Choose One</h5>
                </div>
                {
                    OptionArrays.map((OptionArray)=>{
                        if(OptionArrays.indexOf(OptionArray)===OptionNames.indexOf(OptionsSelected)){
                            return OptionArray.map((Option)=>{
                                var OptionSelected = ItemsSelected[OptionsSelected]===undefined?false:ItemsSelected[OptionsSelected].english_name===Option.english_name;
                                return (
                                    <div className="w-100 d-flex justify-content-between align-items-center product-menu-navbar cursor-pointer" onClick={()=>{
                                            const NewItemsSelected = {...ItemsSelected, [OptionsSelected]:{english_name: Option.english_name, price_change: Option.price_change}};
                                            setItemsSelected(NewItemsSelected);
                                    }}>
                                        <div 
                                            className={`border border-success product-menu-rounded-checked-icon d-flex justify-content-center align-items-center 
                                            ${OptionSelected?"bg-success":"bg-white"}`}>
                                            <FontAwesomeIcon className={OptionSelected?"text-light":"text-success"} icon={faCheck}/>
                                        </div>
                                        <div className="product-menu-option ml-3 border-bottom d-flex justify-content-between align-items-center">
                                            <p className="m-0">{Option.english_name}</p>
                                            <p className="m-0 text-muted">+${Option.price_change}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    })
                }

            </div>
        </React.Fragment>
    )
}
