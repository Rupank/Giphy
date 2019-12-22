import React, { useState } from 'react'
import "../../App.css";


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
            <img src={gifURL} alt={props.data.title} onClick={toggleGifState} />
        </>
    )
}

export default Gif
