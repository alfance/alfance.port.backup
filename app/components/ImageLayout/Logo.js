var React = require('react');
var $ = require('../../../lib/js/jquery');
import SkyLight from 'react-skylight';

export default class Logo extends React.Component {
    constructor(props){
      super(props);
    }
    componentDidUpdate() {
        console.log("sfsf");
        var $vw = $('.wrapper').height();
        var $imageEach = $('.image-grid-each');
        var $myimage = $('.image-grid-each img');
        var $imageW = $(".image-grid-image").width();
        var $imageH = $(".image-grid-image").height();
          var all = document.querySelectorAll('.image-grid-image'); for (var i = 0; i < all.length; ++i)
          { all.item(i).addEventListener('click', function(e) { setTimeout(function(){
              window.scrollTo(e.target.parentNode.offsetLeft - (window.innerWidth - e.target.offsetWidth) / 2, 0); }, 400);
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
    render() {
        const {image} =this.props;
        const {logotitle} =this.props;

    return(
        <div>
        <SkyLight hideOnOverlayClicked ref="simpleDialog">
            <h3>{logotitle}</h3>
            <h4>sdfsdgsg</h4>
            <img className="modalPhoto" src={image} />
        </SkyLight>

        <div className="image-grid-each" onClick={() => this.refs.simpleDialog.show()}>
            <img className="image-grid-image" src ={image} />
            <h4>{logotitle}</h4>
       </div>
       </div>
    );
    }
}
