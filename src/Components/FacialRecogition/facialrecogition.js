import React from 'react';
import './facialrecognition.css';

const FacialRecogition = (props) => {
    return (
        <div className="FR_container">
            <img src={props.imageURL} alt="Face Scan Result" className="FR_main-img" id="FR_main-img"/>
            <div className="FR-bounding-box" 
            style={{top: props.box.topRow, right: props.box.rightCol, bottom: props.box.bottomRow, left: props.box.leftCol}}></div>
        </div>
    )
}
export default FacialRecogition;
