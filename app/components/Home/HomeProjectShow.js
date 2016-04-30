var React = require('react');

export default class HomeProjectShow extends React.Component {
    render() {
        const {name} =this.props;
        const {info} =this.props;
        console.log (this.props.images);

    return(
        <div className="flex-box">
            <div className="image-grid-each">
            <p>{info}</p>

           </div>
        </div>
    );
    }
}
