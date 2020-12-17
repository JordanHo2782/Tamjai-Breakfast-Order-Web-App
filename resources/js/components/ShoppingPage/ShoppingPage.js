import React, {useState} from 'react'
import Navbar from "../Navbar/Navbar"
import SearchBarMobile from "../SearchBarMobile/SearchBarMobile"
import ItemContainer from "../ItemContainer/ItemContainer"

export default function ShoppingPage() {

    const [SearchButtonClicked, setSearchButtonClicked] = useState(false)
    const [SearchBarInput, setSearchBarInput] = useState("")

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
                <ItemContainer SearchBarInputChange={SearchBarInput}/>
            </div>
        </div>
    )
}
