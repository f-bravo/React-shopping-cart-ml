import React from "react";
import { BsFillCartPlusFill} from 'react-icons/bs'
import './ProductCard.css'
import propTypes from 'prop-types'
import formatCurrency from "../../utils/formatCurrency";

function ProductCard({ data }) {
  const { title, thumbnail, price } = data
  return(
    <section className="product-card">
      <img
        // regex para melhorar a imagem da api. Retira a letra i e coloca o W
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