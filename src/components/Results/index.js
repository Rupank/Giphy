import React from 'react'
import { connect } from 'react-redux';
import { getPending, getInput, getError, getResults } from '../Search/redux/SearchReducer';
import '../../App.css';
import Gif from './Gif';

function Results(props) {
    const { searchResults, error, queryInput, isLoading } = props;
    if (error) {
        return <div>{error}</div>
    }
    if (searchResults) {
        return (
            <>
                {renderSearchResults(searchResults, queryInput, isLoading)}
            </>
        )
    }
    return null;
}

const renderSearchResults = (results, searchInput, isLoading) => {
    if (!isLoading && results.length === 0 && searchInput) {
        return <div>No Results found</div>
    }
    return <div className="grid">
        {
            results.map((result, index) => (
                <div key={result.id + '_' + index}>
                    <Gif data={result} />
                </div>
            ))
        }
        {
            isLoading && <div>Loading...</div>
        }
    </div>

}

const mapStateToProps = ({ search }) => ({
    searchResults: getResults(search),
    error: getError(search),
    isLoading: getPending(search),
    queryInput: getInput(search)
});

export default connect(mapStateToProps)(Results)
