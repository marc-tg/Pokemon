const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Habilitar CORS para que pueda conectarse Angular (otro origen)
app.use(cors());

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get('/api/pokemon', async (req, res) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
    res.json(response.data.results); // devuelve [{name, url}, ...]
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de Pokémon' });
  }
});



app.get('/api/pokemon/:name', async (req, res) => {
    const { name } = req.params;

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

        const data = response.data;

        const pokemonData = {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default
        }

        res.json(pokemonData);


    } catch (error) {
        res.status(404).json({ error: 'Pokémon no encontrado' });

    }
});