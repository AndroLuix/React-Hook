import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
  <div className='container m-auto  text-center  '>
    <h2>Error Page - 404</h2>

    <button className='btn btn-success mt-4' onClick={()=> navigate("/")}>Back to Home</button>
  </div>
  );
};

export default ErrorPage;
