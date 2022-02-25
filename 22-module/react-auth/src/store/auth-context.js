import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)

  const isLoggedIn = !!token

  const loginHandler = token => {
    setToken(token)
  }

  const logoutHandler = () => {
    setToken(null)
  }

  const contextValue = {
    idToken: token,
    isLoggedIn,
    onLogin: loginHandler,
    onLogout: logoutHandler
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if(!context) {
    throw new Error('useAuthContext must be used within a AuthProvider')
  }

  return context
}


