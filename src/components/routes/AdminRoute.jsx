import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

const AdminRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(AuthContext)
  const { user } = state

  return (
    <Route
      {...rest}
      render={(props) =>
        !user || user.role !== 'admin' ? (
          <Redirect to='/' />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default AdminRoute
