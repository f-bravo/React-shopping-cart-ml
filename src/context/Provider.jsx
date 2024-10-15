import React, { useState } from 'react'
import AppContext from './AppContext'
import propTypes from './AppContext'

const Provider = ({ children }) => {

  // Criando um estado para salvar o array de produtos
  const [products, setProducts] = useState([])

  const [cartItems, setCartItems] = useState([])


  // Criando um estado para produtos com demora na renderização - renderiza um ícone do ReactIcons
  const [loading, setLoading] = useState(true)


  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems, 
    setCartItems,
  }

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  )
}

export default Provider

Provider.propTypes = {
  children: propTypes.displayName,
}.isRequired