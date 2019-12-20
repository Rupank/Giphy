import { FETCH_DATA_REQUESTED, FETCH_DATA_SUCCEEDED, FETCH_DATA_FAILED } from '../types';

const initialState = {
    searchResults: [],
    isLoading: true,
    searchInput: '',
    error: ''
};

export function SearchReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_REQUESTED:
            return { ...state, isLoading: true };
        case FETCH_DATA_SUCCEEDED:
            return { isLoading: false, searchResults: action.payload.data };
        case FETCH_DATA_FAILED:
            return { isLoading: false, error: action.payload.error }
        default:
            return state;
    }
};

export const getResults = state => state.searchResults;
export const getPending = state => state.isLoading;
export const getError = state => state.error;
export const getInput = state => state.searchInput;