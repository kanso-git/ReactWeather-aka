var React = require('react');
/*
var WeatherMessage = React.createClass({
render: function () {
  var {weather, city} =this.props;
  return (
  <div>
    <h3> Currently it's {weather} in {city} !!</h3>
  </div>

  );
}
});

*/
// react stateless function syntax
var WeatherMessage = ({weather, city} ) =>{
  var url = `http://openweathermap.org/find?q=${city}`;
  console.log(" Message URL :"+url);
  return (
    <div className="text-center callout secondary">
      <h3>{city}</h3>
      <p>Currently it's {weather} °С </p>
      <a href={url}> More On this.</a>
   </div>


  );

}
module.exports = WeatherMessage;
