import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  flexCenter: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(4, 0),
    width: '100%',
    minHeight: '60vh',
  },

  flexDiv: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(4, 0, 12, 0),
  },

  header: {
    margin: theme.spacing(4, 0),
  },

  modelLinkDark: {
    color: '#ff165d',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  modelLinkLight: {
    color: '#00bcd4',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}))

export default useStyles
