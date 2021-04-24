import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: theme.spacing(4, 0),
    padding: theme.spacing(1),
  },

  header: {
    margin: theme.spacing(2, 0),
  },

  button: {
    margin: theme.spacing(2),
  },
}))

export default styles
