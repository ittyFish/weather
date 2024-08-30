import { format } from 'date-fns';
import './showData.css'

const ShowData = ({ data }) => {

  const hoursArr = data.forecast.forecastday[0].hour
  const timeIndex = hoursArr.findIndex(item => item.time === data.location.localtime.slice(0, 14) + "00")
  return (
    <div className='frame'>
      <div className="weather-display">
        <h2>{data.location.name}</h2>
        <p>{data.location.country}</p>
        <p>{format(new Date(data.location.localtime.slice(0, 10)), 'dd/M/yy')} at {data.location.localtime.slice(11, 14) + "00"}</p>

        <div className="temperature">
          <span>{data.current.temp_c}°</span>
          <p>{data.current.condition.text}</p>
        </div>

        <div className="details">
          <div>
            <p>precipitation</p>
            <span>{data.current.precip_mm} mm</span>
          </div>

          <div>
            <p>humidity</p>
            <span>{data.current.humidity}%</span>
          </div>

          <div>
            <p>wind</p>
            <span>{data.current.wind_kph} km/h</span>
          </div>
        </div>

        <div className="forecast">
          <div className="forecast-item">
            {timeIndex - 3 > 0 && (
              <div className="time-container">
                <p className="time">{hoursArr[timeIndex - 3].time.slice(11)}</p>
                <p className="temp" style={{ color: 'white', marginLeft: "5px" }}>{hoursArr[timeIndex - 3].temp_c}°</p>
              </div>
            )}
          </div>
          <div className="forecast-item">
           
            {timeIndex - 2 > 0 && (
              <div className="time-container">
                <p className="time">{hoursArr[timeIndex - 2].time.slice(11)}</p>
                <p className="temp" style={{ color: 'white', marginLeft: "5px" }}>{hoursArr[timeIndex - 2].temp_c}°</p>
              </div>
            )}
          </div>
          <div className="forecast-item">
            {timeIndex - 1 > 0 && (
              <div className="time-container">
                <p className="time">{hoursArr[timeIndex - 1].time.slice(11)}</p>
                <p className="temp" style={{ color: 'white', marginLeft: "5px" }}>{hoursArr[timeIndex - 1].temp_c}°</p>
              </div>
            )}
          
          </div>
          <div className="forecast-item">

            <div className="time-container">
              <p className="time">{hoursArr[timeIndex].time.slice(11)}</p>
              <p className="temp" style={{ color: 'white', marginLeft: "5px" }}>{hoursArr[timeIndex].temp_c}°</p>
            </div>
          </div>
          <div className="forecast-item">
            {timeIndex + 1 > 0 && (
              <div className="time-container">
                <p className="time">{hoursArr[timeIndex + 1].time.slice(11)}</p>
                <p className="temp" style={{ color: 'white', marginLeft: "5px" }}>{hoursArr[timeIndex + 1].temp_c}°</p>
              </div>
            )}          
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowData;

