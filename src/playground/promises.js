const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Eric',
      age: 31
    });
    reject('Error Error!');
  }, 3500)
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
  return 'some data';
}).then((test) => {
  console.log('does this run?', test);
}).catch((error) => {
  console.log('error: ', error)
});

console.log('after');