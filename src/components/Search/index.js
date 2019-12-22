import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchGifData, loadMoreGifData } from './redux/SearchActions';
import { getInput, loadMoreIndex, completed, getPending, getError } from '../Search/redux/SearchReducer';
import debounce from 'lodash.debounce';

import '../../App.css';

function Search(props) {
    const { fetchGifData, loadMoreGifData, input, error, isLoading, getNextIndex, completed } = props;

    window.onscroll = debounce(() => {
        if (error || isLoading || completed) {
            return;
        }

        if (window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight) {
            loadMoreGifData(getNextIndex, input);
        }
    }, 100)

    const onInputChange = (event) => {
        if (event.keyCode === 13 && event.target.value.trim() !== '' && event.target.value.trim() !== input) {
            fetchGifData(event.target.value);
        }
    }
    return (
        <div className="searchBox">
            <input onKeyDown={onInputChange} />
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
