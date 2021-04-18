import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2, 0),
    minHeight: '60vh',
  },

  header: {
    margin: theme.spacing(4, 0),
  },

  messagesContainer: {
    marginBottom: theme.spacing(4),
  },
}))

export default useStyles
