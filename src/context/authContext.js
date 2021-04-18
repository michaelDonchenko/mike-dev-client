import { createContext, useReducer } from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

//reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        user: action.payload,
      }

    case 'LOGOUT':
      return {
        user: null,
      }
    default:
      return state
  }
}

//initial state
const initialState = {
  user: cookies.get('user') ? cookies.get('user') : null,
}

//create context
const AuthContext = createContext()

//context provider
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  const value = { state, dispatch }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

//export
export { AuthContext, AuthProvider }
