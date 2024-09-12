import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='m-auto text-center container'>
      <h2>Pagina profilo</h2>

      <ul>
        <li className="nav-item">
        <Link className='nav-link' to="/profile/me">My Profile</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to="/profile/1">Profile 1</Link>
        </li>
      </ul>
      <div><Outlet/></div>
    </div>
  )
}

export default Profile