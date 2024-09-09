import 'bootstrap/dist/css/bootstrap.css';
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

function App() {
  const [visibleSection, setVisibleSection] = useState('');

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? '' : section);
  };

  return (
    <section className="container d-flex justify-content-center flex-column gap-5 py-5">
      {renderSection('Mostra Sez. 1', 'sezione1', visibleSection, toggleSection,
        <>
          <First />
          <ShortRender />
          <ShowHide />
        </>
      )}

      {renderSection('Mostra Sez. 2', 'sezione2', visibleSection, toggleSection,
        <ControlledInputComponent />
      )}

      {renderSection('Mostra Sez. 3', 'sezione3', visibleSection, toggleSection,
        <UseRefExample />
      )}

      {renderSection('Mostra Sez. 4', 'sezione4', visibleSection, toggleSection,
        <UserReducerComponents />
      )}

      {renderSection('Mostra Sez. 5', 'sezione5', visibleSection, toggleSection,
        <MainComponent />
      )}

      {renderSection('Mostra Sez. 6', 'sezione6', visibleSection, toggleSection,
        <ContextSolution />
      )}
    </section>
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
