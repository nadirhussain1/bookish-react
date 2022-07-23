import axios from "axios";
import * as types from './types';

export const setSearchTerm = (term) => {
    return {
        type: types.SET_SEARCH_TERM,
        term
    }
}

export const fetchBooks = (domain) => {
    return (dispatch) => {
        dispatch({ type: types.FETCH_BOOKS_PENDING});
        return axios.get(`http://localhost:8080/books?q=${domain}`).then((res) => {
            dispatch({ type: types.FETCH_BOOKS_SUCCESS, books: res.data });
        }).catch((err) => {
            dispatch({ type: types.FETCH_BOOKS_FAILED, error: err.message })
        })
    }
}