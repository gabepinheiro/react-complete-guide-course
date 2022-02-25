import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

const AuthContext = createContext(null)

let logoutTimer = null

const calcuteRemainingTime = expirationTime => {
  const currentTime = new Date().getTime()
  const adjExpirationTime = new Date(expirationTime).getTime()

  const remainingDuration = adjExpirationTime - currentTime

  return remainingDuration
}

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token')
  const storedExpirationDate = localStorage.getItem('expirationTime')

  const remainingTime = calcuteRemainingTime(storedExpirationDate)

  if(remainingTime <= 3600) {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationTime')

    return null
  }

  return {
    token: storedToken,
    duration: remainingTime
  }
}

export const AuthProvider = ({ children }) => {
  const tokenData = retrieveStoredToken()
  let initialToken
  if(tokenData) {
    initialToken =  tokenData.token
  }

  const [token, setToken] = useState(initialToken)

  const isLoggedIn = !!token

  const logoutHandler = useCallback(() => {
    setToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('expirationTime')

    if(logoutTimer) {
      clearTimeout(logoutTimer)
    }
  }, [])

  const loginHandler = (token, expirationTime) => {
    setToken(token)
    localStorage.setItem('token', token)
    localStorage.setItem('expirationTime', expirationTime)

    const remainingTime = calcuteRemainingTime(expirationTime)
    logoutTimer =  setTimeout(logoutHandler, remainingTime)
  }

  useEffect(() => {
    if(tokenData) {
      console.log(tokenData.duration)
      logoutTimer =  setTimeout(logoutHandler, tokenData.duration)
    }
  }, [tokenData, logoutHandler])

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


