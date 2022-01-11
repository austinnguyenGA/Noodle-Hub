const express = require('express')
const app = express()
const PORT = 3000
const Noodle = require('./models/store')
const methodOverride = require ('method-override')

// Database connection
const mongoose = require('mongoose')
const mongoURI = "mongodb://127.0.0.1:27017/"
const db = mongoose.connection

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('database connected')
})

db.on('error', (err) => {console.log('ERROR: ', err)})
db.on('connected', () => {console.log('mongo connected')})
db.on('disconnected', () => {console.log('mongo disconnected')})

// Middleware

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.static('public'))

// Controllers
  const noodleController = require('./controllers/noodleController.js')
  app.use('/noodle', noodleController)



app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})
