import axios from 'axios';

export const fetchNorris = () => {
  return axios
    .get('https://api.chucknorris.io/jokes/random')
    .then((response) => {
      return response.data.value;
    })
    .catch(function (error) {
      return error;
    });
};
