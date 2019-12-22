import React from 'react'
import { connect } from 'react-redux';
import { getPending, getInput, getError, getResults } from '../Search/redux/SearchReducer';
import '../../App.css';
import Gif from './Gif';

function Results(props) {
    const { searchResults, error, isLoading } = props;
    if (error) {
        return <div>{error}</div>
    }
    if (searchResults) {
        return (
            <>
                {renderSearchResults(searchResults, isLoading)}
            </>
        )
    }
    return null;
}

const renderSearchResults = (results, isLoading) => {
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
