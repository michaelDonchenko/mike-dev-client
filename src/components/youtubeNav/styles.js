import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  toolBar: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
  },

  navText: {
    fontSize: '26px',
  },

  navLinkDark: {
    textDecoration: 'none',
    color: 'white',
    margin: theme.spacing(0, 1.2),
    '&:hover': {
      color: '#ff165d',
      cursor: 'pointer',
    },
  },

  navLinkLight: {
    textDecoration: 'none',
    color: '#00bcd4',
    margin: theme.spacing(0, 1.2),
    '&:hover': {
      color: '#26a69a',
      cursor: 'pointer',
    },
  },
}))

export default styles
