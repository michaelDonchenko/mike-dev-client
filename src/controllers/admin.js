import axios from 'axios'
axios.defaults.withCredentials = true

const SERVER_URL = process.env.REACT_APP_SERVER_URL

//playlist controllers
export const getPlaylists = async () =>
  await axios.get(`${SERVER_URL}/admin/playlists`)

export const newPlaylist = async (title, description) =>
  await axios.post(`${SERVER_URL}/admin/create-playlist`, {
    title,
    description,
  })

export const deletePlaylist = async (id) =>
  await axios.delete(`${SERVER_URL}/admin/delete-playlist/${id}`)

export const getPlaylist = async (id) =>
  await axios.get(`${SERVER_URL}/admin/get-playlist/${id}`)

export const updatePlaylist = async (id, title, description) =>
  await axios.put(`${SERVER_URL}/admin/update-playlist/${id}`, {
    title,
    description,
  })

//video controllers
export const newVideo = async (title, url, playlistId) =>
  await axios.post(`${SERVER_URL}/admin/create-video`, {
    title,
    url,
    playlistId,
  })

export const getVideos = async (page) =>
  await axios.get(`${SERVER_URL}/admin/videos?page=${page}`)

export const deleteVideo = async (id) =>
  await axios.delete(`${SERVER_URL}/admin/delete-video/${id}`)

export const getVideo = async (id) =>
  await axios.get(`${SERVER_URL}/admin/get-video/${id}`)

export const updateVideo = async (id, title, url, playlistId) =>
  await axios.put(`${SERVER_URL}/admin/update-video/${id}`, {
    title,
    url,
    playlistId,
  })
