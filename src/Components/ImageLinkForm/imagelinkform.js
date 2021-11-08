import React from 'react';
import './imagelinkform.css';

const ImageLinkForm = () => {
    return (
        <div className="ILF_container">
            <span className="ILF_main-text">This Magic Brain will detect faces in your pictures. Give it a try!</span>
            <div className="ILF_submission-area">
                <input type="text" placeholder="Place Image Link here..." className="ILF_input-box"/>
                <button className="ILF_detect-button"><span>Detect</span></button>
            </div>
        </div>
    )
}
export default ImageLinkForm;