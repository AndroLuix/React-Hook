import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './screen/HomePage';
import Profile from './screen/Profile';
import ErrorPage from './screen/ErrorPage';
import SingleProfile from './screen/SingleProfile';
import MyProfile from './screen/MyProfile';
import Category from './screen/Category';
import { sections } from './screen/sections';

const NavBarRoute = () => {

  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">React Hook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse justify-content-center navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorie
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {sections.map(section => {
                    console.log(section.cat);  
                    return (
                      <li key={section.cat}>
                        <Link className="dropdown-item" to={`/category/${section.cat}`}>
                          {section.title}
                        </Link>
                      </li>
                    );
                  })}

                </ul>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/profile/1">Profile 1</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/profile/me">My Profile</Link>
              </li> */}
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className='nav-item'>
                <Link className='nav-link' target='_blank' to="https://www.linkedin.com/in/luigi-iadicola/">
                  Linkedin
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' target='_blank' to='https://iadicola.netsons.org/'>
                  About Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category/:cat' element={<Category />} />
        <Route path='/profile' element={<Profile />} />
        {/* Childer of profile */}
        <Route path='/profile/:id' element={<SingleProfile />} />
        <Route path='/profile/me' element={<MyProfile />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavBarRoute;
