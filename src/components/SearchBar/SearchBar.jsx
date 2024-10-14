import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar() {

  // Armazena o Estado do Imput
  // searchValue -> valor do estado(digitado no form). setSearchValue função que atualizar o valor do estado
  const [searchValue, setSearchValue] = useState('')

  // useContext:
  const { setProducts, setLoading } = useContext(AppContext)

  const handleSearch = async (event) => {
    event.preventDefault()
    setLoading(true)
    const products = await fetchProducts(searchValue)
    setProducts(products) // func q atualiza o estado dos produtos
    setLoading(false)
    setSearchValue('') //limpa o formulário
  }
  return (
    <form className='search-bar' onSubmit={handleSearch}>
      {name}
      <input 
        type="search" 
        placeholder="Buscar produtos" 
        // o valor do imput vai ser o do estado que estamos manipulando.
        // Agora quem controla o valor desse input n é mais o HTML e sim o react
        value={searchValue}
        className="search__input"
        //Evento do input onChance(): target - é o elemento que dispara o evento(o próprio input)
        // target.value é o valor que está sendo digitado no input. É salvo dentro do estado searchValue
        onChange={ ({ target }) => setSearchValue(target.value)}
        required
      />
      
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  )
}

export default SearchBar