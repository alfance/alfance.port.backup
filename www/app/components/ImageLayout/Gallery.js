import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as GalleryActions from '../Actions/actions.js';
import SkyLight from 'react-skylight';

export class Gallery extends Component {
    componentDidMount() {
        this.props.loadImages();
      }
      
  handleThumbClick(selectedImage) {
    this.setState({
      selectedImage
    })
  }

  render(){
    const {images, selectedImage, selectImage} = this.props;
    return (
      <div className="flex-box">
        <div>
          <div>
            <img src={selectedImage} />
          </div>
        </div>
        <div>
          {images.map((image, index) => (
             <div key={index} onClick={() => selectImage(image)} className="image-grid-each">
              <img className="image-grid-image" src={image}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
    selectedImage: state.selectedImage
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(GalleryActions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Gallery)
