import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { DarkModeProvider } from './context/themeContext'

ReactDOM.render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>,
  document.getElementById('root')
)
