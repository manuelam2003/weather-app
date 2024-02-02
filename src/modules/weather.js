function filterData(data) {
  const filteredData = {
    name: data.location.name,
    country: data.location.country,
    localtime: data.location.localtime,
    temp_c: data.current.temp_c,
    temp_f: data.current.temp_f,
    precip_mm: data.current.precip_mm,
    precip_in: data.current.precip_in,
    wind_kph: data.current.wind_kph,
    wind_mph: data.current.wind_mph,
    humidity: data.current.humidity,
    feelslike_c: data.current.feelslike_c,
    feelslike_f: data.current.feelslike_f,
    condition_text: data.current.condition.text,
    condition_icon: data.current.condition.icon.substring(2),
  };
  return filteredData;
}

async function getWeather(location = "Sevilla") {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=65704d5121124e30b38144030240102&q=${location}`
    );
    if (!response.ok) {
      throw new Error(
        `WeatherAPI request failed with status ${response.status}`
      );
    }
    const data = await response.json();
    const filteredData = filterData(data);
    return filteredData;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export default getWeather;
