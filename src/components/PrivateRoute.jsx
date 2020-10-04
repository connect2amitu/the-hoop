import React, { useEffect } from 'react'
import { Redirect, Route, withRouter } from 'react-router-dom';
import { useAppState } from '../context';
import jwt from "jsonwebtoken";

function PrivateRoute(props) {
  const { isLoggedIn, logout } = useAppState('useAuth')
  const { component: Component, ...rest } = props;
  useEffect(() => {
    if (localStorage.token) {
      try {
        jwt.verify(localStorage.token, 'secret', function (err, decoded) {
          if (err) {
            logout()
          }
        });
      } catch (error) {
        logout()
      }
    } else {
      logout()
    }
  })

  return (
    <Route {...rest} render={(props) => (
      isLoggedIn
        ? <Component {...rest}{...props} />
        : <Redirect to="/login" />
    )} />
  )
}
export default withRouter(PrivateRoute)