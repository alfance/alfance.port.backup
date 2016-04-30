import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as GalleryActions from '../Actions/actions.js';
import SkyLight from 'react-skylight';
var $ = require('../../../lib/js/jquery');

export class Gallery extends Component {

    componentDidMount() {
        var $vw = $('.wrapper').height();
        var $imageEach = $('.image-grid-each');
        var $myimage = $('.image-grid-each img');
        var $imageW = $(".image-grid-image").width();
        var $imageH = $(".image-grid-image").height();

        this.props.loadImages();

            for (var i = 0; i < $imageEach.length; i += 3) {
                $imageEach.slice(i, i+3).wrapAll("<div class='image-grid-slice'></div>");
                console.log($vw);
            }


        if ($vw < 700) {
            $($imageEach).css('margin','5px 10px');
        }
        else if ($vw > 700) {
            $($imageEach).css('margin','10px 20px');
        }
        $imageEach.each(function() {
            if($imageH > $imageW) {
                $(".image-grid-image").css({
                    'height': "auto",
                    "width": "100%",
                    });
                }
            if($imageW > $imageH) {
                    $(".image-grid-image").css({
                        'width': "auto",
                        "height": "100%",
                        });
                }
        });
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
