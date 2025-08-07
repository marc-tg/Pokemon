const axios = require('axios');

exports.handler = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=3000&offset=0');
    return {
      statusCode: 200,
      body: JSON.stringify(response.data.results),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al obtener la lista de Pokémon' }),
    };
  }
};
