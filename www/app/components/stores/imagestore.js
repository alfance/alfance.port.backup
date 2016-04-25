var Reflux = require('reflux');
var $ = require('../../../lib/js/jquery');
var ImageActions = require('../Actions/imageactions');

var ImageStore = Reflux.createStore({
    listenables: [ImageActions],
    imagelist: [],
    sourceUrl_design: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&id=85570696@N02&tags=graphic,design&per_page=500',
    sourceUrl_photo: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&id=85570696@N02&tags=pwebphoto',

    init: function() {
        this.fetchList();
    },

    fetchList: function() {
        $.ajax({
            url: this.sourceUrl_design,
            dataType: 'jsonp',
            jsonpCallback: 'jsonFlickrFeed',
            cache: false,
            context: this,
            success: function(data) {
                console.log('fetch complete');
                this.imagelist = data.items;
                this.trigger(this.imagelist);
            }
        });
    }
});

module.exports = ImageStore;
