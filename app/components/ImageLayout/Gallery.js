import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as GalleryActions from '../Actions/actions.js';
import SkyLight from 'react-skylight';
var $ = require('../../../lib/js/jquery');

export class Gallery extends Component {

    componentDidMount() {
        this.props.loadImages();
      }

      componentDidUpdate() {
          var $vw = $('.wrapper').height();
          var $imageEach = $('.image-grid-each');
          var $myimage = $('.image-grid-each img');
          var $imageW = $(".image-grid-image").width();
          var $imageH = $(".image-grid-image").height();
            var all = document.querySelectorAll('.image-grid-image'); for (var i = 0; i < all.length; ++i)
            { all.item(i).addEventListener('click', function(e) {
                var windowSize = $(window).width();
                var windowLeft = windowSize /2;
                var objLeft = $(e.target).offset().left;
                var halfObj = $(e.target).width() / 2 ;
                var scrollLeft = objLeft - windowLeft + halfObj;
                console.log(halfObj);
                // window.scrollTo(scrollLeft, 0, 1000);
                $('body, html').animate( { scrollLeft: scrollLeft }, 600);
             }); }

                      for (var i = 0; i < $imageEach.length; i += 3) {
                  $imageEach.slice(i, i+3).wrapAll("<div class='image-grid-slice'></div>");
                  if($imageH > $imageW){
                      $($myimage).css({
                          "width":"100%",
                          "height":"auto",
                      });
                  }
                  else if($imageW > $imageH){
                      $($myimage).css({
                          "width":"auto",
                          "height":"100%",
                      });
                  }
              }
          if ($vw < 700) {
              $($imageEach).css('margin','10px 5px');
          }
          else if ($vw > 700) {
              $($imageEach).css('margin','20px 11px');
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

        <div className="top-bar"></div>
        <div className="flex-box animated fadeInRight">
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
