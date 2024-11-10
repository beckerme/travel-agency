// app.js ou server.js
const express = require('express');
const path = require('path');

const app = express();

// Configura o servidor para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Sua rota principal
app.get('/', (req, res) => {
  res.send('Bem-vindo a Agencia de Viagens!');
});

// Outras rotas e configurações...

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
