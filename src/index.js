import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { DarkModeProvider } from './context/themeContext'
import { AuthProvider } from './context/authContext'

ReactDOM.render(
  <AuthProvider>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </AuthProvider>,
  document.getElementById('root')
)
