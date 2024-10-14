import React from "react";
import { BsFillCartPlusFill} from 'react-icons/bs'
import './ProductCard.css'

function ProductCard() {
  return(
    <section className="product-card">
      <img
        src="https://http2.mlstatic.com/D_918579-MLM51559384401_092022-W.jpg" 
        alt="product" 
        className="card__image"/>
      <div className="card__infos">
        <h2 className="card__price">R$ 99,00</h2>
        <h2 className="card__title"> Título</h2>
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