const request = require('supertest');
const app = require('../src/app');

describe('Testando rota principal', () => {
  it('Deve responder com "Bem vindo"', async () => {
    const response = await request(app).get('/');
    
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Bem vindo');
  });
  
  it('Deve retornar 404 para rotas não existentes', async () => {
    const response = await request(app).get('/rota-que-nao-existe');
    expect(response.statusCode).toBe(404);
  });
});
