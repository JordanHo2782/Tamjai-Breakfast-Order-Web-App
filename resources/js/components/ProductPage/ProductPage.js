import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import CustomizeMenu from "../CustomizeMenu/CustomizeMenu"

import ProductDescriptionsContainer from "../ProductDescriptionsContainer/ProductDescriptionsContainer";
import CustomizeItemButtonContainer from "../CustomizeItemButtonContainer/CustomizeItemButtonContainer";

export default function ProductPage(props) {
    const [CustomizeItemButtonClicked, setCustomizeItemButtonClicked] = useState(false)

    const [ProductTitle, setProductTitle] = useState("");
    const [ProductPrice, setProductPrice] = useState(0);
    const [ProductPhotoLink, setProductPhotoLink] = useState("");
    const [ProductDescriptions, setProductDescriptions] = useState([]);

    const [ProductOptionsListNamesArray, setProductOptionsListNamesArray] = useState([]);
    const [ProductOptionsArraysArray, setProductOptionsArraysArray] = useState([]);
    const [ItemsSelected, setItemsSelected] = useState({});

    const { CategoryID, ProductID } = useParams();
    useEffect(()=>{
        const FetchDataAndSetState = async(Link, ModifyJSONFunction, SetStateFunction)=>{
            const JSONData = await fetch(Link).then((response)=>{return response.json()});
            const DataModified = ModifyJSONFunction(JSONData);
            SetStateFunction(DataModified);
        }
        FetchDataAndSetState(
            `/api/get/product/${CategoryID}/${ProductID}`,
            (Data)=>{ 
                Data = Data[0]
                return [Data.english_name, Data.photo_link, Data.price, Data.product_descriptions]},
            (DataModified)=>{
                setProductTitle(DataModified[0]);
                setProductPhotoLink(DataModified[1]);
                setProductPrice(DataModified[2]);
                setProductDescriptions(DataModified[3]);
        });
        FetchDataAndSetState(
            `/api/get/product_options/${CategoryID}/${ProductID}`,
            (Data)=>{
                return [Data.map((Datum)=>{ return Datum.english_name; }), Data.map((Datum)=>{return Datum.product_options})]},
            (DataModified)=>{
                setProductOptionsListNamesArray(DataModified[0]);
                setProductOptionsArraysArray(DataModified[1]);
        })
    },[])

    const ProductOptionsChoosenArray = ()=>{
        var ProductOptionsSelectedListNamesArray = []
        Object.entries(ItemsSelected).map((Item)=>{
            Item[1].english_name
            ProductOptionsSelectedListNamesArray[ProductOptionsListNamesArray.indexOf(Item[0])] = Item[1].english_name;
        })
        return ProductOptionsSelectedListNamesArray;
    }
    const CalcAdditionalPrice = ()=>{
        return Object.keys(ItemsSelected).length===0?0:(Object.values(ItemsSelected).map((object)=>{return object.price_change})).reduce((a,b)=>{ return a+b });
    }

    return (
        <div className="w-100">
            <CustomizeMenu 
                CustomizeItemButtonClickedChange={CustomizeItemButtonClicked} 
                onCustomizeItemButtonClickedChangeChange={(newState)=>{
                    setCustomizeItemButtonClicked(newState)
                }}
                ProductOptionsArraysArray={ProductOptionsArraysArray}
                OptionNamesArray={ProductOptionsListNamesArray}
                ItemsSelectedChanges={ItemsSelected}
                onItemsSelectedChanges={(newState)=>{
                    setItemsSelected(newState)
                }}
                />
            <div
                className="h-100 w-100 overflow-scroll position-absolute d-flex flex-column align-items-center z-index-3">
                <Navbar DisableSearch={true}/>
                <div className="w-100 p-0">
                    <div className="product-description-container">
                        <div className="product-photo">
                            <img className="h-100 w-100" src={`/api/get/image/${ProductPhotoLink}`}/>
                        </div>
                        <div className="product-title d-flex justify-content-between align-items-center border-bottom">
                            <h1 className="m-0">{ProductTitle}</h1>
                            <h1 className="m-0">${ProductPrice + CalcAdditionalPrice() }</h1>
                        </div>
                        <ProductDescriptionsContainer ProductDescriptions={ProductDescriptions}/>
                    </div>
                    <CustomizeItemButtonContainer
                        CustomizeItemButtonLeftPlaceholdersArray={ProductOptionsListNamesArray}
                        CustomizeItemButtonRightPlaceholdersArray={ProductOptionsChoosenArray()}
                        CustomizeItemButtonClickedChange={CustomizeItemButtonClicked}
                        onCustomizeItemButtonClickedChange={(prevState)=>{                            
                            setCustomizeItemButtonClicked(prevState)}}/>            
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <button type="button" className="btn btn-outline-success addcart-btn">ADD TO CART</button>
                    </div>
                </div>
            </div>

    )
}