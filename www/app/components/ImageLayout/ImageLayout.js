var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var ImageLayout = React.createClass({

  render: function() {

    return (
      <div className="App">
        <RouteHandler />
      </div>
    );
  }
});

module.exports = ImageLayout;
