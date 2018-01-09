import axios from 'axios';

export default {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    const OPEN_WEATHER_URI =
      'http://api.openweathermap.org/data/2.5/forecast/daily?q=' +
      encodedLocation +
      '&appid=ae4b1b3a99c4accda74fa3592c357a1a&units=metric&cnt=5';
    return axios.get(OPEN_WEATHER_URI).then(res => {
      console.log('in api res is ');
      console.log(res);
      //send the 5 day forecast...
      return res.data.list;
    }, function(res) {
      //check if city found...
      console.log('in api error is ');
      console.log(JSON.stringify(res));
      //check if any reponse in error i.e city not found..
      if (res.response) {
        if (res.response.data.message === 'city not found')
          throw new Error('City not found..');
      } else
        //else there is some other error while retreiving data from API ex: Network error..
        throw new Error('Some other error while retreiving data from API..');
    });
  }
};
