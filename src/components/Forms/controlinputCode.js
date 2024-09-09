const CODEControll = `import React, { useEffect, useState } from 'react'

const ControlledInputComponent = () => {

  

    const [persona, setPersona] = useState({nome:'',email:'',cell:''})
    const [persone, setPersone] = useState([])

    const handleSubit=(e) => {
        e.preventDefault();
       if(persona.nome && persona.email && persona.cell){
        setPersone(
          [
            ...persone,{
                id: Date.now().toString(),
               ...persona
            },
          ]);
        // console.log(nome, email, cell);
       setPersona({nome:'',email:'',cell:''});
       }else{
        alert('Riempi i campi');
       }
    }

    const handleChange = (e) =>{
        const {name , value} = e.target;
        setPersona({...persona,[name]:value});

    }

    useEffect(()=>{
    },[persone]);

    const ListPerson = () =>{
        return (
            <div className='mt-4 shadow-sm p-4'>
                <h4>Lista delle persone</h4>
                <ul className='list-group'>
                    {persone.map((p)=>(
                        <li key={p.id}>Nome: {p.nome} - Email: {p.email} - Cell: {p.cell}</li>
                       
                    ))};
                </ul>
            </div>
        )
    }
    return (
        <>
            <h3 className='mt-5'>Controlled Input Component - Form</h3>
            <form className='bg-white shadow p-4 m-3 d-flex flex-column gap-3 fw-bold' onSubmit={handleSubit}>
                <div className='form-gorup d-flex align-items-center justify-content-around container' >
                    <label htmlFor='nome' className='text-left font-wheight-bold col-3'>
                        Nome:
                    </label>
                    <input value={persona.nome} onChange={handleChange} id='nome' type='text' name='nome' className='form-control '></input>
                </div>

                <div className='form-gorup d-flex align-items-center justify-content-around conatiner' >

                    <label htmlFor='email' className='text-left font-wheight-bold col-3'>
                        Email:
                    </label>
                    <input id='email' value={persona.email} onChange={handleChange}  type='email' name='email' className='form-control '></input>
                </div>
                <div className='form-gorup d-flex align-items-center justify-content-around conatiner' >

                    <label htmlFor='cellulare' className='text-left font-wheight-bold col-3'>
                        Cellulare:
                    </label>
                    <input id='cell' value={persona.cell} onChange={handleChange}  type='tel' name='cell' className='form-control '></input>

                </div>

                <div className='form-gorup d-flex align-items-center justify-content-around conatiner' >

                    <button type='submit' className='ms-auto btn btn-info w-75 text-white'>Invia</button>
                </div>

            </form >

            <ListPerson/>

            
        </>
    )
}

export default ControlledInputComponent`

export {CODEControll}