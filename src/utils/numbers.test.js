import { suma, resta, multiplicacion, division } from './numbers';

describe('Test de operaciones matematicas', () => {

  test('debe realizar suma', () => {
    const resultado = suma(5, 10);
    expect(resultado).toEqual(15);
  })
  test('debe realizar resta', () => {
    const resultado = resta(5, 10);
    expect(resultado).toEqual(-5);
  })
  test('debe realizar multiplicacion', () => {
    const resultado = multiplicacion(5, 10);
    expect(resultado).toEqual(50);
  })
  test('debe realizar division', () => {
    const resultado = division(10, 5);
    expect(resultado).toEqual(2);
  })

})