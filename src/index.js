import getWeather from "./modules/weather";
import viewWeather from "./modules/view";

const inputForm = document.querySelector("form");
const inputField = document.querySelector("input");
const submitBtn = document.querySelector("#submitBtn");
const metricBtn = document.querySelector("#metricBtn");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

metricBtn.addEventListener("click", async () => {
  if (inputField.value !== "") {
    const weatherData = await getWeather(inputField.value);
    const curSystem = metricBtn.textContent;
    if (curSystem === "Metric") {
      metricBtn.textContent = "Imperial";
      viewWeather(weatherData, false);
    } else {
      metricBtn.textContent = "Metric";
      viewWeather(weatherData, true);
    }
  }
});

submitBtn.addEventListener("click", async () => {
  if (inputField.value !== "") {
    const weatherData = await getWeather(inputField.value);
    // console.log(weatherData);
    viewWeather(weatherData, true);
  }
});

inputField.addEventListener("keyup", async (e) => {
  if (e.key === "Enter" && inputField.value !== "") {
    const weatherData = await getWeather(inputField.value);
    viewWeather(weatherData, true);
  }
});
