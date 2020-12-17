import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function CustomizeMenu(props) {

    class Item {
        constructor(Label, Options){
            this.Label = Label;
            this.Options = Options;
        }
    }

    var Bread = new Item("Bread", ["Bun", "Bread", "Toast"], true)
    var Noodle = new Item("Noodle", ["Macaroni with Ham", "Spiced Pork Cube Noodle", "Spiced Pork Cube Nissan Noodle"], false)
    var Egg = new Item("Egg", ["Over Easy Egg", "Over Medium Egg", "Over Hard Egg", "Scrambled Egg"], false)
    var Drink = new Item("Drink", ["Milk Tea", "Lemon Tea"], false)

    const Items = [Bread, Noodle, Egg, Drink]
    const [OptionsSelected, setOptionsSelected] = useState("Bread")
    //For Each Items create state, which determine the Option selected
    
    class ItemInBundle {
        constructor(Name, PriceChange){
            this.Name = Name;
            this.PriceChange = PriceChange;
        }
    }
    
    class ItemOptions {
        constructor(Label, ItemOptions){
            this.Label = Label;
            this.ItemOptions = ItemOptions;
        }
    }

    //Pass In 
 
    return (
        <React.Fragment>
            <div className={`${props.CustomizeItemButtonClickedChange?"product-menu-opened":"product-menu-closed"} w-100 position-absolute z-index-4 bg-dark opacity-5 menu-transition`}>
            </div>
            <div className={`${props.CustomizeItemButtonClickedChange?"change-setting-manual-opened":"change-setting-manual-closed"} menu-transition change-setting-manual overflow-scroll position-absolute bg-white z-index-5 d-flex flex-column align-items-center rounded rounded-lg`}>
                <div className="w-100 d-flex justify-content-between align-items-center product-menu-navbar">
                    <p className="m-0">Step 1/2</p>
                    <FontAwesomeIcon icon={faTimes}/>
                </div>
                <div className="w-100 d-flex align-items-center product-menu-navbar border-bottom">
                    {
                        Items.map((Item)=>{
                            return (
                                <div 
                                    className={`product-menu-navbar-customize-btn pt-0 rounded-lg cursor-pointer d-flex justify-content-center align-items-center ${Item.Label===OptionsSelected?"bg-success text-light":"bg-light text-dark"}`}
                                    onClick={()=>{
                                        setOptionsSelected(Item.Label)
                                    }}
                                    >
                                    {Item.Label}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-100 d-flex align-items-center product-menu-navbar text-success border-bottom">
                    <FontAwesomeIcon className="ml-2 mr-2" icon={faCheck}/>
                    <h5 className="mb-0 ml-2">Please Choose One</h5>
                </div>
                <div className="w-100 d-flex align-items-center product-menu-navbar">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search Options Here"/>
                    </div>
                </div>
                {/* <div className="w-100 d-flex justify-content-between align-items-center product-menu-navbar">
                    <div className="bg-white border border-success product-menu-rounded-checked-icon d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon className="text-success" icon={faCheck}/>
                    </div>
                    <div className={`product-menu-option border-bottom d-flex justify-content-between align-items-center`}>
                        <p className="m-0">Coffee</p>
                        <p className="m-0 text-muted">+${0}</p>
                    </div>
                </div> */}
                {
                    Items.map((Item)=>{
                        if(Item.Label===OptionsSelected){
                            return Item.Options.map((Option)=>{
                                return (
                                    <div className="w-100 d-flex justify-content-between align-items-center product-menu-navbar cursor-pointer" onClick={()=>{
                                        console.log(Option)
                                    }}>
                                        <div className="bg-white border border-success product-menu-rounded-checked-icon d-flex justify-content-center align-items-center">
                                            <FontAwesomeIcon className="text-success" icon={faCheck}/>
                                        </div>
                                        <div className={`product-menu-option ml-3 border-bottom d-flex justify-content-between align-items-center`}>
                                            <p className="m-0">{Option}</p>
                                            <p className="m-0 text-muted">+${0}</p>
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
