import React, { useState } from 'react'
import AppContext from './AppContext'
import propTypes from './AppContext'

  // Componente Provider - compartilha informação entre os componentes pegando o children
const Provider = ({ children }) => {

  // Criando um estado para salvar o array de produtos
  const [products, setProducts] = useState([])

  // Manipula os itens do carrinho
  const [cartItems, setCartItems] = useState([])

  // Criando um estado para produtos com demora na renderização - renderiza um ícone do ReactIcons
  const [loading, setLoading] = useState(true)

  // Contexto para abrir e fechar o carrinho com os produtos
  const [isCartVisible, setIsCartVisible] = useState(false)

  // Todos os componentes que são filhos do Privider terão acesso a essas informações 
  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems, 
    setCartItems,
    isCartVisible, 
    setIsCartVisible,
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