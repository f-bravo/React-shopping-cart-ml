import React, { useContext } from "react";
import { AiOutlineShoppingCart  } from 'react-icons/ai'
import './CartButton.css';
import AppContext from "../../context/AppContext";

function CartButton() {

  // Contexto para somar número de itens no carrinho.
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext)

  return(
    <button 
      type="button" 
      className="cart__button"
      onClick={ () => setIsCartVisible(!isCartVisible)} // tira e poe carrinho na tela
    >
      <AiOutlineShoppingCart />
      { cartItems.length > 0 && <span className="cart__status">{cartItems.length}</span>}

    </button>
  )
}

export default CartButton;