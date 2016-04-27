const API_KEY = '87dadb29820d2ae3b9cf67731e710a4d';
const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5`;

export const fetchImages = () => {
  return fetch(API_ENDPOINT).then(function (response) {
    return response.json().then(function (json) {
      return json.photos.photo.map(
        ({farm, server, id, secret}) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      );
    })
  })
};
