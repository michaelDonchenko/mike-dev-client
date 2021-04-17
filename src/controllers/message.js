import axios from 'axios'
axios.defaults.withCredentials = true

const SERVER_URL = process.env.REACT_APP_SERVER_URL

export const getMessages = async () => await axios.get(`${SERVER_URL}/messages`)
