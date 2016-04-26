var React = require('react');
var ImageGrid = require('../ImageLayout/imagegrid');
import Modal, {closeStyle} from 'simple-react-modal';
import PageIntro from '../partial/pageIntro';

export default class PhotoHome extends React.Component{
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
      const title = "Photography"
      const pageintro = "This page showcases my short-term graphic designs. Most of the projects were completed between tens of minutes to a day. Instead of thoughtful planning and pre analysis, works seen here are more of my artistic expression of the design world.";

      return (
              <div>
                  <PageIntro title={title} pageintro={pageintro}> </PageIntro>
                  <ImageGrid></ImageGrid>
              </div>
      );
  }
}

module.exports = PhotoHome;
