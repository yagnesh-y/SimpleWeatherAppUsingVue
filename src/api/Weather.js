import axios from 'axios';

export default {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    const OPEN_WEATHER_URI =
      'http://api.openweathermap.org/data/2.5/forecast/daily?q=' +
      encodedLocation +
      '&appid=ae4b1b3a99c4accda74fa3592c357a1a&units=metric&cnt=5';
    return axios.get(OPEN_WEATHER_URI).then(
      function(res) {
        //city not found...
        if (res.data.cod === 404) {
          throw new Error(res.data.message);
        } else {
          //send the 5 day forecast...
          return res.data.list;
        }
      },
      function(res) {
        throw new Error(res.message);
      }
    );
  }
};
