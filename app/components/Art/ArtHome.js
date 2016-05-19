var React = require('react');
import Modal, {closeStyle} from 'simple-react-modal';
import PageIntro from '../partial/pageIntro';

export default class ArtHome extends React.Component{
    constructor(){
    super()
    this.state = {}
  }

  show(){
    this.setState({show: true})
  }

  close(){
    this.setState({show: false})
  }

  render(){
      const title = "Arts"
      const pageintro = "Under Constrcution. Currently working on the Deviant Art API.";

    return (
        <div className="page-Intro">
        <div className="pageIntro-text">
            <h2>Arts</h2>
            <p>Under Constrcution. Currently working on the Deviant Art API. <br />
                Please goto my <a href ="http://alfance.deviantart.com/" target="_blank"> Deviant page</a> to see my illustrations.</p>
            <p>That been said, I am still in the process of learning ReactJS. If you'd like to communicate and interact, please do no hesitant to contact me.</p>
        </div>
      </div>
    )
  }
}

module.exports = ArtHome;
