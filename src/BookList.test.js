import BookList from './Booklist';
import React from 'react';
import { render } from '@testing-library/react';

describe('BookList', () => {
    it('loading', () => {
        const props = {
            loading: true,
        };

        const { container } = render(<BookList {...props} />)
        const content = container.querySelector('p');
        expect(content.innerHTML).toContain('Loading');

    });

    it('error', () => {
        const props = {
            error: true,
        };

        const { container } = render(<BookList {...props} />)
        const content = container.querySelector('p');
        expect(content.innerHTML).toContain('Error');

    });

    it('books', () => {
        const props = {
            books: [
              { 'name': 'Refactoring', 'id': 1 },
              { 'name': 'Domain-driven design', 'id': 2 },
        ] };

        const { container } = render(<BookList {...props} />)
        const titles =  [...container.querySelectorAll('h2')].map(x => x.innerHTML);
        expect(titles).toEqual(['Refactoring', 'Domain-driven design']);
    });
});