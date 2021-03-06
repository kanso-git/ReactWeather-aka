var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    //built-in to React
    getDefaultProps: function() {
        return {
          isLoading: false,
          errorMessage: undefined
        }
    },
    //built-in to React : takes the values from the props passed values
    getInitialState: function() {
        return {weather: this.props.weather, city: this.props.city};
    },

    handleWeather: function(weatherObject) {
        var getTempPromise = openWeatherMap.getTemp;
        var self = this;
        this.setState({
          isLoading :true,
          errorMessage: undefined
        });
        getTempPromise(weatherObject.city).then(function(temp) {
            //console.log(JSON.stringify(res, null, 5));
            //console.log(temp);
            weatherObject.errorMessage = undefined;
            weatherObject.weather=temp;
            weatherObject.isLoading= false;
            console.log(JSON.stringify(weatherObject, null, 5));
            self.setState(weatherObject);
        }, function(error) {
          //debugger;
          weatherObject.city=null;
          weatherObject.weather=null;
          weatherObject.isLoading= false;
          weatherObject.errorMessage = error.message;
          self.setState(weatherObject);
        })
    },

    componentDidMount: function(){
      var city =this.props.location.query.city;
      if(typeof city ==='string' && city.trim().length>0){
        this.handleWeather({city:city});
        window.location.hash ='#/';
      }
    },
    componentWillReceiveProps: function(newProps){
      
      var city =newProps.location.query.city;
      if(typeof city ==='string' && city.trim().length>0){
        this.handleWeather({city:city});
        window.location.hash ='#/';
      }
    },
    // this is a built in function
    render: function() {
        var {weather, city, isLoading,errorMessage} = this.state;

        function renderMessage(){
          //debugger;
          if(isLoading){
            return <progress className="success text-center" max="100" value="75">Fecthing the weather ...</progress>
          }else if(city && weather){
            return <WeatherMessage weather={weather} city={city}></WeatherMessage>;
          }
        }

       function renderError(){
         //debugger;
         if(typeof errorMessage === 'string'){
           return (
             <ErrorModal message={errorMessage}/>
           )
         }
       }

        return (
            <div>
                <WeatherForm onGetWeather={this.handleWeather}></WeatherForm>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;
