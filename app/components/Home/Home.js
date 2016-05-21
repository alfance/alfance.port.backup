var React = require('react');
import HomeSVG from "./HomeSVG";
import HomeProject from "./HomeProject";

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <div className="top-bar"></div>
                <HomeSVG></HomeSVG>
                <div className="home-space"></div>
                <HomeProject />
            </div>
        )
    }
});

module.exports = Home;
