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
  //var {weather, city} = props;
  return (
  <div>
    <h3> Currently it's {weather} in {city} !!</h3>
  </div>

  );

}
module.exports = WeatherMessage;
