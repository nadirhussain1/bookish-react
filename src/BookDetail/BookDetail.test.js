import BookDetail from './BookDetail';
const { render } = require("@testing-library/react");

describe('Book Detail', () => {
    it('title', () => {
        const props = {
            book:{
                name:'Refactoring',
            }
        };

        const {container} = render(<BookDetail {...props} />);
        const title = container.querySelector('.book-title');
        expect(title.innerHTML).toEqual(props.book.name);

    });

    it('description', () => {
        const props = {
            book:{
                name:'Refactoring',
                description: "Martin Fowler's Refactoring defined core ideas and",
            }
        };

        const {container} = render(<BookDetail {...props} />);
        const title = container.querySelector('.book-description');
        expect(title.innerHTML).toEqual(props.book.description);

    });

    it('displays the book name when no description given', () => {
        const props = {
            book:{
                name:'Refactoring',
            }
        };

        const {container} = render(<BookDetail {...props} />);
        const title = container.querySelector('.book-description');
        expect(title.innerHTML).toEqual(props.book.name);

    });
});