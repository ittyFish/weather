import React, { useState } from 'react';
import { getData } from './weathweApi';
import "./weather.css"
import ShowData from './showData';
import { format } from 'date-fns';


const Weather = () => {

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getData(city);
    setWeatherData(data);
    if (data == null)
      setError('Error retrieving data')
  };

  return (
    <div className='weather'>
      <div className='container'>
        <div className="left-panel">

          <div className='logo'></div>
          <div className='without-logo'>
            <h1>Use our weather app to see the weather around the world</h1>
            <form onSubmit={handleSubmit}>
              <label>City name</label>

              <div className='city-input-container'>
                <input
                  className='input'
                  type="text"
                  placeholder="Enter city name"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                <button type="submit">Check</button>
              </div>
            </form>
          </div>

          <p className="coordinates">
            {weatherData && <>latitude {weatherData.location.lat} &nbsp; longitude {weatherData.location.lon}<br />
              accurate to {format(new Date(weatherData.location.localtime.slice(0, 10)), 'dd/MM/yy')} at {weatherData.location.localtime.slice(11)} </>}
          </p>


        </div>


        <div className="right-panel">

          {error && <p>{error}</p>}
          {!error && weatherData && <ShowData data={weatherData} />}

        </div>
      </div>
    </div >

  );

}
export default Weather;