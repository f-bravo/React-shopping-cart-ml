import React from 'react'
import { BiLoaderAlt } from 'react-icons/bi'
import './Loading.css'

// Função que carrega o ícone de Loading enquanto os produtos n são carregados
const Loading = () => {
  return <BiLoaderAlt className='loading' />
}

export default Loading