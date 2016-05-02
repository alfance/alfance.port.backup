const API_KEY = '92a606d89212b2153e1b219dfa19c078';
const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=92a606d89212b2153e1b219dfa19c078&user_id=85570696%40N02&tags=graphic%2Cdesign&per_page=130&format=json&nojsoncallback=1`;


export const fetchImageDesign = () => {
  return fetch(API_ENDPOINT).then(function (response) {
    return response.json().then(function (json) {
      return json.photos.photo.map(
        ({farm, server, id, secret}) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_b.jpg`
      );
    })
  })
};
