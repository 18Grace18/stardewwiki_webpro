import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './common';
 
// handle the public routes
function UserRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => !getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/dashboard' }} />}
    />
  )
}
 
export default UserRoute;