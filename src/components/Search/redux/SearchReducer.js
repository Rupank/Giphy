import { FETCH_DATA_REQUESTED, FETCH_DATA_SUCCEEDED, FETCH_DATA_FAILED, FETCH_MORE_SUCCEEDED } from '../types';
import uniq from 'lodash.uniq';
const initialState = {
    searchResults: [],
    isLoading: false,
    searchInput: '',
    error: '',
    offset: 0,
    completed: false
};

export function SearchReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_REQUESTED:
            return { ...state, isLoading: true };
        case FETCH_DATA_SUCCEEDED:
            return { ...state, isLoading: false, searchResults: action.payload.data, searchInput: action.payload.input, offset: initialState.offset };
        case FETCH_MORE_SUCCEEDED:
            return {
                ...state, isLoading: false, searchResults: uniq([...state.searchResults, ...action.payload.data]),
                offset: action.payload.offset,
                completed: action.payload.completed
            };
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
export const loadMoreIndex = state => state.offset;
export const completed = state => state.completed;