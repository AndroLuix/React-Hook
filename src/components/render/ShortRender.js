import React, { useState } from 'react'

const ShortRender = () => {
    const [parola,setParole] = useState("Sono una parola");
    const [toggle,setToggle] = useState(false);

    // //Short Circuit Evalution con or operator
    // const esempio = parola || "Sono un esempio";

    // //Short Ciurcuit Evalution with and (&&) operator
    // const esempio2 = parola && "Ho un valore";

    // //Short with Teranry Operator
    //  const esempio3 = parola === "Valore"? "Sono vero":"sono falso";


  return (
   
    <div className='shadow m-2 py-3 d-flex justify-content-center flex-column text-center'>
        <h2>ShortRender {parola || "Sono un Esempio se non è inserito un valore"}</h2>
        {toggle ? (<h2 className='text-success'>Vero</h2>):(<h2 className='text-danger'>Falso</h2>)}
        <button className='btn btn-secondary my-2 w-50 m-auto' onClick={()=>setToggle(!toggle)}>Cambia Valore</button>
       
    </div>
  )
}

export default ShortRender