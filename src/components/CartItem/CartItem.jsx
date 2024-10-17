import React, { useContext } from 'react'
import propTypes from 'prop-types'
import { BsCartDashFill } from 'react-icons/bs'
import './CartItem.css'
import formatCurrency from '../../utils/formatCurrency'
import AppContext from '../../context/AppContext'

// Função que controla os itens do Carrinho
function CartItem({ data }) {

  // Contexto para os itens do carrinho
  const { cartItems, setCartItems } = useContext(AppContext)
  //informação dos produtos
  const { id, thumbnail, title, price } = data

  //Função que remove os itens do Carrinho
  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id)
    setCartItems(updatedItems)
  }

  return (
    <section className='cart-item'>
      <img 
        src={thumbnail} 
        alt="imagem do produto" 
        className='cart-item-image' 
      />

      <div className="cart-item-content">
        <h3 className='cart-item-title'>{title}</h3>
        <h3 className='cart-item-price'>{formatCurrency(price, 'BRL')}</h3>
        <button 
          type='button' 
          className='button__remove-item'
          onClick={handleRemoveItem}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  )
}

export default CartItem

CartItem.propTypes = {
  data: propTypes.object
}.isRequired