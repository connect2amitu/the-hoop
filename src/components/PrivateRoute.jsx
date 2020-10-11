import React, { useEffect } from 'react'
import { Redirect, Route, withRouter } from 'react-router-dom';
import { useAppState } from '../context';

function PrivateRoute(props) {
  const { logout, verifyToken } = useAppState('useAuth')
  const { component: Component, ...rest } = props;
  useEffect(() => {
    if (!verifyToken()) {
      logout()
    }
  })

  return (
    <Route {...rest} render={(props) => (
      verifyToken()
        ? <Component {...rest}{...props} />
        : <Redirect to="/" />
    )} />
  )
}
export default withRouter(PrivateRoute)