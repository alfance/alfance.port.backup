const API_KEY = 'e5baa0af4c770647ede6d7a322074202';
const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8d46b69cd963ef7544119d719de8ba9e&user_id=85570696%40N02&tags=pwebphoto&per_page=130&format=json&nojsoncallback=1&api_sig=deddbb92400529bba54e63c75e02b07c`;

export const fetchImages = () => {
  return fetch(API_ENDPOINT).then(function (response) {
    return response.json().then(function (json) {
      return json.photos.photo.map(
        ({farm, server, id, secret}) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_b.jpg`
      );
    })
  })
};
