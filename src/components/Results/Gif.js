import React, { useState } from 'react'
import "../../App.css";

function Gif(props) {
    const [gifState, setGifState] = useState(true);
    const [isBtnVisible, setVisibility] = useState(false);
    const toggleGifState = () => {
        setGifState(!gifState);
    }

    function applyStatusClass() {
        if (gifState) {
            return 'playing';
        }
        return 'paused';
    }

    /** 
     * Assigned button image (play/pause) based on the state of gif
    */
    function getBtnSRC() {
        if (gifState) {
            return '/pause.png';
        }
        return '/play.png';
    }

    // Hide Pause Button on mouseOut event
    const hideBtn = (event) => {
        // Only Hiding Button if gif was playing on mouseout
        if (gifState) {
            setVisibility(false);
        }
    }

    // Display Play/Pause Button on mouseEnter event
    const displayBtn = () => {
        setVisibility(true);
    }


    let gifURL = props.data.images.fixed_height_downsampled.url;
    if (!gifState) {
        gifURL = props.data.images.fixed_height_still.url;
    }
    return (
        <div className='imageContainer'>
            <img src={gifURL}
                className={`img-${applyStatusClass()} gif-image`}
                alt={props.data.title}
                onMouseEnter={displayBtn}
                onClick={toggleGifState}
                onMouseOut={hideBtn}
            />
            {isBtnVisible &&
                <img className="btn-img" src={getBtnSRC()} onClick={toggleGifState} />
            }
        </div>
    )
}

export default Gif
