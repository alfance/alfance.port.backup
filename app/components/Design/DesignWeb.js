var React = require('react');

var DesignWeb = React.createClass({
    render: function() {
        return (
            <div>
            <h3>Problems</h3>
            <p>{this.props.section}</p>
            <h3>Solutions</h3>
            </div>
        )
    }
});

module.exports = DesignWeb;
