import React, { useState } from 'react'
import "../../App.css";


function getOrientation(width, height) {
    if (width > height) {
        return 'landscape';
    }
    else {
        return 'portrait';
    }
}
function Gif(props) {
    const [gifState, setGifState] = useState(true);

    const toggleGifState = () => {
        setGifState(!gifState);
    }
    let gifURL = props.data.images.fixed_height_downsampled.url;
    if (!gifState) {
        gifURL = props.data.images.fixed_height_still.url;
    }
    return (
        <>
            <img className={getOrientation(props.data.images.fixed_height_downsampled.width, props.data.images.fixed_height_downsampled.height)}
                src={gifURL} alt={props.data.title} onClick={toggleGifState} />
        </>
    )
}

export default Gif
