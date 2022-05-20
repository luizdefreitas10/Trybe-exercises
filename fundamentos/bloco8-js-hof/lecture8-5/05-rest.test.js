const { formatDate, dateInfo } = require('./05-rest');

describe('testa a função formatDate', () => {
  test('ao inserir os dados de uma data válida retorna a data formatada em DD/MM/YYYY', () => {
    expect(formatDate(...dateInfo)).toBe('31/7/1981');
  });
});