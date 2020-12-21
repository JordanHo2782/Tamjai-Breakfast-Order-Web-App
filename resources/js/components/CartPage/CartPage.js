import React from 'react'
import Navbar from "../Navbar/Navbar"

export default function CartPage() {
    return (
        <div className="h-100 w-100">
        <div className="h-100 w-100 position-absolute d-flex flex-column align-items-center z-index-3">
            <Navbar DisableSearch={true} DisableCart={true}/>
        </div>
    </div>
    )
}
