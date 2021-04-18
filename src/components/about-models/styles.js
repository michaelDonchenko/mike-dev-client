import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  header: {
    margin: theme.spacing(2, 0, 2, 0),
  },

  hr: {
    marginBottom: theme.spacing(2),
    width: '90%',
  },

  aboutDiv: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(6),
  },
}))

export default styles
