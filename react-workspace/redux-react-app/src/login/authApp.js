import { Provider, useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { login, logout } from './actions';
import { useState } from 'react';

function AuthApp () {
    //input태그에 입력되는 값을 저장하는 state
    const [userNameinput, setUserNameinput] = useState('')
    const { isLoggedIn, userName } = useSelector((state) => state)
    const dispatch = useDispatch()

    const handleLogin = () => {
        if (userNameinput.trim()){
            dispatch(login(userNameinput))
            setUserNameinput('')
        }
    }
    const handleLogout = () => {
        dispatch(logout()); 
      }

    return (
        <div>
      <h1>Login Status</h1>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {userName}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={userNameinput}
            onChange={(e) => setUserNameinput(e.target.value)}
            placeholder="Enter your username"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
    )
}
export default AuthApp;