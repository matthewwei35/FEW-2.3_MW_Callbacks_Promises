function whatToEat(timeOfDay) {
  return new Promise((resolve, reject) => {
    if (timeOfDay === 'breakfast') {
      resolve('Toast')
    } else if (timeOfDay === 'lunch') {
      resolve('Noodles')
    } else if (timeOfDay === 'dinner') {
      resolve('Curry')
    } else {
      reject('Not hungry right now.')
    }
  })
}


// Call yout function and resolve the promise here! 
whatToEat('brunch')
.then(food => console.log(food))
.catch(err => console.log(err))


// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 

// If the `timeOfDay` is anything else reject the promise with 
// the 'message' I'm not hungry right now.  