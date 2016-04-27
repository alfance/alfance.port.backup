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
                          <div className="menu-toggle"><img className="nav-title-image" src="media/UI/nav-title.svg"></img> <img className="nav-title-image-S" src="media/UI/nav-title-S.svg"></img></div>
                    </div>
                    <li>
                        <Link to="Home" activeClassName ="tabActive"><div className="chap-title home"><img src="media/UI/icon-home.svg" className="NavIcon"></img>Home</div></Link>
                    </li>
                    <li>
                        <Link to="ProjectHome" activeClassName ="tabActive"><div className="chap-title"><img src="media/UI/icon-project.svg"></img>Projects</div></Link>
                    </li>
                    <li>
                        <Link to="DesignHome" onClick ={this.loadPhoto} activeClassName ="tabActive"><div className="chap-title"><img src="media/UI/icon-design.svg"></img>Design</div></Link>
                    </li>
                    <li>
                        <Link to="PhotoHome" onClick={this.loadPhoto} activeClassName ="tabActive"><div className="chap-title"><img src="media/UI/icon-photo.svg"></img>Photo</div></Link>
                    </li>
                    <li>
                        <Link to="ArtHome" activeClassName ="tabActive"><div className="chap-title"><img src="media/UI/icon-art.svg"></img>Arts</div></Link>
                    </li>
                     <li>
                    /* <button onClick = {this.navigate}>test </button> */
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
