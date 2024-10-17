
// função que usa o endpoint e atualiza os dados dos produtos do Mercado Livre
const fetchProducts = async (query) => {

  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
  // extraindo os dados em Json:
  const data = await response.json()

  // retornando apenas o results do objeto
  return data.results
}

export default fetchProducts