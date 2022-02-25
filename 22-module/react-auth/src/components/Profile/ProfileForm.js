import { useRef } from 'react'
import { useAuthContext } from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const { idToken } = useAuthContext()
  const enteredPassword = useRef()

  const submitHandler = e => {
    e.preventDefault()

    //add validation

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_API_KEY}`, {
      method: 'POST',
      body: JSON.stringify({
        idToken,
        password: enteredPassword.current.value,
        returnSecureToken: false
      })
    }).then(r => {
      console.log('success')
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={enteredPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
