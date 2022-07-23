import React,{useState} from 'react';
import BookList from './Booklist';
import { useRemoteService } from '../hooks';
import {
    TextField
  } from '@material-ui/core';


const BookListContainer = () => {
    const { data, loading, error } = useRemoteService("http://localhost:8080/books", []);
    const [term, setTerm] = useState('');
    console.log("BooksDebug BookListContainer data=", data);
    return (
        <>
            <TextField
                label='Search'
                value={term}
                data-test='search'
                onChange={(e) => setTerm(e.target.value)}
                margin='normal'
                variant='outlined'
            />

            <BookList books={data} loading={loading} error={error} />

        </>
    )

}

export default BookListContainer;