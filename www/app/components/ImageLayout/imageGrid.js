var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/imagestore');


var ImageGrid = React.createClass({
    mixins: [Reflux.connect(ImageStore, 'imagestore')],
    getInitialState: function() {
        return {
            
        };
      },
    render: function() {
        if (this.state.imagestore) {
            return (
                <div className="flex-box">
                    {this.state.imagestore.map(function (image) {
                        return (
                            <div className="image-grid-each">
                                <a href={ image.link }>
                                    <div className="image-grid-text">
                                    <p><b>{image.title}</b>
                                    <br></br>
                                </p>
                                    </div>
                                    <img className="image-grid-image" src={ image.media.m }></img>
                                </a>
                            </div>
                                );
                    })}
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }
});

module.exports = ImageGrid;
