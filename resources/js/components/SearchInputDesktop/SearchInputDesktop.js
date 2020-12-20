import React, {useRef} from 'react'

export default function SearchInputDesktop(props) {
    const InputEl = useRef(null)
    return (
        <div className={`input-group search-input ${props.DisableSearch?"d-none":""}`}>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Search Menu Here" 
                aria-label="Search Menu Here" 
                ref={InputEl}
                onChange={()=>{
                    props.onSearchBarInputChange(InputEl.current.value)
                }}
                />   
        </div>
    )
}
