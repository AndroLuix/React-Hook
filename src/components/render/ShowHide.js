import React, { useEffect, useState } from 'react'

const ShowHide = () => {

    const [show, setShow] = useState(true);

    return (

        <div className='shadow m-2 py-3 d-flex justify-content-center flex-column text-center'>

            <h1>Hide or Show Component</h1>

            <button className='btn btn-secondary w-50 my-2 m-auto' onClick={() => setShow(!show)} >
                {
                  show? 'Hide':'Show'
                }
            </button>

            {show && <Elemento/>}

        </div>
    )
};

const Elemento = () => {
    const [count,SetCount] = useState(0);

    useEffect(()=>{
       const timer = setTimeout(() => {
            SetCount((oldCount) => oldCount + 1)
        }, 1000);
        return () => clearTimeout(timer)
    },[count]);
    return (
        <div>
            <h3>Count {count}</h3>
        </div>
    )
}

export default ShowHide