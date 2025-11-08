import { useState } from 'react'
import './App.css'


//Soon integrating for .ENV
const API_KEY = 'Insert Key'

function App() {

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)

  const handleSearch = async () => {

    if (!city) return

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      )

      if (!response.ok) {
        throw new Error('City not found')
      }

      const data = await response.json()
      setWeather(data)
      setError(null)
    } catch (err) {
      setError(err.message)
      setWeather(null)
    }
  }

  return (

    <div className="container">
      <h1>Weather App</h1>
      <h2>Check the weather in your city</h2>

      <div className="search-box">
        <input type="text" placeholder="Enter your city" value={city}onChange={(e) => setCity(e.target.value)}/>
        <button onClick={handleSearch}>Submit</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h3>{weather.name}</h3>
          <p>{weather.weather[0].description}</p>
          <p>{weather.main.temp} °C</p>
          <p>{weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  )
}

export default App
