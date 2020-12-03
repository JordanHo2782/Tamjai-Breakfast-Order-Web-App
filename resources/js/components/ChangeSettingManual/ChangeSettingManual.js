import React, { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function ChangeSettingManual(props) {
    const InputElement = useRef(null);


    return (
    <div className={props.ManualOpened?"change-setting-manual position-absolute bg-white z-index-4 d-flex flex-column align-items-center rounded rounded-lg":"d-none"}>
        <div className="change-setting-manual-label w-100 d-flex justify-content-center align-items-center">{props.Label}</div>
        <input type="text" className="form-control change-setting-manual-option w-75" placeholder={props.SearchLabel} ref={InputElement} onInput={()=>{
            props.Options.map((Option, OptionIndex)=>{

                document.getElementById(`option${OptionIndex}`).className = Option===props.OptionSelected?"change-setting-manual-option w-100 d-flex justify-content-between align-items-center cursor-pointer text-primary":"change-setting-manual-option w-100 d-flex justify-content-between align-items-center cursor-pointer";
                const SearchResult = Option.toString().search(InputElement.current.value)//[3123,3,2,2,-1 ...] -1 for dont exist,
                if(SearchResult===-1){
                    document.getElementById(`option${OptionIndex}`).className = "d-none";
                    //document.getElementById(`option${OptionIndex}`).style.display="none !important";
                    console.log(document.getElementById(`option${OptionIndex}`).style)
                }
            })
        }}/>
        {
            props.Options.map((Option)=>{
                return (
                <div 
                    className={Option===props.OptionSelected?"change-setting-manual-option w-100 d-flex justify-content-between align-items-center cursor-pointer text-primary":"change-setting-manual-option w-100 d-flex justify-content-between align-items-center cursor-pointer"}
                    key={props.Options.indexOf(Option)}
                    id={`option${props.Options.indexOf(Option)}`}
                    onClick={()=>{
                        props.onSettingChange(Option);}}>
                    <div>{Option}</div>
                    <FontAwesomeIcon icon={faCheck} className={Option===props.OptionSelected?"d-inline":"d-none"}/> 
                </div>
                )
            })
        }
    </div>
    )
}
