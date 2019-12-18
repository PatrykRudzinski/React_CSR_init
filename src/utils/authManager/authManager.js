import Cookies from 'js-cookie';

const authTokenName = process.env.REACT_APP_AUTH_TOKEN_NAME;
export default {
  getCookiesAuthData: () => {
    try {
      const authData = Cookies.get(authTokenName);
      if (authData === null) {
        return undefined;
      }
      return JSON.parse(authData);
    } catch {
      return undefined;
    }
  },
  setCookiesAuthData: data => {
    try {
      const JSONString = JSON.stringify(data);
      Cookies.set(authTokenName, JSONString);
      return JSONString;
    } catch {
      return undefined;
    }
  },
  removeCookiesAuthData: () => {
    Cookies.remove(authTokenName);
    return true;
  },
};
