import React from "react";
import LogoSVG from "./LogoSVG";
import ILove from "./ILove";

export default class HomeSVG extends React.Component {

    render() {
        return (
            <div className="HomeSVG">
            <p><i><b>Hello,</b></i> I am</p>
            <LogoSVG />
            <p className="ILove">and I enjoy </p><ILove />
            <p className="homesmall"> </p>
            </div>
        )
    }
}
