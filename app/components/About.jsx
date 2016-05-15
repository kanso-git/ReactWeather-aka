var React = require('react');
/**
var About = React.createClass({
render: function () {
  return (
    <h2> About Component</h2>
  );
}
});
**/
/*
var About = (props) =>{
  return (
    <h2> About Component</h2>
  )
};
*/

var About = () =>{
  return (
    <div>
      <br/>
      <table>
      <thead>
        <tr>

          <th > <h1 className="text-center">About</h1> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>This is a weather application build on React.</td>

        </tr>
        <tr>
          <td>Here are some of the tools I used:
           <ul>
            <li> <a href="https://facebook.github.io/react">React </a>
             this was the javascript framework used.
            </li>

            <li> <a href="http://openweathermap.org">Open Weather Map </a>
            This is the API used to get the weather
            </li>

           </ul>
          </td>

        </tr>
      </tbody>
    </table>
    </div>

  )
};

module.exports = About;
