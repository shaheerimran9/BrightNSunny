import React, { useState, useEffect } from 'react';

const SearchBar = (props) => {
    const [query, setQuery] = useState('');
    const [savedQuery, setSavedQuery] = useState('Richmond');
    const [unit, setUnit] = useState({ queryUnit: 'imperial', degreeUnit: 'F' });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(query, unit.queryUnit, unit.degreeUnit);
        setSavedQuery(query);
        setQuery('');
    };

    useEffect(() => {
        props.onSubmit(savedQuery, 'imperial', 'F')
    },[]);


    return (
        <form onSubmit={e => handleFormSubmit(e)}>
            <div className="unit">
                <h3
                    className={unit.queryUnit === 'imperial' ? 'unit-active' : ''}
                    onClick={() => {
                        setUnit({ queryUnit: 'imperial', degreeUnit: 'F' });
                        props.onSubmit(savedQuery, 'imperial', 'F')
                    }}>F°</h3>
                <h3
                    className={unit.queryUnit === 'metric' ? 'unit-active' : ''}
                    onClick={() => {
                        setUnit({ queryUnit: 'metric', degreeUnit: 'C' });
                        props.onSubmit(savedQuery, 'metric', 'C');
                    }}>C°</h3>
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