import React from 'react'
import { connect } from 'react-redux';
import { getPending, getInput, getError, getResults } from '../Search/redux/SearchReducer';

function Results(props) {
    const { searchResults } = props;
    console.log(searchResults.length);
    return (
        <div>

        </div>
    )
}

const mapStateToProps = ({ search }) => ({
    searchResults: getResults(search),
    error: getError(search),
    isLoading: getPending(search),
    queryInput: getInput(search)
});

export default connect(mapStateToProps)(Results)
