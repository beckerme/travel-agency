const request = require('supertest');
const app = require('../src/app');

describe('Testando rota principal', () => {
  it('Deve responder com "Bem-vindo a Agencia de Viagens!"', async () => {
    const response = await request(app).get('/');
    
    expect(response.statusCode).toBe(200);
    expect(response.text).contain('Bem-vindo a Agencia de Viagens!');
  });
  
  it('Deve retornar 404 para rotas não existentes', async () => {
    const response = await request(app).get('/rota-que-nao-existe');
    expect(response.statusCode).toBe(404);
  });

  it('Deve permitir apenas arquivos com extensões HTML, CSS e JS', async () => {
    const cssResponse = await request(app).get('/a.css');
    expect(cssResponse.statusCode).toBe(200);
    expect(cssResponse.headers['content-type']).toMatch(/text\/css/);
  
    const jsResponse = await request(app).get('/b.js');
    expect(jsResponse.statusCode).toBe(200);
    expect(jsResponse.headers['content-type']).toMatch(/application\/javascript/);
  
    const imgResponse = await request(app).get('/image.png');
    expect(imgResponse.statusCode).toBe(404);
  });
  
});
