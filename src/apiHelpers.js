import axios from 'axios';

export const postResource = (path, data, requestOptions) =>
  axios
    .post(`http://localhost:4001${path}`, data, requestOptions)
    .then((response) => response.data);

export const getResource = (path, requestOptions) =>
  axios
    .get(`http://localhost:4001${path}`, requestOptions)
    .then((response) => response.data);

export const Options = ({ language, user = {} }) => {
  const hasToken =
    Object.keys(user).length === 0 && user.hasOwnProperty('token');
  return {
    headers: {
      'Accept-Language': language,
      'Content-Type': 'application/json',
      ...(hasToken ? { [`x-access-token`]: user?.token } : {})
    }
  };
};
