var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    //built-in to React
    getDefaultProps: function() {
        return {
          isLoading: false
        }
    },
    //built-in to React : takes the values from the props passed values
    getInitialState: function() {
        return {weather: this.props.weather, city: this.props.city};
    },

    handleWeather: function(weatherObject) {
        var getTempPromise = openWeatherMap.getTemp;
        var self = this;
        this.setState({isLoading :true});
        getTempPromise(weatherObject.city).then(function(temp) {
            //console.log(JSON.stringify(res, null, 5));
            //console.log(temp);
            weatherObject.weather=temp;
            weatherObject.isLoading= false;
            console.log(JSON.stringify(weatherObject, null, 5));
            self.setState(weatherObject);
        }, function(error) {
          weatherObject.city=null;
          weatherObject.weather=null;
          weatherObject.isLoading= false;
          self.setState(weatherObject);
          alert(error);
        })
    },
    // this is a built in function
    render: function() {
        var {weather, city, isLoading} = this.state;

        function renderMessage(){
          if(isLoading){
            return <progress className="success text-center" max="100" value="75">Fecthing the weather ...</progress>
          }else if(city && weather){
            return <WeatherMessage weather={weather} city={city}></WeatherMessage>;
          }
        }
        return (
            <div>
                <WeatherForm onGetWeather={this.handleWeather}></WeatherForm>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
