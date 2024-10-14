const fetchProducts = async (query) => {

  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
  // extraindo os dados em Json:
  const data = await response.json()

  // retornando apenas o resultado da API do ML
  return data.results
}

export default fetchProducts