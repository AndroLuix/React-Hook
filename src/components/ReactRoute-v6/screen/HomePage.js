import React, { useState } from 'react'
import First from '../../render/First'
import ShortRender from '../../render/ShortRender'
import ShowHide from '../../render/ShowHide'
import ControlledInputComponent from '../../Forms/ControlledInputComponent';
import UseRefExample from '../../Forms/UseRefExample';
import UserReducerComponents from '../../Reducer/UserReducerComponents';
import MainComponent from '../../PropDrilling/MainComponent';
import ContextSolution from '../../Context/ContextSolution';
import FetchComponents from '../../CostumHook/FetchComponents';
import PropComponents from '../../PropTypes/PropComponents';



const HomePage = ()  => {
  const [visibleSection, setVisibleSection] = useState('');

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? '' : section);
  };

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


  return (
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


    </section>  )

    
}



export default HomePage