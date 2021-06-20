export const getDataCallback = (callback) => {
  const name = "Dennis Huallanca";
  setTimeout(() => {
    return callback(name);
  }, 500);
}


export const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Dennis Huallanca')
    }, 500);
  });
}

export const getDataPromiseError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('throw error')
    }, 500);
  });
}

export const getUser = async() => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users/2');
  const user = await result.json();
  return user;
}
