import React, { useState } from 'react';

const SearchBar = (props) => {
    const [query, setQuery] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(query);
        setQuery('');
    };

    return (
        <form onSubmit={e => handleFormSubmit(e)}>
            <input
            type="text"
            className="searchbar"
            placeholder="Enter a location"
            value={query}
            onChange={e => setQuery(e.target.value)}></input>
        </form>
    );
};

export default SearchBar;


// Have to get event listener to form to submit to console log