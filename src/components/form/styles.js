import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
  },

  form: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  textField: {
    margin: theme.spacing(4, 'auto'),
    width: '100%',
  },

  paper: {
    height: '100%',
    borderRadius: '1em',
    maxWidth: '100%',
    width: '400px',
  },

  submitButton: {
    margin: theme.spacing(4, 'auto'),
    width: '500px',
    maxWidth: '90%',
    fontSize: '18px',
  },
}))

export default useStyles
