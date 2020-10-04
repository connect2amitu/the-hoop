import React, { useEffect } from 'react'
import { Redirect, Route, withRouter } from 'react-router-dom';
import { useAppState } from '../context';
import jwt from "jsonwebtoken";

function PrivateRoute(props) {
  const { logout, verifyToken } = useAppState('useAuth')
  const { component: Component, ...rest } = props;
  console.log('verifyToken() =>', verifyToken())

  useEffect(() => {
    if (!verifyToken()) {
      logout()
    }
  })

  return (
    <Route {...rest} render={(props) => (
      verifyToken()
        ? <Component {...rest}{...props} />
        : <Redirect to="/login" />
    )} />
  )
}
export default withRouter(PrivateRoute)