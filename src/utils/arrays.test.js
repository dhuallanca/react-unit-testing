import { createStore } from './arrays';

describe('Haciendo pruebas a la lista de frutas', () => {

  test('Debe agregar una fruta', () => {
    const store = createStore();
    store.addFruit('fresa');
    expect(store.getFruits()).toStrictEqual(['fresa']);
  });
  test('Debe agregar dos fruta', () => {
    const store = createStore();
    store.addFruit('fresa');
    store.addFruit('melon');
    expect(store.getFruits()).toStrictEqual(['fresa', 'melon']);
  });
  test('Debe verificar si existe una fruta', () => {
    const store = createStore();
    store.addFruit('fresa');
    store.addFruit('melon');
    expect(store.getFruits()).toContain('melon');
    expect(store.getFruits()).not.toContain('pera');
  });


})