var React = require('react');
var {Link} = require('react-router');
/*
var Examples = React.createClass({

    render: function() {
        return (
          <div>
            <h2> Examples Page</h2>
          </div>
        );
    }
});
*/
var Examples  = (props) =>{
  return (
    <div>
      <h1 className="text-center"> Examples</h1>
      <p> Here are a few example locations to try out :</p>
      <ol>
        <li> <Link to="/?city=orbe">Orbe, CH</Link></li>
        <li> <Link to="/?city=lausanne">Lausanne, CH</Link></li>
        <li> <Link to="/?city=geneva">Genève, CH</Link></li>
      </ol>
    </div>
  )
}
module.exports = Examples;
