import React, { useEffect, useRef } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchGifData, loadMoreGifData } from './redux/SearchActions';
import { getInput, loadMoreIndex, completed, getPending, getError } from '../Search/redux/SearchReducer';
import debounce from 'lodash.debounce';

import '../../App.css';

function Search(props) {
    const { fetchGifData, loadMoreGifData, input, error, isLoading, getNextIndex, completed } = props;
    const inputRef = useRef(null);

    // To add focus for the first time when this component is rendered
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    // Added Debouncing of scroll events to improve page performance
    window.onscroll = debounce(() => {

        if (error || isLoading || completed) {
            return;
        }

        if (window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight) {

            // Trigerring action - loadMoreGifData to get more gifs from the api call
            loadMoreGifData(getNextIndex, input);
        }
    }, 100)

    // Handling of input whenever user types something in input box
    const onInputChange = (event) => {

        // Whenever user hit enter then fetchGifData action is getting triggered
        if (event.keyCode === 13 && event.target.value.trim() !== '' && event.target.value.trim() !== input) {
            // Trigerring action -fetchGifData to get matching gif as per the user input
            fetchGifData(event.target.value);
        }
    }
    return (
        <div className="searchBox">
            <input onKeyDown={onInputChange} ref={inputRef} placeholder='Type a word and Hit Enter' />
        </div>
    )
}

const mapStateToProps = ({ search }) => ({
    input: getInput(search),
    getNextIndex: loadMoreIndex(search),
    isLoading: getPending(search),
    error: getError(search),
    completed: completed(search)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchGifData: fetchGifData,
    loadMoreGifData: loadMoreGifData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search)
