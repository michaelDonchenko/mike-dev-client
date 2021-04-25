import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },

  iconDarkMode: {
    textDecoration: 'none',
    fontSize: '25px',
    marginRight: theme.spacing(4),
    color: 'white',
    '&:hover': {
      color: '#ff165d',
    },
  },

  iconLightMode: {
    textDecoration: 'none',
    fontSize: '25px',
    marginRight: theme.spacing(4),
    color: '#18191a',
    '&:hover': {
      color: '#00bcd4',
    },
  },

  link: {
    textDecoration: 'none',
  },

  buttonCV: {
    marginTop: theme.spacing(4),
  },
}))

export default useStyles
