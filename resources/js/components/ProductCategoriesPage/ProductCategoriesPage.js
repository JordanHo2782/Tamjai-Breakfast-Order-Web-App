import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import SearchBarMobile from "../SearchBarMobile/SearchBarMobile"
import ItemContainer from "../ItemContainer/ItemContainer"

export default function ProductCategoriesPage(props) {

    const [SearchButtonClicked, setSearchButtonClicked] = useState(false)
    const [SearchBarInput, setSearchBarInput] = useState("")
    const [Items, setItems] = useState([])
    const { CategoryID } = useParams();

    useEffect(()=>{
        const setProductCategories = async()=>{
            var ProductCategoriesJSON = await fetch(`/api/get/categories/${CategoryID}`).then((response)=>{return response.json()});
            if(ProductCategoriesJSON.length<=0){
                ProductCategoriesJSON = await fetch("/api/get/categories/").then((response)=>{return response.json()});
            }
            setItems(ProductCategoriesJSON)
        }
        setProductCategories();
    },[])
    return (
        <div className="h-100 w-100">
            <div className="h-100 w-100 position-absolute d-flex flex-column align-items-center z-index-3">
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
                <ItemContainer Items={Items} SearchBarInputChange={SearchBarInput}/>
            </div>
        </div>
    )
}