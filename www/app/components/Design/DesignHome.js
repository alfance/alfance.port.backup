
var React = require('react');
var ImageGrid = require('../ImageLayout/imagegrid');
var ImageActions = require('../Actions/imageactions');
import PageIntro from "../partial/pageIntro";

var DesignHome = React.createClass({
    render: function() {
        const title = "Graphic Design"
        const pageintro = "This page showcases my short-term graphic designs. Most of the projects were completed between tens of minutes to a day. Instead of thoughtful planning and pre analysis, works seen here are more of my artistic expression of the design world.";

        return (
                <div>
                    <PageIntro title={title} pageintro={pageintro}> </PageIntro>
                    <ImageGrid></ImageGrid>
                </div>
        );
    }
});

module.exports = DesignHome;
