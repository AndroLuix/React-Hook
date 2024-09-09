import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import First from './components/render/First';
import ShortRender from './components/render/ShortRender';
import ShowHide from './components/render/ShowHide';
import ControlledInputComponent from './components/Forms/ControlledInputComponent';
import { useState } from 'react';

function App() {
  const [sezione1, setSezione1] = useState(false);
  const [sezione2, setSezione2] = useState(true);
  return (
    <>
      <section className="container d-flex justify-content-center flex-column gap-5">
        <div className=' text-center shadow my-2 py-4'>
          <h1>Mostra Sez. 1</h1>
          <button className='btn btn-secondary shadow' onClick={() => { setSezione1(!sezione1) }}>{sezione1 ? "Chidui" : "Apri"}</button>

        </div>
        {
          sezione1 && Sez1()
        }

        <div className=' text-center shadow my-2 py-4'>
          <h1>Mostra Sez. 2</h1>
          <button className='btn btn-secondary shadow' onClick={() => { setSezione2(!sezione2) }}>{sezione2 ? "Chidui" : "Apri"}</button>

          {
          sezione2 && Sez2()
        }
        </div>
      </section>
    </>

  );
}

const Sez1 = () => {
  return (

    <>
      <First></First>
      <ShortRender></ShortRender>
      <ShowHide />
    </>
  )
}

const Sez2 = () =>{
  return (
    <>
    <ControlledInputComponent/>
    </>
  )
}

export default App;
