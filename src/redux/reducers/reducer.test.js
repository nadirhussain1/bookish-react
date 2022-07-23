import * as types from '../actions/types';
import reducer from './reducer';

describe('testing reducer', () => {
    it('Show loader when request dispatched', () => {
         const initState = {loading:false};
         const action = {
            type:types.FETCH_BOOKS_PENDING
         };

         const state = reducer(initState,action);
         expect(state.loading).toBeTruthy();

    });

    it('add books when fetch successfull', () => {
        const books = [
            { id: 1, name: 'Refactoring' },
            { id: 2, name: 'Domain-driven design' },
          ];

        const action = {
           type:types.FETCH_BOOKS_SUCCESS,
           books
        };

        const state = reducer([],action);
        expect(state.books).toBe(books);

   })
});