import React from "react";
import ReactSVG from '../partial/SVG-injector.js';

export default class LogoSVG extends React.Component {

    render() {
        return (
            <ReactSVG
              path={'media/UI/icon-home.svg'}
              className={'example'}
              callback={(svg) => (svg)}
            />,
        )
    }
}
