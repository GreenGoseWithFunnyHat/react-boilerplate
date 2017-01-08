var axios = require('axios');

const OPEN_WEATHER_MAP = 'http://api.openweathermap.org/data/2.5/weather?appid=9a341becfacda8efb154f2da7473680c&units=metric';

// 9a341becfacda8efb154f2da7473680c

module.exports = {
    getTemp: function (city) {
        var encodedLocation = encodeURIComponent(city);
        var requestUrl = `${OPEN_WEATHER_MAP}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message)
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.message);
        })
    }
};