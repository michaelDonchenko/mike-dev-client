import { createContext, useReducer } from 'react'

//reducer
const darkModeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        darkMode: action.payload,
      }
    default:
      return state
  }
}

//initial state
const initialState = {
  darkMode: true,
}

//create context
const DarkModeContext = createContext()

//context provider
const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, initialState)
  const value = { state, dispatch }

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  )
}

//export
export { DarkModeContext, DarkModeProvider }
