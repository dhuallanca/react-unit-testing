import { getDataCallback, getDataPromise, getDataPromiseError, getUser } from './async';

describe('Haciendo test a metodos asincronos', () => {

  test('Probando callback', (done) => {
    // done indica a jest que se esta ejecutanto un metodo asyncrono y done() indica cuando finaliza
    getDataCallback((name) => {
      expect(name).toEqual('Dennis Huallanca');
      done();
    })
  });

  test('Probando promise', (done) => {

    getDataPromise()
      .then((name) => {
        expect(name).toEqual('Dennis Huallanca');
        done()
      })
      .catch((err) => console.log(err));
  });

  test('Probando promise con expect assertions resolve', () => {
    return expect(getDataPromise()).resolves.toEqual('Dennis Huallanca');
  });

  test('Probando promise reject', (done) => {

    getDataPromiseError()
      .then((name) => {
        expect(name).toEqual('Dennis Huallanca');
        done()
      })
      .catch((err) => {
        expect(err).toEqual('throw error');
        done()
      });
  });

  test('Probando promise con expect assertions reject', () => {
    return expect(getDataPromiseError()).rejects.toEqual('throw error');
  });

  test('Probando async await', async() => {
    const name = await getDataPromise();
    expect(name).toEqual('Dennis Huallanca');
  });

  test('Probando async await, debe retornar un error', async () => {
    try {
      const name = await getDataPromiseError();
      expect(name).toEqual('Dennis');
    }
    catch (error) {
      expect(error).toEqual('throw error');
    }
  });


  test('Probando async await con HTTP', async () => {
    const user = await getUser();
    expect(user).toHaveProperty('username');
  });


})