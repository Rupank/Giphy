import axios from 'axios';
import { FETCH_DATA_REQUESTED, FETCH_DATA_SUCCEEDED, FETCH_DATA_FAILED } from '../types';

export function fetchGifData(searchInput) {
    return async function (dispatch) {
        dispatch({
            type: FETCH_DATA_REQUESTED
        });

        const baseUrl = `http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=FCMxqwAzPdtoU7kFIwEkfRJHXcBt2ICO&limit=5`;
        axios.get(baseUrl)
            .then(data => {
                dispatch({ type: FETCH_DATA_SUCCEEDED, payload: { data: data.data.data, input: searchInput } });
            })
            .catch(error => {
                dispatch({ type: FETCH_DATA_FAILED, payload: { error: error.message } })
            });

    }
}