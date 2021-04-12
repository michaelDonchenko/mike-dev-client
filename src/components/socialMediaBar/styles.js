import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  iconDarkMode: {
    textDecoration: 'none',
    fontSize: '40px',
    color: 'white',
    '&:hover': {
      color: '#ff165d',
    },
  },

  iconLightMode: {
    textDecoration: 'none',
    fontSize: '40px',
    color: '#26a69a',
    '&:hover': {
      color: '#00bcd4',
    },
  },
}))

export default useStyles
