import React, { useContext, useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core'
import { login } from '../../controllers/auth'
import Alert from '@material-ui/lab/Alert'
import { AuthContext } from '../../context/authContext'
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom'

const LoginModel = ({ open, handleClose, classes }) => {
  const { dispatch, state } = useContext(AuthContext)
  const { user } = state
  const cookies = new Cookies()

  const history = useHistory()

  if (user && user.role === 'admin') {
    history.push('/admin-pannel')
  }

  const [values, setValues] = useState({
    username: '',
    password: '',
    loading: false,
    error: false,
    success: false,
  })

  const { username, password, loading, error, success } = values

  const errorDisplay = () => {
    if (error) {
      return (
        <Alert style={{ margin: '10px' }} severity='error'>
          {error}
        </Alert>
      )
    }
  }

  const successDisplay = () => {
    if (success) {
      return (
        <Alert style={{ margin: '10px' }} severity='success'>
          {success}
        </Alert>
      )
    }
  }

  const handleLogin = async () => {
    setValues({ ...values, loading: true })
    try {
      const response = await login(username, password)

      //cookie for user
      cookies.set('user', response.data.user)

      dispatch({
        type: 'LOGIN',
        payload: response.data.user,
      })

      setValues({
        ...values,
        username: '',
        password: '',
        loading: false,
        success: response.data.message,
        error: false,
      })
    } catch (error) {
      setValues({
        ...values,
        loading: false,
        success: false,
        error: error.response.data.message,
      })
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <Dialog
      maxWidth={'sm'}
      fullWidth={true}
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{'Login'}</DialogTitle>
      <DialogContent>
        <p>*Only for admin account</p>
        <form className={classes.form} onKeyPress={handleKeyPress}>
          <TextField
            className={classes.textField}
            name='username'
            placeholder='username'
            variant='standard'
            type='text'
            value={username}
            onChange={(e) =>
              setValues({
                ...values,
                [e.target.name]: e.target.value,
              })
            }
          />

          <TextField
            className={classes.textField}
            name='password'
            placeholder='password'
            variant='standard'
            type='password'
            value={password}
            onChange={(e) =>
              setValues({
                ...values,
                [e.target.name]: e.target.value,
              })
            }
          />
        </form>
        {successDisplay()}
        {errorDisplay()}
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' onClick={handleLogin} color='primary'>
          {loading ? 'Loading...' : 'Login'}
        </Button>
        <Button
          type='submit'
          variant='outlined'
          onClick={handleClose}
          color='secondary'
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default LoginModel
