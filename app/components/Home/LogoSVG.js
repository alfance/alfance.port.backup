import React from "react";
import ReactSVG from '../partial/SVG-injector.js';
import RandomColour from '../partial/RandomColour.js';
var $ = require('../../../lib/js/jquery');

export default class LogoSVG extends React.Component {
    constructor() {
        super();
        this.state ={
        color: []
        }
    }
    render() {
        console.log(<RandomColour />);
        return (
            <div>
            <ReactSVG
              path={'media/UI/logo.svg'}
              className={'example'}
              callback={(svg) => (svg)}
            />
        <RandomColour color={this.state.color}/>
            </div>
        )
    }
}
