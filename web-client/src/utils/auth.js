import moment from 'moment';
import jwtDecode from 'jwt-decode';
import Raven from 'raven-js';

// Is user logged in?
const isLoggedIn = () => {
  if (localStorage.getItem('jwtToken') !== null) {
    const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));
    return moment.unix(decodedToken.exp).isAfter(moment());
  } else {
    return false;
  }
};

// Is user an administrator?
const isAdmin = () => {
  if (isLoggedIn()) {
    const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));
    return decodedToken.isAdmin;
  }
  return false;
};

// Get logged in user id
const getUserId = () => {
  if (isLoggedIn()) {
    const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));
    return decodedToken.sub;
  }
};

const setToken = token => {
  localStorage.setItem('jwtToken', token);
  Raven.setUserContext({ id: getUserId() });
};

const Auth = { isLoggedIn, isAdmin, getUserId, setToken };
export default Auth;