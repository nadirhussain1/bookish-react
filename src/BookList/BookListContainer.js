import React, { useState, useEffect } from 'react';
import BookList from './Booklist';
import { useRemoteService } from '../hooks';

import SearchBox from '../Search/SearchBox';


const BookListContainer = () => {
    const { data, loading, error, setUrl } = useRemoteService("http://localhost:8080/books", []);
    const [term, setTerm] = useState('');

    useEffect(() => {
        setUrl(`http://localhost:8080/books?q=${term}`)
    }, [term]);

    const onSearch = (event) => setTerm(event.target.value);

    return (
        <>
            <SearchBox term={term} onSearch={onSearch} />
            <BookList books={data} loading={loading} error={error} />

        </>
    )

}

export default BookListContainer;