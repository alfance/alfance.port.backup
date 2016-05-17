var React = require('react');
import {Link} from "react-router";
import LogoSVG from "./partial/NavIcon";

var Layout = React.createClass({

    navigate() {
        // push the page back home
        this.props.history.push();
    },

    render: function() {
        return (
            <div className ="main-container">
            <div className="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <div className="sidebar-brand">
                          <div className="menu-toggle"><Link to ="Home"><img className="nav-title-image" src="media/UI/nav-title.svg"></img> <img className="nav-title-image-S" src="media/UI/nav-title-S.svg"></img></Link></div>
                    </div>

                    <LogoSVG />
                    <li>
                        <Link to="Home" activeClassName ="tabActive"><div className="chap-title home">Work</div></Link>
                    </li>
                    <li>
                        <Link to="DesignHome" activeClassName ="tabActive"><div className="chap-title"><img src="media/UI/icon-design.svg" className="NavIcon"></img>Design</div></Link>
                    </li>
                    <li>
                        <Link to="PhotoHome" activeClassName ="tabActive"><div className="chap-title"><img src="media/UI/icon-photo.svg" className="NavIcon"></img>Photo</div></Link>
                    </li>
                    <li>
                        <Link to="ArtHome" activeClassName ="tabActive"><div className="chap-title"><img src="media/UI/icon-art.svg" className="NavIcon"></img>Arts</div></Link>
                    </li>
                    <li><Link to="ArtHome" activeClassName ="tabActive"><div className="chap-title">
                        Mail</div></Link>
                    </li>
                    <li><div className="chap-title">
                        <a href="https://www.linkedin.com/in/kyloxue" target="_blank"> <i className="icon-linkedin inline-icon" tooltip="bla bla"></i></a>
                         <a href="https://github.com/alfance" target="_blank"><i className="icon-git inline-icon"></i></a>
                         <a href="https://www.flickr.com/photos/85570696@N02/" target="_blank"> <i className="icon-flickr inline-icon"></i></a></div>
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
