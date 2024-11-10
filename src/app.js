const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo à Agência de Viagens!');
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});

module.exports = app;

