var React = require('react');
import HomeSVG from "./HomeSVG";

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <HomeSVG></HomeSVG>
            </div>
        )
    }
});

module.exports = Home;
