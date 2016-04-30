import React from "react";
import RandomStuff from "./RandomStuff";
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

export default class ILove extends React.Component {
    constructor() {
    super();
    this.state = {};
    }

    render() {
        return (

            <div>
            <RandomStuff stuff={stuff} />
            </div>
        )
    }
}
