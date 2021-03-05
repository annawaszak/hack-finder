import axios from 'axios';

const signup = (username, email, password) => {
  console.log('step S2', username, email, password);
  return axios
    .post('/api/auth/signup', { username, email, password })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const login = (username, password) => {
  console.log('STEP L2', username, password);
  return axios
    .post('/api/auth/login', { username, password })
    .then((response) => {
      console.log('RESPONSE DATA', response.data)
      return response.data;
    })
    .catch((err) => {
      console.log(err)
    });
};

const logout = () => {
  return axios
    .delete('/api/auth/logout')
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export { signup, login, logout };
