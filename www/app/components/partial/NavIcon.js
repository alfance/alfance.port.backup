import React from "react";
import ReactSVG from './SVG-injector.js';

export default class LogoSVG extends React.Component {

    render() {
        return (
            <ReactSVG
              path={'media/UI/icon-home.svg'}
              className={'example'}
              callback={(svg) => (svg)}
            />,
            <ReactSVG
              path={'media/UI/icon-project.svg'}
              className={'example'}
              callback={(svg) => (svg)}
            />,
            <ReactSVG
              path={'media/UI/icon-design.svg'}
              className={'example'}
              callback={(svg) => (svg)}
            />,
            <ReactSVG
              path={'media/UI/icon-photo.svg'}
              className={'example'}
              callback={(svg) => (svg)}
            />,
            <ReactSVG
              path={'media/UI/icon-art.svg'}
              className={'example'}
              callback={(svg) => (svg)}
            />,
        )
    }
}
