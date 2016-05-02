var React = require('react');
var $ = require('../../../lib/js/jquery');

export default class Project extends React.Component {
    constructor(){
        super();
    }
    componentDidMount() {
        var $box = $('.project-page-single');
        var $windowHeight = $(window).height();
        var $img = $('.project-page-img img');
        var $imgBoxImg = $('.project-page-img');
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
            if($boxHeight > $windowHeight){
                $(this).css({
                    "min-width":"550px",
                });
            }
        });

    }
    render() {
        const {name} =this.props;
        const {info} =this.props;
    return(
        <div>
            <h1>{this.props.ProjectName}</h1>
           <h4>{name}</h4>
           <p>{info}</p>
       </div>
    );
    }
}
