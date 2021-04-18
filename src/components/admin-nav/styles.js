import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  linkDark: {
    color: 'white',
    textDecoration: 'none',
    marginRight: theme.spacing(2),
  },

  linkLight: {
    color: 'black',
    textDecoration: 'none',
    marginRight: theme.spacing(2),
  },

  spanLink: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}))

export default useStyles
