const request = require('supertest');
const app = require('../src/app');
const server = app.listen(3000);  // Armazene a instância do servidor para fechar depois

describe('Testando rota principal', () => {
  it('Deve responder com "Bem-vindo à Agência de Viagens!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Bem-vindo à Agência de Viagens!');
  });
});

afterAll(() => {
  server.close();  // Fecha o servidor após os testes
});
