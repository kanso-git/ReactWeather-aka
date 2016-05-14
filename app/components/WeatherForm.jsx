var React = require('react');

var WeatherForm = React.createClass({
  getWeather:function(e){
    e.preventDefault();
    var city =this.refs.city.value;
    var weatherObject={};

    if(typeof city ==='string' && city.trim().length>0){
      weatherObject.city=city;
      this.refs.city.value ="";
      this.props.onGetWeather(weatherObject);
    }
  },

  render: function () {
    return (
      <div>
        <h2> Get Weather </h2>
        <br/>
        <br/>
        <form onSubmit={this.getWeather}>
          <div>
            <input type="text" ref="city" placeholder="Enter city name ">
            </input>
          </div>
          <div>
            <button>
              Get Weather
            </button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
