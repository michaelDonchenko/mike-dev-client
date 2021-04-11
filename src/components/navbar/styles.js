import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  darkNav: {
    padding: 0,
    margin: 0,
    backgroundColor: '#181818',
    display: 'flex',
  },

  lightNav: {
    padding: 0,
    margin: 0,
    backgroundColor: '#dbe2ef',
    display: 'flex',
  },

  toolBar: {
    width: '100%',
    maxWidth: '1280px',
    display: 'flex',
    margin: '0 auto',
  },
})

export default useStyles
