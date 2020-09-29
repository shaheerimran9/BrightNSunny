import React from 'react';

const Temperature = (props) => {
    return (
        <div className="temperature-wrapper">
            <h2 className="temperature">{props.temperature}°F</h2>
        </div>
    )
};

export default Temperature;