import React from "react";

export default class HomeSVG extends React.Component {

    render() {
        return (
            <div className="HomeSVG">
            <p><i>Hello,</i> I am</p>
            <object id="namelogo" type="image/svg+xml" data="media/UI/logo.svg">Your browser does not support SVG</object>
            <p> and I love JKHJKK </p>
            <p className="homesmall"> </p>
            </div>
        )
    }
}
