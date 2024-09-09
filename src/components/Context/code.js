    const CODE = `import React, { useState, useContext } from 'react';
import { data } from '../data';
import App from '../../App';

const AppContext = React.createContext();
// result = Provider or Consumer
const ContextSolution = () => {
    const [people, setPeople] = useState(data);

    const removePeople = (id) => setPeople(people.filter(el => el.id !== id));


    return (

        <AppContext.Provider value={{people ,removePeople}} >

            <div className='mt-5 shadow'>
                <h2>Passaggio di proprietà con UseContext</h2>
                <div >
                    <Elenco />
                </div>
            </div>
        </AppContext.Provider>

    )
}

const Elenco = () => {
    const info = useContext(AppContext)
    return (
        <div>
            {
                info.people.map((el, index) => {
                    return <Persona key={el.id} {...el}  />
                })
            }
        </div>
    )
}

const Persona = ({ name, id }) => {
    const {removePeople} = useContext(AppContext)
    return <article className='item d-flex flex-row  justify-content-between  shadow mx-5 fs-bold px-5 py-3 my-3'>
        <h2>{name}</h2>
        <button className='btn btn-danger' onClick={() => removePeople(id)}>x</button>

    </article>
}

export default ContextSolution`

export  {CODE};