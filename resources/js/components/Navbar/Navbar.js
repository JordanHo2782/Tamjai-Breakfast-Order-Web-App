import React from 'react'
import { useHistory } from "react-router-dom";
import SearchInputDesktop from "../SearchInputDesktop/SearchInputDesktop"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faShoppingCart, faSearch, fas } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {

    const History = useHistory();
    return (
        <React.Fragment>
            <nav className="w-100 navbar navbar-light navbar-size bg-dark d-flex justify-cotent-between z-index-3">
                <FontAwesomeIcon className="navbar-icon cursor-pointer" icon={faArrowLeft} aria-label="Go to previous page" onClick={()=>{
                    History.goBack();
                }}/>
                <div className="tamjailogo-size m-auto full-bg-image tamjailogo-bg-image cursor-pointer"
                    onClick={()=>{
                        window.location.href="/"
                    }}/>
                <div className="w-auto d-flex flex-row justify-content-around align-items-center">
                    <FontAwesomeIcon className={`navbar-icon navbar-mobile-display cursor-pointer ${!!props.DisableSearch?"d-none":""}`} icon={faSearch} onClick={()=>{
                        props.onSearchButtonClickedChange(props.SearchButtonClickedChange)
                    }}/>
                    
                    <SearchInputDesktop DisableSearch={!!props.DisableSearch} onSearchBarInputChange={(newState)=>{props.onSearchBarInputChange(newState)}}/>
                    <FontAwesomeIcon className={`navbar-icon cursor-pointer ${!!props.DisableCart?"d-none":""}`} icon={faShoppingCart} onClick={()=>{
                        window.location.href="/cart"
                    }}/>
                </div>
            </nav>
        </React.Fragment>
    )
}
