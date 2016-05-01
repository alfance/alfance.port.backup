var React = require('react');
var $ = require('../../../lib/js/jquery');

export default class Project extends React.Component {
    componentDidUpdate() {
        alert("test");
        var $boxWidth = $('.project-page-single').width();
        var $boxHeight = $('.project-page-single').height();
        var $windowHeight = $(window).height();
        console.log("window height: " + $windowHeight);
        console.log("box height: " + $boxHeight);
    }
    render() {
        const {name} =this.props;
        const {info} =this.props;
        const {image} =this.props;
    return(
        <div>
            <h1>{this.props.ProjectName}</h1>
           <h4>{name}</h4>
           <p>{info}</p>
       </div>
    );
    }
}
