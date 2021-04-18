import axios from 'axios'
axios.defaults.withCredentials = true

const SERVER_URL = process.env.REACT_APP_SERVER_URL

export const login = async (username, password) =>
  await axios.post(`${SERVER_URL}/login`, { username, password })

export const logout = async () => await axios.post(`${SERVER_URL}/logout`, {})
