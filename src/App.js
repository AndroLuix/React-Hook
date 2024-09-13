import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';

import NavBarRoute from './components/ReactRoute-v6/NavBarRoute';
import { useEffect } from 'react';


function App() {
  
  useEffect(() => {
    document.title = 'React Hook - Luigi Iadicola';
  }, [])
  return (
   
   <NavBarRoute/>
   
  );
}



export default App;