import React from "react";

export default class ILove extends React.Component {
    constructor() {
    super();
    this.state = {};
    }

    render() {
        const stuff =[
            "Physical Computing",
            "Illustration",
            "Interaction Design",
            "Beautiful Codes",
            "Great User Experience",
            "Photography",
            "Simplicity",
            "Making Stuff!",
        ]

            var randomAd = stuff[Math.round(Math.random() * (stuff.length -1) )];
            setInterval(() => {
                this.forceUpdate();
                console.log(this);
            }, 2500);


        return (

            <div>
            <p className="ILove">{randomAd}</p>
            </div>
        )
    }
}
