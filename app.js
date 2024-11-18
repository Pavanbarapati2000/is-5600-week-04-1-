const fs = require('fs').promises
const path = require('path')
const express = require('express')

// Set the port
const port = process.env.PORT || 3000
// Boot the app
const app = express()
// Register the public directory
app.use(express.static(__dirname + '/public'));

// app.js
// Add the api module
const api = require('./api')
// Require the middleware module
const middleware = require('./middleware')

// Add body parser middleware
const bodyParser = require('body-parser')

// ...
app.use(middleware.cors)
app.use(bodyParser.json())
// update the route handlers
app.get('/', api.handleRoot)
app.get('/products', api.listProducts)
app.get('/products/:id', api.getProduct)
app.post('/createproducts', api.createProduct)
app.delete('/delete', api.deleteProduct)
app.put('/update', api.updateProduct)



// Boot the server
app.listen(port, () => console.log(`Server listening on port ${port}`))
