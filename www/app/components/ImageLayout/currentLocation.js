var React = require('react');

var currentLocation = React.createClass({
    render: function() {
        var currentLocation = this.props.location.pathname;
        alert(currentLocation);
    }
});

module.exports = currentLocation;
