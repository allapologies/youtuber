import axios from 'axios';

const fetchVideos = (url, apiKey, searchString = '') => {
  if (!url || !apiKey) {
    throw new Error('expected api url and key');
  }

  const params = {
    part: 'snippet',
    key: apiKey,
    q: searchString,
    type: 'video',
  };

  return axios.get(url, { params }).then(response => response.data.items);
};

export default fetchVideos;
