var React = require('react');
var {Link, IndexLink} = require('react-router');
/*
var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2> Nav Component </h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather </IndexLink>
         &nbsp;   &nbsp; |  &nbsp;  &nbsp;
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About </Link>
         &nbsp;   &nbsp; |  &nbsp; &nbsp;
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples </Link>
        </div>
      );
    }
  });
*/
// react stateless function systanx
  var Nav = ()=>{
    return (
      <div>
        <h2> Nav Component </h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather </IndexLink>
         &nbsp;   &nbsp; |  &nbsp;  &nbsp;
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About </Link>
         &nbsp;   &nbsp; |  &nbsp; &nbsp;
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples </Link>
        </div>
      )
  }

  module.exports = Nav;
