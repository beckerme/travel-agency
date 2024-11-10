const request = require('supertest');
const app = require('../src/app');

describe('Testando rota principal', () => {
  it('Deve responder com "Olá!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Olá!');
    expect(response.statusCode).toBe(200);
  });
});

