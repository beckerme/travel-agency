const request = require('supertest');
const app = require('../src/app');

describe('Testando rota principal', () => {
  it('Deve responder com "Bem-vindo a Agencia de Viagens!"', async () => {
    const response = await request(app).get('/');
    
    // Verifica o status HTTP
    expect(response.statusCode).toBe(200);
    
    // Verifica o conteúdo da resposta
    expect(response.text).toContain('Bem-vindo a Agencia de Viagens!');
    
    // Verifica o Content-Type (supondo que você esteja retornando um arquivo HTML)
    expect(response.headers['content-type']).toMatch(/text\/html/);
  });
  
  it('Deve retornar 404 para rotas não existentes', async () => {
    const response = await request(app).get('/rota-que-nao-existe');
    
    // Verifica se a rota inexistente retorna 404
    expect(response.statusCode).toBe(404);
  });

  it('Deve permitir apenas arquivos com extensões HTML, CSS e JS', async () => {
    // Verifique a existência de arquivos no seu projeto ou use o sistema de arquivos
    // Exemplo: Testando se o arquivo CSS está sendo servido corretamente
    const cssResponse = await request(app).get('/styles.css');
    expect(cssResponse.statusCode).toBe(200);
    expect(cssResponse.headers['content-type']).toMatch(/text\/css/);

    // Testando um arquivo JS
    const jsResponse = await request(app).get('/script.js');
    expect(jsResponse.statusCode).toBe(200);
    expect(jsResponse.headers['content-type']).toMatch(/application\/javascript/);

    // Testando um arquivo que não seja HTML, CSS ou JS, como uma imagem (deve retornar 404 ou outro erro)
    const imgResponse = await request(app).get('/image.png');
    expect(imgResponse.statusCode).toBe(404);
  });
});
