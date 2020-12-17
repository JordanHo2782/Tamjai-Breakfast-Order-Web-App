import React, { useRef } from 'react'

export default function SearchBarMobile(props) {
    const InputEl = useRef(null)
    return (
        <React.Fragment>
            <nav className={`w-100 navbar navbar-light ${props.SearchButtonClickedChange?"navbar-size":"h-0 py-0"} bg-dark z-index-3 navbar-mobile-transition navbar-mobile-display`}>
                <div className="input-group">
                    <input 
                        type="text"
                        ref={InputEl}
                        className={`bg-light ${props.SearchButtonClickedChange?"form-control":"form-control h-0 py-0 font-size-0 border-0"} navbar-mobile-transition`} 
                        placeholder="Search Menu Here" 
                        aria-label="Search Menu Here"
                        value={props.SearchBarInputChange}
                        onChange={()=>{
                            props.onSearchBarInputChange(InputEl.current.value)
                        }}/>
                </div>
            </nav>
        </React.Fragment>
    )
}
