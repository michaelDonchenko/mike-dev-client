import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2, 0),
    minHeight: '60vh',
  },

  header: {
    margin: theme.spacing(2, 0),
  },

  messagesContainer: {
    marginBottom: theme.spacing(4),
  },

  button: {
    margin: theme.spacing(2, 'auto'),
  },

  flexCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  Container: {
    height: '500px',
    overflowY: 'scroll',
  },

  playlistComponent: {
    display: 'flex',
    margin: theme.spacing(4, 0),
    padding: theme.spacing(0, 2),
    alignItems: 'center',
  },

  grow1: {
    display: 'flex',
    flexGrow: 1,
    padding: theme.spacing(0, 0.5),
  },

  updateHeader: {
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },
}))

export default useStyles
