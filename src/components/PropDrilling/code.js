const CODE = `import React, { useState } from 'react';
import { data } from '../data';

const MainComponent = () => {
  const [people, setPeople] = useState(data);

  const removePeople = (id) => setPeople(people.filter(el => el.id !== id));


  return (
    <div className='mt-5'>
      <h2>Passaggio di proprietà a cascata</h2>
      <div >
      <Elenco people={people} removePeople={removePeople}/>
      </div>
    </div>
  )
}

const Elenco = ({ people, removePeople }) => {
  return (
    <div>
      {
        people.map((el, index) => {
          return <Persona key={el.id} {...el} removePeople={removePeople} />
        })
      }
    </div>
  )
}

const Persona = ({ name, id , removePeople}) => {
  return <article className='item d-flex flex-row  justify-content-between  shadow mx-5 fs-bold px-5 py-3 my-3'>
    <h2>{name}</h2>
    <button className='btn btn-danger' onClick={ () => removePeople(id) }>x</button>

  </article>
}

export default MainComponent`

export {CODE}