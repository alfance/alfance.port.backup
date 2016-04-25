var React = require('react');
import Modal, {closeStyle} from 'simple-react-modal';
import PageIntro from '../PageIntro';

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
      const pageintro = "This page showcases my short-term graphic designs. Most of the projects were completed between tens of minutes to a day. Instead of thoughtful planning and pre analysis, works seen here are more of my artistic expression of the design world.";

    return (
      <div>
          <PageIntro title={title} pageintro={pageintro}> </PageIntro>
      <a onClick={this.show.bind(this)}>Open Modal</a>

      <Modal
      className="simple-modal-base fade-in-5sec" //this will completely overwrite the default css completely
      closeOnOuterClick={true}
      show={this.state.show}
      onClose={this.close.bind(this)}>

      <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
      <div>hey</div>

      </Modal>
      </div>
    )
  }
}

module.exports = ArtHome;
