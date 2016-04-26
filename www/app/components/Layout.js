var React = require('react');
var ImageActions = require('./Actions/imageactions');
import {Link} from "react-router";

var Layout = React.createClass({

    navigate() {
        // push the page back home
        this.props.history.push();
    },

    loadPhoto() {
    ImageActions.fetchList();
    },

    render: function() {
        return (
            <div className ="main-container">
            <div className="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <div className="sidebar-brand">
                          <div className="menu-toggle">Kylo Xue</div>
                    </div>
                    <li>
                        <Link to="Home" activeClassName ="tabActive"><div className="chap-title home">Home</div></Link>
                    </li>
                    <li>
                        <Link to="ProjectHome" activeClassName ="tabActive"><div className="chap-title">Projects</div></Link>
                    </li>
                    <li>
                        <Link to="DesignHome" onClick ={this.loadPhoto} activeClassName ="tabActive"><div className="chap-title">Design</div></Link>
                    </li>
                    <li>
                        <Link to="PhotoHome" onClick={this.loadPhoto} activeClassName ="tabActive"><div className="chap-title">Photo</div></Link>
                    </li>
                    <li>
                        <Link to="ArtHome" activeClassName ="tabActive"><div className="chap-title">Arts</div></Link>
                    </li>
                    <li>
                    <button onClick = {this.navigate}>test </button>
                    </li>
                </ul>
            </div>

            <div className ="container">
                <div className="wrapper">
                    {this.props.children}
                    </div>
            </div>
        </div>
        )
    }
});

module.exports = Layout;
