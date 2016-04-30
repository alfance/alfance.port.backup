import React from "react";
var startTime = 0;

export default class RandomStuff extends React.Component {
    constructor(){
        super();
    }
    render() {
    var randomAd = (this.props.stuff)[Math.round(Math.random() * ((this.props.stuff).length -1) )];

        var interval = setInterval(() =>{
                this.forceUpdate();
                startTime ++;
                if(startTime > 5){
                       clearInterval(interval);
                   }
            }, 2000);

        return (
            <p className="ILove">{randomAd}</p>
        )
    }
}
