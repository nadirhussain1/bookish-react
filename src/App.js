import React from 'react';
import { Typography } from '@material-ui/core';
import BookListContainer from './BookListContainer';
import BookDetailContainer from './BookDetailContainer';
import {Route, Routes} from 'react-router-dom';


const App = () => {
 
  return (
    <div className="App">
      <Typography
        variant='h2'
        component='h2'
        data-test='heading'
      >
        Bookish
      </Typography>

      <BookListContainer/>

      <Routes>
        <Route exact path='/' element={BookListContainer} />
        <Route  path='/books/:id' element={<BookDetailContainer/>} />

      </Routes>

    </div >
  );
}

export default App;
