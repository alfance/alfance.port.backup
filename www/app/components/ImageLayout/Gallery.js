import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as GalleryActions from '../Actions/actions.js';
import SkyLight from 'react-skylight';
var $ = require('../../../lib/js/jquery');

export class Gallery extends Component {
    componentDidMount() {
        this.props.loadImages();
        var $vw = $('.wrapper').height();
        var $imageEach = $('.image-grid-each');
        var image = $('.image-grid-each img');
        if ($vw > 400)  {
            for (var i = 0; i < $imageEach.length; i += 3) {
                $imageEach.slice(i, i+3).wrapAll("<div class='image-grid-slice'></div>");
            }
        }
        if ($vw < 700) {
            $($imageEach).css('margin','7px 7px');
        }
        else if ($vw > 700) {
            $($imageEach).css('margin','14px 14px');
        }
      }

  handleThumbClick(selectedImage) {
    this.setState({
      selectedImage
    })
  }

  render(){
    const {images, selectedImage, selectImage} = this.props;
    return (
      <div >

        <SkyLight hideOnOverlayClicked ref="simpleDialog">

                <img className="modalPhoto" src={selectedImage} />

        </SkyLight>

        <div className="flex-box">
          {images.map((image, index) => (
             <div key={index} onClick={() => {selectImage(image); this.refs.simpleDialog.show()}} className="image-grid-each">
                 <p> {image.name} </p>
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
