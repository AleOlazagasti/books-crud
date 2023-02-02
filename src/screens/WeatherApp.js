import React, { useEffect, useState } from 'react'

const WeatherApp = () => {
  const [api, setApi] = useState({})
  
  const fetchApi = async () => {
    const URL = `https://api.open-meteo.com/v1/forecast?latitude=7.75&longitude=80.75&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&timezone=auto`
    const response = await fetch(URL)
    const responseJSON = await response.json()
    setApi(responseJSON.daily)
  }

  useEffect(() => {
    fetchApi()
  }, [])
  
  return (
    <div>
      <h1>Sri Lanka</h1>
      <h3>Max Temperature: {api.apparent_temperature_max?.[0]} °C</h3>
      <h3>Min Temperature: {api.apparent_temperature_min?.[0]} °C</h3>
    </div>
  )
}

export default WeatherApp