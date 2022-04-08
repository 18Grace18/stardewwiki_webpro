import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './utils/common';
import './info.css'; 
 
function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
 
  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Please enter Username and/or Password");
    });
  }
 
  return (
    <div class="infbody">
      <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/11170746/fdfa47d494b75bd5979742522aa4a07babb7a6cf.png" height="170" class="center"></img>
      <h2 style={{ color: 'white' }}>Login</h2>
        <div className ="inner-container" style={{ color: 'white' }}>
          Username<br />
          <input type="text" {...username} autoComplete="new-password" />
        </div><br />
        <div className ="inner-container" style={{ color: 'white' }}>
          Password<br />
          <input type="text" {...password} autoComplete="new-password" />
        </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input class="button1" type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;