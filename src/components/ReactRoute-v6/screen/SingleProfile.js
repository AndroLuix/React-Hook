import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProfile = () => {
  const {id} = useParams()
  return (
    <h2 className='m-auto text-center container'>Sei nella pagina Profilo con id {id}</h2>
  )
}

export default SingleProfile