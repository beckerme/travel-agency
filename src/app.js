const express = require('express');
const path = require('path');
const app = express();

// Configura o servidor para servir arquivos estáticos da pasta "src"
app.use(express.static(path.join(__dirname, '../public')));

// Rota principal retorna apenas a mensagem de boas-vindas
app.get('/', (req, res) => {
  res.send('Bem-vindo a Agencia de Viagens!');
});

// Iniciar o servidor apenas se o arquivo for executado diretamente
if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
  });
}

// Exporta o app para que ele possa ser utilizado nos testes
module.exports = app;
