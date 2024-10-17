import React, { useEffect, useContext } from "react";
import './Products.css'
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCart/ProductCard";
import Loading from "../Loading/Loading";
import AppContext from "../../context/AppContext";

function Products() {
  
  // useContext: atualiza o estado dos produtos e do carregamento. 
  // Controla o ícone de carregamento
  const { products, setProducts, loading, setLoading } = useContext(AppContext)

  // Sempre que a variável products sofrer uma alteração a função do useState será executada novamente
  // useEffect(() => {função}, [array de dependências]) se a dependência ficar vazia será executado apenas uma vez quando o componente for montado
  useEffect(() => {
    // A página inicial do projeto carrega buscando por Iphone.
    fetchProducts('iphone').then((response) => {
    // salvando a resposta no estado no array de products 
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


