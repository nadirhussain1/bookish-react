import { Book } from "@material-ui/icons"

const getBookDescription = (book) =>{
    return book.description?book.description:book.name;
}
const BookDetail = ({ book }) => {
    return (
        <div className="detail">
            <h2 className='book-title'>{book.name}</h2>
            <p className='book-description'>{getBookDescription(book)}</p>
        </div>
    )
}

export default BookDetail;