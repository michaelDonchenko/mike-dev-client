import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  flexWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(2, 0),
  },

  flexDiv: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(4, 0),
    width: '100%',
    minHeight: '60vh',
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

export default styles
