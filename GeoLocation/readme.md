# Geolocation

The geolocation API allows your web apps to get your position in the world. 

The `navigator.geolocation()` gets your location from the browser. It uses callbacks!

```JS
navigator.geolocation(success, error, options)
```

- `success` - on success callback. This callback receives a position object
- `error` - on error callback. This callback receives an error object. 
- `options` - an object with options that configure the operation. 

Look at the example code and test it. 

**Challenge!** This implementation is awkward! It would be better handled with a Promise! 

Your goal is write a function that returns a Promise! You should be able to call it like this: 

```JS
getGeolocation(options).then().catch()
```

The `onsuccess` should be handled by resolve and the `onerror` should be handled by reject. If you resolve you'll receive a position object which will be received by the `.then()` callback. 
