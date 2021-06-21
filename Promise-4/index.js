const food = new Promise((resolve, reject) => {
  resolve('Sushi')
  reject('Crackers')
})


// resolve food here: 
food.then((faveFood) => {
  console.log(`${faveFood} sounds pretty yummy!`)
})


// **Challenge 1** Resolve your promise with the name of your favorite food. 
// Do this by calling the `resolve` with an argument. 

// **Challenge 2** Resolve the `food` promise with that `.then()` syntax 
// and print your favorite food to the console. 