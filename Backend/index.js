const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'browser')));

// API Endpoints
app.get('/api/pokemon', async (req, res) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=3000&offset=0');
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de Pokémon' });
  }
});

app.get('/api/pokemon/:name', async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ error: 'Pokémon no encontrado' });
  }
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'browser/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
