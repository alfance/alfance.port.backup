var React = require('react');
var ImageGrid = require('./imagegrid');
var ImageActions = require('../Actions/imageactions');

var ImageHome = React.createClass({

    render: function() {
        return (
                <div>
                    <ImageGrid></ImageGrid>
                </div>
        );
    }
});

module.exports = ImageHome;
