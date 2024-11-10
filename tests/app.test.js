const request = require('supertest');
const app = require('../src/app');

describe('Testando rota principal', () => {
  it('Deve responder com "Bem-vindo a Agencia de Viagens!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Bem-vindo a Agencia de Viagens!');
    expect(response.statusCode).toBe(200);
  });
});

