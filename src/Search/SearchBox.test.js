import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from "./SearchBox";


describe('SearchBox', () => {
    it('render input', () => {

       const props = {
         terms:"",
         onSearch:jest.fn()
       }  
      
       const {container} = render(<SearchBox {...props}/>)
       const searchInput = container.querySelector('input[type="text"]');
       userEvent.type(searchInput,'domain');

       expect(props.onSearch).toHaveBeenCalled();

    })
})