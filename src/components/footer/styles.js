import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  modelLinkDark: {
    marginLeft: '3px',
    textDecoration: 'none',
    color: 'white',
    marginLeft: '5px',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  modelLinkLight: {
    marginLeft: '3px',
    textDecoration: 'none',
    color: 'black',
    marginLeft: '5px',
    '&:hover': {
      cursor: 'pointer',
    },
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
}))

export default styles
