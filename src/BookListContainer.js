import React from 'react';
import BookList from './Booklist';
import { useRemoteService } from './hooks';


const BookListContainer = () => {
    const {data,loading, error} = useRemoteService([]);
    console.log("BooksDebug BookListContainer data=",data);
    return <BookList books={data} loading={loading} error={error} />
}

export default BookListContainer;