import React from 'react';
import { getUser, removeUserSession } from './utils/common';
 
function Dashboard(props) {
  const user = getUser();
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
 
  return (
    <div class="infbody">
      <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/11170746/fdfa47d494b75bd5979742522aa4a07babb7a6cf.png" height="170" class="center"></img>
        <h2 style={{ color: 'white' }}>Login successful</h2>
        <p style={{ color: 'white' }}>Welcome {user.name}!</p>
        <input class="button3"  type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Dashboard;