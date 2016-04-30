import React from "react";

export default class PageIntro extends React.Component {

    render() {
    return (
        <div className="page-Intro">
        <div className="pageIntro-text">
        <h2>{this.props.title}</h2>
        <p>{this.props.pageintro}</p>
        </div>
        </div>
    );
  }
}
