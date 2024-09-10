import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';

import NavBarRoute from './components/ReactRoute-v6/NavBarRoute';
import HomePage from './components/ReactRoute-v6/screen/HomePage';


function App() {
  document.title = 'React Hook - Luigi Iadicola';

  return (
   <>
   <NavBarRoute/>
   </>
  );
}



export default App;
