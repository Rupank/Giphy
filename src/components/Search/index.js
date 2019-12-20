import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchGifData } from './redux/SearchActions';

function Search(props) {
    const { fetchGifData } = props;
    const onInputChange = (event) => {
        if (event.keyCode === 13) {
            fetchGifData(event.target.value);
        }
    }
    return (
        <>
            <input onKeyDown={onInputChange} />
        </>
    )
}


const mapDispatchToProps = dispatch => bindActionCreators({
    fetchGifData: fetchGifData
}, dispatch);

export default connect(null, mapDispatchToProps)(Search)
