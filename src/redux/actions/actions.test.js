import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setSearchTerm,fetchBooks } from './actions';
import * as types from './types';

const middleswares = [thunk];
const mockStore = configureMockStore(middleswares);

describe('actions', () => {
    it('set search term', () => {
        const term = '';
        const expected = {
            type: types.SET_SEARCH_TERM,
            term
        }

        expect(setSearchTerm(term)).toEqual(expected)
    })

    it('Fetches data successfully', () => {
        const books = [
            { id: 1, name: 'Refactoring' },
            { id: 2, name: 'Domain-driven design' },
        ];

        axios.get = jest.fn().mockImplementation(
            () => Promise.resolve({ data: books }));

        const expectedActions = [
            { type: types.FETCH_BOOKS_PENDING },
            { type: types.FETCH_BOOKS_SUCCESS, books },
        ];

        const store = mockStore({books:[]});
        return store.dispatch(fetchBooks('')).then(()=>{
           expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('Fetches failed scenario in case of network error', () => {
        axios.get = jest.fn().mockImplementation(
            () => Promise.reject({ message:'Something went wrong' }));

        const expectedActions = [
            { type: types.FETCH_BOOKS_PENDING},
            { type: types.FETCH_BOOKS_FAILED, error:"Something went wrong" },
        ];

        const store = mockStore({books:[]});
        return store.dispatch(fetchBooks('')).then(()=>{
           expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('Fetches data with term', () => {
        const books = [
            { id: 1, name: 'Refactoring' },
            { id: 2, name: 'Domain-driven design' },
        ];

        axios.get = jest.fn().mockImplementation(
            () => Promise.resolve({ data: books }));

      
        const store = mockStore({books:[]});
        return store.dispatch(fetchBooks('domain')).then(()=>{
           expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/books?q=domain');
        });
    });

})