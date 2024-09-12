import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { sections } from './sections';

const Category = () => {


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

  const {cat} = useParams();
  const TitoloPage =() =>{
   
    sections
    .filter(section => section.cat === Number(cat))  // Filtra le sezioni con cat = 1
    .map(({ title }) =>
    document.title = title
    )
  }

  
  return (
    
    <section className="container d-flex justify-content-center flex-column gap-5 py-5">
    {sections
      .filter(section => section.cat === Number(cat))  // Filtra le sezioni con cat = 1
      .map(({ title, sectionKey, content }) =>
        renderSection(title, sectionKey, content)
      )
     
      }

      {TitoloPage()}




      
  </section>
  );
};

export default Category;
