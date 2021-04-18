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
  const { dispatch } = useContext(AuthContext)
  const cookies = new Cookies()

  const [values, setValues] = useState({
    username: '',
    password: '',
    loading: false,
    error: false,
  })

  const { username, password, loading, error } = values
  const history = useHistory()

  const errorDisplay = () => {
    if (error) {
      return (
        <Alert style={{ margin: '10px' }} severity='error'>
          {error}
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
        error: false,
      })

      handleClose()
      history.push('/admin-pannel')
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

        {errorDisplay()}
      </DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={handleLogin} color='primary'>
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
