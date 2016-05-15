var React = require('react');
var ReactDOM = require('react-dom');

// ES6 object destruction syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!applicationStyles');


ReactDOM.render(
  <Router  history={hashHistory}>
    <Route path="/" components={Main}>
      <Route path="about" components={About}/>
      <Route path="examples" components={Examples}/>
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);
