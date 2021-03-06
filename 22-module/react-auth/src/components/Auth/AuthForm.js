import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useAuthContext } from '../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const history = useHistory()
  const { onLogin } = useAuthContext()

  const [isLogin, setIsLogin] = useState(true);
  const enteredEmail = useRef('')
  const enteredPassword = useRef('')
  const [isLoading, setIsLoading] = useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault()

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`
    if(isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`
    }

    setIsLoading(true)
    try {
      const r = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail.current.value,
          password: enteredPassword.current.value,
          returnSecureToken: true
        }),
        headers:{
          'Content-Type': 'application/json'
        },
      })

      setIsLoading(false)
      const result = await r.json()

      if(result.error) {
        const { error } = result
        let errorMessage = !error.message
          ? 'Authentication failed!'
          : error.message

        throw new Error(errorMessage)
      }

      alert(!isLogin ? 'Account created successfully!' : 'Successfully authenticated')

      const expirationTime = new Date(new Date().getTime() + (+result.expiresIn * 1000))
      onLogin(result.idToken, expirationTime.toISOString())

      history.replace('/')
    } catch (error) {
      alert((error.message))
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={enteredEmail} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={enteredPassword} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
