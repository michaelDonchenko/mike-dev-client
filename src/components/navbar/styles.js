import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  darkNav: {
    padding: 0,
    margin: 0,
    backgroundColor: '#242526',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: '100%',
  },

  lightNav: {
    padding: 0,
    margin: 0,
    backgroundColor: '#fafafa',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  toolBar: {
    width: '100%',
    maxWidth: '1280px',
    display: 'flex',
    margin: '0 auto',
  },

  rightDiv: {
    flex: 0,
    display: 'flex',
  },

  leftDiv: {
    flex: 1,
    display: 'flex',
  },

  navButton: { margin: theme.spacing(0, 4), padding: theme.spacing(0, 3) },

  icon: {
    fontSize: '1.8rem',
  },

  navLinkDark: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    margin: theme.spacing(0, 2),
    '&:hover': {
      color: '#ff165d',
      cursor: 'pointer',
    },
  },

  navLinkLight: {
    color: '#00bcd4',
    textDecoration: 'none',
    fontSize: '18px',
    margin: theme.spacing(0, 2),

    '&:hover': {
      color: '#26a69a',
      cursor: 'pointer',
    },
  },
}))

export default useStyles
