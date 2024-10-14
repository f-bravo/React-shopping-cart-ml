import React, { useState, useEffect } from "react";
import './Products.css'
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCart/ProductCard";

function Products() {

  // Criando um estado para salvar o array de produtos
  const [products, setProducts] = useState([])

  // Sempre que a variável products sofrer uma alteração a função do useState será executada novamente
  // useEffect(() => {função}, [array de dependências]) se a dependência ficar vazia será executado apenas uma vez quando o componente for montado
  useEffect(() => {
    fetchProducts('iphone').then((response) => {
    // salvando a resposta no estado, no array de products 
    setProducts(response) 
    })
  
  }, [])

  return(
    <section className="products container">
      <ProductCard />
    </section>
  )
}

export default Products

