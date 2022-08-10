/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { SignIn } from './pages/User/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

export function App() {
  const { i18n } = useTranslation();
  return (
    <div style={wrapper as React.CSSProperties}>
      <BrowserRouter>
        <Helmet
          titleTemplate="Default App"
          defaultTitle="Your Project"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="Foundation app" />
        </Helmet>

        <Routes>
          <Route
            path={process.env.PUBLIC_URL + '/sign-in'}
            element={<SignIn />}
          />
          <Route path={process.env.PUBLIC_URL + '/'} element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
}
/*
add Navigate to react-router-dom imports
function RequireAuth({ children, redirectTo, user }) {
  let isAuthenticated = sessionStorage.getItem('your_token') ? true : false;
  let useremail = user.email ? true : false;
  return isAuthenticated && useremail ? children : <Navigate to={redirectTo} />;
}
*/
