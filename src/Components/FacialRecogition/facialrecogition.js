import React from 'react';
import './facialrecognition.css';

const FacialRecogition = (props) => {
    return (
        <div className="FR_container">
            <img src={props.imageURL} alt="Face Scan Result" className="FR_main-img"/>
        </div>
    )
}
export default FacialRecogition;
