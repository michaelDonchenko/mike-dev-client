import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  projectDiv: {
    display: 'flex',
    margin: theme.spacing(4, 'auto'),
    maxWidth: '100%',
  },

  image: {
    width: '100%',
    border: '2px solid',
    boxShadow:
      'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    margin: theme.spacing(2, 0),
  },

  projectTitle: {
    margin: theme.spacing(2, 0),
  },

  projectText: {
    padding: theme.spacing(2, 2),
  },

  buttonsDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: theme.spacing(2, 0),
  },

  button: {
    margin: theme.spacing(1, 2),
    fontSize: '16px',
  },

  link: {
    textDecoration: 'none',
  },
}))

export default styles
