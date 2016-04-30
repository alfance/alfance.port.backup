var React = require('react');

var Project = React.createClass({
    render() {
        const {name} =this.props;
        const {info} =this.props;
    return(
        <div>
           <h4>{name}</h4>
           <p>{info}</p>
       </div>
    );
    }
});

module.exports = Project;
