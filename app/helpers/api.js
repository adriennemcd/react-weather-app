var axios = require('axios');
var apikey = 'fb0cd57055510f758c7a3165bb218981';
var baseURL = 'http://api.openweathermap.org/data/2.5/';

var api = {
	getCurrentWeather: function(location) {		
		return axios.get(baseURL + 'weather?q=' + location + '&type=accurate&APPID=' + apikey)
	}, 

	getForecast: function(location) {
		return axios.get(baseURL + 'forecast/daily?q=' + location + '&type=accurate&APPID=' + apikey + '&cnt=5')
	}
}

module.exports = api;

