var React = require('react');
import Logo from "./Logo";

var LogoAll = React.createClass({
    render() {
        const Titles = [
            "Problem",
            "Solution",
            "High Level Concept",
            "Choosing Route",
            "Contributing",
            "Development Process",
            "Hi-Fidelity Mockup",
            "Future Development",
        ].map((title, i)=> <Logo key={i} title={title}/> );

        const Images =[
            "./media/img/logo/1-quinns2.png",
            "./media/img/logo/ppp3.png",
            "./media/img/logo/style2.png",
            "./media/img/logo/tibb1.png",
            "./media/img/logo/lunch1.png",
            "./media/img/logo/bee.png",
            "./media/img/logo/qteeth.png",
            "./media/img/logo/star.png",
            "./media/img/logo/rabbit.png",
            "./media/img/logo/cross.png",
        ].map((image, i)=> <Logo key={i} image={image}/> );
        return (
            <div className ="flex-box">
            {Images}
            {Titles}
            </div>
        )
    }
});

module.exports = LogoAll;
