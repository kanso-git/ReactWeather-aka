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
        <h1 className="text-center page-title"> Get Weather </h1>
        <form onSubmit={this.getWeather}>
          <div>
            <input type="search" ref="city" placeholder="Search weather by city">
            </input>
          </div>
          <div>
            <button className="hollow button expanded" type="submit">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
