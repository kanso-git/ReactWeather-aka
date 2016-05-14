var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=c7d4832a2c992b89247a8f5c678d5c68&units=metric';

//http://api.openweathermap.org/data/2.5/weather?q=Orbe&APPID=c7d4832a2c992b89247a8f5c678d5c68&units=metric
//&q=Orbe
/*
 response in case of error
 {
  cod: "404",
  message: "Error: Not found city"
 }
*/
module.exports = {
  getTemp: function(city) {
    var encodedLocation = encodeURIComponent(city);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    console.log("requestUrl "+requestUrl);

    return axios.get(requestUrl).then(function(res) {
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        //alert(JSON.stringify(res.data.main,null,5));
        return res.data.main.temp;
      }
    }, function(res){
     throw new Error(res.data.message);
    })
  }
}
