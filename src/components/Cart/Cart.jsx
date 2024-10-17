import React, { useContext } from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem'
import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'

// função que controla o Carrinho de compras. Ela recebe os parâmetros vindo da contextAPI
function Cart() {
  // Pega o array dos produtos do carrinho e add ou remove a classe para o carrinho aparecer e desaparecer
  const  { cartItems, isCartVisible} = useContext(AppContext)
  
  // Soma os itens do carrinho
  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc
  }, 0)

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        {
          cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/> )
        }
      </div>
      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  )
}

export default Cart