import { useCallback, useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from './AuthContext';
import { postResource, getResource, Options, Cookie } from '../apiHelpers';

export const AuthProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const calcluatedUser = useMemo(
    () =>
      user.token
        ? user
        : Cookie.get('user')
        ? JSON.parse(Cookie.get('user'))
        : {},
    [user]
  );

  const requestOptions = useMemo(
    () => ({ ...Options({ language: i18n.language, user: calcluatedUser }) }),
    [i18n, calcluatedUser]
  );

  const login = useCallback(
    async (formData) => {
      try {
        const authUser = await postResource('/login', formData, requestOptions);

        setUser(() => authUser);
        setIsLoggedIn(true);

        /**
         * This is done for example purposes
         *
         * Ideally httpOnly should be done from the server
         */
        Cookie.set('user', JSON.stringify(authUser), {
          path: '/',
          days: 1
        });

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
    Cookie.delete('user');
  }, [setUser, setIsLoggedIn]);

  const accountCheck = useCallback(async () => {
    try {
      const { loggedIn } = await getResource('/status', requestOptions);
      if (!loggedIn || Cookie.get('user')) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      setIsLoggedIn(false);
      Cookie.delete('user');
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
