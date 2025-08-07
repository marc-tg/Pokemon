const axios = require('axios');

exports.handler = async (event) => {
  const { name } = event.queryStringParameters || {};
  if (!name) {
    return { statusCode: 400, body: 'Falta parámetro "name"' };
  }
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'Pokémon no encontrado' }),
    };
  }
};
