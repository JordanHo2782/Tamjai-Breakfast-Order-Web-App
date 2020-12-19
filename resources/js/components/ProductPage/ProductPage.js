import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import SearchBarMobile from "../SearchBarMobile/SearchBarMobile"
import CustomizeMenu from "../CustomizeMenu/CustomizeMenu"

import ProductDetailsContainer from "../ProductDetailsContainer/ProductDetailsContainer"

export default function ProductPage(props) {

    const [SearchButtonClicked, setSearchButtonClicked] = useState(false)
    const [SearchBarInput, setSearchBarInput] = useState("")
    const [CustomizeItemButtonClicked, setCustomizeItemButtonClicked] = useState(false)

    const [ProductDetails, setProductDetails] = useState([])
    const [ProductOptions, setProductOptions] = useState([])

    const [OptionsSelected, setOptionsSelected] = useState("Mini Noodle Options");
    const [ItemsSelected, setItemsSelected] = useState({});  

    const { CategoryID, ProductID } = useParams();

    useEffect(()=>{
        const FetchProductDetails = async()=>{
            var ProductCategoriesJSON = await fetch(`/api/get/product/${CategoryID}/${ProductID}`).then((response)=>{return response.json()});
            setProductDetails(ProductCategoriesJSON[0])
        }
        const FetchProductOptions = async()=>{
            var ProductOptionsJSON = await fetch(`/api/get/product_options/${CategoryID}/${ProductID}`).then((response)=>{return response.json()});
            setProductOptions(ProductOptionsJSON);
        }
        FetchProductDetails();
        FetchProductOptions();

    },[])
    
    return (
        <div className="w-100">
            <CustomizeMenu 
                CustomizeItemButtonClickedChange={CustomizeItemButtonClicked} 
                onCustomizeItemButtonClickedChangeChange={(newState)=>{
                    setCustomizeItemButtonClicked(newState)
                }}
                ProductOptions={ProductOptions}/>
            <div
                className="h-100 w-100 overflow-scroll position-absolute d-flex flex-column align-items-center z-index-3">
                <Navbar
                SearchButtonClickedChange={SearchButtonClicked}
                onSearchButtonClickedChange={(prevProps)=>{
                    setSearchButtonClicked(!prevProps)}}
                onSearchBarInputChange={(newState)=>{
                    setSearchBarInput(newState)}}/>
                <SearchBarMobile
                SearchButtonClickedChange={SearchButtonClicked}
                onSearchBarInputChange={(newState)=>{
                    setSearchBarInput(newState)}}/>
                <ProductDetailsContainer 
                    CustomizeItemButtonClickedChange={CustomizeItemButtonClicked} 
                    onCustomizeItemButtonClickedChange={(newState)=>{
                        setCustomizeItemButtonClicked(newState)}}
                    ProductDetails={ProductDetails}
                    ProductOptions={ProductOptions}
                />

            </div>
        </div>

    )
}