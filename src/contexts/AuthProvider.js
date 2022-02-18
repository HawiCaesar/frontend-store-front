import { useCallback, useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from './AuthContext';
import axios from 'axios';

const postResource = (path, data, requestOptions) =>
  axios
    .post(`http://localhost:4001${path}`, data, requestOptions)
    .then((response) => response.data);

const getResource = (path, requestOptions) =>
  axios
    .get(`http://localhost:4001${path}`, requestOptions)
    .then((response) => response.data);

const Options = (user) => {
  const hasToken =
    Object.keys(user).length === 0 && user.hasOwnProperty('token');
  return {
    headers: {
      'Accept-Language': user.language,
      ...(hasToken ? { [`x-access-token`]: user?.token } : {})
    }
  };
};

export const AuthProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const requestOptions = useMemo(
    () => ({ ...Options({ language: i18n.language, ...user }) }),
    [user, i18n]
  );

  const login = useCallback(
    async (formData) => {
      try {
        const authUser = await postResource('/login', formData, requestOptions);

        setUser(() => authUser);
        setIsLoggedIn(true);
        return authUser;
      } catch (error) {
        return error.response.data;
      }
    },
    [setUser, requestOptions]
  );

  const logout = useCallback(async () => {
    setUser({});
    setIsLoggedIn(false);
  }, [setUser, setIsLoggedIn]);

  const accountCheck = useCallback(async () => {
    try {
      const { loggedIn } = await getResource('/status', requestOptions);
      setIsLoggedIn(loggedIn);
    } catch (error) {
      setIsLoggedIn(false);
    }
  }, [setIsLoggedIn, requestOptions]);

  useEffect(() => {
    (async () => {
      await accountCheck();
    })();
    // eslint-disable-next-line
  }, []);

  const authContext = useMemo(
    () => ({
      user,
      login,
      logout,
      isLoggedIn
    }),
    [user, login, logout, isLoggedIn]
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
