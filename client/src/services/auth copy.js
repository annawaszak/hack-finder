import axios from 'axios';

const ApiSignup = (formData) => {
  // return axios call to be used in app.js and manipulate the state object
  axios
    .post('/api/users', formData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

const ApiLogin = (formData) => {
  // return axios call to be used in app.js and manipulate the state object
  axios
    .post('/api/users/login', formData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export { ApiSignup, ApiLogin };
