import React, { useState } from 'react';

const SearchBar = (props) => {
    const [query, setQuery] = useState('');
    const [unit, setUnit] = useState('imperial');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(query, unit);
        setQuery('');
    };

    
    return (
        <form onSubmit={e => handleFormSubmit(e)}>
            <div className="unit">
                <h3
                    className={unit === 'imperial' ? 'unit-active' : ''}
                    onClick={() => setUnit('imperial')}>F°</h3>
                <h3
                    className={unit === 'metric' ? 'unit-active' : ''}
                    onClick={() => setUnit('metric')}>C°</h3>
            </div>
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