var React = require('react');
var $ = require('../../../lib/js/jquery');

export default class Project extends React.Component {
    constructor(){
        super();
    }
    componentDidMount() {
        var $box = $('.project-page-single');
        var $imgBox = $('.project-page-img');

        var $windowHeight = $(window).height();
        var $img = $('.project-page-img img');
        var $imgRow = $('.image-row');

        $($imgRow).each(function() {
            var $rowWidth = $(this).width(),
                 $imgIn = $(this).find('img'),
                 $imgCount = $($imgIn).length,
                 $imgWidth = $rowWidth / $imgCount - 12;
                 $($imgIn).css({
                     "height":"auto",
                     "width": $imgWidth + "px",
                 });
        });

        $($box).each(function() {
            var $boxHeight = $(this).height();

            if($box.innerHeight > $box.scrollHeight){
             console.log(($box).height());
                $(this).css({
                    "min-width":"550px",
                });
            }
        });

        $($imgBox).each(function() {
            var $imgIn = $(this).find('img');
            var $boxHeight = $(this).height();

            if($boxHeight > $windowHeight){
                var $difference = boxHeight - $windowHeight;
                var $imgHeight = $imgIn.height();
                var $finalHeight = $imgHeight - $difference

                $(this).find('img').css({
                    "min-width": $finalHeight + "px",
                });
            }
        });

    }
    render() {
        const {name} =this.props;
        const {info} =this.props;
    return(
        <div className="animated fadeInRight">
            <h1>{this.props.ProjectName}</h1>
           <h4>{name}</h4>
           <p>{info}</p>
       </div>
    );
    }
}
