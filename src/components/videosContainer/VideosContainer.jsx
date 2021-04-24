import { Button, Paper, Tooltip, Typography } from '@material-ui/core'
import React from 'react'
import styles from './styles'
import ReactPlayer from 'react-player/youtube'
import { useHistory } from 'react-router-dom'
import Paginate from '../pagination/Paginate'

const VideosContainer = ({
  width,
  header,
  videos,
  playlistPage,
  body,
  values,
  handlePageChange,
}) => {
  const classes = styles()
  const history = useHistory()
  const { page, pages } = values

  return (
    <Paper elevation={3}>
      {playlistPage && (
        <Button
          className={classes.button}
          variant='outlined'
          onClick={() => history.push('/youtube/playlists')}
        >
          Back to playlists
        </Button>
      )}

      <Typography variant='h5' align='center' className={classes.header}>
        {header}
      </Typography>

      <Typography variant='subtitle1' align='center' className={classes.header}>
        {body && body}
      </Typography>

      <div className={classes.root}>
        {(videos && videos.length === 0) || videos === undefined ? (
          <p>No videos found</p>
        ) : (
          videos.map((v, i) => (
            <Tooltip title={v.title}>
              <ReactPlayer
                style={{ maxWidth: '100%' }}
                key={i}
                controls={true}
                height={width < 600 ? 200 : 280}
                width={500}
                style={{ margin: width > 600 ? '15px' : '15px 0' }}
                url={v.url}
              />
            </Tooltip>
          ))
        )}
      </div>

      <Paginate page={page} pages={pages} handlePageChange={handlePageChange} />
    </Paper>
  )
}

export default VideosContainer
