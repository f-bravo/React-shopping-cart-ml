import React, { useState, useEffect } from "react";
import './Products.css'
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCart/ProductCard";
import Loading from "../Loading/Loading";

function Products() {
  // Criando um estado para salvar o array de produtos
  const [products, setProducts] = useState([])
  // Criando um estado para produtos com demora na renderização - renderiza um ícone do ReactIcons
  const [loading, setLoading] = useState(true)

  // Sempre que a variável products sofrer uma alteração a função do useState será executada novamente
  // useEffect(() => {função}, [array de dependências]) se a dependência ficar vazia será executado apenas uma vez quando o componente for montado
  useEffect(() => {
    fetchProducts('iphone').then((response) => {
    // salvando a resposta no estado, no array de products 
    setProducts(response) 
    setLoading(false)
    })
  
  }, [])

  return(
    (loading && <Loading /> ) || (
    <section className="products container">
      {products.map((product) => <ProductCard key={product.id} data={product} />)}
    </section>))
}

export default Products


