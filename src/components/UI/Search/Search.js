import React from 'react';
import './Search.css';

const Search = ({children}) => {
    return (
        <button>
            {children}
        </button>
    );
};

export default Search;