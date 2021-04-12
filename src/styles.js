import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  dark: {
    minHeight: '100vh',
    backgroundColor: '#18191a',
    margin: 0,
  },

  light: {
    minHeight: '100vh',
    backgroundColor: '#fafafa',
    margin: 0,
  },

  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(4),
  },
}))

export default useStyles
