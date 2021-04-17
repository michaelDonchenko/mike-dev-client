import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  flexDiv: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(4, 0),
    width: '100%',
  },

  statusDark: {
    color: '#ff165d',
    marginLeft: theme.spacing(1),
  },

  statusLight: {
    color: '#00bcd4',
    marginLeft: theme.spacing(1),
  },

  whatsAppButton: {
    color: '#4caf50',
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    borderColor: '#4caf50',
  },

  link: {
    textDecoration: 'none',
    display: 'inline-block',
  },

  subTitle: {
    marginBottom: theme.spacing(0.5),
  },
}))

export default useStyles
