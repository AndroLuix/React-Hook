import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { sections } from './sections';

const Category = () => {
  const [visibleSection, setVisibleSection] = useState('');
  const { cat } = useParams();

  // Controllo sezione da visualzzare
  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? '' : section);
  };

  useEffect(()=>{
    const selectedSection = sections.find(section => section.cat === Number(cat));
    if(selectedSection){
      document.title = selectedSection.title
    }
  },[cat])

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
      .filter(section => section.cat === Number(cat))  // Filtra le sezioni in base alla route scelta vedi NavBarRoute
      .map(({ title, sectionKey, content }) =>
        renderSection(title, sectionKey, content)
      )
     
      }

  </section>
  );
};

export default Category;
