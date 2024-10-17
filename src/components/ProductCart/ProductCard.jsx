import React, { useContext } from "react";
import { BsFillCartPlusFill} from 'react-icons/bs'
import './ProductCard.css'
import propTypes from 'prop-types'
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";

// Função do componente produto
function ProductCard({ data }) {
  // dados dos produtos
  const { title, thumbnail, price } = data

  //Atualiza os itens do carrinho
  const { cartItems, setCartItems } = useContext(AppContext)

  // Função que pega as informações do produto passa para o array de itens do carrinho
  const handleAddCart = () => {
    /*const updateCartItems = cartItems
    updateCartItems.push(data)
    setCartItems(updateCartItems) --> a linha de baixo substitui essa lógica de 3 linhas */
    setCartItems([ ...cartItems, data])
  }

  return(
    <section className="product-card">
      <img
        // Regex para melhorar a qualidade da imagem da api. Retira a letra i e coloca o W
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} 
        alt="product" 
        className="card__image"/>
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button 
        type="button" 
        className="button__add-cart"
        onClick={ handleAddCart }
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  )
}

export default ProductCard

ProductCard.propTypes = {
  dada: propTypes.shape({}),
}.isRequired;