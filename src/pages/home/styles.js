import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  flexCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(6, 0),
    width: '100%',
  },

  flexDiv: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(6, 0, 12, 0),
  },

  headerDark: {
    margin: theme.spacing(4, 0),
    color: '#ff165d',
  },

  headerLight: {
    margin: theme.spacing(4, 0),
    color: '#00bcd4',
  },

  hireButton: {
    width: '300px',
    fontSize: '22px',
    maxWidth: '100%',
  },

  link: {
    textDecoration: 'none',
    margin: theme.spacing(2, 'auto'),
  },
}))

export default useStyles
