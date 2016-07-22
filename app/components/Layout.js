var React = require('react');
import {Link} from "react-router";
// import LogoSVG from "./partial/NavIcon";

var Layout = React.createClass({

    navigate() {
        // push the page back home
        this.props.history.push();
    },

    render: function() {
        return (
            <div className ="main-container">
            <div className="navigation-wrapper">
                <div className="navigation-nav">
                    <div className="sidebar-brand">
                          <div className="menu-toggle"><Link to ="Home"><img className="nav-title-image" src="media/UI/nav-title-WB.svg"></img> </Link></div>
                    </div>
                        <ul className= "menu-list vertical-position">
                            <li>
                                <Link to="Home" activeClassName ="tabActive"><div className="chap-title home">Work</div></Link>
                            </li>
                            <li>
                                <Link to="DesignHome" activeClassName ="tabActive"><div className="chap-title">Graphic</div></Link>
                            </li>

                            <li>
                                <Link to="PhotoHome" activeClassName ="tabActive"><div className="chap-title">Photo</div></Link>
                            </li>

                            <li>
                                <Link to="ArtHome" activeClassName ="tabActive"><div className="chap-title">Arts</div></Link>
                            </li>

                            <li><div className="chap-title">
                                <a title="Linkedin" className="tooltip" href="https://www.linkedin.com/in/kyloxue" target="_blank"> <i className="icon-linkedin inline-icon" tooltip="bla bla"></i></a>
                                 <a title="Github" className="tooltip" href="https://github.com/alfance" target="_blank"><i className="icon-git inline-icon"></i></a>
                                 <a title="Flickr" className="tooltip" href="https://www.flickr.com/photos/85570696@N02/" target="_blank"> <i className="icon-flickr inline-icon"></i></a>
                                  <a title="Deviant" className="tooltip" href="http://alfance.deviantart.com/" target="_blank"> <i className="icon-deviant inline-icon"></i></a>
                                 </div>
                            </li>
                    </ul>
                </div>
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
