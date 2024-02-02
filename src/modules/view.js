function viewWeather(data, isMetric) {
  const location = document.getElementById("location");
  const localtime = document.getElementById("localtime");
  const temperature = document.getElementById("temperature");
  const precipitation = document.getElementById("precipitation");
  const feelsLike = document.getElementById("feelsLike");
  const humidity = document.getElementById("humidity");
  const wind = document.getElementById("wind");
  const condition = document.getElementById("condition");

  location.textContent = `${data.name}, ${data.country}`;
  localtime.textContent = `${data.localtime}`;
  humidity.textContent = `${data.humidity / 100}%`;
  condition.textContent = `${data.condition_text}`;
  if (isMetric) {
    temperature.textContent = `${data.temp_c}ºC`;
    precipitation.textContent = `${data.precip_mm}mm`;
    feelsLike.textContent = `${data.feelslike_c}ºC`;
    wind.textContent = `${data.wind_kph}kph`;
  } else {
    temperature.textContent = `${data.temp_f}ºF`;
    precipitation.textContent = `${data.precip_in}in`;
    feelsLike.textContent = `${data.feelslike_f}ºF`;
    wind.textContent = `${data.wind_mph}mph`;
  }
}

export default viewWeather;
