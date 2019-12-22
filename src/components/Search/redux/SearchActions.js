import axios from 'axios';
import { FETCH_DATA_REQUESTED, FETCH_DATA_SUCCEEDED, FETCH_DATA_FAILED, FETCH_MORE_SUCCEEDED } from '../types';
import uniq from 'lodash.uniq';
const baseURL = 'http://api.giphy.com/v1/gifs/search?api_key=FCMxqwAzPdtoU7kFIwEkfRJHXcBt2ICO';
const MAX_LIMIT = 30;

export function loadMoreGifData(prevOffset, searchInput) {
    return function (dispatch) {
        dispatch({
            type: FETCH_DATA_REQUESTED
        });
        let newOffset = prevOffset + MAX_LIMIT;
        const apiURL = `${baseURL}&q=${searchInput}&limit=${MAX_LIMIT}&offset=${newOffset}`;
        axios.get(apiURL)
            .then(data => {
                dispatch({
                    type: FETCH_MORE_SUCCEEDED, payload: {
                        data: data.data.data, offset: newOffset,
                        completed: (data.data.pagination.total_count === data.data.pagination.offset) ? true : false
                    }
                });
            })
            .catch(error => {
                dispatch({ type: FETCH_DATA_FAILED, payload: { error: error.message } })
            });
    }
}

export function fetchGifData(searchInput) {
    return function (dispatch) {
        dispatch({
            type: FETCH_DATA_REQUESTED
        });
        const apiURL = `${baseURL}&q=${searchInput}&limit=${MAX_LIMIT}&offset=0`;
        axios.get(apiURL)
            .then(data => {
                dispatch({ type: FETCH_DATA_SUCCEEDED, payload: { data: uniq(data.data.data), input: searchInput, offset: 0 } });
            })
            .catch(error => {
                dispatch({ type: FETCH_DATA_FAILED, payload: { error: error.message } })
            });
    }
}