function asyncNumberChecker(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n > 9) {
        reject('Only numbers less than 10 please!')
      } else {
        resolve('I can work with this!')
      }
    }, 3333);
  });
}

// The function above returns a promise. Your job is 
// to handle the promise in the function calls below. 
// Handle success with .then() and errors with .catch()

const numCheck1 = asyncNumberChecker(10)

numCheck1.then((message) => {
  console.log(message)
}).catch((err) => {
  console.log(err)
}).finally(() => {
  console.log('All done!')
});


const numCheck2 = asyncNumberChecker(5)

numCheck2.then((message) => {
  console.log(message)
}).catch((err) => {
  console.log(err)
}).finally(() => {
  console.log('All done!')
});

