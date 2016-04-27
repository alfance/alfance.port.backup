import React from "react";

export default class RandomStuff extends React.Component {
    constructor(){
        super();
    }
    render() {
        setInterval(() => {
            this.forceUpdate();
            console.log(this);
        }, 2000);

        return (
            <p className="ILove">{this.props.randomAd}</p>
        )
    }
}
