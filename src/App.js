import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';
import First from './components/render/First';
import ShortRender from './components/render/ShortRender';
import ShowHide from './components/render/ShowHide';
import ControlledInputComponent from './components/Forms/ControlledInputComponent';
import { useState } from 'react';
import UseRefExample from './components/Forms/UseRefExample';
import UserReducerComponents from './components/Reducer/UserReducerComponents';
import MainComponent from './components/PropDrilling/MainComponent';
import ContextSolution from './components/Context/ContextSolution';
import FetchComponents from './components/CostumHook/FetchComponents';
import PropComponents from './components/PropTypes/PropComponents';
import NavBarRoute from './components/ReactRoute-v6/NavBarRoute';


function App() {
  document.title = 'React Hook';

  const [visibleSection, setVisibleSection] = useState('');

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? '' : section);
  };

  return (
   <>
   <NavBarRoute/>
    <section className="container d-flex justify-content-center flex-column gap-5 py-5">
      {renderSection(' Sez. 1 - Conditional Componing - Short Render - Hode or Show Component', 'sezione1', visibleSection, toggleSection,
        <>
          <First />
          <ShortRender />
          <ShowHide />
        </>
      )}

      {renderSection(' Sez. 2 - Controll Input Component', 'sezione2', visibleSection, toggleSection,
        <ControlledInputComponent />
      )}

      {renderSection(' Sez. 3 - UseRef', 'sezione3', visibleSection, toggleSection,
        <UseRefExample />
      )}

      {renderSection(' Sez. 4 - Modal', 'sezione4', visibleSection, toggleSection,
        <UserReducerComponents />
      )}

      {renderSection(' Sez. 5 - List ', 'sezione5', visibleSection, toggleSection,
        <MainComponent />
      )}

      {renderSection(' Sez. 6 - List con UseContext', 'sezione6', visibleSection, toggleSection,
        <ContextSolution />
      )}

      {renderSection(' Sez. 7 - Custom Hooks (fetch)', 'sezione7', visibleSection, toggleSection,
        <FetchComponents />
      )}

      {renderSection(' Sez. 8 - Prop Types', 'sezione8', visibleSection, toggleSection,
        <PropComponents />
      )}


    </section>
    </>
  );
}

const renderSection = (title, sectionKey, visibleSection, toggleSection, content) => (
  <div className='text-center shadow my-2 py-4'>
    <h1>{title}</h1>
    <button
      className='btn btn-secondary shadow'
      onClick={() => toggleSection(sectionKey)}
    >
      {visibleSection === sectionKey ? 'Chiudi' : 'Apri'}
    </button>
    {visibleSection === sectionKey && <div>{content}</div>}
  </div>
);

export default App;
