import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Temperature from './components/Temperature';
import Location from './components/Location';
import './styles.css'

const App = () => {
    const [weatherData, setWeatherData] = useState({
        temp: '60',
        location: 'London, UK',
    });

    const handleCitySearch = async (query) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: query,
                appid: '56ad602a4c8d1cf87ccee85e614a9e5c',
                units: 'imperial'
            }
        })

        setWeatherData({
            temp: Math.round(response.data.main.temp),
            location: `${response.data.name}, ${response.data.sys.country}`,
        })
    };

    return (
        <div className="container">
            <Header />
            <SearchBar onSubmit={handleCitySearch} />
            <Temperature temperature={weatherData.temp}/>
            <Location location={weatherData.location}/>
        </div>
    )
};

export default App;

ReactDOM.render(<App />, document.querySelector('#root'));