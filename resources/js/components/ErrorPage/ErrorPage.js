import React from "react";
import Navbar from "../Navbar/Navbar"

export default function ErrorPage() {
    return (
        <div className="h-100 w-100">
            <div className="h-100 w-100 position-absolute d-flex flex-column align-items-center z-index-3">
                <Navbar DisableSearch={true}/>
                <div className="h-100 d-flex align-items-center">
                    <h3 className="border-bottom mb-0 pb-2">{"This page cannot be found"}</h3>
                </div>
            </div>
        </div>
    )
}
