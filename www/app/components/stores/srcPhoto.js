const API_KEY = '87dadb29820d2ae3b9cf67731e710a4d';
const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2c8f77c3b720fbd462379fefb1608f7a&user_id=85570696%40N02&tags=pwebphoto&per_page=100&page=&format=json&nojsoncallback=1&api_sig=a84bd2d510f2f8f57175c1c9571acfe5`;

export const fetchImages = () => {
  return fetch(API_ENDPOINT).then(function (response) {
    return response.json().then(function (json) {
      return json.photos.photo.map(
        ({farm, server, id, secret}) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      );
    })
  })
};
