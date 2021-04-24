import axios from 'axios'
axios.defaults.withCredentials = true

const SERVER_URL = process.env.REACT_APP_SERVER_URL

export const getPlaylists = async () =>
  await axios.get(`${SERVER_URL}/playlists`)

export const getVideos = async (page) =>
  await axios.get(`${SERVER_URL}/videos?page=${page}`)

export const getPlaylist = async (id, page) =>
  await axios.get(`${SERVER_URL}/get-playlist/${id}?page=${page}`)
