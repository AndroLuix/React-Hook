import React, { useState } from 'react';



import { sections } from './sections';

const HomePage = () => {
  const [visibleSection, setVisibleSection] = useState('');

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? '' : section);
  };

  

  const renderSection = (title, sectionKey, content) => (
    <div key={sectionKey} className='text-center shadow my-2 py-4'>
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
      {sections
     
        .map(({ title, sectionKey, content }) =>
          renderSection(title, sectionKey, content)
        )}
    </section>
  );
};

export default HomePage;
