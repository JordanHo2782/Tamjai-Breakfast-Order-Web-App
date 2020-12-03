import React from 'react'
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

export default function ChangeSettingButton(props) {

    
    return (
        <React.Fragment>
            <button
                style={props.Style}
                type="button" 
                className={"btn btn-outline-success change-setting-btn-size d-flex justify-content-between align-items-center cursor-pointer"}
                onClick={()=>{
                    props.onChangeSettingButtonChange()}}>
                <div className="change-setting-btn-icon-size d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon icon={props.Icon} className="change-setting-btn-icon-size"/> 
                    <div className="change-setting-btn-label-size">{props.Label}</div>
                </div>
                <div className="change-setting-btn-setting-size d-flex justify-content-center align-items-center">{props.OptionSelected}</div>
            </button>
        </React.Fragment>
    )
}
