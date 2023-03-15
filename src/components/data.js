function getDataFromForm() {
    // const cityName = 'pirongia';
    const input = document.querySelector('.search-box-input');
    const cityName = input.value;
  
    // if not an empty string
    if (cityName) {
      // remove whitespace for the api call
  
      return cityName
        .replace(/(\s+$|^\s+)/g, '') // remove whitespace from begining and end of string
        .replace(/(,\s+)/g, ',') // remove any white space that follows a comma
        .replace(/(\s+,)/g, ',') // remove any white space that preceeds a comma
        .replace(/\s+/g, '+'); // replace any remaining white space with +, so it works in api call
    }
    return '';
  }
  

  function buildRequestCoordsUrl(cityName) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=20f7632ffc2c022654e4093c6947b4f4`;
  }
  
  function buildRequestForecastUrl(coordinates, units) {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,alerts&units=${units}&appid=20f7632ffc2c022654e4093c6947b4f4`;
  }
  
  async function getCoords(url) {
    const response = await fetch(url);
    const weatherData = await response.json();
    const { coord } = weatherData;
    coord.name = weatherData.name;
    coord.country = weatherData.sys.country;
    // console.log(weatherData);
    // console.log(weatherData.weather);
  
    return coord;
  }
  
  async function getForecast(url) {
    const response = await fetch(url);
    const forecastData = await response.json();
  
    return forecastData;
  }