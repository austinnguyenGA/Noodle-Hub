const express = require('express')
const app = express()
const Noodle = require('./models/noodle')
const methodOverride = require ('method-override')
const session = require('express-session')
require('dotenv').config()
const PORT = process.env.PORT

// Database connection
const mongoose = require('mongoose')
const mongoURI = process.env.MONGODB_URI
const db = mongoose.connection

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('database connected')
})

const SESSION_SECRET = process.env.SESSION_SECRET
console.log('Here is the SESSION_SECRET')
console.log(SESSION_SECRET)
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

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

  const userController = require('./controllers/userController.js')
  app.use('/users', userController)


app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})
