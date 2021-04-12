import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  flexCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0),
    width: '100%',
  },

  flexDiv: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(6, 0),
  },

  headerDark: {
    margin: theme.spacing(4, 0),
    color: '#ff165d',
  },

  headerLight: {
    margin: theme.spacing(4, 0),
    color: '#00bcd4',
  },
}))

export default useStyles
