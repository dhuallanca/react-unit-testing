import { saluda, getId } from './strings';

describe('Test de strings function', () => {

  const saludo = saluda('Dennis');
  test('Test saludar', () => {
    expect(saludo).toEqual('Hola Dennis');
    //toMatch evalua el texto y hasta regex
    expect(saludo).toMatch('Hola');
  })

  test('Evalua el formato del numero', () => {
    expect(getId()).toMatch(/\d{2}-\d{3}/);
  });
});