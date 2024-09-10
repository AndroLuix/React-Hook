import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './screen/HomePage';
import Profile from './screen/Profile';
import About from './screen/About';
import ErrorPage from './screen/ErrorPage';


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
             
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <Link className='nav-link' target='_blank' to="https://www.linkedin.com/in/luigi-iadicola/">
                Linedin
              </Link>
              <Link className='nav-link' target='_blank' to='https://iadicola.netsons.org/'>
                About Me
              </Link>
            </ul>
          </div>

        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavBarRoute;
