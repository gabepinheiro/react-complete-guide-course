import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

const calcuteRemainingTime = expirationTime => {
  const currentTime = new Date().getTime()
  const adjExpirationTime = new Date(expirationTime).getTime()

  const remainingDuration = adjExpirationTime - currentTime

  return remainingDuration
}

export const AuthProvider = ({ children }) => {
  const initialToken = localStorage.getItem('token')
  const [token, setToken] = useState(initialToken)

  const isLoggedIn = !!token

  const logoutHandler = () => {
    setToken(null)
    localStorage.removeItem('token', token)
  }

  const loginHandler = (token, expirationTime) => {
    setToken(token)
    localStorage.setItem('token', token)

    const remainingTime = calcuteRemainingTime(expirationTime)
    setTimeout(logoutHandler, remainingTime)
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


