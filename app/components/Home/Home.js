var React = require('react');
import HomeSVG from "./HomeSVG";
import HomeProject from "./HomeProject";

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <HomeSVG></HomeSVG>
                <div className="home-space"></div>
                <HomeProject />
            </div>
        )
    }
});

module.exports = Home;
